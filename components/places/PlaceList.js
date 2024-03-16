import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import PlaceItem from "../ui/PlaceItem";

function PlaceList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>You don't have Places now</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.item}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
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
