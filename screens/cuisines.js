import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cuisines() {
  CuisinesArr = [
    "Indian",
    "Italian",
    "chinese",
    "French",
    "American",
    "Asian",
    "Mexican",
    "Rajasthani",
    "punjabi",
    "South Indian"
  ];


  const [finalData, setFinalData] = useState();
  const [filterObj, setFilterObj] = useState();
  const [data, setData] = useState(
       [{
            "location_id": "5907760",
            "name": "Pind Balluchi",
            "latitude": "28.63172",
            "longitude": "77.36684",
            "num_reviews": "19",
            "timezone": "Asia/Kolkata",
            "location_string": "Noida, Gautam Buddha Nagar District, Uttar Pradesh",
            "awards": [],
      
            "ranking": "#245 of 1,116 Restaurants in Noida",
            "distance": "0.45517602256036366",
            "distance_string": "0.5 km",
            "rating": "3.5",
            "web_url": "https://www.tripadvisor.com/Restaurant_Review-g644043-d5907760-Reviews-Pind_Balluchi-Noida_Gautam_Buddha_Nagar_District_Uttar_Pradesh.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g644043-d5907760-Pind_Balluchi-Noida_Gautam_Buddha_Nagar_District_Uttar_Pradesh.html",
            "category": {
                "key": "restaurant",
                "name": "Restaurant"
            },
            "phone": "+91 120 456 5000",
            "website": "http://www.pindballuchi.com/",
            "email": "feedback@pindballuchi.com",
            "address_obj": {
                "street1": "34 - 40 Shipra Mall Shop No",
                "street2": null,
                "city": "Noida",
                "state": "Uttar Pradesh",
                "country": "India",
                "postalcode": "201303"
            },
            "cuisine": [
                {
                    "key": "10346",
                    "name": "Indian"
                },
                {
                    "key": "10665",
                    "name": "Vegetarian Friendly"
                }
            ],
        }]
)
let fObj;

useEffect(() => {
  setFilterObj(fObj);
},[filterObj])


return (
    <>
    {
    fObj = data.filter(
      (d)=>
      {
          for(var i = 0 ; i<d.cuisine.length ; i++)
          {
              if(d.cuisine[i].name === "Indian")
                  {
                      return d.name;
                  }
          }
      }
    )

    }
      <View style={styles.selectCuisineContainer}>
        <Text style={styles.selectCuisineText}>Select your Cuisine</Text>
        <Text>{filterObj['name']}</Text>
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
