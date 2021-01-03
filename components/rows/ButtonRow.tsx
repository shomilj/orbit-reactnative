import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { THEME_DARK } from "../../styles/main";

export const ButtonRow = (data: any, handleAction: any, navigation: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleAction(data.actionType, data.actionContent, navigation);
        }}
      >
        <View
          style={{
            borderRadius: 16,
            marginVertical: 10,
            marginHorizontal: 20,
            justifyContent: "center",
            backgroundColor: THEME_DARK,
          }}
        >
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 14,
              fontWeight: "400",
              marginVertical: 6,
              color: "white",
              textAlign: "center",
            }}
          >
            {data.title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  