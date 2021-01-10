import React from "react";
import PressableOpacity from "../PressableOpacity";
import { StyleSheet, Text } from "react-native";
import { THEME_DARK } from "../../styles/main";

const styles = StyleSheet.create({
  buttonView: { marginLeft: 20, marginRight: 20 },
  buttonTitle: { fontSize: 18, fontFamily: "Avenir", fontWeight: "600" },
});

interface BarButtonProps {
  title: string;
  onPress(): void;
  color?: string;
}

export function BarButton({ title, onPress, color }: BarButtonProps) {
  return (
    <PressableOpacity style={styles.buttonView} onPress={onPress}>
      <Text style={{ ...styles.buttonTitle, color: color || THEME_DARK }}>
        {title}
      </Text>
    </PressableOpacity>
  );
}
