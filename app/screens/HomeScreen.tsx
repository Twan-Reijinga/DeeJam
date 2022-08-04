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
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import TrackListItem from "../components/TrackListItem";
import Greeting from "../components/Greeting";
import IconMenu from "../components/IconMenu";
import AddCard from "../components/AddCard";

interface HomeScreenProps {
  user: string;
}
interface Styles {
  container: ViewStyle;
  headContainer: ViewStyle;
  topSpace: TextStyle;
  cardScrollContainer: ViewStyle;
  cardScroll: ViewStyle;
  card: ViewStyle;
  trackScrollContainer: ViewStyle;
  track: ViewStyle;
}
interface cardProps {
  title: string;
  subtitle: string;
  imageSource: ImageSourcePropType;
}
interface trackProps {
  title: string;
  artist: string;
  imageSource: ImageSourcePropType;
}

const cards: Array<cardProps> = [
  {
    title: "Vuurtoren Eiland",
    subtitle: "Twan",
    imageSource: require("../assets/vuurtoren.jpg"),
  },
  {
    title: "Vrienden Groep",
    subtitle: "VriendNaam",
    imageSource: require("../assets/dessert.png"),
  },
  {
    title: "Vakantie Groep",
    subtitle: "Sinterklaas",
    imageSource: require("../assets/mountains.jpg"),
  },
  {
    title: "Lofi Beats",
    subtitle: "Username",
    imageSource: require("../assets/dessert.png"),
  },
  {
    title: "Your GroupName",
    subtitle: "Name of Host",
    imageSource: require("../assets/vuurtoren.jpg"),
  },
];
const tracks: Array<trackProps> = [
  {
    title: "On Top Of The World",
    artist: "Imagine Dragons",
    imageSource: require("../assets/dessert.png"),
  },
  {
    title: "More Than You Know",
    artist: "Axwell / ingrosso",
    imageSource: require("../assets/vuurtoren.jpg"),
  },
  {
    title: "Warriors",
    artist: "Imagine Dragons",
    imageSource: require("../assets/mountains.jpg"),
  },
  {
    title: "FlyAway",
    artist: "TheFatRat",
    imageSource: require("../assets/dessert.png"),
  },
  {
    title: "On Top Of The World",
    artist: "Imagine Dragons",
    imageSource: require("../assets/dessert.png"),
  },
  {
    title: "More Than You Know",
    artist: "Axwell / ingrosso",
    imageSource: require("../assets/vuurtoren.jpg"),
  },
  {
    title: "Warriors",
    artist: "Imagine Dragons",
    imageSource: require("../assets/mountains.jpg"),
  },
  {
    title: "FlyAway",
    artist: "TheFatRat",
    imageSource: require("../assets/dessert.png"),
  },
];
const cardSize = responsiveWidth(40);
const buttonSize = responsiveWidth(10) < 80 ? responsiveWidth(10) : 80;

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Greeting name={user} />
        <IconMenu buttonSize={buttonSize} />
      </View>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Listen with friends
      </Text>
      <View style={styles.cardScrollContainer}>
        <ScrollView horizontal contentContainerStyle={styles.cardScroll}>
          <AddCard size={cardSize} style={styles.card} />
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                size={cardSize}
                source={card.imageSource}
                style={styles.card}
              />
            );
          })}
        </ScrollView>
      </View>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Your Favorite songs
      </Text>
      <View style={styles.trackScrollContainer}>
        <ScrollView>
          {tracks.map((track, index) => {
            return (
              <TrackListItem
                key={index}
                title={track.title}
                artist={track.artist}
                source={track.imageSource}
                style={styles.track}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topSpace: {
    marginTop: "5%",
  },
  cardScrollContainer: {
    width: "105%",
    left: 0,
    right: responsiveWidth(-5),
  },
  cardScroll: {
    flexDirection: "row",
  },
  card: {
    marginRight: cardSize / 20,
    marginVertical: cardSize / 20,
  },
  trackScrollContainer: {
    flex: 1,
    height: 1000,
  },
  track: {
    marginTop: responsiveHeight(0.5),
    width: "100%",
  },
});
