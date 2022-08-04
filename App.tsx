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
import HomeScreen from "./app/screens/HomeScreen";
import SafeArea from "./app/components/SafeArea";

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
    <SafeArea>
      <HomeScreen user="Twan" />
    </SafeArea>
  );
}
