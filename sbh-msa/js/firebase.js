// Firebase Config

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjtzPH2jFUi-_yjhXATH8QKy3dctsQOMo",
  authDomain: "bizzasbhmsa.firebaseapp.com",
  projectId: "bizzasbhmsa",
  storageBucket: "bizzasbhmsa.firebasestorage.app",
  messagingSenderId: "927305085935",
  appId: "1:927305085935:web:e12b17c9d0b594ac0b3c1a",
  measurementId: "G-KMC1LL485X"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Database

const db = firebase.firestore();

console.log("🔥 Firebase Connected");