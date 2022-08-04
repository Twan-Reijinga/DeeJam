import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from "react-native";
import React, { FC, useState } from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import globalStyles from "../config/globalStyles";
import colors from "../config/colors";
import fontSizes from "../config/fontSizes";
import TextButton from "./TextButton";
import IconButton from "./IconButton";

interface CardProps {
  title: string;
  subtitle: string;
  size: number;
  source: ImageSourcePropType;
  style?: ViewStyle;
}

interface Styles {
  container: ViewStyle;
  backgroundImage: ViewStyle;
  overlay: ViewStyle;
  textContainer: ViewStyle;
  centerText: TextStyle;
  textButton: TextStyle;
  iconButton: ViewStyle;
}

const borderRadius = responsiveWidth(5) < 50 ? responsiveWidth(5) : 50;

const Card: FC<CardProps> = ({ title, subtitle, size, source, style }) => {
  var [currentFont, setCurrentFont] =
    Platform.OS === "web" ? [fontSizes.medium, undefined] : useState(20);

  return (
    <View style={[styles.container, style, { width: size }]}>
      <ImageBackground
        source={source}
        resizeMode="cover"
        style={[StyleSheet.absoluteFillObject, styles.backgroundImage]}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text
          style={[
            globalStyles.subTitle,
            styles.centerText,
            { fontSize: currentFont },
          ]}
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          onTextLayout={(e) => {
            const { lines } = e.nativeEvent;
            if (setCurrentFont && lines.length > 2) {
              setCurrentFont(currentFont - 1);
            }
          }}
        >
          {title}
        </Text>
        <Text style={[globalStyles.name, styles.centerText]}>{subtitle}</Text>
      </View>
      <TextButton
        style={[styles.centerText, styles.textButton]}
        borderRadius={borderRadius}
      >
        Join
      </TextButton>
      <IconButton
        style={styles.iconButton}
        size={borderRadius * 2}
        source={require("../assets/icons/play.png")}
        backgroundColor={colors.textColor}
        color={colors.secondary}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create<Styles>({
  container: {
    maxWidth: 400,
    aspectRatio: 1,
    backgroundColor: colors.secondary,
    borderRadius: borderRadius,
  },
  backgroundImage: {
    borderRadius: borderRadius,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: borderRadius,
  },
  textContainer: {
    padding: 5,
    flex: 1,
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
  },
  textButton: {
    fontSize: fontSizes.small,
  },
  iconButton: {
    position: "absolute",
    marginTop: -borderRadius * 2,
    right: 0,
  },
});
