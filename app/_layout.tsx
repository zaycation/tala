import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import * as colors from "../theme/colors";

const ICONS: Record<string, string> = {
  index: "compass-outline",
  plan: "calendar-outline",
  profile: "person-outline",
};

function MainTabs() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.ACCENT,
        tabBarInactiveTintColor: theme.SUBTEXT,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: theme.CARD,
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
          if (route.name === "index" && focused) iconName = "compass";
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

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/InterVariable.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}

// AuthGate component for clean auth logic
function AuthGate() {
  const { loggedIn, login } = useAuth();
  return loggedIn ? <MainTabs /> : <LoginScreen onLogin={login} />;
}
