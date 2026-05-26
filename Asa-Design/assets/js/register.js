// ==========================
// FIREBASE
// ==========================

import { auth, db } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ==========================
// HERO CONTENT
// ==========================

const registerHeroTitle =
  document.getElementById(
    "registerHeroTitle"
  );

const registerHeroDescription =
  document.getElementById(
    "registerHeroDescription"
  );

registerHeroTitle.textContent =
  "ابدأ رحلتك معنا";

registerHeroDescription.textContent =
  "أنشئ حساباً جديداً للوصول إلى خدماتنا ومتابعة طلباتك بسهولة.";

// ==========================
// PASSWORD TOGGLE
// ==========================

function setupPasswordToggle(
  buttonId,
  inputId
) {
  const button =
    document.getElementById(buttonId);

  const input =
    document.getElementById(inputId);

  button.addEventListener("click", () => {
    const type =
      input.type === "password"
        ? "text"
        : "password";

    input.type = type;

    button.innerHTML =
      type === "password"
        ? `<i class="fa-regular fa-eye"></i>`
        : `<i class="fa-regular fa-eye-slash"></i>`;
  });
}

setupPasswordToggle(
  "toggleRegisterPassword",
  "registerPassword"
);

setupPasswordToggle(
  "toggleConfirmPassword",
  "confirmPassword"
);

// ==========================
// REGISTER FORM
// ==========================

const registerForm =
  document.getElementById(
    "registerForm"
  );

registerForm.addEventListener(
  "submit",
  handleRegister
);

async function handleRegister(e) {
  e.preventDefault();

  const fullName =
    document.getElementById("fullName")
      .value;

  const email =
    document.getElementById(
      "registerEmail"
    ).value;

  const phone =
    document.getElementById(
      "phoneNumber"
    ).value;

  const password =
    document.getElementById(
      "registerPassword"
    ).value;

  const confirmPassword =
    document.getElementById(
      "confirmPassword"
    ).value;

  // VALIDATION

  if (password.length < 6) {
    alert(
      "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("كلمتا المرور غير متطابقتين");
    return;
  }

  try {

    // CREATE AUTH USER

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    // ADMIN CHECK

    const role =
      email === "adminAdmin6@gmail.com"
        ? "admin"
        : "user";

    // SAVE USER INFO IN FIRESTORE

    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        fullName,
        email,
        phone,
        role,
        createdAt:
          new Date().toISOString(),
      }
    );

    alert("تم إنشاء الحساب بنجاح");

    // REDIRECT

    if (role === "admin") {
      window.location.href =
        "admin/index.html";
    } else {
      window.location.href =
        "profile.html";
    }

  } catch (error) {

    console.log(error);

    if (
      error.code ===
      "auth/email-already-in-use"
    ) {
      alert(
        "البريد الإلكتروني مستخدم مسبقاً"
      );
    } else {
      alert("حدث خطأ أثناء التسجيل");
    }
  }
}