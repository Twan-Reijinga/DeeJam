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

const borderRadius = responsiveWidth(5);

interface GroupCardProps {
  groupName: string;
  creatorName: string;
}

interface Styles {
  container: ViewStyle;
  backgroundImage: ViewStyle;
  overlay: ViewStyle;
  textContainer: ViewStyle;
  centerText: TextStyle;
  buttonContainer: ViewStyle;
}

const JoinButton: FC = () => {
  return (
    <Pressable style={styles.buttonContainer} onPress={() => alert("Pressed")}>
      <Text
        style={[globalStyles.subTitle, styles.centerText]}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        Join
      </Text>
    </Pressable>
  );
};

const GroupCard: FC<GroupCardProps> = ({ groupName, creatorName }) => {
  var [currentFont, setCurrentFont] =
    Platform.OS === "web" ? [fontSizes.small, undefined] : useState(80);

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
          {groupName}
        </Text>
        <Text style={[globalStyles.name, styles.centerText]}>
          {creatorName}
        </Text>
      </View>
      <JoinButton />
    </View>
  );
};

export default GroupCard;

const styles = StyleSheet.create<Styles>({
  container: {
    width: "50%",
    maxWidth: 500,
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
    borderRadius: responsiveWidth(5),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: colors.secondary,
    borderRadius: borderRadius,
  },
});
