import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen.main";

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
