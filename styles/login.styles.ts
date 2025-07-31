import { StyleSheet } from "react-native";

export default (theme: typeof import("../theme/colors").light) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      backgroundColor: theme.BACKGROUND,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 12,
      fontFamily: "Inter",
      color: theme.TEXT,
    },
    subtitle: {
      fontSize: 16,
      color: theme.SUBTEXT,
      marginBottom: 40,
      textAlign: "center",
      fontFamily: "Inter",
    },
    button: {
      backgroundColor: theme.ACCENT,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 100,
      marginTop: 12,
    },
    buttonText: {
      color: "#fff",
      fontSize: 17,
      fontWeight: "700",
      fontFamily: "Inter",
    },
    input: {
      width: "100%",
      height: 44,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.CHIP_BORDER,
      backgroundColor: theme.CARD,
      paddingHorizontal: 16,
      fontSize: 16,
      fontFamily: "Inter",
      marginBottom: 16,
      color: theme.TEXT,
    },
  });
