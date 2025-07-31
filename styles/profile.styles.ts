import { StyleSheet } from "react-native";
import * as colors from "../theme/colors";

export default function getStyles(theme = colors.light) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.BACKGROUND,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: theme.TEXT,
      marginBottom: 4,
      fontFamily: "Inter",
    },
    email: {
      color: theme.SUBTEXT,
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 12,
      color: theme.TEXT,
      fontFamily: "Inter",
    },
    tripItem: {
      marginBottom: 14,
      padding: 14,
      backgroundColor: theme.CARD,
      borderRadius: 8,
    },
    tripTitle: {
      fontWeight: "700",
      fontSize: 16,
      color: theme.TEXT,
    },
    tripDates: {
      color: theme.SUBTEXT,
    },
    empty: {
      color: theme.SUBTEXT,
      marginTop: 16,
    },
    logoutBtn: {
      marginTop: 28,
      padding: 14,
      backgroundColor: theme.ACCENT,
      borderRadius: 8,
    },
    logoutText: {
      color: "#fff",
      fontWeight: "600",
      textAlign: "center",
    },
  });
}
