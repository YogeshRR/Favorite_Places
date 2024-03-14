import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useState } from "react";
export function Maps() {
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
