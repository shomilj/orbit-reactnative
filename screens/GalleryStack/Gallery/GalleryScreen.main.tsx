import React, { useEffect, useState } from "react";
import { Text, SectionList, SafeAreaView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import firebase from "firebase";
import "firebase/firestore";
import { CardType, CategoryType } from "./GalleryScreen.types";
import PressableOpacity from "../../../components/PressableOpacity";
import {
  styles as mainStyles,
  THEME_DARK,
  THEME_LIGHT,
} from "../../../styles/main";
import { BackButton } from "../../../components/navigation/BackButton";
import { BarButton } from "../../../components/navigation/BarButton";

const styles = StyleSheet.create({
  ...mainStyles,
  galleryCell: {
    ...mainStyles.cell,
    paddingVertical: 6,
    display: "flex",
    justifyContent: "center",
  },
  galleryCellText: {
    fontFamily: "Avenir",
    fontSize: 16,
    margin: 10,
    color: "#192a56",
  },
  galleryHeaderView: {
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});

export const GalleryScreen = ({ navigation }: any) => {
  const [cards, setCards] = useState<CardType[] | undefined>(undefined);

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => <BackButton title="Cancel" navigation={navigation} />,
      headerTitleStyle: styles.navigationTitle,
      headerStyle: {
        backgroundColor: THEME_LIGHT,
      },
      headerRight: () => <BarButton title="Request a Card" color="gray" onPress={() => {
        WebBrowser.openBrowserAsync("https://airtable.com/shrw1Q7u9n0oDEhmh");
      }} />
    });
  }, []);

  useEffect(() => {
    return firebase
      .firestore()
      .collection("cards")
      .onSnapshot((querySnapshot) => {
        const newCards: CardType[] = [];
        querySnapshot.forEach((doc) => {
          newCards.push(doc.data() as CardType);
        });
        setCards(newCards);
      });
  }, [setCards]);

  // Convert the result into table data.
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

  // Renders a row.
  const renderItem = ({ item }: any) => {
    const card = item as CardType;
    const onPress = () => {
      navigation.navigate("CardScreen", {
        card: card,
      });
    };
    return (
      <PressableOpacity onPress={onPress} style={styles.galleryCell}>
        <Text style={styles.galleryCellText}>
          <Ionicons name={card.icon} size={20} color={THEME_DARK} />
          {"     " + card.name}
        </Text>
      </PressableOpacity>
    );
  };

  // Renders a header.
  const renderHeader = ({ section: { title, color } }: any) => {
    return (
      <Text
        style={{
          ...styles.galleryHeaderView,
          textDecorationColor: color,
          color: color,
        }}
      >
        {title}
      </Text>
    );
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
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
