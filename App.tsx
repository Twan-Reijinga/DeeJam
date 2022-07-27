import * as React from "react";
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  SafeAreaView,
} from "react-native";
// import { useDimensions } from "@react-native-community/hooks";

import {
  useFonts as useRaleway,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import globalStyles from "./app/config/globalStyles";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  const [ralewayLoaded] = useRaleway({
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!ralewayLoaded || !robotoLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={globalStyles.AndroidSaveArea}>
      <HomeScreen user="Twan" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   AndroidSaveArea: {
//     flex: 1,
//     backgroundColor: colors.primary,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
