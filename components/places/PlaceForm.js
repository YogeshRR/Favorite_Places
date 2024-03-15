import { useCallback, useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import { Place } from "../../model/place";

function PlaceForm({ onCreateData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  function pickedImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }
  const pickedLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  });
  function saveUserLocationHandler() {
    var id = new Date().toString() + Math.random.toString();
    const placeData = new Place(enteredTitle, selectedImage, pickedLocation);
    console.log(placeData);
    onCreateData(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImagePicker={pickedImageHandler} />
      <LocationPicker onLocationPicker={pickedLocationHandler} />
      <Button onPress={saveUserLocationHandler}>Save Place</Button>
    </ScrollView>
  );
}
export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
