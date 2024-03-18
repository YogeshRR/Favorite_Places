import PlaceForm from "../components/places/PlaceForm";
import {
  insertDatabase,
  insertPlace,
} from "../components/places/util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreateData={createPlaceHandler} />;
}
export default AddPlace;
