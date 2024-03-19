import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../Constants/Colors";
import { useEffect, useState } from "react";
import { fetchPlaceListDetail } from "../components/places/util/database";

import OutlinedButton from "../components/ui/OutlinedButton";

function PlaceDetail({ route, navigation }) {
  const [placeDetail, setPlaceDetail] = useState();
  function ShowonMapHandler() {
    console.log(placeDetail.location.long);
    navigation.navigate("Maps", {
      selectedLat: placeDetail.location.lat,
      selectedLng: placeDetail.location.long,
    });
  }
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {
    async function loadPlaceDetail() {
      const place = await fetchPlaceListDetail(selectedPlaceId);
      console.log("I am at Place Detail screen");
      console.log(place.title);
      setPlaceDetail(place);
      navigation.setOptions({
        title: placeDetail.title,
      });
    }
    loadPlaceDetail();
  }, [selectedPlaceId]);
  return (
    console.log(placeDetail),
    (
      <ScrollView>
        <Image style={styles.image} source={{ uri: placeDetail.imageUrl }} />
        <View style={styles.locationContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{placeDetail.address}</Text>
          </View>
          <OutlinedButton icon="map" onPress={ShowonMapHandler}>
            View on Map
          </OutlinedButton>
        </View>
      </ScrollView>
    )
  );
}
export default PlaceDetail;
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
