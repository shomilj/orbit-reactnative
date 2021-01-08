import { StyleSheet } from "react-native";
import {
  styles as mainStyles,
  THEME_DARK,
  THEME_LIGHT,
} from "../../../styles/main";

export const styles = StyleSheet.create({
  ...mainStyles,
  outerContainer: {
    ...mainStyles.container,
    backgroundColor: THEME_LIGHT,
  },
  cardView: {
    ...mainStyles.cell,
  },
  buttonBackground: {
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: THEME_DARK,
    height: 40,
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
  separator: {
    backgroundColor: "#bdc3c7",
    height: 0.25,
    marginBottom: 20,
    width: 100,
    alignSelf: "center",
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
  inputAndroid: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
  placeholder: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
});
