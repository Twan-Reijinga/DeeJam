import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface IconButtonProps {}

interface Styles {}

const IconButton: FC<IconButtonProps> = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create<Styles>({});
