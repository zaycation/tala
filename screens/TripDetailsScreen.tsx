import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/tripDetails.styles";
import * as colors from "../theme/colors";

export default function TripDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const styles = getStyles();
  const { tripId } = route.params as { tripId: string };

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
          if (!error) navigation.goBack();
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
    <View style={styles.container}>
      <Text style={styles.title}>{trip.destination}</Text>
      <Text style={styles.dates}>
        {trip.start_date} → {trip.end_date}
      </Text>
      <Text style={styles.notes}>{trip.notes}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate("EditTrip", { trip })}
        >
          <Text style={styles.editBtnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 24 }}>
        <TouchableOpacity style={styles.inviteBtn}>
          <Text style={styles.inviteBtnText}>Invite Friends (coming soon)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareBtnText}>Share Trip (coming soon)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
