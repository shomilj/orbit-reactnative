import React from "react";
import { View, Text } from "react-native";
import { styles, THEME_LIGHT } from "../../../styles/main";

export const NameCell = () => {
  return (
    <View
      key="namecell"
      style={{ ...styles.cell, backgroundColor: THEME_LIGHT }}
    >
      <Text style={{ ...styles.h2, fontSize: 20, marginTop: 0 }}>
        Good evening,
      </Text>
      <Text style={styles.title}>{"Shomil."}</Text>
    </View>
  );
};
