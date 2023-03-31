import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCH-NGF1quw8ZZq7qUN8EJspZqgrHuM9o4",
  authDomain: "proyectofirebasern.firebaseapp.com",
  projectId: "proyectofirebasern",
  storageBucket: "proyectofirebasern.appspot.com",
  messagingSenderId: "83991587087",
  appId: "1:83991587087:web:8a81f93823ce8c7cdbb67a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default { firebase, db };