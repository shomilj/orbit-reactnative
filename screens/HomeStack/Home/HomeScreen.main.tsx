import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { styles, THEME_LIGHT } from "../../../styles/main";
import { CellView } from "../../../components/CellView";
import { AppBar } from "./AppBar";
import { NameCell } from "./NameCell";
import firebase from "firebase";
import { SAMPLE_DATA } from "./HomeScreen.constants";
import { CellModelType, UserModelType } from "../../../models/main";
import { ORBIT_UPDATE_USER_API } from "../../../Constants";

const USE_SAMPLE_DATA = false;

export const HomeScreen = ({ navigation }: any) => {
  const [userObject, setUserObject] = useState<UserModelType | undefined>(
    undefined
  );
  const [cells, setCells] = useState<Record<string, CellModelType>>({});

  const userId = firebase.auth().currentUser?.uid;
  useEffect(() => {
    if (firebase.auth().currentUser) {
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc(userId)
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
  }, [setUserObject, userId]);

  useEffect(() => {
    if (firebase.auth().currentUser?.uid && !userObject) {
      // A user is signed in, but the user object does not exist.
      // Create the user object!
      // Call the cloud function with their name (logic handled in cloud).
      fetch(ORBIT_UPDATE_USER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: firebase.auth().currentUser?.uid,
          name: firebase.auth().currentUser?.displayName,
        }),
      })
        .then((result) => result.json())
        .then((response) => {
          if (response.error) {
            console.log("updateUserError: ", response.error);
          } else {
            console.log("successfully updated user");
          }
        })
        .catch((error) => {
          console.log("updateUserError: ", error);
        });
    }
  }, [userId, userObject]);

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
      return <NameCell name={userObject?.name} navigation={navigation} />;
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
