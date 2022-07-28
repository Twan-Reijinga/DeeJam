import {
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";

interface IconButtonProps {
  source: ImageSourcePropType;
  size: number;
  backgroundColor?: ColorValue;
  color?: ColorValue;
  style?: ViewStyle | ViewStyle[];
}

interface Styles {
  icon: ImageStyle;
  iconContainer: ViewStyle;
}

const IconButton: FC<IconButtonProps> = ({
  source,
  size,
  backgroundColor = "none",
  color = "none",
  style,
}) => {
  return (
    <Pressable>
      <View
        style={[
          styles.iconContainer,
          style,
          {
            width: size,
            padding: size / 3,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Image style={[styles.icon, { tintColor: color }]} source={source} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create<Styles>({
  iconContainer: {
    aspectRatio: 1,
    justifyContent: "center",
  },
  icon: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
