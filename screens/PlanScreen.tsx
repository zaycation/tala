import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
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

  // Trip form state for modal
  const [form, setForm] = useState({
    destination: "",
    start_date: "",
    end_date: "",
    notes: "",
  });

  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchTrips();
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

  function isValidDateString(date: string) {
    const [year, month, day] = date.split("-").map(Number);
    if (!year || !month || !day) return false;
    const d = new Date(date);
    return (
      d instanceof Date &&
      !isNaN(d.getTime()) &&
      d.getUTCFullYear() === year &&
      d.getUTCMonth() + 1 === month &&
      d.getUTCDate() === day
    );
  }

  async function handleAddTrip() {
    if (!form.destination || !form.start_date || !form.end_date) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!isValidDateString(form.start_date)) {
      setError("Start date is not valid (YYYY-MM-DD).");
      return;
    }
    if (!isValidDateString(form.end_date)) {
      setError("End date is not valid (YYYY-MM-DD).");
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

  // ---- Instead of router, show modal for creating trip ----

  function renderTrip({ item }: { item: Trip }) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.destination}</Text>
        <Text style={styles.cardText}>
          {item.start_date} — {item.end_date}
        </Text>
        {item.notes ? <Text style={styles.cardNotes}>{item.notes}</Text> : null}
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
        <View>
          <Text style={styles.emptyText}>
            No trips yet. Start your first adventure!
          </Text>
        </View>
      ) : (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={renderTrip}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}

      <TouchableOpacity
        style={styles.aiButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.aiButtonText}>+ Add Trip</Text>
      </TouchableOpacity>

      {/* Modal for adding a trip */}
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
    </View>
  );
}
