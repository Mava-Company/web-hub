import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase-config.js";


// =====================
// REGISTER
// =====================
export async function registerUser(name, email, password, phone) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCred.user;

  await updateProfile(user, {
    displayName: name
  });

  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    phone,
    role: "user",
    createdAt: new Date().toISOString()
  });

  return user;
}


// =====================
// LOGIN
// =====================
export async function loginUser(email, password) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}


// =====================
// LOGOUT
// =====================
export async function logoutUser() {
  await signOut(auth);
}