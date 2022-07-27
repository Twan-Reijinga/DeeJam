import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  AndroidSaveArea: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
