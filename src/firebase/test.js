import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore.collection("users").doc("6b2zeCfZJkY0vgn2ImBj").collection("cardItems").doc("721UZUVnIILQOghqxcEi");
firestore.doc("/users/6b2zeCfZJkY0vgn2ImBj/cardItems/721UZUVnIILQOghqxcEi");
firestore.collection("/users/6b2zeCfZJkY0vgn2ImBj/cardItems");