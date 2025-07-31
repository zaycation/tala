import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/profile.styles";
import * as colors from "../theme/colors";

export default function ProfileScreen() {
  const { logout } = useAuth();
  const styles = getStyles();

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = supabase.auth.user();
      setUserEmail(user?.email || null);
    };
    fetchUser();

    supabase
      .from("trips")
      .select("*")
      .then(({ data }) => setTrips(data || []));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.email}>{userEmail}</Text>
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
