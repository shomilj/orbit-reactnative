import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { THEME_DARK } from "../../styles/main";

interface ButtonRowProps {
  title: string;
  onPress(): any;
}

const styles = StyleSheet.create({
  buttonView: {
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: THEME_DARK,
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
});

export function ButtonRow({ title, onPress }: ButtonRowProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
