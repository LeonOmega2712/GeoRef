// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaB3jmYQYhd4LP5p6Y315EWPntJ_jgU9A",
    authDomain: "sistemasgeo2712.firebaseapp.com",
    databaseURL: "https://sistemasgeo2712.firebaseio.com",
    projectId: "sistemasgeo2712",
    storageBucket: "sistemasgeo2712.appspot.com",
    messagingSenderId: "877902782462",
    appId: "1:877902782462:web:68df9256f5f44028cb2aaf",
    measurementId: "G-J6ZGJVTH1Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();