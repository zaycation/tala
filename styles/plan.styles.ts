import { StyleSheet } from "react-native";

export default (theme: typeof import("../theme/colors").light) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 18,
      paddingTop: 28, // Less padding here, since SafeAreaView handles the notch!
      flexGrow: 1,
    },

    title: {
      fontSize: 26,
      fontWeight: "700",
      color: theme.TEXT,
      fontFamily: "Inter",
      marginBottom: 8,
    },
    subTitle: {
      fontSize: 16,
      color: theme.SUBTEXT,
      fontFamily: "Inter",
      marginBottom: 18,
    },
    card: {
      backgroundColor: theme.CARD,
      borderRadius: 18,
      padding: 20,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 1,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.ACCENT,
      fontFamily: "Inter",
      marginBottom: 4,
    },
    cardText: {
      fontSize: 15,
      color: theme.TEXT,
      fontFamily: "Inter",
      marginBottom: 2,
    },
    aiButton: {
      marginTop: 18,
      backgroundColor: theme.ACCENT,
      borderRadius: 100,
      alignItems: "center",
      paddingVertical: 12,
    },
    aiButtonText: {
      color: "#fff",
      fontWeight: "700",
      fontFamily: "Inter",
      fontSize: 16,
    },
  });
