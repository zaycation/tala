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
  },
  header: {
    fontSize: typography.FONT_SIZE_HEADER,
    fontWeight: "700",
    color: colors.TEXT,
    marginBottom: 6,
    fontFamily: typography.FONT_FAMILY,
  },
  subHeader: {
    fontSize: typography.FONT_SIZE_BODY,
    color: colors.SUBTEXT,
    marginBottom: 18,
    fontFamily: typography.FONT_FAMILY,
  },
  inputCard: {
    backgroundColor: colors.CARD,
    borderRadius: spacing.RADIUS,
    padding: 18,
    marginBottom: 18,
    elevation: 1,
  },
  label: {
    fontSize: 14,
    color: colors.SUBTEXT,
    marginBottom: 4,
    fontFamily: typography.FONT_FAMILY,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.CHIP_BORDER,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontFamily: typography.FONT_FAMILY,
    backgroundColor: "#fff",
    marginBottom: 8,
    color: colors.TEXT,
  },
  ctaButton: {
    backgroundColor: colors.ACCENT,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 24,
  },
  ctaText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: typography.FONT_FAMILY,
    letterSpacing: 0.4,
  },
});
