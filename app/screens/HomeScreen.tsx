import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import Card from "../components/Card";
import { responsiveWidth } from "react-native-responsive-dimensions";

interface HomeScreenProps {
  user: string;
}

interface Styles {
  topSpace: TextStyle;
  scroll: ViewStyle;
  card: ViewStyle;
}

const cardSize = responsiveWidth(40);

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View>
      <Text style={globalStyles.title}>Hey {user}</Text>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Listen with friends
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <Card
          title="Vuurtoren Eiland"
          subtitle="Twan"
          size={cardSize}
          source={require("../assets/vuurtoren.jpg")}
          style={styles.card}
        />
        <Card
          title="Vrienden Group"
          subtitle="FriendName"
          size={cardSize}
          source={require("../assets/dessert.png")}
          style={styles.card}
        />
        <Card
          title="Vakantie Groep"
          subtitle="Sinterklaas"
          size={cardSize}
          source={require("../assets/mountains.jpg")}
          style={styles.card}
        />
        <Card
          title="Lofi Beats"
          subtitle="Someone"
          size={cardSize}
          source={require("../assets/vuurtoren.jpg")}
          style={styles.card}
        />
        <Card
          title="Relax/Chill"
          subtitle="Twan"
          size={cardSize}
          source={require("../assets/dessert.png")}
          style={styles.card}
        />
        <Card
          title="Title"
          subtitle="Insert name here"
          size={cardSize}
          source={require("../assets/mountains.jpg")}
          style={styles.card}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create<Styles>({
  topSpace: {
    marginTop: "5%",
  },
  scroll: {
    flexDirection: "row",
  },
  card: {
    marginRight: cardSize / 20,
    marginVertical: cardSize / 20,
  },
});
