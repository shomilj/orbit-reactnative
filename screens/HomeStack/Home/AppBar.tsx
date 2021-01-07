import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { THEME_DARK } from "../../../styles/main";
import { Ionicons } from "@expo/vector-icons";

export const AppBar = ({ navigation }: any) => {
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
        onPress={() => navigation.navigate("GalleryStackScreen")}
      >
        <Ionicons name="md-add-circle-outline" size={32} color={THEME_DARK} />
      </TouchableOpacity>
    </View>
  );
};
