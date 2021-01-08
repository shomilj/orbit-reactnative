import firebase from "firebase";
import "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { BackButton } from "../../../components/navigation/BackButton";
import {
  MapDataType,
  NodeType,
  PageEnum,
  TableDataType,
} from "../../../models/main";
import { styles, THEME_DARK, THEME_LIGHT } from "../../../styles/main";
import { MapFeature } from "./Page/Map";
import { TableFeature } from "./Page/Table";

export const DetailScreen = ({ route, navigation }: any) => {
  const [node, setNode] = useState<NodeType | undefined>(undefined);
  const [error, setError] = useState("");

  const { nodeId } = route.params;

  // Style the navigation bar.
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => <BackButton title="Back" navigation={navigation} />,
      headerTitleStyle: styles.navigationTitle,
    });
  }, []);

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
      case PageEnum.Map:
        return <MapFeature data={node.data as MapDataType} />;
      case PageEnum.Table:
        return <TableFeature data={node.data as TableDataType} />;
      default:
        return <View />;
    }
  } else {
    // We might want to show a loading indicator here...
    return <View />;
  }
};
