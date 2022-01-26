import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BottomTabs from './components/home/BottomTabs';
import Categories from './components/home/categories';
import RestaurantItem from './components/home/Reastaurantitem';

import SearchBar from './components/home/SearchBar';
import RestaurantDetail from './screens/RestaurantDetail'


export default function Home( ) {
 
  return (
      <>
      
      <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <SearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem   />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
    </>
    
  );
}


