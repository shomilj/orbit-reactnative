import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { MapDataType } from "../../../../models/main";

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
});

const defaultRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

interface MapFeatureProps {
  data: MapDataType;
  initialRegion?: any;
}

export function MapFeature({ data, initialRegion }: MapFeatureProps) {
  const { locations, region } = data;
  const mapRegion = region || defaultRegion;
  const getIonicon = (icon: any, color: string) => {
    return (
      <View style={{ borderRadius: 100, backgroundColor: color }}>
        <Ionicons name={icon} size={15} style={{ margin: 5 }} color={"white"} />
      </View>
    );
  };

  const markers = locations.map((location, index) => (
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

  const onRegionChangeComplete = (region: any) => {};

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={mapRegion}
        onRegionChangeComplete={onRegionChangeComplete}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {markers}
      </MapView>
    </View>
  );
}
