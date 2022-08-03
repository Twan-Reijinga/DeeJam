import {StyleSheet } from "react-native";
import colors from "./colors";
import fontSizes from "./fontSizes";

export default StyleSheet.create({
  title: {
    fontFamily: "Raleway_900Black",
    fontSize: fontSizes.big,
    color: colors.textColor,
  },
  subTitle: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: fontSizes.big,
    color: colors.textColor,
  },
  name: {
    fontFamily: "Roboto_400Regular",
    fontSize: fontSizes.small,
    color: colors.textColor,
    opacity: 0.5,
  },
});
