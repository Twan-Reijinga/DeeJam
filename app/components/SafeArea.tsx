import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";

interface SafeAreaProps {
  children: JSX.Element;
}

interface Styles {
  safeAreaView: ViewStyle;
  view: ViewStyle;
}

const { height } = Dimensions.get("window");

const SafeArea: FC<SafeAreaProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create<Styles>({
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
  }
});
