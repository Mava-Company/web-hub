import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* CHECK LOGIN */
export function requireAuth() {

  onAuthStateChanged(auth, (user) => {

    if (!user) {

      window.location.href = "/login.html";

    }

  });

}



export function requireAdmin() {

  onAuthStateChanged(auth, async (user) => {

    if (!user) {

      window.location.href = "/login.html";
      return;

    }

    const userRef = doc(db, "users", user.uid);

    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {

      window.location.href = "/login.html";
      return;

    }

    const userData = userSnap.data();

    if (userData.role !== "admin") {

      window.location.href = "/index.html";

    }

  });

}