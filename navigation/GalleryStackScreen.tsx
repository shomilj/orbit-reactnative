import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GalleryScreen } from "../screens/GalleryStack/Gallery/GalleryScreen.main";

const GalleryStack = createStackNavigator();

export const GalleryStackScreen = () => {
  return (
    <GalleryStack.Navigator initialRouteName="GalleryScreen">
      <GalleryStack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
    </GalleryStack.Navigator>
  );
};
