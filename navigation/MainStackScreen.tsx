import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeStack/Home/HomeScreen.main";
import { DetailScreen } from "../screens/HomeStack/Detail/DetailScreen";

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="HomeScreen">
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: true, headerBackTitle: "Back", headerTitle: "" }}
      />
    </MainStack.Navigator>
  );
};
