import { useEffect, useState } from "react";

import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/places/PlaceList";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  const myParams = route.params;
  console.log("I am hereeee", myParams);
  useEffect(() => {
    if (isFocused && myParams) {
      setLoadedPlaces((curPlaces) => [...curPlaces, myParams.myPlace]);
    }
  }, [route, isFocused]);
  return <PlaceList places={loadedPlaces} />;
}
export default AllPlaces;
