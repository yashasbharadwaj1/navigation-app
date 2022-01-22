import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import SearchBar from './components/SearchBar';
import { NativeStackExample } from './examples/NativeStackExample';
import { ButtomTabNavigatorExample } from './examples/utils/BottomTabNavigation';




export default function App() {
  return (
      <SafeAreaProvider>
      <NavigationContainer>          
        <StatusBar style="auto"/>
         <SearchBar />
  
      </NavigationContainer>  
      </SafeAreaProvider>
     
    
  );
}


