import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, Platform, View } from "react-native";
import React, { useEffect, useState } from "react";
import PressableOpacity from "../../components/PressableOpacity";
import firebase from "firebase";
import { styles } from "./AuthScreen.styles";
import * as Google from "expo-google-app-auth";
import * as Crypto from "expo-crypto";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  IOS_STANDALONE_CLIENT_ID,
} from "../../keys";

const logo = require("../../assets/icon.png");

export const AuthScreen = () => {
  const registerWithFirebase = async (
    credential: firebase.auth.OAuthCredential,
    name: string | null | undefined
  ) => {
    try {
      await firebase.auth().signInWithCredential(credential);
      console.log("firebase signInWithCredential completed successfully.");
      const displayName = firebase.auth().currentUser?.displayName;
      if (!displayName) {
        firebase.auth().currentUser?.updateProfile({
          displayName: name,
        });
      }
    } catch (error) {
      console.log("firebase signInWithCredential failed: ", error);
    }
  };

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
      await registerWithFirebase(credential, result.user.givenName);
    } else {
      console.log("google logInAsync failed.");
    }
  };

  const appleButton = () => {
    if (Platform.OS == "ios") {
      return (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={styles.appleButtonView}
          onPress={async () => {
            const csrf = Math.random().toString(36).substring(2, 15);
            const nonce = Math.random().toString(36).substring(2, 10);
            const hashedNonce = await Crypto.digestStringAsync(
              Crypto.CryptoDigestAlgorithm.SHA256,
              nonce
            );
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
                state: csrf,
                nonce: hashedNonce,
              });

              const provider = new firebase.auth.OAuthProvider("apple.com");
              const authCredential = provider.credential({
                idToken: credential.identityToken!,
                rawNonce: nonce,
              });
              await registerWithFirebase(
                authCredential,
                credential.fullName?.givenName
              );
              // signed in
            } catch (e) {
              if (e.code === "ERR_CANCELED") {
                console.log("User cancelled signInWithApple");
              } else {
                console.log("signInWithApple error: ", e);
              }
            }
          }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.subtitle}>Welcome to</Text>
      <Text style={styles.title}>UC Berkeley</Text>
      {/* <GoogleButton style={styles.buttonView} onClick={signInWithGoogle} /> */}
      <PressableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Image
          source={require("../../assets/google-sign-in.png")}
          style={styles.googleButtonPng}
        />
      </PressableOpacity>
      {appleButton()}
      {/* <PressableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"}} style={styles.googleLogo} />
        <Text style={styles.buttonText}>Login with Google</Text>
      </PressableOpacity> */}
    </SafeAreaView>
  );
};
