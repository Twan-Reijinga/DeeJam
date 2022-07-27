import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface HomeScreenProps {
  user: string;
}

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View>
      <Text style={styles.title}>Hey {user}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Raleway_900Black",
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
