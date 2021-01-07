import React from "react";
import { Text } from "react-native";

type HeaderViewProps = {
  title: string;
  color: string;
};

export const HeaderView = ({ title, color }: HeaderViewProps) => {
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
