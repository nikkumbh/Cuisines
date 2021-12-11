import React ,{useState , useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Location from "expo-location";
import axios from "axios";

const Test = () => {
     const [loading, setLoading] = useState(true);
     const [err, setErr] = useState("");
     const [lat, setLat] = useState("");
     const [lng, setLng] = useState("");
     const [data, setData] = useState([{id: 1, name:'ap'}])
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
        //   setLocation(location);
          setLng(location.coords.longitude);
          setLat(location.coords.latitude);
        })();
      }, []);

     useEffect(() => {
       restaurantsApiCall();
     }, []);

     let restaurantsApiCall = async () => {
       console.log("lat:", lat);
       console.log("lng:", lng);
       try {
            let response = await axios.get(
              `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}`,
              {
                headers: {
                  "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                  "x-rapidapi-key":
                    "09fae9ce1bmshf7bdf80b1a74cd8p19f251jsn84fb0c99a13c",
                },
              }
            );
            setData(response.data.data);
            console.log(data);
            setLoading(false);
            // console.log(response.data.data);
        //  console.log(response.data.data);
       } catch (err) {
         setErr(err.message);
         setLoading(false);
       }
     };

     return (
       <View style={styles.container}>
            <Text>
                lat : {lat} and 
                lng : {lng}
            </Text>
            {
            loading === true ? <Text>loading...</Text> 
            : 
            setTimeout(() => {
                data.slice(0,10).map((item , idx)=>(
                    <View>
                    <Text key={idx}>{item.name}
                    </Text>
                    </View>
                )
            )
            },2000)     
        }
       </View>

     );
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});