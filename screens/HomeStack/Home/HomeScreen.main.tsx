import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./HomeScreen.constants";

import { styles } from "./HomeScreen.styles";
import { THEME_LIGHT } from "../../../styles/main";

import { CellView, handleAction } from "../../../components/CellView";

import { AppBar } from "./AppBar";
import { NameCell } from "./NameCell";

export const HomeScreen = ({ navigation }: any) => {
  // For index 0, render a NameCell
  // For index >= 1, render a CellView
  const renderItem = ({ item, index }: any) => {
    if (index == 0) {
      return NameCell();
    } else {
      return CellView(item, navigation);
    }
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
      <AppBar navigation={navigation} />
      <FlatList
        data={SAMPLE_DATA}
        renderItem={renderItem}
        keyExtractor={(_, index) => "key-" + index}
      />
    </SafeAreaView>
  );
};
