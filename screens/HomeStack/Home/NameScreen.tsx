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
import { ORBIT_UPDATE_USER_API } from "../../../Constants";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  ...mainStyles,
  nameInput: {
    marginHorizontal: 40,
    marginTop: 40,
    marginBottom: 20,
    fontSize: 25,
    fontFamily: "Avenir",
    borderBottomColor: "#dfe6e9",
    borderBottomWidth: 1,
    textAlign: "center",
  },
});

interface NameScreenProps {
  navigation: any;
}

export function NameScreen({ navigation }: NameScreenProps) {
  const [name, setName] = useState(
    firebase.auth().currentUser?.displayName || ""
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerShown: true,
      headerLeft: null,
      headerTitle: () => (
        <>
          <ActivityIndicator
            animating={loading}
            color={THEME_DARK}
            style={{ paddingLeft: 20 }}
          />
        </>
      ),
      headerTitleStyle: styles.navigationTitle,
      headerStyle: {
        backgroundColor: THEME_LIGHT,
      },
    });
  }, [loading]);

  const onPress = () => {
    setError("");
    if (name.trim() == "") {
      setError("Please enter a name.");
    } else {
      firebase.auth().currentUser?.updateProfile({
        displayName: name,
      });
      writeUser()
        .then(() => {})
        .catch((error) => {
          setLoading(false);
          console.log("Error occurred:", error);
          setError("An unknown error occurred.");
        });
    }
  };

  const writeUser = async () => {
    console.log("Updating firebase...");
    // Call the cloud function with their name (logic handled in cloud).
    setLoading(true);
    const result = await fetch(ORBIT_UPDATE_USER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: firebase.auth().currentUser?.uid,
        name: name,
      }),
    });
    if (result.ok) {
      const response = await result.json();
      setLoading(false);
      if (response.error) {
        setError("An unknown error occurred.");
      } else {
        navigation.goBack();
      }
    } else {
      setLoading(false);
      setError("An unknown error occurred.");
    }
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: THEME_LIGHT }}>
      <Text style={{ ...styles.h5, textAlign: "center", marginTop: 40 }}>
        What should we call you?
      </Text>
      <TextInput
        placeholder="tap to enter"
        onChangeText={setName}
        value={name}
        style={styles.nameInput}
      ></TextInput>
      <Text style={{ ...styles.h5, textAlign: "center", color: "red" }}>
        {error}
      </Text>
      <PressableOpacity
        style={{ ...styles.buttonView, height: 40 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>SAVE</Text>
      </PressableOpacity>
    </SafeAreaView>
  );
}
