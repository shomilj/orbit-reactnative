import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { styles, THEME_LIGHT } from "../../../styles/main";
import { CellView } from "../../../components/CellView";
import { AppBar } from "./AppBar";
import { NameCell } from "./NameCell";
import firebase from "firebase";
import { SAMPLE_DATA } from "./HomeScreen.constants";
import { CellModelType, UserModelType } from "../../../models/main";

const USE_SAMPLE_DATA = false;

export const HomeScreen = ({ navigation }: any) => {
  const [userObject, setUserObject] = useState<UserModelType | undefined>(
    undefined
  );
  const [cells, setCells] = useState<Record<string, CellModelType>>({});

  var user = firebase.auth().currentUser;

  useEffect(() => {
    if (user && !USE_SAMPLE_DATA) {
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc("9ZC0xKHcBKR4CXUWWhPKh7fHyEi2")
        .onSnapshot((doc) => {
          const document = doc.data();
          if (document) {
            setUserObject(document as UserModelType);
          } else {
            console.log("Unable to get user document.");
          }
        });
      return unsubscribe;
    }
  }, [setUserObject, user]);

  useEffect(() => {
    // If the user object updates, then activate the cellular listeners.
    if (userObject && !USE_SAMPLE_DATA) {
      const unsubscribers: { (): void }[] = [];
      for (let i = 0; i < userObject.cells.length; i++) {
        const cellId = userObject.cells[i];
        const unsubscribe = firebase
          .firestore()
          .collection("cells")
          .doc(cellId)
          .onSnapshot((doc) => {
            console.log("Cell updated:", cellId);
            if (doc.exists) {
              const cell = doc.data() as CellModelType;
              cell.sortIndex = i as number;
              cell.documentId = doc.id;
              setCells((prevState) => ({
                ...prevState,
                [doc.id]: cell,
              }));
            } else {
              console.log("Unable to get cell data for cell", cellId);
            }
          });
        unsubscribers.push(unsubscribe);
      }
      const unsubscribeAll = () => {
        unsubscribers.forEach((method) => {
          method();
        });
      };
      return unsubscribeAll;
    }
  }, [userObject]);

  // For index 0, render a NameCell
  // For index >= 1, render a CellView
  const renderItem = ({ item, index }: any) => {
    if (index == 0) {
      return <NameCell name={"Shomil"} />;
    } else {
      return <CellView cell={item} key={"key-" + index} />;
    }
  };

  var tableData = [];
  tableData.push({});
  if (cells) {
    userObject?.cells.forEach((docId) => {
      if (cells[docId]) {
        tableData.push(cells[docId]);
      }
    });
  }

  if (USE_SAMPLE_DATA) {
    tableData = SAMPLE_DATA;
  }

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
      <AppBar
        navigation={navigation}
        cells={cells}
        sortOrder={userObject?.cells}
      />
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "item-" + item.documentId;
        }}
      />
    </SafeAreaView>
  );
};
