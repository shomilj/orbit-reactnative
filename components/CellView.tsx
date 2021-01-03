import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RowType } from "../screens/HomeStack/Detail/Page/Table";
import { CellDataType } from "../screens/HomeStack/Home/HomeScreen.main";
import { styles } from "../screens/HomeStack/Home/HomeScreen.styles";
import { THEME_WHITE } from "../styles/main";
import { ButtonRow, ButtonRowDataType } from "./rows/ButtonRow";
import { TextRow } from "./rows/TextRow";

export interface RowDataType {
  data: any;
  type: RowType;
}

export const CellView = (
  cell: CellDataType,
  navigation: any,
  index: number = -1
) => {
  const components = [];
  if (cell.header) {
    components.push(<Text style={styles.header}>{cell.header}</Text>);
  }
  cell.data.forEach((row: RowDataType) => {
    switch (row.type) {
      case RowType.Text:
        components.push(TextRow(row.data));
        break;
      case RowType.Button:
        components.push(
          ButtonRow(row.data as ButtonRowDataType, handleAction, navigation)
        );
        break;
    }
  });
  const cellView = (
    <View
      style={{
        ...styles.cell,
        paddingVertical: 6,
        backgroundColor: THEME_WHITE,
      }}
      key={"key-" + index}
    >
      {components}
    </View>
  );

  if (cell.actionType) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          handleAction(cell.actionType, cell.actionContent, navigation);
        }}
        key={"key-" + index}
      >
        {cellView}
      </TouchableOpacity>
    );
  } else {
    return cellView;
  }
};

export enum ActionType {
  Web = "WEB",
  Detail = "DETAIL",
}

export const handleAction = (
  actionType: ActionType,
  actionContent: any,
  navigation: any
) => {
  switch (actionType) {
    case ActionType.Web:
      WebBrowser.openBrowserAsync(actionContent);
      break;
    case ActionType.Detail:
      navigation.navigate("DetailScreen", {
        nodeId: actionContent,
      });
      break;
  }
};
