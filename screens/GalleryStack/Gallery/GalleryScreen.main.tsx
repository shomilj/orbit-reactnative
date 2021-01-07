import React, { useEffect, useState } from "react";
import { Text, SectionList, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SAMPLE_DATA } from "./GalleryScreen.constants";
import { styles } from "./GalleryScreen.styles";
import { CellView } from "./components/CellView";
import { HeaderView } from "./components/HeaderView";
import firebase from "firebase";
import "firebase/firestore";
import { CardType, CategoryType } from "./GalleryScreen.types";
import PressableOpacity from "../../../components/PressableOpacity";
import { THEME_DARK } from "../../../styles/main";

export const GalleryScreen = ({ navigation }: any) => {
  const [cards, setCards] = useState<CardType[] | undefined>(undefined);

  useEffect(() => {
    const cancelButton = (
      <PressableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "Avenir", color: THEME_DARK }}>
          Cancel
        </Text>
      </PressableOpacity>
    );

    navigation.setOptions({
      title: "Gallery",
      headerLeft: () => cancelButton,
      headerTitleStyle: { fontSize: 17, fontFamily: "Avenir" },
    });
  }, []);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("cards")
      .onSnapshot((querySnapshot) => {
        const cards: CardType[] = [];
        querySnapshot.forEach((doc) => {
          cards.push(doc.data() as CardType);
        });
        setCards(cards);
      });
    return unsubscribe;
  }, [setCards]);

  const result = cards?.reduce((r, a) => {
    r[a.category] = r[a.category] || [];
    r[a.category].push(a);
    return r;
  }, Object.create(null));

  const tableData: CategoryType[] = [];

  for (const category in result) {
    tableData.push({
      title: category,
      data: result[category],
    });
  }

  const renderItem = ({ item }: any) => {
    const card = item as CardType;
    return (
      <CellView
        onPress={() => {
          navigation.navigate("CardScreen", {
            card: card,
          });
        }}
      >
        <Text
          style={{
            fontFamily: "Avenir",
            fontSize: 16,
            margin: 10,
            color: "#192a56",
          }}
        >
          {"  "}
          <Ionicons name={card.icon} size={20} />
          {"     " + card.name}
        </Text>
      </CellView>
    );
  };

  const renderHeader = ({ section: { title, color } }: any) => {
    return <HeaderView title={title} color={color} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={tableData}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item) => item.key}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};
