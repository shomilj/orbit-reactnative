import * as React from "react";
import { View, Text, SectionList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SAMPLE_DATA } from "./GalleryScreen.constants";
import { styles } from "./GalleryScreen.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type CellViewProps = {
  onPress: any;
  children: any;
};

const CellView = ({ onPress, children }: CellViewProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View
        style={{
          ...styles.cell,
          backgroundColor: "#F8F8F8",
          paddingVertical: 6,
          height: 70,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

type HeaderViewProps = {
  title: string;
  color: string;
};
const HeaderView = ({ title, color }: HeaderViewProps) => {
  return (
    <Text
      style={{
        marginLeft: 40,
        marginTop: 30,
        marginBottom: 10,
        fontFamily: "Avenir",
        fontSize: 20,
        fontWeight: "800",
        textDecorationLine: "underline",
        textDecorationColor: "#192a56",
        color: "#192a56",
      }}
    >
      {title}
    </Text>
  );
};

export const GalleryScreen = () => {
  const renderItem = ({ item }: any) => {
    return (
      <CellView onPress={() => {}}>
        <Text
          style={{
            fontFamily: "Avenir",
            fontSize: 20,
            margin: 10,
            color: "#192a56",
          }}
        >
          {"  "}
          <Ionicons name={item.icon} size={20} color={item.color} />
          {"     " + item.title}
        </Text>
      </CellView>
    );
  };

  const renderHeader = ({ section: { title, color } }: any) => {
    return <HeaderView title={title} color={color} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={SAMPLE_DATA}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item) => item.key}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};
