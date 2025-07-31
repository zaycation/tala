import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/plan.styles";
import * as colors from "../theme/colors";
import TripDetailsScreen from "./TripDetailsScreen";

export default function PlanScreen() {
  const styles = getStyles();
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState<any | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("trips")
      .select("*")
      .order("start_date", { ascending: true })
      .then(({ data }) => {
        setTrips(data || []);
        setLoading(false);
      });
  }, []);

  function handleTripPress(item: any) {
    console.log("TRIP TAPPED", item);
    Alert.alert("Trip Tapped", `Trip: ${item.destination}`);
    setSelectedTrip(item);
    setShowDetails(true);
  }

  if (loading) {
    return (
      <ActivityIndicator
        style={{ marginTop: 80 }}
        size="large"
        color={colors.light.ACCENT}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Plans</Text>
      <Text style={styles.subTitle}>
        Manage, plan, or create your next adventure.
      </Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tripCard}
            activeOpacity={0.8}
            onPress={() => handleTripPress(item)}
          >
            <Text style={styles.tripTitle}>{item.destination}</Text>
            <Text style={styles.tripDates}>
              {item.start_date} → {item.end_date}
            </Text>
            {item.notes ? (
              <Text style={styles.tripNotes}>{item.notes}</Text>
            ) : null}
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 48 }}>
            <Text style={styles.emptyTitle}>No trips yet.</Text>
            <Text style={styles.emptySubtitle}>
              Tap below to create your first trip!
            </Text>
          </View>
        }
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
              // Show create trip modal logic here if needed
            }}
          >
            <Text style={styles.addBtnText}>+ Create Trip</Text>
          </TouchableOpacity>
        }
      />
      {/* Trip Details Modal */}
      <Modal
        visible={showDetails}
        animationType="slide"
        transparent
        onRequestClose={() => setShowDetails(false)}
      >
        <View style={[styles.modalOverlay, StyleSheet.absoluteFill]}>
          {selectedTrip && (
            <TripDetailsScreen
              tripId={selectedTrip.id}
              onClose={() => setShowDetails(false)}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}
