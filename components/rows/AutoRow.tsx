import { useNavigation, useNavigationState } from "@react-navigation/native";
import React from "react";
import {
  ButtonRowModelType,
  RowEnum,
  RowModelType,
  TextRowModelType,
} from "../../models/main";
import { ButtonRow } from "./ButtonRow";
import { TextRow } from "./TextRow";

interface AutoRowProps {
  row: RowModelType;
  handleAction: any;
}

export function AutoRow({ row, handleAction }: AutoRowProps) {
  const navigation = useNavigation();
  switch (row.type) {
    case RowEnum.Text:
      let textData = row.data as TextRowModelType;
      return <TextRow style={textData.style} content={textData.content} />;
    case RowEnum.Button:
      var buttonData = row.data as ButtonRowModelType;
      return (
        <ButtonRow
          title={buttonData.title}
          onPress={() => {
            handleAction(
              buttonData.actionType,
              buttonData.actionContent,
              navigation
            );
          }}
        />
      );
    default:
      return null;
  }
}
