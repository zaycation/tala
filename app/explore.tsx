import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from '../styles/explore.styles';


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

const categories = [
  { emoji: "🔥", name: "Trending" },
  { emoji: "🌮", name: "Foodie" },
  { emoji: "🎶", name: "Culture" },
  { emoji: "🧘‍♂️", name: "Chill" },
  { emoji: "🌍", name: "Hidden Gems" },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Hey, Isaiah 👋</Text>
      <Text style={styles.subHeader}>Ready for your next adventure?</Text>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      >
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} style={styles.chip}>
            <Text style={styles.chipText}>
              {cat.emoji} {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Destinations */}
      <Text style={styles.sectionTitle}>Featured</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        {destinations.map((dest, idx) => (
          <View key={idx} style={styles.card}>
            <Image source={{ uri: dest.image }} style={styles.cardImage} />
            <View style={{ padding: 12 }}>
              <Text style={styles.cardTitle}>{dest.name}</Text>
              <Text style={styles.cardDesc}>{dest.desc}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addBtnText}>Add to Plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Hidden Gems (could be a second scroll, more cards, etc.) */}
      <Text style={styles.sectionTitle}>Hidden Gems for You</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...destinations].reverse().map((dest, idx) => (
          <View key={idx} style={styles.cardSmall}>
            <Image source={{ uri: dest.image }} style={styles.cardImageSmall} />
            <Text style={styles.cardTitleSmall}>{dest.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ height: 60 }} />
    </ScrollView>
  );
}
