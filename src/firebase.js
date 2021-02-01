import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDWdXFoXLSOwLg54DoLa0gUDCqfqAxu4AY",
  authDomain: "messenger-clone-aa675.firebaseapp.com",
  databaseURL: "https://messenger-clone-aa675.firebaseio.com",
  projectId: "messenger-clone-aa675",
  storageBucket: "messenger-clone-aa675.appspot.com",
  messagingSenderId: "935071795267",
  appId: "1:935071795267:web:7dc75423173beb9327acf6",
  measurementId: "G-X21W54FTMJ",
});

const db = firebaseApp.firestore();

export default db;
