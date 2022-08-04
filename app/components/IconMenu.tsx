import { StyleSheet, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";
import IconButton from "./IconButton";
import { responsiveWidth } from "react-native-responsive-dimensions";

interface IconMenuProps {
  buttonSize: number;
}

interface Styles {
  container: ViewStyle;
  rightSpace: ViewStyle;
}

const IconMenu: FC<IconMenuProps> = ({ buttonSize }) => {
  return (
    <View style={styles.container}>
      <IconButton
        source={require("../assets/icons/glass.png")}
        size={buttonSize}
        color={colors.textColor}
        backgroundColor={colors.textColorWith10Opacity}
        style={styles.rightSpace}
      />
      <IconButton
        source={require("../assets/icons/setting.png")}
        size={buttonSize}
        color={colors.textColor}
        backgroundColor={colors.textColorWith10Opacity}
      />
    </View>
  );
};

export default IconMenu;

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
  },
  rightSpace: {
    marginRight: responsiveWidth(2),
  },
});
