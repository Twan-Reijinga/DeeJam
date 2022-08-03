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
import TrackImage from "./TrackImage";

interface TrackListItemProps {
  title: string;
  artist: string;
  source: ImageSourcePropType;
  style?: ViewStyle;
}

interface Styles {
  container: ViewStyle;
  textContainer: ViewStyle;
  spaceRight: ViewStyle;
}

const TrackListItem: FC<TrackListItemProps> = ({
  title,
  artist,
  source,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TrackImage
        source={source}
        size={responsiveWidth(10)}
        style={styles.spaceRight}
      />
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
  textContainer: {
    flex: 1,
  },
  spaceRight: {
    marginRight: responsiveWidth(3),
  },
});
