import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet, Alert,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { saveLoggedIn, saveUserData } from '../redux/presistReducer';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        if (email == '' || password == '' || !(passwordRegex.test(password) && emailRegex.test(email))) {
            Alert.alert('Please Enter Valid Email and Password')
        }
        else {
            try {
                await auth().createUserWithEmailAndPassword(email, password);
                navigation.navigate('Login')
            } catch (error) {
                if(error.message.includes('already in use')){
                Alert.alert('Email Already In use');
            }
            }
        }
    };

    const onPressBack = () =>{
        setEmail('')
        setPassword('')
        navigation.navigate('Login')
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={onPressBack} style={{justifyContent:'flex-start',alignItems:'flex-start',padding:20}}>
                <Image source={require('../assets/back-button-image.png')} style={{height:40,width:40}}/>
            </TouchableOpacity>
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
                </View>
                <View style={styles.warningContainer}>
                <Text style={styles.warningStyle} numberOfLines={3}>Warning : Password Should be Min 8 characters, At Least 1 uppercase and 1 number</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.touchableStyle} onPress={handleSignUp} >
                        <Text style={styles.buttonText}>Signup</Text>
                    </TouchableOpacity>
                </View>
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
    warningStyle:{ fontSize: 15 },
    checkBoxContainer: { flexDirection: 'row' },
    termsTextStyle:{ fontSize: 20 },
    warningContainer:{padding:20},
    titleStyle: { fontSize: 24, fontWeight: 'bold', color: 'black' },
    buttonStyle: { height: '7%', width: '100%', marginVertical: 16, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, flexDirection: 'row' },
    bottomButtonStyle: { justifyContent: 'center', paddingTop: 16 },
    touchableStyle: { marginHorizontal: 16, height: '100%', width: '40%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' },
    buttonText:{ color: 'white' }

});

export default SignUpScreen;