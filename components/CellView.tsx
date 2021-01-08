import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, View } from "react-native";
import { ActionEnum, CellModelType } from "../models/main";
import { styles } from "../styles/main";
import PressableOpacity from "./PressableOpacity";
import { AutoRow } from "./rows/AutoRow";

interface CellViewProps {
  cell: CellModelType;
}

export function CellView({ cell }: CellViewProps) {
  const navigation = useNavigation();
  const components = [];

  // If a header exists, push the header.
  if (cell.header) {
    components.push(<Text style={styles.header}>{cell.header}</Text>);
  }

  // For each component, push the appropriate component.
  cell.data.forEach((row) => {
    components.push(<AutoRow row={row} handleAction={handleAction} />);
  });

  // If the cell as a WHOLE has an action type, then wrap it.
  if (cell.actionType) {
    const onPress = () => {
      handleAction(cell.actionType, cell.actionContent, navigation);
    };
    return (
      <PressableOpacity onPress={onPress} style={styles.cell}>
        {components}
      </PressableOpacity>
    );
  } else {
    return <View style={styles.cell}>{components}</View>;
  }
}

export const handleAction = (
  actionType: ActionEnum,
  actionContent: any,
  navigation: any
) => {
  switch (actionType) {
    case ActionEnum.Web:
      WebBrowser.openBrowserAsync(actionContent);
      break;
    case ActionEnum.Detail:
      navigation.navigate("DetailScreen", {
        nodeId: actionContent,
      });
      break;
  }
};
