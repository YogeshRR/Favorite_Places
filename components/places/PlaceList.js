import { FlatList } from "react-native";

function PlaceList({ places }) {
  return <FlatList data={places} keyExtractor={(item) => item.id} />;
}
