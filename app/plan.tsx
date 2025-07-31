import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
  Platform,
} from "react-native";
import { useColorScheme } from "react-native";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import getStyles from "../styles/plan.styles";
import * as colors from "../theme/colors";

type Trip = {
  id: string;
  destination: string;
  start_date: string;
  end_date: string;
  notes: string | null;
};

export default function PlanScreen() {
  const { user } = useAuth();
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    destination: "",
    start_date: "",
    end_date: "",
    notes: "",
  });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchTrips();
    // eslint-disable-next-line
  }, [user]);

  async function fetchTrips() {
    setLoading(true);
    setError(null);
    if (!user) return;
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .eq("user_id", user.id)
      .order("start_date", { ascending: false });
    if (error) setError(error.message);
    else setTrips(data || []);
    setLoading(false);
  }

  async function handleAddTrip() {
    if (!form.destination || !form.start_date || !form.end_date) {
      setError("Please fill in all required fields.");
      return;
    }
    setAdding(true);
    setError(null);
    const { error } = await supabase.from("trips").insert([
      {
        user_id: user?.id,
        destination: form.destination,
        start_date: form.start_date,
        end_date: form.end_date,
        notes: form.notes,
      },
    ]);
    setAdding(false);
    if (error) {
      setError(error.message);
    } else {
      setModalVisible(false);
      setForm({ destination: "", start_date: "", end_date: "", notes: "" });
      fetchTrips();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKGROUND }}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Your Plans</Text>
        <Text style={styles.subTitle}>
          Manage, plan, or create your next adventure.
        </Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.ACCENT}
            style={{ marginTop: 32 }}
          />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : trips.length === 0 ? (
          <Text style={styles.emptyText}>
            No trips yet. Start your first adventure!
          </Text>
        ) : (
          trips.map((trip) => (
            <View key={trip.id} style={styles.card}>
              <Text style={styles.cardTitle}>{trip.destination}</Text>
              <Text style={styles.cardText}>
                {trip.start_date} — {trip.end_date}
              </Text>
              {!!trip.notes && (
                <Text style={styles.cardNotes}>{trip.notes}</Text>
              )}
            </View>
          ))
        )}

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.aiButtonText}>+ Add Trip</Text>
        </TouchableOpacity>

        {/* Add Trip Modal */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Trip</Text>
              <TextInput
                style={styles.input}
                placeholder="Destination (e.g. Tokyo)"
                value={form.destination}
                onChangeText={(v) => setForm({ ...form, destination: v })}
                autoFocus
              />
              <TextInput
                style={styles.input}
                placeholder="Start Date (YYYY-MM-DD)"
                value={form.start_date}
                onChangeText={(v) => setForm({ ...form, start_date: v })}
              />
              <TextInput
                style={styles.input}
                placeholder="End Date (YYYY-MM-DD)"
                value={form.end_date}
                onChangeText={(v) => setForm({ ...form, end_date: v })}
              />
              <TextInput
                style={[styles.input, { height: 60 }]}
                placeholder="Notes (optional)"
                value={form.notes}
                onChangeText={(v) => setForm({ ...form, notes: v })}
                multiline
              />
              {error && <Text style={styles.errorText}>{error}</Text>}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { flex: 1, backgroundColor: theme.ACCENT },
                  ]}
                  onPress={handleAddTrip}
                  disabled={adding}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      textAlign: "center",
                    }}
                  >
                    {adding ? "Adding..." : "Add Trip"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    {
                      flex: 1,
                      backgroundColor: theme.CARD,
                      marginLeft: 8,
                      borderWidth: 1,
                      borderColor: theme.CHIP_BORDER,
                    },
                  ]}
                  onPress={() => setModalVisible(false)}
                  disabled={adding}
                >
                  <Text
                    style={{
                      color: theme.TEXT,
                      fontWeight: "600",
                      fontFamily: "Inter",
                      textAlign: "center",
                    }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
