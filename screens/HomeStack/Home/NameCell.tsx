import React from "react";
import { View, Text } from "react-native";
import { styles, THEME_LIGHT } from "../../../styles/main";

interface NameCellProps {
  name: string;
  key: string;
}
export function NameCell({ name, key }: NameCellProps) {
  return (
    <View key={key} style={{ ...styles.cell, backgroundColor: THEME_LIGHT }}>
      <Text style={{ ...styles.h2, fontSize: 20, marginTop: 0 }}>
        Good evening,
      </Text>
      <Text style={styles.title}>{name}.</Text>
    </View>
  );
}
