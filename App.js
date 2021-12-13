import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import HandlingGeoLocation from "./screens/HandlingGeoLocation";
import Test from "./screens/ApiAndLocationConnection";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: true }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
        {/* <HomeScreen/> */}
      </NavigationContainer>
      {/* <HandlingGeoLocation /> */}
    </>
  );
}
