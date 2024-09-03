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
        <Stack.Screen
          name="Burger"
          component={BurgerScreen}
          options={{
            title: "Burger",
            headerStyle: {
              backgroundColor: "#32CD32",
            },
          }
        }
        />
                    <Stack.Screen name="HotDog" component={HotDogScreen}
                    options={{
                      title:'HotDog',
                      headerStyle:{
                        backgroundColor:"tan"
                      },
                    }} />
                     <Stack.Screen name="Meat" component={MeatScreen}
                    options={{
                      title:'Meat',
                      headerStyle:{
                        backgroundColor:"pink"
                      },
                    }} />
                                         <Stack.Screen name="Fries" component={FriesScreen}
                    options={{
                      title:'Fries',
                      headerStyle:{
                        backgroundColor:"lavender"
                      },
                    }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DetailsScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Burger")}
        >
          <Image
            style={{ height: 120, width: 150, marginTop: 60, marginLeft: 20 }}
            source={require("./assets/burger.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity    onPress={() => navigation.navigate("HotDog")}

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
        <TouchableOpacity onPress={() => navigation.navigate("Meat")}
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
        <TouchableOpacity onPress={() => navigation.navigate("Fries")}


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

function BurgerScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#32CD32", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("./assets/burger.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Arial Rounded MT Bold",
              bottom: 20,
            }}
          >
            Beast Burger
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "semibold", bottom: 20 }}>
            Qui velit qui sint sunt fugiat aliquip proident aliqua exercitation
            dolor fugiat consectetur ad sint.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "pink",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/fire.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "lightblue",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/clock.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "beige",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/bowl.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              Ingredients
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Bread
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Lettuce, Tomato
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Cheese, Meat
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
function HotDogScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "tan", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("./assets/hotdog.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Arial Rounded MT Bold",
              bottom: 20,
            }}
          >
            Hot Dog
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "semibold", bottom: 20 }}>
            Qui velit qui sint sunt fugiat aliquip proident aliqua exercitation
            dolor fugiat consectetur ad sint.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "pink",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/fire.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "lightblue",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/clock.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "beige",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/bowl.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              Ingredients
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Bread
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Sausage
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Ketchup, Mayonnaise
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function MeatScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("./assets/meat.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Arial Rounded MT Bold",
              bottom: 20,
            }}
          >
            Meat
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "semibold", bottom: 20 }}>
            Qui velit qui sint sunt fugiat aliquip proident aliqua exercitation
            dolor fugiat consectetur ad sint.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "pink",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/fire.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "lightblue",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/clock.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "beige",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/bowl.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              Ingredients
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Chicken
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Sausage
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Ketchup, Mayonnaise
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
function FriesScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "lavender", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={require("./assets/fries.png")}
          ></Image>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Arial Rounded MT Bold",
              bottom: 20,
            }}
          >
            Fries
                      </Text>
          <Text style={{ fontSize: 20, fontWeight: "semibold", bottom: 20 }}>
            Qui velit qui sint sunt fugiat aliquip proident aliqua exercitation
            dolor fugiat consectetur ad sint.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "pink",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/fire.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "lightblue",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/clock.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 90,
                height: 100,
                backgroundColor: "beige",
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                  resizeMode: "contain",
                  marginTop: 25,
                  marginLeft: 21,
                }}
                source={require("./assets/bowl.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              Ingredients
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Yams
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Salt
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
              {"\u2022"}Cooking Oil
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}



export default App;
