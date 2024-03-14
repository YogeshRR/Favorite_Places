import { View, StyleSheet, Alert, Image, Text } from "react-native";
import { useState } from "react";
import { Colors } from "../../Constants/Colors";

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "../ui/OutlinedButton";

const GEOAPIFY_KEY = "6e109e58697b49b2bbe3a76f5f46df96";
const lat = "";
const long = "";

function LocationPicker() {
  const [pickedUserLocation, setPickedUserLocation] = useState();
  const [locationInformationPermission, setLocationInformationPermission] =
    useForegroundPermissions();

  async function verifyPermissionStatus() {
    if (
      locationInformationPermission.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionStatus = await setLocationInformationPermission();

      return permissionStatus.gra;
    }
    if (locationInformationPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Error",
        "Please allow permission to use location, currently don't have permission",
        [Okay]
      );

      return false;
    }

    return true;
  }
  async function getUserLocationMap() {
    const hasPermission = await verifyPermissionStatus();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedUserLocation({
      lat: location.coords.latitude,
      longt: location.coords.longitude,
    });
  }
  var mapPreViewInstance = <Text>Currently user not found</Text>;
  if (pickedUserLocation) {
    mapPreViewInstance = (
      <Image
        style={styles.image}
        source={{
          uri: `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=200&center=lonlat:${pickedUserLocation.longt},${pickedUserLocation.lat}&zoom=14&apiKey=${GEOAPIFY_KEY}`,
        }}
      />
    );
  }
  if (mapPreViewInstance) {
  }

  function getMapPreview() {}
  return (
    <View>
      <View style={styles.mapPreView}>{mapPreViewInstance}</View>
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
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
