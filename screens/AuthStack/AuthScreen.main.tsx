import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "react-native";
import React from "react";
import PressableOpacity from "../../components/PressableOpacity";
import { styles } from "./AuthScreen.styles";
import firebase from "firebase";

const logo = require("../../assets/icon.png");

export const AuthScreen = () => {
  const signInAnonymous = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log("Signed in!");
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log("Error occurred:", errorMessage);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>UC Berkeley</Text>
      <PressableOpacity style={styles.buttonView} onPress={signInAnonymous}>
        <Text style={styles.buttonText}>Sign In</Text>
      </PressableOpacity>
    </SafeAreaView>
  );
};
