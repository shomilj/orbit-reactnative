import React from "react";
import { Text } from "react-native";
import { StyleMap } from "../../screens/HomeStack/Home/HomeScreen.styles";

export const TextRow = (data: any) => {
  return <Text style={StyleMap(data.style)}>{data.content}</Text>;
};
