import { StyleSheet } from "react-native";
import * as colors from "../theme/colors";

export default function getStyles(theme = colors.light) {
  return StyleSheet.create({
    modalCard: {
      backgroundColor: theme.CARD,
      borderRadius: 20,
      padding: 26,
      margin: 24,
      alignItems: "center",
      minWidth: 300,
      maxWidth: 400,
      alignSelf: "center",
      shadowColor: "#000",
      shadowOpacity: 0.09,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 8 },
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: theme.TEXT,
      marginBottom: 8,
      fontFamily: "Inter",
    },
    dates: {
      fontSize: 16,
      color: theme.SUBTEXT,
      marginBottom: 8,
    },
    notes: {
      fontSize: 16,
      color: theme.TEXT,
      marginBottom: 16,
      fontFamily: "Inter",
      textAlign: "center",
    },
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 8,
      width: "100%",
    },
    editBtn: {
      backgroundColor: theme.ACCENT,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 14,
      marginHorizontal: 4,
    },
    editBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
      fontFamily: "Inter",
    },
    deleteBtn: {
      backgroundColor: "#ff6262",
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 14,
      marginHorizontal: 4,
    },
    deleteBtnText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
      fontFamily: "Inter",
    },
    closeBtn: {
      backgroundColor: theme.BACKGROUND,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 14,
      marginHorizontal: 4,
      borderWidth: 1,
      borderColor: theme.CHIP_BORDER,
    },
    closeBtnText: {
      color: theme.TEXT,
      fontWeight: "bold",
      fontSize: 15,
      fontFamily: "Inter",
    },
    errorText: {
      color: "#ff3a3a",
      fontSize: 16,
      textAlign: "center",
      marginTop: 32,
      fontFamily: "Inter",
    },
  });
}
