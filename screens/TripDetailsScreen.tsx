import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/tripDetails.styles";
import * as colors from "../theme/colors";

type Props = {
  tripId: string;
  onClose: () => void;
};

export default function TripDetailsScreen({ tripId, onClose }: Props) {
  const styles = getStyles();
  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("trips")
        .select("*")
        .eq("id", tripId)
        .single();
      if (error) Alert.alert("Error", error.message);
      setTrip(data);
      setLoading(false);
    };
    fetchTrip();
  }, [tripId]);

  const onDelete = async () => {
    Alert.alert("Delete Trip?", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const { error } = await supabase
            .from("trips")
            .delete()
            .eq("id", tripId);
          if (!error) onClose();
          else Alert.alert("Delete failed", error.message);
        },
      },
    ]);
  };

  if (loading)
    return (
      <ActivityIndicator
        style={{ marginTop: 80 }}
        size="large"
        color={colors.light.ACCENT}
      />
    );
  if (!trip) return <Text style={styles.errorText}>Trip not found.</Text>;

  return (
    <View style={styles.modalCard}>
      <Text style={styles.title}>{trip.destination}</Text>
      <Text style={styles.dates}>
        {trip.start_date} → {trip.end_date}
      </Text>
      <Text style={styles.notes}>{trip.notes}</Text>
      <View style={styles.actions}>
        {/* Placeholder for Edit */}
        {/* <TouchableOpacity style={styles.editBtn}><Text style={styles.editBtnText}>Edit</Text></TouchableOpacity> */}
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeBtnText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
