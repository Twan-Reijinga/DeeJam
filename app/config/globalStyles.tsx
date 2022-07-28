import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import colors from "./colors";
import fontSizes from "./fontSizes";

const { height } = Dimensions.get("window");
export default StyleSheet.create({
  SaveArea: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop:
      Platform.OS === "android" && StatusBar.currentHeight
        ? StatusBar.currentHeight + height * 0.05
        : "5%",
    paddingLeft: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
  },
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
