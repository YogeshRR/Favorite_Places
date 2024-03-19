import { ScrollView, Image, View, Text, StyleSheet } from "react-native";

import OutlinedButton from "../components/ui/OutlinedButton";
import { Colors } from "../Constants/Colors";
import { useEffect } from "react";

function PlaceDetail({ route }) {
  function ShowonMapHandler() {}
  const selectedPlaceId = route.params.placeId;
  useEffect(() => {}, [selectedPlaceId]);
  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={ShowonMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
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
