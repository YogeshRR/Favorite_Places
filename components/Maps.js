import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useState, useLayoutEffect, useCallback } from "react";
import IconButton from "./ui/IconButton";

export function Maps({ navigation, route }) {
  const selectedLocationMine = {
    lat: route.params.selectedLat,
    long: route.params.selectedLng,
  };
  const [selectedLocation, setSelectedLocation] =
    useState(selectedLocationMine);
  function selectLocation(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      lat: lat,
      long: long,
    });
  }
  const region = {
    latitude: selectedLocationMine ? selectedLocationMine.lat : 18.5204,
    longitude: selectedLocationMine ? selectedLocationMine.long : 73.8567,
    latitudeDelta: 0.7999,
    longitudeDelta: 0.7988,
  };

  const saveUserLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location found", "You need to choose location first.", [
        "Okay",
      ]);
      return;
    }
    navigation.navigate("AddPlaces", {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.long,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (selectedLocationMine) {
      return;
    }
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={saveUserLocation}
        />
      ),
    });
  }, [navigation, saveUserLocation, selectedLocationMine]);

  return (
    <MapView style={styles.map} onPress={selectLocation}>
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.long,
          }}
        />
      )}
    </MapView>
  );
}
export default Maps;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
