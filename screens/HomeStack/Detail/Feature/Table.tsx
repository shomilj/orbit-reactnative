import React from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CellView, handleAction } from "../../../../components/CellView";
import { styles, THEME_LIGHT } from "../../../../styles/main";

export enum RowType {
  Text = "TEXT",
  Button = "BUTTON",
}

interface RowModel {
  type: string;
  data: any;
}

interface RowInput {
  type: string;
  data: RowModel[];
}

export const TableFeature = (data: RowInput, navigation: any) => {
  const renderItem = ({ item, index }) => {
    var cell = CellView(item, navigation);
    if (item.actionType) {
      // This cell has something underneath it
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handleAction(item.actionType, item.actionContent, navigation);
          }}
          key={index.toString()}
        >
          {cell}
        </TouchableOpacity>
      );
    } else {
      // This cell doesn't have anything underneath it
      return <View key={index.toString()}>{cell}</View>;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: THEME_LIGHT }}>
      <FlatList
        data={data.rows}
        renderItem={renderItem}
        keyExtractor={(_, index) => "key-" + index}
      />
    </View>
  );
};
