import React from "react";
import { Text } from "react-native";
import { TextRowModelType } from "../../models/main";
import { StyleMap } from "../../styles/main";

export function TextRow({ style, content }: TextRowModelType) {
  return <Text style={StyleMap(style)}>{content}</Text>;
}
