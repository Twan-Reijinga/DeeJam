import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import React, { FC, useState } from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import globalStyles from "../config/globalStyles";
import colors from "../config/colors";
import fontSizes from "../config/fontSizes";
import TextButton from "./TextButton";
import IconButton from "./IconButton";

const borderRadius = responsiveWidth(5) < 50 ? responsiveWidth(5) : 50;

interface CardProps {
  title: string;
  subtitle: string;
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

const Card: FC<CardProps> = ({ title, subtitle }) => {
  var [currentFont, setCurrentFont] =
    Platform.OS === "web" ? [fontSizes.medium, undefined] : useState(20);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/vuurtoren.jpg")}
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
        source={require("../assets/playButton.png")}
        backgroundColor={colors.textColor}
        color={colors.secondary}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create<Styles>({
  container: {
    marginTop: "2.5%",
    width: "50%",
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
