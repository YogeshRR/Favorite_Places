import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../../Constants/Colors";

function PlaceItem({ place, onSelect }) {
  //console.log(`Image result :- ${place.imageUrl}`);
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image style={styles.image} source={{ uri: place.imageUrl }} />
      <View>
        <Text style={styles.title}>{place.title} </Text>
        <Text style={styles.address}>{place.address} </Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    height: 100,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 0.5,
    marginVertical: 1,
    marginHorizontal: 1,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    width: 50,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    marginHorizontal: 5,
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 14,
  },
  address: {
    marginHorizontal: 5,
    fontSize: 12,
    color: Colors.gray700,
  },
});
