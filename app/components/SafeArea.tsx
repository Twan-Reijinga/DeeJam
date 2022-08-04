import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";

interface SafeAreaProps {
  children: JSX.Element;
}

interface Styles {
  webView: ViewStyle;
  safeAreaView: ViewStyle;
  view: ViewStyle;
}

const { height } = Dimensions.get("window");

const SafeArea: FC<SafeAreaProps> = ({ children }) => {
  if (Platform.OS === "web") {
    return <View style={styles.webView}>{children}</View>;
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create<Styles>({
  webView: {
    backgroundColor: colors.primary,
    padding: "5%",
  },
  safeAreaView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.primary,
  },
  view: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" && StatusBar.currentHeight
        ? StatusBar.currentHeight + height * 0.05
        : "5%",
    paddingLeft: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
  },
});
