import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackScreen } from "./MainStackScreen";
import { GalleryStackScreen } from "./GalleryStackScreen";
import { AuthStackScreen } from "./AuthStackScreen";
import { useEffect, useState } from "react";
import firebase from "firebase";

const RootStack = createStackNavigator();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainStackScreen" component={MainStackScreen} />
      <RootStack.Screen
        name="GalleryStackScreen"
        component={GalleryStackScreen}
      />
    </RootStack.Navigator>
  );
};
