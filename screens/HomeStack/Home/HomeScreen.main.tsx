import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./HomeScreen.constants";
import * as WebBrowser from "expo-web-browser";

import { styles } from "./HomeScreen.styles";
import { Ionicons } from "@expo/vector-icons";

import { TextRow } from "../../../components/rows/TextRow";
import { ButtonRow } from "../../../components/rows/ButtonRow";
import { THEME_DARK, THEME_LIGHT, THEME_WHITE } from "../../../styles/main";
import { NavigationProp } from "@react-navigation/native";

const CellView = ({ header, rows }: any, navigation: any) => {
  const components = [];
  components.push(<Text style={styles.header}>{header}</Text>);
  rows.forEach((row: any) => {
    console.log(row);
    switch (row.type) {
      case "TEXT":
        components.push(TextRow(row.data));
        break;
      case "BUTTON":
        components.push(ButtonRow(row.data, handleAction, navigation));
        break;
    }
  });
  return (
    <View
      style={{
        ...styles.cell,
        paddingVertical: 6,
        backgroundColor: THEME_WHITE,
      }}
    >
      {components}
    </View>
  );
};

const handleAction = (actionType: any, actionContent: any, navigation: any) => {
  switch (actionType) {
    case "WEB":
      WebBrowser.openBrowserAsync(actionContent);
      break;
    case "DETAIL":
      navigation.navigate("DetailScreen", {
        actionType: actionType,
        actionContent: actionContent,
      });
  }
};

const AppBar = ({ navigation }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 60,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: 10, marginRight: 20 }}
        onPress={() => navigation.navigate("GalleryScreen")}
      >
        <Ionicons name="md-add-circle-outline" size={32} color={THEME_DARK} />
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = ({ navigation }: any) => {
  const NameCell = (props: any) => {
    return (
      <View
        key="namecell"
        style={{ ...styles.cell, backgroundColor: THEME_LIGHT }}
      >
        <Text style={{ ...styles.h2, fontSize: 20, marginTop: 0 }}>
          Good evening,
        </Text>
        <Text style={styles.title}>{props.name + "."}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }: any) => {
    if (index == 0) {
      return NameCell(item);
    } else {
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
