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
      fontSize: 24,
      fontWeight: "700",
      color: theme.TEXT,
      marginBottom: 16,
      fontFamily: "Inter",
    },
    input: {
      borderWidth: 1,
      borderColor: theme.CHIP_BORDER,
      borderRadius: 8,
      padding: 14,
      marginBottom: 12,
      fontSize: 16,
      backgroundColor: theme.CARD,
      color: theme.TEXT,
    },
    saveBtn: {
      backgroundColor: theme.ACCENT,
      padding: 14,
      borderRadius: 8,
      marginTop: 8,
      marginBottom: 4,
    },
    saveBtnText: {
      color: "#fff",
      fontWeight: "600",
      textAlign: "center",
    },
    cancelBtn: {
      padding: 14,
      borderRadius: 8,
    },
    cancelBtnText: {
      color: theme.ACCENT,
      fontWeight: "600",
      textAlign: "center",
    },
  });
}
