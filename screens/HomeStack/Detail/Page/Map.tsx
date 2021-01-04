import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

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

  return (
    <View style={{ flex: 1 }}>
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
        {markers}
      </MapView>
    </View>
  );
};
