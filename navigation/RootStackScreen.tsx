import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStackScreen";
import { GalleryScreen } from "../screens/GalleryScreen/GalleryScreen.main";

const RootStack = createStackNavigator();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
      <RootStack.Screen name="GalleryScreen" component={GalleryScreen} />
    </RootStack.Navigator>
  );
};
