import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import Card from "../components/Card";

interface HomeScreenProps {
  user: string;
}

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View>
      <Text style={globalStyles.title}>Hey {user}</Text>
      <Text style={[globalStyles.subTitle, styles.margin]}>
        Listen with friends
      </Text>
      <Card title="Vuurtoren Eiland" subtitle="Twan" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  margin: {
    marginTop: "5%",
  },
});
