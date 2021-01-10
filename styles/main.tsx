import { StatusBar, StyleSheet } from "react-native";

export const THEME_GRAY = "#778DA9";
export const THEME_DARK = "#2980b9";
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
    borderRadius: 8,
    paddingVertical: 6,
    backgroundColor: THEME_WHITE,
  },
  navigationTitle: { fontSize: 17, fontFamily: "Avenir" },
  title: {
    fontSize: 50,
    fontFamily: "Avenir",
    fontWeight: "400",
    marginTop: 8,
    marginBottom: 2,
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  h1: {
    fontSize: 40,
    fontFamily: "Avenir",
    marginTop: 2,
    marginBottom: 2,
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  h2: {
    fontSize: 25,
    fontFamily: "Avenir",
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 2,
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  h3: {
    fontSize: 16,
    fontFamily: "Avenir",
    fontWeight: "800",
    marginTop: 8,
    marginBottom: 2,
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  h4: {
    fontSize: 14,
    fontFamily: "Avenir",
    marginTop: 8,
    marginBottom: 2,
    fontWeight: "800",
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  h5: {
    fontSize: 14,
    fontFamily: "Avenir",
    marginTop: 8,
    marginBottom: 2,
    fontWeight: "800",
    marginHorizontal: 20,
    color: THEME_GRAY,
  },
  h6: {
    fontSize: 14,
    fontFamily: "Avenir",
    marginTop: 8,
    marginBottom: 2,
    fontWeight: "800",
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  body: {
    fontSize: 15,
    fontFamily: "Avenir",
    fontWeight: "400",
    marginVertical: 2,
    marginHorizontal: 20,
    color: THEME_DARK_TEXT,
  },
  header: {
    fontSize: 12,
    fontFamily: "Avenir",
    color: THEME_GRAY,
    fontWeight: "100",
    textDecorationColor: THEME_GRAY,
    textDecorationStyle: "solid",
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 20,
  },
  footer: {
    fontSize: 12,
    fontFamily: "Avenir",
    marginVertical: 8,
    marginHorizontal: 20,
    marginTop: 10,
    color: THEME_GRAY,
  },
  buttonView: {
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: THEME_DARK,
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 6,
    color: "white",
    textAlign: "center",
  },
});

export function StyleMap(style: string) {
  switch (style) {
    case "h1":
      return styles.h1;
    case "h2":
      return styles.h2;
    case "h3":
      return styles.h3;
    case "h4":
      return styles.h4;
    case "h5":
      return styles.h5;
    case "h6":
      return styles.h6;
    case "body":
      return styles.body;
    case "title":
      return styles.title;
    case "header":
      return styles.header;
    case "footer":
      return styles.footer;
  }
}
