import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../components/places/util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces", {
      myPlace: place,
    });
  }
  return <PlaceForm onCreateData={createPlaceHandler} />;
}
export default AddPlace;
