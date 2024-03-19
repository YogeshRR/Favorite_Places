import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import PlaceItem from "../ui/PlaceItem";
import { useNavigation } from "@react-navigation/native";

function PlaceList({ places }) {
  const navigation = useNavigation();
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>You don't have Places now</Text>
      </View>
    );
  }
  function itemSelectionHandler(id) {
    navigation.navigate("PlaceDetail", {
      placeId: id,
    });
  }
  return (
    <FlatList
      style={styles.item}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={itemSelectionHandler} />
      )}
    />
  );
}

export default PlaceList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  fallBackText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary200,
  },
  item: {
    margin: 15,
  },
});
