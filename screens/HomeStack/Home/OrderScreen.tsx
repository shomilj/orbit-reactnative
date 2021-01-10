import firebase from "firebase";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BackButton } from "../../../components/navigation/BackButton";
import PressableOpacity from "../../../components/PressableOpacity";
import { CellModelType } from "../../../models/main";
import {
  styles as mainStyles,
  THEME_DARK,
  THEME_LIGHT,
} from "../../../styles/main";
import { Ionicons } from "@expo/vector-icons";
import { BarButton } from "../../../components/navigation/BarButton";

type OrderMapType = Record<string, number>;

interface ReorderScreenProps {
  navigation: any;
  route: any;
  orderMap: OrderMapType;
}

const styles = StyleSheet.create({
  ...mainStyles,
  cell: { ...mainStyles.cell, flexDirection: "row", alignItems: "center" },
  cellText: {
    ...mainStyles.h4,
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 16,
    marginLeft: 20,
    alignItems: "flex-start",
  },
  cancelButtonText: {
    ...mainStyles.h3,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: "auto",
    marginRight: 8,
    alignItems: "center",
  },
});

export function OrderScreen({ navigation, route }: ReorderScreenProps) {
  const { cellParam, sortOrder } = route.params;
  const [cells, setCells] = useState<Record<string, CellModelType>>(cellParam);
  const [order, setOrder] = useState<string[]>(sortOrder);
  const [loading, setLoading] = useState(false);
  var user = firebase.auth().currentUser;

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerShown: true,
      headerLeft: () => (
        <BarButton
          title="Log Out"
          color="red"
          onPress={() => {
            setLoading(true);
            firebase
              .auth()
              .signOut()
              .then(() => {
                setLoading(false);
              })
              .catch((error) => {
                setLoading(false);
                console.log("Failed to log user out:", error);
              });
          }}
        />
      ),
      headerTitle: () => (
        <>
          <ActivityIndicator
            animating={loading}
            color={THEME_DARK}
            style={{ paddingLeft: 20 }}
          />
        </>
      ),
      headerRight: () => <BackButton title="Done" navigation={navigation} />,
      headerTitleStyle: styles.navigationTitle,
      headerStyle: {
        backgroundColor: THEME_LIGHT,
      },
    });
  }, [loading]);

  const updateFirebase = async (newOrder: string[]) => {
    console.log("Updating firebase...");
    setLoading(true);
    const db = firebase.firestore();
    const uid = firebase.auth().currentUser?.uid;
    if (uid) {
      await db.collection("users").doc(uid).set(
        {
          cells: newOrder,
        },
        { merge: true }
      );
    }
    setLoading(false);
  };

  const renderItem = ({ item, index }: any) => {
    let cell = item as CellModelType;
    const deletePressed = () => {
      let documentId = cell.documentId || "";
      const copyOrder = [...order];
      copyOrder.splice(copyOrder.indexOf(documentId), 1);
      setOrder(copyOrder);
      updateFirebase(copyOrder);
    };

    const arraymove = (arr: string[], fromIndex: number, toIndex: number) => {
      if (toIndex < 0 || toIndex >= arr.length) return;
      var element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    };

    const upPressed = () => {
      // If this is the maximum in the order list, then leave as is.
      // Otherwise, swap this and the next highest in terms of order.
      let documentId = cell.documentId || "";
      const copyOrder = [...order];
      const oldIndex = copyOrder.indexOf(documentId);
      arraymove(copyOrder, oldIndex, oldIndex - 1);
      setOrder(copyOrder);
      updateFirebase(copyOrder);
    };

    const downPressed = () => {
      // If this is the maximum in the order list, then leave as is.
      // Otherwise, swap this and the next highest in terms of order.
      let documentId = cell.documentId || "";
      const copyOrder = [...order];
      const oldIndex = copyOrder.indexOf(documentId);
      arraymove(copyOrder, oldIndex, oldIndex + 1);
      setOrder(copyOrder);
      updateFirebase(copyOrder);
    };

    return (
      <View style={styles.cell}>
        <Text style={styles.cellText}>{cell.header}</Text>
        <Text style={styles.cancelButtonText}>
          <PressableOpacity style={{ marginHorizontal: 2 }} onPress={upPressed}>
            <Ionicons
              name="arrow-up-circle-outline"
              size={30}
              color={THEME_DARK}
            />
          </PressableOpacity>
          <PressableOpacity
            style={{ marginHorizontal: 2 }}
            onPress={downPressed}
          >
            <Ionicons
              name="arrow-down-circle-outline"
              size={30}
              color={THEME_DARK}
            />
          </PressableOpacity>
          <PressableOpacity
            style={{ marginHorizontal: 2 }}
            onPress={deletePressed}
          >
            <Ionicons name="close-circle-outline" size={30} color="red" />
          </PressableOpacity>
        </Text>
      </View>
    );
  };

  let tableData: CellModelType[] = [];
  if (cells && order) {
    order.forEach((docId) => {
      if (cells[docId]) {
        tableData.push(cells[docId]);
      }
    });
  }

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
      <Text style={{ ...styles.header, textAlign: "center", marginTop: 20 }}>
        Use the up and down arrows to configure the order in which you'd like to
        see your cards!
      </Text>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return "draggable-" + item.documentId;
        }}
      />
    </SafeAreaView>
  );
}
