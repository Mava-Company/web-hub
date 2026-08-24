// =====================================================
// Firebase Configuration
// =====================================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getAuth
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
    getFirestore
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

/* =========================================================
   إعدادات مشروع Firebase
========================================================= */

/*
   ضعي هنا بيانات مشروعك من:

   Firebase Console
   ↓
   Project Settings
   ↓
   Your apps
   ↓
   Web app
   ↓
   SDK setup and configuration
*/




// =====================================================
// تشغيل Firebase
// =====================================================

const app = initializeApp(firebaseConfig);


// =====================================================
// Authentication
// =====================================================

const auth = getAuth(app);


// =====================================================
// Firestore
// =====================================================

const db = getFirestore(app);


// =====================================================
// التصدير
// =====================================================

export {
    app,
    auth,
    db
};