import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GalleryScreen } from "../screens/GalleryStack/Gallery/GalleryScreen.main";
import { CardScreen } from "../screens/GalleryStack/Card/CardScreen.main";

const GalleryStack = createStackNavigator();

export const GalleryStackScreen = () => {
  return (
    <GalleryStack.Navigator initialRouteName="GalleryScreen">
      <GalleryStack.Screen name="GalleryScreen" component={GalleryScreen} />
      <GalleryStack.Screen name="CardScreen" component={CardScreen} />
    </GalleryStack.Navigator>
  );
};
