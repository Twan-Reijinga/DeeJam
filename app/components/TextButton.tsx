import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  TextStyle,
  View,
  TouchableNativeFeedback,
} from "react-native";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import colors from "../config/colors";

interface TextButtonProps {
  borderRadius: number;
  style?: TextStyle | TextStyle[];
}

interface Styles {
  buttonContainer: ViewStyle;
}

const TextButton: FC<TextButtonProps> = ({ borderRadius, style, children }) => {
  return (
    <Pressable onPress={() => console.log(children)}>
      <View
        style={[
          styles.buttonContainer,
          { height: borderRadius * 2, borderRadius: borderRadius },
        ]}
      >
        <Text
          style={[globalStyles.subTitle, style]}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    backgroundColor: colors.secondary,
    justifyContent: "center",
  },
});
