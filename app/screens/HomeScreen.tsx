import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { FC } from "react";
import globalStyles from "../config/globalStyles";
import Card from "../components/Card";
import { responsiveWidth } from "react-native-responsive-dimensions";
import TrackListItem from "../components/TrackListItem";

interface HomeScreenProps {
  user: string;
}

interface Styles {
  topSpace: TextStyle;
  scroll: ViewStyle;
  card: ViewStyle;
}

interface cardInfo {
  title: string;
  subtitle: string;
  source: ImageSourcePropType;
}

const cardSize = responsiveWidth(40);

const cardInfo: Array<cardInfo> = [
  {
    title: "Vuurtoren Eiland",
    subtitle: "Twan",
    source: require("../assets/vuurtoren.jpg"),
  },
  {
    title: "Vrienden Groep",
    subtitle: "VriendNaam",
    source: require("../assets/dessert.png"),
  },
  {
    title: "Vakantie Groep",
    subtitle: "Sinterklaas",
    source: require("../assets/mountains.jpg"),
  },
  {
    title: "Lofi Beats",
    subtitle: "Username",
    source: require("../assets/dessert.png"),
  },
  {
    title: "Your GroupName",
    subtitle: "Name of Host",
    source: require("../assets/vuurtoren.jpg"),
  },
];

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View>
      <Text style={globalStyles.title}>Hey {user}</Text>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Listen with friends
      </Text>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        {cardInfo.map((info, index) => {
          return (
            <Card
              key={index}
              title={info.title}
              subtitle={info.subtitle}
              size={cardSize}
              source={info.source}
              style={styles.card}
            />
          );
        })}
      </ScrollView>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Your Favorite songs
      </Text>
      <TrackListItem
        title="On Top Of The World"
        artist="Imagine Dragons"
        source={require("../assets/dessert.png")}
      />
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
