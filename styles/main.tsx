import { StatusBar, StyleSheet } from "react-native";

export const THEME_GRAY = "#778DA9";
export const THEME_DARK = "#01497C";
export const THEME_DARK_TEXT = "#192841";
export const THEME_LIGHT = "#f7f7f7";
export const THEME_WHITE = "#FFFFFF";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  cell: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 14,
  },
  title: {
    fontSize: 50,
    fontFamily: "Avenir",
    fontWeight: "400",
    marginVertical: 2,
    marginHorizontal: 20,
    color: "#303952",
  },
  h1: {
    fontSize: 40,
    fontFamily: "Avenir",
    marginVertical: 2,
    marginHorizontal: 20,
    color: "#303952",
  },
  h2: {
    fontSize: 30,
    fontFamily: "Avenir",
    fontWeight: "600",
    marginVertical: 2,
    marginHorizontal: 20,
    color: "#303952",
  },
  h3: {
    fontSize: 16,
    fontFamily: "Avenir",
    fontWeight: "800",
    marginVertical: 2,
    marginHorizontal: 20,
    color: "#303952",
  },
  h4: {
    fontSize: 14,
    fontFamily: "Avenir",
    marginVertical: 2,
    fontWeight: "800",
    marginHorizontal: 20,
    color: "#303952",
  },
  body: {
    fontSize: 15,
    fontFamily: "Avenir",
    marginVertical: 2,
    marginHorizontal: 20,
    color: "#303952",
  },
  header: {
    fontSize: 12,
    fontFamily: "Avenir",
    color: "gray",
    marginTop: 8,
    marginBottom: 4,
    marginHorizontal: 20,
  },
  footer: {
    fontSize: 12,
    fontFamily: "Avenir",
    color: "gray",
    marginVertical: 4,
    marginHorizontal: 20,
  },
});
