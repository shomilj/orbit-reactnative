import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "../GalleryScreen.styles";

type CellViewProps = {
  onPress: any;
  children: any;
};

export const CellView = ({ onPress, children }: CellViewProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View
        style={{
          ...styles.cell,
          backgroundColor: "#F8F8F8",
          paddingVertical: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
