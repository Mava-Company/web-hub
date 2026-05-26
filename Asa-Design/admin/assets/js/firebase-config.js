import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 ضع بيانات مشروعك من Firebase هنا
const firebaseConfig = {
  apiKey: "AIzaSyBJK1i8NTcUD6HDZAS2IJwrJ_u3Ea2zKGw",
  authDomain: "desginproj.firebaseapp.com",
  projectId: "desginproj",
  storageBucket: "desginproj.firebasestorage.app",
  messagingSenderId: "726973005384",
  appId: "1:726973005384:web:d25a1e0532b82d5345627d",
  measurementId: "G-BE1395ZBBZ"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
