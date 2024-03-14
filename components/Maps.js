import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useState, useLayoutEffect, useCallback } from "react";
import IconButton from "./ui/IconButton";

export function Maps({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  function selectLocation(event) {
    console.log("I am printed");
    const lat = event.nativeEvent.coordinate.latitude;
    const long = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      lat: lat,
      long: long,
    });
  }
  const region = {
    latitude: 18.5204,
    longitude: 73.8567,
    latitudeDelta: 0.7,
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
  }, [navigation, saveUserLocation]);

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
