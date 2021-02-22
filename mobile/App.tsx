import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import Routes from "./src/routes";

export default function App() {
  const [loadedFonts, setLoadedFonts] = useState<boolean>(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
      RobotoLight: require("./assets/fonts/Roboto-Regular.ttf"),
      RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
      RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
      RubikMedium: require("./assets/fonts/Rubik-Medium.ttf"),
      RubikBold: require("./assets/fonts/Rubik-Bold.ttf"),
      RubikLight: require("./assets/fonts/Rubik-Light.ttf"),
      RubikSemiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
      RubikRegular: require("./assets/fonts/Rubik-Regular.ttf"),
    });
    setLoadedFonts(true);
  };

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" translucent />

      <Routes />
    </NavigationContainer>
  );
}
