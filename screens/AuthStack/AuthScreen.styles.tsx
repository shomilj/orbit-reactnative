import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      display: "flex",
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
    },
    logo: {
      height: "20%",
      width: "80%",
      marginTop: "30%",
      resizeMode: "contain",
    },
    subtitle: {
      fontFamily: "Avenir",
      fontSize: 20,
      fontWeight: "100",
      marginTop: 10,
    },
    title: {
      fontFamily: "Avenir",
      fontSize: 30,
      fontWeight: "700",
      marginTop: 10,
    },
    buttonView: {
      height: 50,
      width: "90%",
      marginBottom: 20,
      position: "absolute",
      bottom: 80,
      backgroundColor: "#273c75",
      justifyContent: "center",
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: "Avenir",
      fontSize: 20,
      fontWeight: "400",
      margin: "auto",
      color: "white",
      textAlign: "center",
    },
  });
  