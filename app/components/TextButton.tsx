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
  content: string;
  borderRadius: number;
}

interface Styles {
  buttonContainer: ViewStyle;
  centerText: TextStyle;
}

const TextButton: FC<TextButtonProps> = ({ content, borderRadius }) => {
  return (
    <Pressable
      style={[styles.buttonContainer, { borderRadius: borderRadius }]}
      onPress={() => alert("Pressed")}
    >
      <Text
        style={[globalStyles.subTitle, styles.centerText]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {content}
      </Text>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    backgroundColor: colors.secondary,
  },
  centerText: {
    textAlign: "center",
  },
});
