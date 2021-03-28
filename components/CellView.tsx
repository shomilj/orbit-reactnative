import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, View } from "react-native";
import { ActionEnum, CellModelType } from "../models/main";
import { styles } from "../styles/main";
import PressableOpacity from "./PressableOpacity";
import { AutoRow } from "./rows/AutoRow";
import * as Analytics from "expo-firebase-analytics";

interface CellViewProps {
  cell: CellModelType;
}

export function CellView({ cell }: CellViewProps) {
  const navigation = useNavigation();
  const components = [];

  // If a header exists, push the header.
  if (cell.header) {
    components.push(
      <Text style={styles.header} key={"row0"}>
        {cell.header}
      </Text>
    );
  }

  // For each component, push the appropriate component.
  cell.data.forEach((row, index) => {
    components.push(
      <AutoRow row={row} key={"key" + index} handleAction={handleAction} />
    );
  });

  // If the cell as a WHOLE has an action type, then wrap it.
  let onPress = null;
  if (cell.actionType) {
    onPress = () => {
      handleAction(cell.actionType, cell.actionContent, navigation);
    };
  }
  return (
    <PressableOpacity onPress={onPress} style={styles.cell} key={cell.cardKey}>
      {components}
    </PressableOpacity>
  );
}

export const handleAction = (
  actionType: ActionEnum,
  actionContent: any,
  navigation: any
) => {
  Analytics.logEvent("handle_action", {
    actionType: actionType || "UNKNOWN",
    actionContent: actionContent?.substring(0, 35) || "UNKNOWN",
  });
  switch (actionType) {
    case ActionEnum.Web:
      WebBrowser.openBrowserAsync(actionContent);
      break;
    case ActionEnum.Detail:
      navigation.push("DetailScreen", {
        nodeId: actionContent,
      });
      break;
  }
};
