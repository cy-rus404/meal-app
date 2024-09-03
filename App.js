// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Image style={{width:400,height:550}} source={require("./assets/salad.png") }/>
      <Text style={{textAlign:'center',marginTop:20,color:'red',fontWeight:'bold',fontSize:15}}>40k+ Premium Meals</Text>
      <Text style={{textAlign:'center',marginTop:20,fontWeight:'bold',fontSize:40, fontFamily:'Arial Rounded MT Bold'}}>Cook Like A Chef</Text>
        <TouchableOpacity style={{width:300, height:50,backgroundColor:'red',top:30,borderRadius:40,marginLeft:55}} onPress={() => navigation.navigate("Details")}>
          <Text style={{color:"#fff", fontWeight:'bold',textAlign:'center',marginTop:10,fontSize:20}}>Let's Go</Text>
        </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Details'component={DetailsScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
      <Text>Hi John</Text>
      <Image style={{width:25,height:25}} source={require('./assets/bell.png')}></Image>
    </View>
  );
}



export default App;