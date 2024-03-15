import { Alert, Image, View, StyleSheet, Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../Constants/Colors";

import OutlinedButton from "../ui/OutlinedButton";
import PlaceForm from "./PlaceForm";

function ImagePicker({ onImagePicker }) {
  const [imageName, setImageName] = useState("");
  const [cameraPermissionInformation, requestForPermission] =
    useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionStatus = await requestForPermission();

      return permissionStatus.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Error",
        "Please allow permission to use Camera, currently don't have permission",
        [Okay]
      );

      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [16, 9],
    });
    //console.log(image.assets[0].uri);
    setImageName(image.assets[0].uri);
    onImagePicker(image.assets[0].uri);
  }

  var imageSource = <Image style={styles.image} source={{ uri: imageName }} />;
  if (!imageName) {
    imageSource = <Text>Dont have Image</Text>;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imageSource}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        {" "}
        Take Photo{" "}
      </OutlinedButton>
    </View>
  );
}
export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100 %",
    height: 200,
    borderRadius: 4,
    backgroundColor: Colors.primary100,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
