import { StyleSheet } from "react-native";

export default (theme: typeof import("../theme/colors").light) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 18,
      paddingTop: 24,
      paddingBottom: 18,
      flexGrow: 1,
      backgroundColor: theme.BACKGROUND,
    },
    header: {
      fontSize: 26,
      fontWeight: "700",
      color: theme.TEXT,
      fontFamily: "Inter",
      marginBottom: 8,
    },
    subHeader: {
      fontSize: 16,
      color: theme.SUBTEXT,
      fontFamily: "Inter",
      marginBottom: 18,
    },
    card: {
      backgroundColor: theme.CARD,
      borderRadius: 18,
      padding: 18,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 1,
    },
    cardTitle: {
      fontSize: 17,
      fontWeight: "600",
      color: theme.ACCENT,
      fontFamily: "Inter",
      marginBottom: 3,
    },
    cardText: {
      fontSize: 14,
      color: theme.TEXT,
      fontFamily: "Inter",
    },
    sectionTitle: {
      fontSize: 16,
      color: theme.SUBTEXT,
      fontWeight: "600",
      fontFamily: "Inter",
      marginVertical: 8,
    },
    settingsBtn: {
      backgroundColor: theme.CARD,
      borderRadius: 16,
      padding: 12,
      alignItems: "center",
      marginTop: 12,
      borderWidth: 1,
      borderColor: theme.CHIP_BORDER,
    },
    settingsBtnText: {
      color: theme.ACCENT,
      fontFamily: "Inter",
      fontWeight: "700",
      fontSize: 15,
    },
  });
