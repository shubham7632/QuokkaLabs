import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity,Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>Welcome to the App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,width:'100%',justifyContent:'center',alignItems:'center'
    },
    textStyle:{fontSize:20}
   
  });

export default HomeScreen;