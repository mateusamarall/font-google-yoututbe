import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';
import {AppLoading} from 'expo';

//SDK 40
//yarn add expo-app-loading;
//import AppLoading from 'expo-app-loading';
export default function App() {

  const fonts = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if(!fonts){
    return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontFamily:"Poppins_600SemiBold",
    fontSize:18
  }
});
