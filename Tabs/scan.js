import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';



const Scan = () =>{
  const navigation = useNavigation()

    return (
      <SafeAreaView>
        <Text> Scan </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SafeScreen')}>
          <Text >Safe</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SuspiciousScreen')}>
          <Text >Safe</Text>
        </TouchableOpacity>

       
      </SafeAreaView>
    );
  }


export default Scan;
