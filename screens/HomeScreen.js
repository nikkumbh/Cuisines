
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import HandlingRapidAPI from './HandlingRapidApi'

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
        <>
        <View style={styles.container}>
            <View style={styles.emailContainer}>
            <Text >Welcome Back: {auth.currentUser?.email} </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}
            >
                </TouchableOpacity>
            <Text style={styles.buttonText}>Sign Out</Text>
        </View>
                <HandlingRapidAPI />
                </>
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
        backgroundColor: '#0782F9',
        borderRadius: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0782F9',
        // alignSelf: 'flex-end',
        // position: 'absolute',
        marginTop: -5,
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        left: 145,
        bottom: 200,
        // position: 'absolute',
        // alignSelf: 'flex-end',
        color: 'grey',
        fontWeight: '700',
    },
})
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     emailContainer:{
//         width: '80%',
//         padding: 15,
//         backgroundColor: '#0782F9',
//         borderRadius: 10,
//         color: 'white',
//         fontWeight: '700',
//         fontSize: 16,
//     },
//     button: {
//         backgroundColor: '#0782F9',
//         left: 145,
//         bottom: 200,
//         width: '60%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 40,
//     },
//     buttonText: {
//         left: 145,
//         bottom: 200,
//         color: 'white',
//         fontWeight: '700',
//     },
// })
