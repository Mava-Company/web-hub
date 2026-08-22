// Firebase Config

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcHumuko4midKXM5YlYVCWky9Hx1TWrbY",
  authDomain: "ashraf-6dfb5.firebaseapp.com",
  projectId: "ashraf-6dfb5",
  storageBucket: "ashraf-6dfb5.firebasestorage.app",
  messagingSenderId: "63862361411",
  appId: "1:63862361411:web:202fd00098de3e127033f6",
  measurementId: "G-KYMCVC1ERS"
};



// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Database

const db = firebase.firestore();

console.log("🔥 Firebase Connected");