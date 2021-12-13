import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import HandlingRapidAPI from "./HandlingRapidApi";
import Cuisines from "./Cuisines";
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
          {/* {auth.currentUser?.email}  */}
          <Text style={styles.welcomeText}>Welcome</Text>
        </View>
        <View style={styles.signOutButtonContainer}>
          <TouchableOpacity onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cuisineContainer}>
          <Cuisines />
      </View>
        
      {/* <HandlingRapidAPI /> */}
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  signOutContainer: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 2,
    backgroundColor: "#E3F2FD",
  },
  signOutButtonContainer: {
    backgroundColor: "#2196F3",
    width: "20%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: 5,
  },
  welcomeText: {
    color: "white",
  },
  buttonText: {
    color: "white",
  },
  cuisineContainer: {
    flex: 15,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "green",
    // borderWidth: 2,
  },
  emailContainer: {
    width: "24%",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    left: 5,
    top: 5,
  },
});
