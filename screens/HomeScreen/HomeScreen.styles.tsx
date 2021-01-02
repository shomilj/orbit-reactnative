import { StatusBar, StyleSheet } from "react-native";

export const DARK_BLUE_COLOR = "#303952";

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
    color: DARK_BLUE_COLOR,
  },
  h1: {
    fontSize: 40,
    fontFamily: "Avenir",
    marginVertical: 2,
    marginHorizontal: 20,
    color: DARK_BLUE_COLOR,
  },
  h2: {
    fontSize: 30,
    fontFamily: "Avenir",
    fontWeight: "600",
    marginVertical: 2,
    marginHorizontal: 20,
    color: DARK_BLUE_COLOR,
  },
  h3: {
    fontSize: 16,
    fontFamily: "Avenir",
    fontWeight: "800",
    marginVertical: 2,
    marginHorizontal: 20,
    color: DARK_BLUE_COLOR,
  },
  h4: {
    fontSize: 14,
    fontFamily: "Avenir",
    marginVertical: 2,
    fontWeight: "800",
    marginHorizontal: 20,
    color: DARK_BLUE_COLOR,
  },
  body: {
    fontSize: 15,
    fontFamily: "Avenir",
    marginVertical: 2,
    marginHorizontal: 20,
    color: DARK_BLUE_COLOR,
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

export const StyleMap = (style) => {
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
    case "body":
      return styles.body;
    case "title":
      return styles.title;
    case "subtitle":
      return styles.subtitle;
    case "footer":
      return styles.footer;
  }
};
