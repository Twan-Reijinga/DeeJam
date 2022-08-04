import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";
import { responsiveWidth } from "react-native-responsive-dimensions";
import globalStyles from "../config/globalStyles";

interface AddCardProps {
  size: number;
  style: ViewStyle;
}

interface Styles {
  container: ViewStyle;
}

const borderRadius = responsiveWidth(5) < 50 ? responsiveWidth(5) : 50;

const AddCard: FC<AddCardProps> = ({ size, style }) => {
  return (
    <View style={[styles.container, style, { width: size }]}>
      <Text style={[globalStyles.name, { fontSize: size / 3 }]}>+</Text>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create<Styles>({
  container: {
    maxWidth: 400,
    aspectRatio: 1,
    backgroundColor: colors.secondary + "4D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadius,
    borderWidth: 2,
    borderColor: colors.textColor + "4D",
    borderStyle: "dashed",
  },
});
