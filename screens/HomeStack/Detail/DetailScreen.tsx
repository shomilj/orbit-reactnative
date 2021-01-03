import firebase from "firebase";
import "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles, THEME_DARK, THEME_LIGHT } from "../../../styles/main";
import { MapDataType, MapFeature } from "./Feature/Map";
import { TableDataType, TableFeature } from "./Feature/Table";

enum PageType {
  Map = "MAP",
  Table = "TABLE",
}

interface NodeType {
  type: PageType;
  data: MapDataType | TableDataType;
}

export const DetailScreen = ({ route, navigation }: any) => {
  const [node, setNode] = useState<NodeType | undefined>(undefined);
  const [error, setError] = useState("");

  const { nodeId } = route.params;

  // Style the navigation bar.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: THEME_DARK,
      headerTitleStyle: { fontFamily: "Avenir", color: THEME_DARK },
      headerStyle: { backgroundColor: THEME_LIGHT },
    });
  }, [navigation]);

  // Start an observer for this node.
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("nodes")
      .doc(nodeId)
      .onSnapshot((doc) => {
        const document = doc.data();
        if (document) {
          // Grab the actual NODE object from the document.
          setNode(document.node);
        } else {
          setError(
            "This content is not currently available. Please try again later."
          );
        }
      });
    return unsubscribe;
  }, [setNode]);

  if (error) {
    // If an error occurred, then show it on screen.
    // TODO: Add better error handling.
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{error}</Text>
      </View>
    );
  } else if (node) {
    // Otherwise, figure out which feature to inflate.
    switch (node.type) {
      case PageType.Map:
        return MapFeature(node.data as MapDataType);
      case PageType.Table:
        return TableFeature(node.data as TableDataType, navigation);
      default:
        return <View></View>;
    }
  } else {
    // We might want to show a loading indicator here...
    return <View></View>;
  }
};
