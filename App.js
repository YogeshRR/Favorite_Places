import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "./Constants/Colors";
import { useEffect, useState } from "react";
import { init } from "./components/places/util/database";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import Maps from "./components/Maps";
import AppLoading from "expo-app-loading";
import PlaceDetail from "./screens/PlaceDetail";

export default function App() {
  const [dbInitalized, setDbInitaized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setDbInitaized(true);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  const Stack = createNativeStackNavigator();
  if (!dbInitalized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlaces")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlace}
            options={{
              title: "Add your Favorite Place",
            }}
          />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen
            name="PlaceDetail"
            component={PlaceDetail}
            options={{
              title: "Loading Data....",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
