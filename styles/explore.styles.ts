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
    marginBottom: 2,
    color: colors.TEXT,
    fontFamily: typography.FONT_FAMILY,
  },
  subHeader: {
    fontSize: typography.FONT_SIZE_BODY,
    color: colors.SUBTEXT,
    marginBottom: 6,
    fontFamily: typography.FONT_FAMILY,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.ACCENT,
    marginVertical: 8,
    fontFamily: typography.FONT_FAMILY,
  },

  chip: {
    backgroundColor: colors.CHIP_BG,
    borderRadius: spacing.CHIP_RADIUS,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.CHIP_BORDER,
  },
  chipText: {
    fontSize: 15,
    color: colors.ACCENT,
    fontWeight: "500",
    fontFamily: typography.FONT_FAMILY,
  },

  card: {
    width: 220,
    marginRight: 18,
    borderRadius: spacing.RADIUS,
    backgroundColor: colors.CARD,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: { height: 120, width: "100%" },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.TEXT,
    fontFamily: typography.FONT_FAMILY,
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: "#999",
    marginBottom: 6,
    fontFamily: typography.FONT_FAMILY,
  },
  addBtn: {
    backgroundColor: colors.ACCENT,
    borderRadius: 100,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: 4,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: typography.FONT_FAMILY,
  },

  cardSmall: {
    width: 110,
    marginRight: 12,
    borderRadius: 18,
    backgroundColor: colors.CHIP_BG,
    overflow: "hidden",
    elevation: 1,
    alignItems: "center",
  },
  cardImageSmall: { height: 64, width: "100%" },
  cardTitleSmall: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.ACCENT,
    textAlign: "center",
    marginVertical: 5,
    fontFamily: typography.FONT_FAMILY,
  },
});
