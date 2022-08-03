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
  scrollContainer: ViewStyle;
  scroll: ViewStyle;
  card: ViewStyle;
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

const cardSize = responsiveWidth(40);

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
];

const HomeScreen: FC<HomeScreenProps> = ({ user }) => {
  return (
    <View>
      <Text style={globalStyles.title}>Hey {user}</Text>
      <Text style={[globalStyles.subTitle, styles.topSpace]}>
        Listen with friends
      </Text>
      <View style={styles.scrollContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scroll}>
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create<Styles>({
  topSpace: {
    marginTop: "5%",
  },
  scrollContainer: {
    width: "105%",
    left: 0,
    right: responsiveWidth(-5),
  },
  scroll: {
    flexDirection: "row",
  },
  card: {
    marginRight: cardSize / 20,
    marginVertical: cardSize / 20,
  },
  track: {
    marginTop: "3%",
    width: "100%",
  },
});
