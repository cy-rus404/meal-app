// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: 400, height: 550 }}
        source={require("./assets/salad.png")}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          color: "red",
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        40k+ Premium Meals
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 40,
          fontFamily: "Arial Rounded MT Bold",
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          backgroundColor: "red",
          top: 30,
          borderRadius: 40,
          marginLeft: 55,
        }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
            fontSize: 20,
          }}
        >
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DetailsScreen() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Hi John
        </Text>
        <Image
          style={{ width: 25, height: 25, marginRight: 40 }}
          source={require("./assets/bell.png")}
        ></Image>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          paddingHorizontal: 10,
          margin: 10,
          backgroundColor: "#fff",
        }}
      >
        <TextInput
          style={{ height: 40, flexSize: 16 }}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          fontFamily: "Arial Rounded MT Bold",
          marginLeft: 10,
          marginTop: 30,
        }}
      >
        Categories
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 60,
            backgroundColor: "grey",
            margin: 6,
            borderRadius: 10,
            backgroundColor: "red",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 15,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Breakfast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 60,
            backgroundColor: "grey",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 15,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Lunch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 110,
            height: 60,
            backgroundColor: "grey",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              marginTop: 15,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Dinner
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        Recipe
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            width: 190,
            height: 250,
            backgroundColor: "#fff",
            marginLeft: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{ height: 120, width: 150, marginTop: 60, marginLeft: 20 }}
            source={require("./assets/burger.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 190,
            height: 250,
            backgroundColor: "#fff",
            marginRight: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{ height: 120, width: 150, marginTop: 60, marginLeft: 20 }}
            source={require("./assets/hotdog.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 190,
            height: 250,
            backgroundColor: "#fff",
            marginLeft: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{ height: 120, width: 150, marginTop: 60, marginLeft: 20 }}
            source={require("./assets/meat.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 190,
            height: 250,
            backgroundColor: "#fff",
            marginRight: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Image
            style={{ height: 120, width: 150, marginTop: 60, marginLeft: 20 }}
            source={require("./assets/fries.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
