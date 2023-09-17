import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

// import SafeScreen from '../Status/SafeScreen';
// import SuspiciousScreen from '../Status/SuspiciousScreen';

import { useNavigation } from '@react-navigation/native';
// import Susp from './Status/susp'


const scan = () =>{
  const navigation = useNavigation()

    return (
      <View>
        <Text> Scan </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SafeScreen')}>
          <Text >Safe</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SuspiciousScreen')}>
          <Text >Safe</Text>
        </TouchableOpacity>

       
      </View>
    );
  }


export default scan;
