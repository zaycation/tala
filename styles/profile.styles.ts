import { StyleSheet } from "react-native";
import * as colors from "../theme/colors";
import * as typography from "../theme/typography";
import * as spacing from "../theme/spacing";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: 48,
    paddingHorizontal: spacing.PADDING,
    alignItems: "center",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.CHIP_BG,
    marginBottom: 16,
    marginTop: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.TEXT,
    marginBottom: 6,
    fontFamily: typography.FONT_FAMILY,
  },
  email: {
    fontSize: 15,
    color: colors.SUBTEXT,
    marginBottom: 20,
    fontFamily: typography.FONT_FAMILY,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.ACCENT,
    alignSelf: "flex-start",
    marginVertical: 16,
    fontFamily: typography.FONT_FAMILY,
  },
  card: {
    width: "100%",
    backgroundColor: colors.CARD,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.TEXT,
    fontFamily: typography.FONT_FAMILY,
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.SUBTEXT,
    fontFamily: typography.FONT_FAMILY,
  },
  logoutBtn: {
    backgroundColor: colors.DANGER,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 28,
    width: "100%",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: typography.FONT_FAMILY,
    letterSpacing: 0.4,
  },
});
