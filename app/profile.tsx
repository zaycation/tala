import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as colors from "../theme/colors";
import getStyles from "../styles/profile.styles";

export default function ProfileScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  // Example data
  const pastTrips = [
    { name: "Split, Croatia", desc: "Sailing Getaway • Aug 2024" },
    { name: "New York", desc: "City Lights • Dec 2023" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKGROUND }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Isaiah Thomas</Text>
        <Text style={styles.subHeader}>Your profile, trips & settings</Text>

        <Text style={styles.sectionTitle}>Past Trips</Text>
        {pastTrips.map((trip, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{trip.name}</Text>
            <Text style={styles.cardText}>{trip.desc}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.settingsBtn}>
          <Text style={styles.settingsBtnText}>Account Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
