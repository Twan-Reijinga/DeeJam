import {
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import colors from "../config/colors";

interface TrackImageProps {
  source: ImageSourcePropType;
  size: number;
  style?: ViewStyle | ViewStyle[];
}

interface Styles {
  imageContainer: ViewStyle;
  image: ImageStyle;
}

const TrackImage: FC<TrackImageProps> = ({ source, size, style }) => {
  return (
    <View
      style={[
        styles.imageContainer,
        style,
        {
          width: size,
        },
      ]}
    >
      <Image
        style={[styles.image, { borderRadius: size / 2 }]}
        source={source}
      />
    </View>
  );
};

export default TrackImage;

const styles = StyleSheet.create<Styles>({
  imageContainer: {
    maxWidth: 80,
    aspectRatio: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "cover",
  },
});
