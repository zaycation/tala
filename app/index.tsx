import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useColorScheme } from "react-native";
import getStyles from "../styles/explore.styles";
import * as colors from "../theme/colors";

export default function ExploreScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const styles = getStyles(theme);

  const categories = [
    { emoji: "👍", label: "Solo" },
    { emoji: "💑", label: "Couple" },
    { emoji: "💰", label: "Budget" },
    { emoji: "🏖️", label: "Beach" },
    { emoji: "🥾", label: "Hiking" },
  ];

  const trending = [
    {
      image: {
        uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      },
      title: "Bali, Indonesia",
      desc: "Dream Beaches",
    },
    {
      image: {
        uri: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80",
      },
      title: "Seoul, South Korea",
      desc: "K-pop & Nightlife",
    },
  ];

  const nearby = [
    {
      image: {
        uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      title: "Big Sur",
      desc: "2h drive • CA",
    },
    {
      image: {
        uri: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      },
      title: "Napa Valley",
      desc: "Wine Country • 1h",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>
          🔍 Where to? Try 'Tokyo' or 'Hidden Gems'
        </Text>
      </View>

      {/* Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipScroll}
        contentContainerStyle={styles.chipScrollContent}
      >
        {categories.map((cat) => (
          <View key={cat.label} style={styles.chip}>
            <Text style={styles.chipText}>
              {cat.emoji} {cat.label}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Summer Deals Banner */}
      <View style={styles.dealBanner}>
        <Text style={styles.dealText}>
          🌴 Summer Deals: 15% OFF popular trips!
        </Text>
        <TouchableOpacity style={styles.dealBtn}>
          <Text style={styles.dealBtnText}>See Deals</Text>
        </TouchableOpacity>
      </View>

      {/* Trending Now */}
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}
        contentContainerStyle={styles.cardScrollContent}
      >
        {trending.map((item) => (
          <View key={item.title} style={styles.card}>
            <Image source={item.image} style={styles.cardImg} />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Nearby for You */}
      <Text style={styles.sectionTitle}>Nearby for You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}
        contentContainerStyle={styles.cardScrollContent}
      >
        {nearby.map((item) => (
          <View key={item.title} style={styles.cardSmall}>
            <Image source={item.image} style={styles.cardImgSmall} />
            <View style={styles.cardTextContainerSmall}>
              <Text style={styles.cardTitleSmall}>{item.title}</Text>
              <Text style={styles.cardDescSmall}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Feeling Lucky / AI pick */}
      <View style={styles.luckyBanner}>
        <Text style={styles.luckyText}>
          🎲 Feeling Lucky? Let AI Pick For You!
        </Text>
      </View>

      {/* Notification bar */}
      <Text style={styles.bottomNotice}>
        🌟 12,305 users just booked Tokyo!
      </Text>
    </SafeAreaView>
  );
}
