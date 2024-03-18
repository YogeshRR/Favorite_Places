import { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/places/PlaceList";
import { fetchDatabase } from "../components/places/util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  const myParams = route.params;

  useEffect(() => {
    async function loadPlaces() {
      const allPlaces = await fetchDatabase();
      setLoadedPlaces(allPlaces);
    }

    if (isFocused) {
      loadPlaces();
      //setLoadedPlaces((curPlaces) => [...curPlaces, myParams.myPlace]);
    }
  }, [isFocused]);
  return <PlaceList places={loadedPlaces} />;
}
export default AllPlaces;
