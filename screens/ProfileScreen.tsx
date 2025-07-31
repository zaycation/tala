import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/profile.styles";

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const styles = getStyles();

  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return; // Don't run if user is not logged in

    supabase
      .from("trips")
      .select("*")
      .eq("user_id", user.id)
      .then(({ data }) => setTrips(data || []));
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.email}>{user?.email ?? "Not logged in"}</Text>
      <Text style={styles.sectionTitle}>Your Trips</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tripItem}>
            <Text style={styles.tripTitle}>{item.destination}</Text>
            <Text style={styles.tripDates}>
              {item.start_date} → {item.end_date}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No trips yet.</Text>}
      />
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
