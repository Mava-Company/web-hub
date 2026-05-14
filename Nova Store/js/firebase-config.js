import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHbGkNR9IuBwhY3E3lxgKqP5A81xNTXKE",
  authDomain: "storeproject-c3760.firebaseapp.com",
  projectId: "storeproject-c3760",
  storageBucket: "storeproject-c3760.firebasestorage.app",
  messagingSenderId: "400815392230",
  appId: "1:400815392230:web:ace3276b35f4e748098227",
  measurementId: "G-6SB9HVN106"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);