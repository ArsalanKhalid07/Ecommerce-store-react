import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyAAtuALRapYRBp7M84i-dO9vZK9A16w9Q4",
    authDomain: "web-db-6ff24.firebaseapp.com",
    projectId: "web-db-6ff24",
    storageBucket: "web-db-6ff24.appspot.com",
    messagingSenderId: "842105433304",
    appId: "1:842105433304:web:b006837c8dfff1892ffbad",
    measurementId: "G-VBD8J18QX6"
  };



  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signinwithgoogle = () =>  auth.signInWithPopup(provider);


export default firebase;