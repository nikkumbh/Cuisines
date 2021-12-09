// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhWgZ6YnqCmVTkJltJGS5G5LJGAPQ3UiQ",
  authDomain: "fir-authentication-13c08.firebaseapp.com",
  projectId: "fir-authentication-13c08",
  storageBucket: "fir-authentication-13c08.appspot.com",
  messagingSenderId: "665191858290",
  appId: "1:665191858290:web:48d96f4c09a55f2e4e82eb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
export {auth};