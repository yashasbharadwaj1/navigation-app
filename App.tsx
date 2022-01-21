import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { NativeStackExample } from './examples/NativeStackExample';



export default function App() {
  return (
      <SafeAreaProvider>
      <NavigationContainer>          
        <StatusBar style="auto"/>
        <NativeStackExample/>
      </NavigationContainer>  
      </SafeAreaProvider>
     
    
  );
}


