import firebase from "firebase";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { styles } from "../../../styles/main";
import { Ionicons } from "@expo/vector-icons";

import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

interface MapLocation {
  title: string;
  subtitle: string;
  latitude: number;
  longitude: number;
  icon: string;
  color: string;
}

interface MapDetailType {
  type: string;
  locations: MapLocation[];
}

const getIonicon = (icon, color) => {
  return (
    <View style={{ borderRadius: 100, backgroundColor: color }}>
      <Ionicons name={icon} size={15} style={{margin: 5}} color={"white"} />
    </View>
  );
};

const MapDetail = (data: MapDetailType) => {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {data.locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.subtitle}
            pinColor={location.color}
          >
            {getIonicon(location.icon, location.color)}
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export const DetailScreen = ({ route }: any) => {
  const { nodeId } = route.params;
  // Fetch the data from nodeId and render accordingly.
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("nodes")
      .doc(nodeId)
      .onSnapshot((doc) => {
        const document = doc.data();
        if (document) {
          setData(document.data);
        } else {
          setError(
            "This content is not currently available. Please try again later."
          );
        }
      });
    return unsubscribe;
  }, [setData]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{error}</Text>
      </View>
    );
  } else {
    switch (data.type) {
      case "MAP":
        return MapDetail(data);
      default:
        return <View></View>;
    }
  }
};
