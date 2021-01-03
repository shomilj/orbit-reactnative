import firebase from "firebase";
import "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { styles, THEME_DARK, THEME_LIGHT } from "../../../styles/main";
import { MapFeature } from "./Feature/Map";
import { TableFeature } from "./Feature/Table";

export const DetailScreen = ({ route, navigation }: any) => {
  const { nodeId } = route.params;
  // Fetch the data from nodeId and render accordingly.
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: THEME_DARK,
      headerTitleStyle: { fontFamily: "Avenir", color: THEME_DARK },
      headerStyle: { backgroundColor: THEME_LIGHT },
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("nodes")
      .doc(nodeId)
      .onSnapshot((doc) => {
        const document = doc.data();
        if (document) {
          setData(document.data);
        } else {
          setError(
            "This content is not currently available. Please try again later."
          );
        }
      });
    return unsubscribe;
  }, [setData]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{error}</Text>
      </View>
    );
  } else {
    switch (data.type) {
      case "MAP":
        return MapFeature(data);
      case "TABLE":
        return TableFeature(data, navigation);
      default:
        return <View></View>;
    }
  }
};
