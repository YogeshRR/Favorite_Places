import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
export function Maps() {
  const region = {
    latitude: 37.32,
    longitude: -122.17,
    latitudeDelta: 0.078,
    longitudeDelta: 0.07888,
  };
  return <MapView style={styles.map} initialRegion={region} />;
}
export default Maps;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
