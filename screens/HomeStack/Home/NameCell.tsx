import React from "react";
import { View, Text, Pressable } from "react-native";
import PressableOpacity from "../../../components/PressableOpacity";
import { styles, THEME_LIGHT } from "../../../styles/main";

interface NameCellProps {
  name?: string;
  navigation: any;
}
export function NameCell({ name, navigation }: NameCellProps) {
  var today = new Date();
  var curHr = today.getHours();

  let greeting = "";
  if (curHr < 12) {
    greeting = "Good morning";
  } else if (curHr < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const goToName = () => {
    navigation.navigate("NameScreen");
  };
  if (name) {
    return (
      <View
        key={"random"}
        style={{ ...styles.cell, backgroundColor: THEME_LIGHT }}
      >
        <Text style={{ ...styles.h2, fontSize: 20, marginTop: 0 }}>
          {greeting},
        </Text>
        <Pressable onPress={goToName}>
          <Text style={styles.title}>{name}.</Text>
        </Pressable>
      </View>
    );
  } else {
    return <View></View>;
  }
}
