import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import HandlingRapidAPI from "./HandlingRapidApi";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <View style={styles.signOutContainer}>
        <View style={styles.emailContainer}>
          <Text style={styles.welcomeText}>Welcome: {auth.currentUser?.email} </Text>
        </View>
        <View style={styles.signOutButtonContainer}>
        <TouchableOpacity
          onPress={handleSignOut}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cuisineContainer}></View>

      {/* <HandlingRapidAPI /> */}
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  signOutContainer: {
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#282828",
  },
  signOutButtonContainer: {
    backgroundColor: "#0782F9",
    width: "20%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    position: "absolute",
    right: 5,
    top: 5,
  },
  buttonText: {
    color: "white",
  },
  cuisineContainer: {
    backgroundColor: "#282828",
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 2,
  },
  emailContainer: {
    width: "50%",
    marginTop: 40,
    padding: 15,
    backgroundColor: "#0782F9",
    borderRadius: 10,
  },
  welcomeText: {
      color: "white",
  }
});
