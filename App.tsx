import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BottomTabs from './components/BottomTabs';
import Categories from './components/categories';
import Reastaurantitem from './components/Reastaurantitem';

import SearchBar from './components/SearchBar';
import { NativeStackExample } from './examples/NativeStackExample';
import { ButtomTabNavigatorExample } from './examples/utils/BottomTabNavigation';




export default function App() {
  return (
      <SafeAreaProvider>
      <NavigationContainer>          
        <StatusBar style="auto"/>
         <SearchBar />
         <ScrollView showsVerticalScrollIndicator={false}>
         <Categories />
         <Reastaurantitem />
         </ScrollView>
         <Divider width={1} />
         <BottomTabs />
      </NavigationContainer>  
      </SafeAreaProvider>
     
    
  );
}


