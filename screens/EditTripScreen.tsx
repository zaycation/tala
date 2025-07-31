import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import getStyles from "../styles/editTrip.styles";
import * as colors from "../theme/colors";

export default function EditTripScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const styles = getStyles();

  const trip = (route.params as any)?.trip;
  const [destination, setDestination] = useState(trip?.destination || "");
  const [startDate, setStartDate] = useState(trip?.start_date || "");
  const [endDate, setEndDate] = useState(trip?.end_date || "");
  const [notes, setNotes] = useState(trip?.notes || "");
  const [saving, setSaving] = useState(false);

  const onSave = async () => {
    if (!destination || !startDate || !endDate) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    setSaving(true);
    const { error } = await supabase
      .from("trips")
      .update({
        destination,
        start_date: startDate,
        end_date: endDate,
        notes,
      })
      .eq("id", trip.id);

    setSaving(false);
    if (error) Alert.alert("Update failed", error.message);
    else navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Trip</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Destination"
      />
      <TextInput
        style={styles.input}
        value={startDate}
        onChangeText={setStartDate}
        placeholder="YYYY-MM-DD"
      />
      <TextInput
        style={styles.input}
        value={endDate}
        onChangeText={setEndDate}
        placeholder="YYYY-MM-DD"
      />
      <TextInput
        style={styles.input}
        value={notes}
        onChangeText={setNotes}
        placeholder="Notes"
        multiline
      />
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={onSave}
        disabled={saving}
      >
        <Text style={styles.saveBtnText}>{saving ? "Saving..." : "Save"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelBtnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
