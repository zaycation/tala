import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "../styles/explore.styles"; // make sure path matches your structure

const trending = [
  {
    name: "Bali, Indonesia",
    desc: "Dream Beaches",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Seoul, South Korea",
    desc: "K-pop & Nightlife",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

const nearby = [
  {
    name: "Big Sur",
    desc: "2h drive • CA",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Napa Valley",
    desc: "Wine Country • 1h",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80",
  },
];

const quickFilters = [
  { emoji: "🤙", name: "Solo" },
  { emoji: "💏", name: "Couple" },
  { emoji: "💸", name: "Budget" },
  { emoji: "🏝️", name: "Beach" },
  { emoji: "⛰️", name: "Hiking" },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Hey, Isaiah 👋</Text>
      <Text style={styles.subHeader}>Ready for your next adventure?</Text>

      {/* Quick Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 12 }}
      >
        {quickFilters.map((f, i) => (
          <TouchableOpacity key={i} style={styles.chip}>
            <Text style={styles.chipText}>
              {f.emoji} {f.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Promo Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          🌴 Summer Deals: 15% OFF popular trips!
        </Text>
        <TouchableOpacity style={styles.bannerBtn}>
          <Text style={styles.bannerBtnText}>See Deals</Text>
        </TouchableOpacity>
      </View>

      {/* Trending Now */}
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        {trending.map((dest, idx) => (
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

      {/* Nearby Destinations */}
      <Text style={styles.sectionTitle}>Nearby for You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        {nearby.map((dest, idx) => (
          <View key={idx} style={styles.cardSmall}>
            <Image source={{ uri: dest.image }} style={styles.cardImageSmall} />
            <Text style={styles.cardTitleSmall}>{dest.name}</Text>
            <Text style={styles.cardDesc}>{dest.desc}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Spontaneous AI Pick */}
      <TouchableOpacity style={styles.aiBtn}>
        <Text style={styles.aiBtnText}>
          🎲 Feeling Lucky? Let AI Pick For You!
        </Text>
      </TouchableOpacity>

      {/* Social Proof */}
      <Text style={styles.socialProof}>🌟 12,305 users just booked Tokyo!</Text>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}
