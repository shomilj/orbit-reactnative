import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { EntryStackScreen } from "./navigation/EntryStackScreen";

export default function App() {
  return <NavigationContainer>{EntryStackScreen()}</NavigationContainer>;
}
