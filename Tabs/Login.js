import React, { Component } from 'react';
import { View, Text,Alert,Button, TouchableOpacity, Image } from 'react-native';
import Navigation from '../Navigation/navigation'
import Ionicons from '@expo/vector-icons/Ionicons';

import google from '../components/images/google.png'

import { SafeAreaView } from 'react-native-safe-area-context';
import {loginStyle} from './Style/loginStyle'
const Login = ({navigation}) =>{

    const signin = () =>{
      navigation.navigate(Navigation);
    }
    return (
      <SafeAreaView style={loginStyle.mainContainer}>

          <View style={loginStyle.logoContainer}> 
            <Ionicons name="qr-code-outline" size={80} color={"#004694"}/>
            <Text style={loginStyle.logoText}> SeQRScan</Text>
          </View>

          
          <TouchableOpacity style ={loginStyle.loginBttn} onPress={signin}>

            {/* <Image style={loginStyle.image} src={require('../components/images/google.png')}/> */}
            <Text> Continue with Google</Text>
          </TouchableOpacity>
         
      </SafeAreaView>
      
    );
  }


export default Login;
