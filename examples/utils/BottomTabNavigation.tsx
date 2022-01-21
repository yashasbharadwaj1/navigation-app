import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text,View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
export type BottomTabParamList ={
  HomeTab:undefined;
  SettingsTab:undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();
const HometabScreen =() =>{
    return (
        <View  style ={{flex:1, justifyContent:'center',alignItems: 'center'}} >
            <Text>Home Tab</Text>
        </View>
    )
}
export const ButtomTabNavigatorExample = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab"  component={HometabScreen}
            options={{ 
                tabBarIcon:({focused,color,size})=>(
                  <MaterialIcons name="home" size={size} color={color}/>
                ),
            }}/>
        </Tab.Navigator>

    );
};