import React, { Component } from 'react';
import { View, Text,Alert,Button } from 'react-native';
import Navigation from '../Navigation/navigation'

const Login = ({navigation}) =>{

    const signin = () =>{
      navigation.navigate(Navigation);
    }
    return (
      <View>
        <Text> Login </Text>
        <Button title ="Login" onPress={signin}/>
      </View>
    );
  }


export default Login;
