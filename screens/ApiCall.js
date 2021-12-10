import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

export default function ApiCall() {
  
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([
    // {id:1 , name:"mb" , email:"m@m.com"},
    // {id:2 , name:"aj" , email:"a@a.com"},
    // {id:3 , name:"pn" , email:"p@p.com"},
    // {id:4 , name:"aj" , email:"a@a.com"},
    // {id:5 , name:"mb" , email:"m@m.com"},
    // {id:6 , name:"pn" , email:"p@p.com"},
  ])
  const [err, setErr] = useState('')

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response)=>response.json())
  //   .then((json)=>setData(json))
  //   .catch((err)=> console.error("error in fetching : ", err))
  //   .finally(()=> setLoading(false))
  // },[]);

  useEffect(()=>{
      apiCall();
  } , [])

  const apiCall = async()=>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data[0]);
      setData(response.data)
      setLoading(false);
    }catch(err){
      setLoading(false);
      setErr(err.message);
      console.log(err.message);
    }

  }

  return (
    <View style={styles.container}>
      {
       isLoading ? <Text>Loading...</Text> : err != '' ? <Text>{err}</Text> 
       :
        //   <FlatList
        //   data = {Data}
        //   keyExtractor={item => item.id}
        //   renderItem={({item})=><Text>{item.email}</Text>}
        //   />
          Data.map((item)=>(
             <Text key={item.id}>
            {item.name}{item.email}
             </Text>
            // <Text key={item.id}>{item.email}</Text>
          ))
     }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
