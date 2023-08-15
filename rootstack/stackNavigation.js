import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

function StackNavigator() {

    const Stack = createStackNavigator();
  
    return (
    <Stack.Navigator initialRouteName="Login" screenOptions = {{headerShown:false}}>
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )
}

export default StackNavigator