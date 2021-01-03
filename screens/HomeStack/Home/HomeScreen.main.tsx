import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SAMPLE_DATA } from "./HomeScreen.constants";

import { styles } from "./HomeScreen.styles";
import { THEME_LIGHT } from "../../../styles/main";

import { CellView } from "../../../components/CellView";

import { AppBar } from "./AppBar";
import { NameCell } from "./NameCell";

import firebase from "firebase";
import { RowModel, RowType } from "../Detail/Page/Table";

interface UserObjectType {
  first: string;
  last: string;
  email: string;
  created: number;
  cells: {}[];
}

export interface CellDataType {
  cardKey: string;
  data: RowModel[];
  expires: number;
  header: string;
  params?: any;
  actionType?: any;
  actionContent?: any;
}

export const HomeScreen = ({ navigation }: any) => {
  const [userObject, setUserObject] = useState<UserObjectType | undefined>(
    undefined
  );
  const [cells, setCells] = useState<{ number: CellDataType } | undefined>(
    undefined
  );

  var user = firebase.auth().currentUser;

  useEffect(() => {
    if (user) {
      console.log("Observing data for user:", user.uid);
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc("k9rfRy5bjKocVpKbRa7e")
        .onSnapshot((doc) => {
          const document = doc.data();
          if (document) {
            setUserObject(document as UserObjectType);
          } else {
            console.log("Unable to get user document.");
          }
        });
      return unsubscribe;
    }
  }, [setUserObject, user]);

  useEffect(() => {
    // If the user object updates, then activate the cellular listeners.
    if (userObject) {
      const unsubscribers: { (): void }[] = [];
      for (const [cellId, sortOrder] of Object.entries(userObject.cells)) {
        console.log(`${cellId}: ${sortOrder}`);
        const unsubscribe = firebase
          .firestore()
          .collection("cells")
          .doc(cellId)
          .onSnapshot((doc) => {
            const cellData = doc.data();
            if (cellData) {
              setCells({ ...cells, [sortOrder as number]: cellData });
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
      return NameCell();
    } else {
      return CellView(item, navigation, index);
    }
  };

  const tableData = [];
  tableData.push({});
  if (cells) {
    const cellKeys = Object.keys(cells);
    cellKeys.sort();
    cellKeys.forEach((key) => {
      var index = parseInt(key);
      const cell = cells[index];
      if (cell) {
        tableData.push(cell);
      } else {
        console.log("other error");
      }
    });
  }

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
      <AppBar navigation={navigation} />
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(_, index) => "key-" + index}
      />
    </SafeAreaView>
  );
};
