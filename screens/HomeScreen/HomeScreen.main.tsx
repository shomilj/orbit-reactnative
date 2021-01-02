import * as React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./HomeScreen.constants";
import * as WebBrowser from "expo-web-browser";

import { StyleMap, styles, DARK_BLUE_COLOR } from "./HomeScreen.styles";
import { Ionicons } from "@expo/vector-icons";

const MarkdownCell = ({ backgroundColor, header, rows }: any) => {
  const components = [];
  components.push(<Text style={styles.header}>{header}</Text>);
  rows.forEach((row: any) => {
    components.push(<Text style={StyleMap(row.style)}>{row.content}</Text>);
  });
  return <CellView backgroundColor={backgroundColor}>{components}</CellView>;
};

const CellView = (props: any) => {
  return (
    <View
      style={{
        ...styles.cell,
        backgroundColor: props.backgroundColor || "#f3a683",
        paddingVertical: 6,
      }}
    >
      {props.children}
    </View>
  );
};

const AppBar = ({ navigation }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: 10, marginRight: 10 }}
      >
        <Ionicons
          name="md-person-circle-outline"
          size={32}
          color={DARK_BLUE_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: 10, marginRight: 20 }}
        onPress={() => navigation.navigate("GalleryScreen")}
      >
        <Ionicons
          name="md-add-circle-outline"
          size={32}
          color={DARK_BLUE_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = ({ navigation }: any) => {
  const NameCell = (props: any) => {
    return (
      <>
        <AppBar navigation={navigation} />
        <CellView backgroundColor="white">
          <Text style={{ ...styles.h2, fontSize: 20, marginTop: 0 }}>
            Good evening,
          </Text>
          <Text style={styles.title}>{props.name + "."}</Text>
        </CellView>
      </>
    );
  };

  const renderItem = ({ item, index }: any) => {
    if (index == 0) {
      return NameCell(item);
    } else {
      var cell = null;
      switch (item.type) {
        case "markdown":
          cell = MarkdownCell(item);
          break;
      }
      var onPress = null;
      if (cell == null) return null;
      switch (item.actionType) {
        case "web":
          onPress = () => {
            WebBrowser.openBrowserAsync(item.actionContent);
          };
          break;
      }
      if (onPress) {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            key={index.toString()}
          >
            {cell}
          </TouchableOpacity>
        );
      } else {
        return <View key={index.toString()}>{cell}</View>;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SAMPLE_DATA}
        renderItem={renderItem}
        keyExtractor={(_, index) => "key-" + index}
      />
    </SafeAreaView>
  );
};
