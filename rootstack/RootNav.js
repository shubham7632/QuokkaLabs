/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from '../screens/drawerContent';
import StackNavigator from './stackNavigation';


const Drawer = createDrawerNavigator();


function RootNavigator() {
    const login = useSelector(state => state.persistReducer.isUserLoggedIn)

    return (
        <NavigationContainer>
            {login ? <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen options={{ headerShown: true, }} name="Home" component={HomeScreen} />
            </Drawer.Navigator> : <StackNavigator/>}
        </NavigationContainer>
    );
}

export default RootNavigator;
