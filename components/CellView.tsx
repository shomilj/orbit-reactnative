import { WebBrowser } from "expo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../screens/HomeStack/Home/HomeScreen.styles";
import { THEME_WHITE } from "../styles/main";
import { ButtonRow } from "./rows/ButtonRow";
import { TextRow } from "./rows/TextRow";

export const CellView = (
  { header, rows, actionType, actionContent }: any,
  navigation: any
) => {
  const components = [];
  if (header) {
    components.push(<Text style={styles.header}>{header}</Text>);
  }
  rows.forEach((row: any) => {
    switch (row.type) {
      case "TEXT":
        components.push(TextRow(row.data));
        break;
      case "BUTTON":
        components.push(ButtonRow(row.data, handleAction, navigation));
        break;
    }
  });
  const cell = (
    <View
      style={{
        ...styles.cell,
        paddingVertical: 6,
        backgroundColor: THEME_WHITE,
      }}
      key={header}
    >
      {components}
    </View>
  );

  if (actionType) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          handleAction(actionType, actionContent, navigation);
        }}
        key={header}
      >
        {cell}
      </TouchableOpacity>
    );
  } else {
    return cell;
  }
};

export const handleAction = (
  actionType: any,
  actionContent: any,
  navigation: any
) => {
  switch (actionType) {
    case "WEB":
      WebBrowser.openBrowserAsync(actionContent);
      break;
    case "DETAIL":
      navigation.navigate("DetailScreen", {
        nodeId: actionContent,
      });
      break;
  }
};
