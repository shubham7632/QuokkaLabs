import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { saveLoggedIn, saveUserData } from '../redux/presistReducer';

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, SetIsChecked] = useState(false)
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const handleSignUp = async () => {
        setEmail('')
        setPassword('')
        navigation.navigate('SignUpScreen')
    };

    const handleSignIn = async () => {
        if (!isChecked) {
            Alert.alert('Please accept terms and condition')
        }
        else if (email == '' || password == '') {
            Alert.alert('Please Enter Valid Email and Password')
        }
        else {
            try {
                await auth().signInWithEmailAndPassword(email, password).then(() => {
                    dispatch(saveLoggedIn(true))
                    dispatch(saveUserData(email))
                })
            } catch (error) {
                Alert.alert('Invalid Username and Password');
            }
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Please Enter your credentials</Text>
                <TextInput
                    placeholder="Please Enter your Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textInputStyle}
                />
                <TextInput
                    placeholder="Please enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.textInputStyle}
                />
              <View style={styles.checkBoxContainer}>
                   <CheckBox
                        value={isChecked}
                        onValueChange={(newValue) => SetIsChecked(newValue)}
                    />
                    <Text style={styles.termsTextStyle}>I Agree all the terms and condition</Text>
                </View>
                <View style={styles.warningContainer}>
                    <Text style={styles.warningStyle} numberOfLines={3}>Warning : Password Should be Min 8 characters, At Least 1 uppercase and 1 number</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={[styles.touchableStyle, { opacity: isChecked ? 1 : 0.5 }]} disabled={!isChecked} onPress={handleSignIn} >
                        <Text style={styles.buttonText}>SignIn</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSignUp} >
                    <Text >New User? Please sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: { flexGrow: 1, backgroundColor: 'aqua' },
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    textCenter: {
        textAlign: 'center',
        color: 'red'
    },
    textInputStyle: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    warningStyle: { fontSize: 15 },
    checkBoxContainer: { flexDirection: 'row' },
    termsTextStyle: { fontSize: 20 },
    warningContainer: { padding: 20 },
    titleStyle: { fontSize: 24, fontWeight: 'bold', color: 'black' },
    buttonStyle: { height: '7%', width: '100%', marginVertical: 16, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
    bottomButtonStyle: { justifyContent: 'center', paddingTop: 16 },
    touchableStyle: { marginHorizontal: 16, height: '100%', width: '40%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' },
    buttonText: { color: 'white' }

});

export default AuthScreen;