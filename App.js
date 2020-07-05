import React from "react";
import { Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
