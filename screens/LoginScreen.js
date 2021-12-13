import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}> CUISINE'S </Text>
        </View>

        <KeyboardAvoidingView
          style={styles.container}
          // behavior="padding"
        >
          <View style={styles.inputContainer}>
            <TextInput
              backgroundColor= 'white'
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              fontSize = '20%'
            />
            <TextInput
              backgroundColor= 'white'
              placeholder="Password"
              fontSize = '20%'
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E3F2FD',
    flex: 1,
  },
  logoContainer: {
    // backgroundColor: '#121212',
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    // borderWidth: 2,
  },

  logoText: {
    color: "#121212",
    fontSize: 65,
    letterSpacing: 3,
    textAlign: "justify",
    fontWeight: "300",
  },
  container: {
    // backgroundColor: '#121212',
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: -200,
  },
  inputContainer: {
    width: "80%",
    height: "20%",
    
  },

  input: {
   
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#2196F3",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#2196F3",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
