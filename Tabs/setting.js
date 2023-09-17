import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


const Setting = () =>{

    return (
      <SafeAreaView>
        <Text> Setting </Text>
      </SafeAreaView>
    );
  }


export default Setting;
