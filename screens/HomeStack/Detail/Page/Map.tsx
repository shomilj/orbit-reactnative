import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../../../../styles/main";

interface MapLocation {
  title: string;
  subtitle: string;
  latitude: number;
  longitude: number;
  icon: string;
  color: string;
}

export type MapDataType = MapLocation[];

const getIonicon = (icon: any, color: string) => {
  return (
    <View style={{ borderRadius: 100, backgroundColor: color }}>
      <Ionicons name={icon} size={15} style={{ margin: 5 }} color={"white"} />
    </View>
  );
};

export const MapFeature = (data: MapDataType) => {
  const mapRef = useRef(null);

  const markers = data.map((location, index) => (
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
  ));

  // This may or may not work.
  // useEffect(() => {
  //   mapRef.fitToSuppliedMarkers(markers, false);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        ref={mapRef}
      >
        {markers}
      </MapView>
    </SafeAreaView>
  );
};
