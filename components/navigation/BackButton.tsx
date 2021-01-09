import React from "react";
import PressableOpacity from "../PressableOpacity";
import { StyleSheet, Text } from "react-native";
import { THEME_DARK } from "../../styles/main";

const styles = StyleSheet.create({
  buttonView: { marginLeft: 20, marginRight: 20 },
  buttonTitle: { fontSize: 18, fontFamily: "Avenir", color: THEME_DARK },
});

interface BackButtonProps {
  title: string;
  navigation: any;
}

export function BackButton({ title, navigation }: BackButtonProps) {
  return (
    <PressableOpacity style={styles.buttonView} onPress={navigation.goBack}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </PressableOpacity>
  );
}
