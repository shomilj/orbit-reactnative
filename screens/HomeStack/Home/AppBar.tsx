import React from "react";
import { StyleSheet, View } from "react-native";
import { THEME_DARK } from "../../../styles/main";
import { Ionicons } from "@expo/vector-icons";
import PressableOpacity from "../../../components/PressableOpacity";

const styles = StyleSheet.create({
  barView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 60,
  },
  barButton: {
    marginTop: 10,
    marginRight: 20,
  },
});

export const AppBar = ({ navigation, cells, sortOrder }: any) => {
  const goToOrder = () => navigation.navigate("OrderScreen", {
    cellParam: cells,
    sortOrder: sortOrder
  });
  const goToGallery = () => navigation.navigate("GalleryStackScreen");
  return (
    <View style={styles.barView}>
      <PressableOpacity style={styles.barButton} onPress={goToOrder}>
        <Ionicons name="reorder-three-outline" size={32} color={THEME_DARK} />
      </PressableOpacity>

      <PressableOpacity style={styles.barButton} onPress={goToGallery}>
        <Ionicons name="md-add-circle-outline" size={32} color={THEME_DARK} />
      </PressableOpacity>
    </View>
  );
};
