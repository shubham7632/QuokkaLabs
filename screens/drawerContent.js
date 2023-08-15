import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { saveLoggedIn, saveUserData } from '../redux/presistReducer';


const DrawerContent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = async () => {
    await auth().signOut().then(
        () => {
            dispatch(saveLoggedIn(false))
            dispatch(saveUserData(''))
        }
    );
  };

  return (
      <View style={styles.container}>
          <View style={styles.topConatiner}>
              <TouchableOpacity style={styles.viewStyle} onPress={logout}>
                  <Text style={styles.item}>LogOut</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
              <Text>Version : {DeviceInfo.getVersion()}</Text>
          </View>
    </View>
  );
};
const styles =StyleSheet.create({
    container:{ flex: 1},
    viewStyle:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        fontSize:20,
    },
    topConatiner:{flex:0.95},
    bottomContainer:{flex:0.05,alignItems:'flex-end',padding:10}
})

export default DrawerContent;




