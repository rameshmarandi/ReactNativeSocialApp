import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Splash/Splash"
import Login from "../AuthScreens/Login"
import Registration from '../AuthScreens/Registration';
import Home from "../Home/Home"
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Splash"
         component={(props)=><Splash {...props}/>} 
        options={{headerShown: false}}
         />
        <Stack.Screen 
        name="Login"
         component={(props)=><Login {...props}/>} 
        options={{headerShown: false}}
         />
        <Stack.Screen 
        name="Registration"
         component={(props)=><Registration {...props}/>} 
        options={{headerShown: false}}
         />
        <Stack.Screen 
        name="Home"
         component={(props)=><Home {...props}/>} 
        options={{headerShown: false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;