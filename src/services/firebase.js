import firebase from "firebase/compact/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsPng8R1w4_C_WQvCsFStg-vCgEHeUcrM",
    authDomain: "chatapp1-4e2da.firebaseapp.com",
    projectId: "chatapp1-4e2da",
    storageBucket: "chatapp1-4e2da.appspot.com",
    messagingSenderId: "477458521534",
    appId: "1:477458521534:web:fe71b85d348845d033adef",
    measurementId: "G-TRGE8NSVKB"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firebase();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
