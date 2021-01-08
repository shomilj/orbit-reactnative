import React, { useEffect } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { BackButton } from "../../../components/navigation/BackButton";
import { styles, THEME_DARK } from "../../../styles/main";
import { CardType } from "../Gallery/GalleryScreen.types";

const AddCardButton = (onPress: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
          ADD CARD
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const CardScreen = ({ route, navigation }: any) => {
  const card: CardType = route.params.card;

  useEffect(() => {
    navigation.setOptions({
      title: "Gallery",
      headerLeft: () => <BackButton title="Back" navigation={navigation} />,
      headerTitleStyle: { fontSize: 17, fontFamily: "Avenir" },
    });
  }, []);

  const onPress = () => {
    // TODO: Validate parameters. Call /addCard endpoint.
    console.log("onPress called.");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.h2}>{card.name}</Text>
        <Text style={styles.body}>{card.description}</Text>
        {AddCardButton(onPress)}
      </View>
    </SafeAreaView>
  );
};
