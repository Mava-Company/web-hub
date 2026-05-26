// ==========================
// FIREBASE
// ==========================

import { auth, db } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ==========================
// HERO CONTENT
// ==========================

const loginHeroTitle =
  document.getElementById(
    "loginHeroTitle"
  );

const loginHeroDescription =
  document.getElementById(
    "loginHeroDescription"
  );

loginHeroTitle.textContent =
  "مرحباً بعودتك";

loginHeroDescription.textContent =
  "سجّل دخولك للوصول إلى جميع خدماتك وإدارة طلباتك بسهولة.";

// ==========================
// PASSWORD TOGGLE
// ==========================

const loginPassword =
  document.getElementById(
    "loginPassword"
  );

const togglePassword =
  document.getElementById(
    "togglePassword"
  );

togglePassword.addEventListener(
  "click",
  () => {

    const type =
      loginPassword.type ===
      "password"
        ? "text"
        : "password";

    loginPassword.type = type;

    togglePassword.innerHTML =
      type === "password"
        ? `<i class="fa-regular fa-eye"></i>`
        : `<i class="fa-regular fa-eye-slash"></i>`;
  }
);

// ==========================
// LOGIN FORM
// ==========================

const loginForm =
  document.getElementById(
    "loginForm"
  );

loginForm.addEventListener(
  "submit",
  handleLogin
);

async function handleLogin(e) {

  e.preventDefault();

  const email =
    document.getElementById(
      "loginEmail"
    ).value;

  const password =
    document.getElementById(
      "loginPassword"
    ).value;

  try {

    // LOGIN

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user =
      userCredential.user;

    // GET USER DATA

    const userDoc =
      await getDoc(
        doc(db, "users", user.uid)
      );

    const userData =
      userDoc.data();

    alert("تم تسجيل الدخول بنجاح");

    // REDIRECT

    if (userData.role === "admin") {

      window.location.href =
        "admin/index.html";

    } else {

      window.location.href =
        "profile.html";
    }

  } catch (error) {

    console.log(error);

    alert(
      "البريد الإلكتروني أو كلمة المرور غير صحيحة"
    );
  }
}

// ==========================
// FORGOT PASSWORD
// ==========================

const forgotPasswordLink =
  document.getElementById(
    "forgotPasswordLink"
  );

forgotPasswordLink.addEventListener(
  "click",
  async (e) => {

    e.preventDefault();

    const email = prompt(
      "أدخل بريدك الإلكتروني"
    );

    if (!email) return;

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني"
      );

    } catch (error) {

      alert("الحساب غير موجود");
    }
  }
);