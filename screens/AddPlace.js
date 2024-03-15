import PlaceForm from "../components/places/PlaceForm";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      myPlace: place,
    });
  }
  return <PlaceForm onCreateData={createPlaceHandler} />;
}
export default AddPlace;
