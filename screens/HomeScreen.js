import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login");
        })
        .catch(error => alert(error.message))   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emailContainer}>Welcome Back: {auth.currentUser?.email} </Text>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailContainer:{
        width: '80%',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#0782F9',
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
    },
})
