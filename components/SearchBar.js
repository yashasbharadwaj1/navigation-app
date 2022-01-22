import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar() {
  return (
    <View style={{marginTop:15,flexdirection:"row"}}>
      <GooglePlacesAutocomplete placeholder="Search" 
      styles={{
          textInput :{
              backgroundColor:"#eee",
              borderRadius:25,
              fontWeight:"700",
              marginTop:7,

          },
          textInputContainer:{
              backgroundColor:"#eee",
              borderRadius:50,
              flexdirection:"row",
              alignItems:"center",
              marginRight:10,
          },


         }}
         
         renderLeftButton={()=> 
         <View style={{marginLeft:10}}>
             <Ionicons name="location-sharp" size={24} />
            </View> }
         renderRightButton={()=>
        <View
        style={{
            flexdirection:"row",
            marginRight:8,
            backgroundColor:"white",
            padding:9,
            borderRadius:28,
            alignItems: "center",

        }}
        >
            <AntDesign name="clockcircle" size={11} style={{marginLeft:10}} />
        <Text>search</Text>
        </View>
        }
         />
      
      
    </View>
  );
}
