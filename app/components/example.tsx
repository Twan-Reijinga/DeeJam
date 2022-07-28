import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface ButtonProps {}

interface Styles {}

const Button: FC<ButtonProps> = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create<Styles>({});
