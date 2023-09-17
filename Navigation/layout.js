import React, { Component } from 'react';
import { View, Text } from 'react-native';

// External
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Tabs/Login';
import Navigation from '../Navigation/navigation'
import SafeScreen from '../Tabs/SafeScreen';
import SuspiciousScreen from '../Tabs/SuspiciousScreen'
// import Layout from '../Navigation/navigation';


const Stack = createStackNavigator();

const Layout = () =>{

    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="SafeScreen" component={SafeScreen} options={{ headerShown: true }}></Stack.Screen>
        <Stack.Screen name="SuspiciousScreen" component={SuspiciousScreen} options={{ headerShown: true }}></Stack.Screen>  
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    );
  }


export default Layout;
