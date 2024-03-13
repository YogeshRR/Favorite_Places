import { View, StyleSheet, Alert } from "react-native";
import { Colors } from "../../Constants/Colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "../ui/OutlinedButton";

function LocationPicker() {
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
    console.log(location);
  }
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
