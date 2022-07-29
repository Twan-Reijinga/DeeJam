import {
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";
import { responsiveWidth } from "react-native-responsive-dimensions";
import globalStyles from "../config/globalStyles";
import fontSizes from "../config/fontSizes";
import { Image } from "react-native-svg";

interface TrackListItemProps {
  title: string;
  artist: string;
  source: ImageSourcePropType;
}

interface Styles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  textContainer: ViewStyle;
}

const TrackListItem: FC<TrackListItemProps> = ({ title, artist, source }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[globalStyles.subTitle, { fontSize: fontSizes.small }]}>
          {title}
        </Text>
        <Text style={[globalStyles.name, { fontSize: fontSizes.verySmall }]}>
          {artist}
        </Text>
      </View>
    </View>
  );
};

export default TrackListItem;

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.secondary,
    aspectRatio: 6,
    maxHeight: 100,
    padding: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {},
  image: {
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
});
