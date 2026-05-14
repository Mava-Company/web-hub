



import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    // 🔥 تحقق إذا أدمن
    if (user.email === "adminadmin99rt@gmail.com") {
      window.location.href = "admin/dashboard.html";
    } else {
      window.location.href = "index.html";
    }

  } catch (error) {
    alert("خطأ في تسجيل الدخول");
    console.error(error);
  }

});