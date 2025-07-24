import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import * as colors from "../theme/colors";

const ICONS: Record<string, string> = {
  index: "compass-outline",
  plan: "calendar-outline",
  profile: "person-outline",
};

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/InterVariable.ttf"),
  });
  const scheme = useColorScheme(); // 'light' | 'dark'
  const theme = scheme === "dark" ? colors.dark : colors.light;

  if (!fontsLoaded) return null;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.ACCENT,
        tabBarInactiveTintColor: theme.SUBTEXT,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: theme.CARD, // << this is now dynamic!
          borderTopColor: theme.CHIP_BORDER,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter",
          fontSize: 14,
          letterSpacing: 0.2,
          fontVariationSettings: "'wght' 400",
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
      <Tabs.Screen name="index" options={{ title: "Explore" }} />
      <Tabs.Screen name="plan" options={{ title: "Plan" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
