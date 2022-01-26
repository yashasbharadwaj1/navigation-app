import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from 'react';
export const localRestaurants = [
  {
    name: "udupi upahar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "hotel annapurna",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "panchami grand",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItem () {
  return (
    <TouchableOpacity activeOpacity={1}>
      {localRestaurants.map((restaurant,index) =>(
      <View 
      key={index}
      style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
  <RestaurantImage image={restaurant.image_url}/>
  <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
  </View>
    ))}
  </TouchableOpacity>
  );
}
const RestaurantImage=(props) =>(
  <>
  <Image source = {{
    uri:props.image,
  }}
  style={{width: "100%", height:180}}
  />
 <TouchableOpacity style={{position: "absolute",right:20,}} >
   <MaterialCommunityIcons name="heart-outline" size={25} color='white'></MaterialCommunityIcons>
 </TouchableOpacity>

  </>
);
const RestaurantInfo=(props)=>(
  <View
  style={{
    flexDirection:"row",
    justifyContent: "space-between",
    
    marginTop:10,
  }}
  >
    <View>
  <Text style={{fontSize:17,fontWeight:"bold"}}>{props.name}</Text>
  <Text style={{fontSize:15,fontWeight:"gray"}}>30-45 min</Text>
  </View>
  <View style={{backgroundColor:"#eee",height:30,width:30,
  alignItems: "center",justifyContent: "center",borderRadius:15,}}>
    <Text >{props.rating}</Text>
    </View>
 </View>
)
