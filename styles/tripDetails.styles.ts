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
      marginBottom: 8,
      fontFamily: "Inter",
    },
    dates: {
      fontSize: 16,
      color: theme.SUBTEXT,
      marginBottom: 12,
    },
    notes: {
      fontSize: 16,
      color: theme.TEXT,
      marginBottom: 16,
    },
    actions: {
      flexDirection: "row",
      gap: 16,
      marginBottom: 24,
    },
    editBtn: {
      backgroundColor: theme.ACCENT,
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    editBtnText: {
      color: "#fff",
      fontWeight: "600",
    },
    deleteBtn: {
      backgroundColor: theme.DANGER || "#ff2d55",
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    deleteBtnText: {
      color: "#fff",
      fontWeight: "600",
    },
    inviteBtn: {
      marginTop: 0,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: theme.CHIP_BG,
      marginBottom: 8,
    },
    inviteBtnText: {
      color: theme.ACCENT,
      textAlign: "center",
      fontWeight: "600",
    },
    shareBtn: {
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: theme.CHIP_BG,
    },
    shareBtnText: {
      color: theme.ACCENT,
      textAlign: "center",
      fontWeight: "600",
    },
    errorText: {
      color: theme.DANGER || "#ff2d55",
      alignSelf: "center",
      marginTop: 64,
    },
  });
}
