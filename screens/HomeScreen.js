import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput,Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import LoginForm from "../components/loginForm.js"
import { MonoText } from '../components/StyledText';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
       
     <LoginForm/>

    </View>
  );
}

 

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:30,
    paddingRight:30
  }})
   
