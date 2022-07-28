import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import colors from "../config/colors";

interface TextButtonProps {
  borderRadius: number;
  style: TextStyle | TextStyle[];
}

interface Styles {
  buttonContainer: ViewStyle;
}

const TextButton: FC<TextButtonProps> = ({ borderRadius, style, children }) => {
  return (
    <Pressable
      style={[
        styles.buttonContainer,
        { height: borderRadius * 2, borderRadius: borderRadius },
      ]}
      onPress={() => alert("Pressed")}
    >
      <Text
        style={[globalStyles.subTitle, style]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
  },
  // centerText: {
  //   textAlign: "center",
  // },
});
