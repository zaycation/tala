import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const ACCENT_COLOR = "#6C63FF";

const destinations = [
  {
    name: "Kyoto, Japan",
    desc: "Cherry Blossom Season",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Oaxaca, Mexico",
    desc: "Day of the Dead",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Split, Croatia",
    desc: "Sailing Getaway",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Hey, Isaiah 👋</Text>
      <Text style={styles.subHeader}>Ready for your next adventure?</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 25 }}
      >
        {destinations.map((dest, idx) => (
          <View key={idx} style={styles.card}>
            <Image source={{ uri: dest.image }} style={styles.cardImage} />
            <View style={{ padding: 12 }}>
              <Text style={styles.cardTitle}>{dest.name}</Text>
              <Text style={styles.cardDesc}>{dest.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Add categories, "Hidden Gems", etc. here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  subHeader: { fontSize: 17, color: "#636363", marginBottom: 14 },
  card: {
    width: 220,
    marginRight: 16,
    borderRadius: 22,
    backgroundColor: "#f8f8f8",
    overflow: "hidden",
    shadowColor: ACCENT_COLOR,
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  cardImage: {
    height: 130,
    width: "100%",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#222" },
  cardDesc: { fontSize: 14, color: "#6C63FF", marginTop: 2 },
});
