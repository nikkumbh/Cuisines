import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState({})
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("xxx");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLng(location.coords.longitude);
      setLat(location.coords.latitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
        {
        lat === "" ? <Text>Turn on Location!</Text> 
        : 
        <Text>
        lat : {lat} and lng : {lng} </Text>
    //   <Text style={styles.paragraph}>{lat}</Text>
    //   <Text style={styles.paragraph}>{lng}</Text>
        }
    </View>
  );
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        backgroundColor: 'grey',
        fontSize: 20,
    }
 }); 