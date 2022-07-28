import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface exampleProps {}

interface Styles {}

const example: FC<exampleProps> = () => {
  return (
    <View>
      <Text>example</Text>
    </View>
  );
};

export default example;

const styles = StyleSheet.create<Styles>({});
