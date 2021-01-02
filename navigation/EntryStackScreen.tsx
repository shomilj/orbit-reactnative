import firebase from "firebase";
import React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { AuthStackScreen } from "./AuthStackScreen";
import { RootStackScreen } from "./RootStackScreen";
import { firebaseConfig } from "../keys";

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export function EntryStackScreen() {
  const [signedIn, setSignedIn] = useState(-1);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log("User signed in with UID:", uid);
        setSignedIn(1);
      } else {
        console.log("User is signed out.");
        setSignedIn(0);
      }
    });
    return unsubscribe;
  }, [setSignedIn]);

  if (signedIn == -1) {
    return <View />;
  } else if (signedIn == 0) {
    return AuthStackScreen();
  } else {
    return RootStackScreen();
  }
}
