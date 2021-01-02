import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GalleryScreen } from "../screens/GalleryStack/Gallery/GalleryScreen.main";
import { FeatureScreen } from "../screens/GalleryStack/Feature/FeatureScreen";

const GalleryStack = createStackNavigator();

export const GalleryStackScreen = () => {
  return (
    <GalleryStack.Navigator initialRouteName="GalleryScreen">
      <GalleryStack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="FeatureScreen"
        component={FeatureScreen}
        options={{ headerShown: false }}
      />
    </GalleryStack.Navigator>
  );
};
