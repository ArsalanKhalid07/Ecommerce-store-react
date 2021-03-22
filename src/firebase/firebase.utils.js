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


export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`); 
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth; 
      const createdAT = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAT,
          ...additionalData
        });
      } catch (error) {
        console.log('error in creating user ', error.message);
      }
    }

    return userRef;
  }



  firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signinwithgoogle = () =>  auth.signInWithPopup(provider);


export default firebase;