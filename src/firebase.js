import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXFQOCeFxxOVRdeU0KFBuPReDmpCj4dXo",
  authDomain: "todo-app-cp-efcd9.firebaseapp.com",
  databaseURL: "https://todo-app-cp-efcd9.firebaseio.com",
  projectId: "todo-app-cp-efcd9",
  storageBucket: "todo-app-cp-efcd9.appspot.com",
  messagingSenderId: "53511861777",
  appId: "1:53511861777:web:dc8cfd2ae200342c8423b0",
  measurementId: "G-GE9X93GVLK"
});

const db=firebaseApp.firestore();

export default db;