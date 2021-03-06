import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStackScreen";
import { GalleryStackScreen } from "./GalleryStackScreen";
import { OrderScreen } from "../screens/HomeStack/Home/OrderScreen";
import { NameScreen } from "../screens/HomeStack/Home/NameScreen";

const RootStack = createStackNavigator();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
      <RootStack.Screen name="OrderScreen" component={OrderScreen} />
      <RootStack.Screen name="NameScreen" component={NameScreen} />
      <RootStack.Screen
        name="GalleryStackScreen"
        component={GalleryStackScreen}
      />
    </RootStack.Navigator>
  );
};
