import { View, StyleSheet } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../Constants/Colors";

function LocationPicker() {
  function getUserLocationMap() {}
  function getMapPreview() {}
  return (
    <View>
      <View style={styles.mapPreView}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getUserLocationMap}>
          User Location
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={getMapPreview}>
          Locate on Map
        </OutlinedButton>
      </View>
    </View>
  );
}
export default LocationPicker;

const styles = StyleSheet.create({
  mapPreView: {
    width: "100 %",
    height: 200,
    borderRadius: 4,
    backgroundColor: Colors.primary100,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
