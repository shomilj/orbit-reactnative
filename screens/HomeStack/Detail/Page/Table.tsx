import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CellView } from "../../../../components/CellView";
import { CellModelType, TableDataType } from "../../../../models/main";
import { THEME_LIGHT } from "../../../../styles/main";

interface TableFeatureProps {
  data: TableDataType;
}

export function TableFeature({ data }: TableFeatureProps) {
  interface CellProps {
    item: CellModelType;
  }
  const renderCell = ({ item }: CellProps) => {
    return <CellView cell={item} />;
  };
  return (
    <View style={{ flex: 1, backgroundColor: THEME_LIGHT }}>
      <FlatList
        scrollIndicatorInsets={{ right: 1 }}
        data={data}
        renderItem={renderCell}
        keyExtractor={(_, index) => "key-" + index}
      />
    </View>
  );
}
