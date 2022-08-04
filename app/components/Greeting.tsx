import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import IconButton from "./IconButton";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import colors from "../config/colors";

interface GreetingProps {
  name: string;
}

interface Styles {
  container: ViewStyle;
  editButton: ViewStyle;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Hey {name}</Text>
      <IconButton
        source={require("../assets/icons/edit.png")}
        size={responsiveWidth(5)}
        color={colors.textColor}
        backgroundColor={colors.textColorWith10Opacity}
        style={styles.editButton}
      />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
  },
  editButton: {
    padding: responsiveWidth(1),
    marginTop: responsiveHeight(1),
    maxWidth: 50,
  },
});
