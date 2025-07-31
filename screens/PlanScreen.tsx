import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/plan.styles";
import * as colors from "../theme/colors";

export default function PlanScreen() {
  const navigation = useNavigation();
  const styles = getStyles();

  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("trips")
      .select("*")
      .order("start_date", { ascending: true })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setTrips(data || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ marginTop: 80 }}
        size="large"
        color={colors.light.ACCENT}
      />
    );
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (trips.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyTitle}>No trips yet.</Text>
        <Text style={styles.emptySubtitle}>
          Tap below to create your first trip!
        </Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("CreateTrip")}
        >
          <Text style={styles.addBtnText}>+ Create Trip</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tripCard}
            onPress={() =>
              navigation.navigate("TripDetails", { tripId: item.id })
            }
          >
            <Text style={styles.tripTitle}>{item.destination}</Text>
            <Text style={styles.tripDates}>
              {item.start_date} → {item.end_date}
            </Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate("CreateTrip")}
          >
            <Text style={styles.addBtnText}>+ Create Trip</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
