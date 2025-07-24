import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const ACCENT_COLOR = "#6C63FF";

const ICONS: Record<string, string> = {
  explore: "compass-outline",
  plan: "calendar-outline",
  profile: "person-outline",
};

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/InterVariable.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ACCENT_COLOR,
        tabBarStyle: { paddingBottom: 5, height: 60, backgroundColor: "#fff" },
        tabBarLabelStyle: {
          fontFamily: "Inter",
          fontSize: 14,
          letterSpacing: 0.2,
          fontVariationSettings: "'wght' 400", // ← forces regular
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = ICONS[route.name];
          if (route.name === "explore" && focused) iconName = "compass";
          if (route.name === "plan" && focused) iconName = "calendar";
          if (route.name === "profile" && focused) iconName = "person";
          return (
            <Ionicons
              name={iconName as keyof typeof Ionicons.glyphMap}
              size={24}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="plan" options={{ title: "Plan" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
