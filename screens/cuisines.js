import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cuisines() {
  return (
    <>
      <View style={styles.selectCuisineContainer}>
        <Text style={styles.selectCuisineText}>Select your Cuisine</Text>
      </View>
      <View style={styles.differentCuisineContainer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  selectCuisineContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    color: "#121212",
},
selectCuisineText: {
    color: '#121212',
    fontStyle: 'italic',
    fontSize: 25,
    padding: 9,
  },
  differentCuisineContainer: {
    flex: 13,
    // borderColor: "grey",
    // borderWidth: 2,
  },
});
