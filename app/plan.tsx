import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as colors from "../theme/colors";
import getStyles from "../styles/plan.styles";

export default function PlanScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  // Example data
  const trips = [
    { name: "Kyoto, Japan", desc: "Cherry Blossom Trip • Mar 24 - Mar 30" },
    { name: "Oaxaca, Mexico", desc: "Day of the Dead • Nov 1 - Nov 5" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKGROUND }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Plans</Text>
        <Text style={styles.subTitle}>
          Manage, plan, or create your next adventure.
        </Text>
        {trips.map((trip, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{trip.name}</Text>
            <Text style={styles.cardText}>{trip.desc}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.aiButton}>
          <Text style={styles.aiButtonText}>+ Start New AI Trip Plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
