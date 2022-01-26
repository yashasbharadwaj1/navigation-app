import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import OrderCompleted from '../../screens/OrderCompleted';
import RestaurantDetail from '../../screens/RestaurantDetail';

export default function RootNavigation () {
    const Stack = createNativeStackNavigator();
  
    const screenOptions = {
      headerShown: false,
    };
  
    return (
      
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          </Stack.Navigator>
        </NavigationContainer>
    
    );
  }