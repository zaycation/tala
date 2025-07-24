import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/profile.styles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatar}>
        {/* Placeholder for user avatar, or use <Image source={{ uri: ... }} style={styles.avatar} /> */}
      </View>
      <Text style={styles.name}>Isaiah Thomas</Text>
      <Text style={styles.email}>zaycation@example.com</Text>

      {/* Saved Trips (example card) */}
      <Text style={styles.sectionTitle}>Saved Trips</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Italy, May 2025</Text>
        <Text style={styles.cardSubtitle}>Rome, Florence, Venice</Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
