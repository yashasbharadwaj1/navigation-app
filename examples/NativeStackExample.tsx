import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { Button, StyleSheet, Text, View } from 'react-native';

export type StackParamList ={
 Home:undefined;
 Details:{
   randomColor:string;
 };
};
const Stack=createNativeStackNavigator<StackParamList>();

const HomeScreen =({
    route,navigation}:NativeStackScreenProps<StackParamList,"Home">)=>{
    return (
      <SafeAreaView
        style={{ flex:1,alignItems:"center",justifyContent:"center"}}
      >
          <Button title="go to details" onPress={() => {
              navigation.navigate("Details",{
                  randomColor:'red',

              });
                 
          }}/>
          <Text>Home Screen</Text>
      </SafeAreaView>
    );
};


const DetailsScreen =({
    route,navigation,}:NativeStackScreenProps<StackParamList,"Details">)=>{
        const {randomColor} =route.params;
        React.useEffect(() => {
            navigation.setOptions({
                headerTintColor:"white",
                headerTitleStyle:{
                    fontWeight:"bold",
                },
                headerStyle:{
                    backgroundColor:"red",
                }
            });
        },[]);
    return (
      <SafeAreaView
        style={{ flex:1,alignItems:"center",justifyContent:"center"}}

      >
          <Text>Details Screen</Text>
          <Button title="Go home" onPress={() =>navigation.navigate("Home")} />
      </SafeAreaView>
    );
};
export const NativeStackExample =()=>{
    return <Stack.Navigator initialRouteName='Home' >
        
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Overview'}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Details'}} />

    </Stack.Navigator>
};