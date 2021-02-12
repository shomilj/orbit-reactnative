import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PressableOpacity from "../../components/PressableOpacity";

import firebase from "firebase";
import { styles } from "./AuthScreen.styles";
import * as Google from "expo-google-app-auth";
import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  IOS_STANDALONE_CLIENT_ID,
} from "../../keys";

const logo = require("../../assets/icon.png");

export const AuthScreen = () => {
  const signInWithGoogle = async () => {
    // First- obtain access token from Expo's Google API
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
      iosStandaloneAppClientId: IOS_STANDALONE_CLIENT_ID,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        result.accessToken
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          console.log("firebase signInWithCredential completed successfully.");
          firebase.auth().currentUser?.updateProfile({
            displayName: result.user.givenName,
          });
        })
        .catch((error) => {
          console.log("firebase signInWithCredential failed: ", error);
        });
    } else {
      console.log("google logInAsync failed.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>UC Berkeley</Text>
      <PressableOpacity style={styles.buttonView} onPress={signInWithGoogle}>
        <Text style={styles.buttonText}>Sign In</Text>
      </PressableOpacity>
    </SafeAreaView>
  );
};
