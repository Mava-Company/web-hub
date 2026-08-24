// =====================================================
// نظام تسجيل الدخول
// دفتر أخطاء التركي
// =====================================================

import {
    auth,
    db
} from "./firebase.js";


import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";



// =====================================================
// العناصر
// =====================================================

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");

const loginCard =
    document.getElementById("loginCard");

const registerCard =
    document.getElementById("registerCard");

const showRegisterButton =
    document.getElementById("showRegisterButton");

const showLoginButton =
    document.getElementById("showLoginButton");

const loginMessage =
    document.getElementById("loginMessage");

const registerMessage =
    document.getElementById("registerMessage");

const loginButton =
    document.getElementById("loginButton");

const registerButton =
    document.getElementById("registerButton");



// =====================================================
// الانتقال بين تسجيل الدخول وإنشاء الحساب
// =====================================================

if (showRegisterButton) {

    showRegisterButton.addEventListener(
        "click",
        () => {

            loginCard.hidden = true;
            registerCard.hidden = false;

            clearMessages();

        }
    );

}


if (showLoginButton) {

    showLoginButton.addEventListener(
        "click",
        () => {

            registerCard.hidden = true;
            loginCard.hidden = false;

            clearMessages();

        }
    );

}



// =====================================================
// رسالة
// =====================================================

function showMessage(
    element,
    message,
    type = "error"
) {

    if (!element) return;

    element.textContent = message;

    element.className =
        `auth-message ${type}`;

    element.hidden = false;
}


function clearMessages() {

    if (loginMessage) {
        loginMessage.hidden = true;
    }

    if (registerMessage) {
        registerMessage.hidden = true;
    }

}



// =====================================================
// تحويل أخطاء Firebase إلى عربي
// =====================================================

function getArabicAuthError(error) {

    const code = error.code || "";


    const errors = {

        "auth/invalid-email":
            "البريد الإلكتروني غير صحيح.",

        "auth/user-not-found":
            "لا يوجد حساب بهذا البريد الإلكتروني.",

        "auth/wrong-password":
            "كلمة المرور غير صحيحة.",

        "auth/invalid-credential":
            "البريد الإلكتروني أو كلمة المرور غير صحيحة.",

        "auth/email-already-in-use":
            "هذا البريد الإلكتروني مستخدم بالفعل.",

        "auth/weak-password":
            "كلمة المرور ضعيفة. استخدمي 6 أحرف على الأقل.",

        "auth/missing-password":
            "يرجى إدخال كلمة المرور.",

        "auth/too-many-requests":
            "تمت محاولات كثيرة. حاولي مرة أخرى لاحقًا.",

        "auth/network-request-failed":
            "تعذر الاتصال بالإنترنت.",

        "auth/operation-not-allowed":
            "تسجيل الدخول بالبريد وكلمة المرور غير مفعّل في Firebase."

    };


    return errors[code] ||
        "حدث خطأ أثناء العملية. حاولي مرة أخرى.";
}



// =====================================================
// تسجيل الدخول
// =====================================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            clearMessages();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            const rememberMe =
                document
                    .getElementById("rememberMe")
                    .checked;


            if (!email || !password) {

                showMessage(
                    loginMessage,
                    "يرجى إدخال البريد الإلكتروني وكلمة المرور."
                );

                return;
            }


            try {

                loginButton.disabled = true;

                loginButton.querySelector(
                    "#loginButtonText"
                ).textContent =
                    "جاري تسجيل الدخول...";


                // =====================================
                // تحديد مدة الجلسة
                // =====================================

                await setPersistence(
                    auth,
                    rememberMe
                        ? browserLocalPersistence
                        : browserSessionPersistence
                );


                // =====================================
                // تسجيل الدخول
                // =====================================

                const userCredential =
                    await signInWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );


                const user =
                    userCredential.user;


                showMessage(
                    loginMessage,
                    "تم تسجيل الدخول بنجاح. جاري نقلك...",
                    "success"
                );


                // =====================================
                // التحقق من دور المستخدم
                // =====================================

                const userDoc =
                    await getDoc(
                        doc(
                            db,
                            "users",
                            user.uid
                        )
                    );


                if (
                    userDoc.exists() &&
                    userDoc.data().role === "admin"
                ) {

                    setTimeout(
                        () => {
                            window.location.href =
                                "admin.html";
                        },
                        800
                    );

                } else {

                    setTimeout(
                        () => {
                            window.location.href =
                                "index.html";
                        },
                        800
                    );

                }


            } catch (error) {

                console.error(
                    "Login error:",
                    error
                );


                showMessage(
                    loginMessage,
                    getArabicAuthError(error)
                );


                loginButton.disabled = false;

                loginButton.querySelector(
                    "#loginButtonText"
                ).textContent =
                    "تسجيل الدخول";

            }

        }
    );

}



// =====================================================
// إنشاء حساب
// =====================================================

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            clearMessages();


            const name =
                document
                    .getElementById("registerName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("registerPassword")
                    .value;


            const passwordConfirm =
                document
                    .getElementById("registerPasswordConfirm")
                    .value;



            // =========================================
            // التحقق
            // =========================================

            if (!name) {

                showMessage(
                    registerMessage,
                    "يرجى كتابة اسمك."
                );

                return;
            }


            if (!email) {

                showMessage(
                    registerMessage,
                    "يرجى إدخال البريد الإلكتروني."
                );

                return;
            }


            if (password.length < 6) {

                showMessage(
                    registerMessage,
                    "كلمة المرور يجب أن تكون 6 أحرف على الأقل."
                );

                return;
            }


            if (password !== passwordConfirm) {

                showMessage(
                    registerMessage,
                    "كلمتا المرور غير متطابقتين."
                );

                return;
            }



            try {

                registerButton.disabled = true;

                registerButton.textContent =
                    "جاري إنشاء الحساب...";


                // =====================================
                // إنشاء المستخدم في Firebase Auth
                // =====================================

                const userCredential =
                    await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );


                const user =
                    userCredential.user;


                // =====================================
                // حفظ اسم المستخدم
                // =====================================

                await updateProfile(
                    user,
                    {
                        displayName: name
                    }
                );


                // =====================================
                // إنشاء ملف المستخدم في Firestore
                // =====================================

                await setDoc(
                    doc(
                        db,
                        "users",
                        user.uid
                    ),
                    {

                        uid: user.uid,

                        name: name,

                        email: email,

                        role: "user",

                        createdAt:
                            serverTimestamp()

                    }
                );


                showMessage(
                    registerMessage,
                    "تم إنشاء حسابك بنجاح! جاري نقلك...",
                    "success"
                );


                setTimeout(
                    () => {

                        window.location.href =
                            "index.html";

                    },
                    1000
                );


            } catch (error) {

                console.error(
                    "Register error:",
                    error
                );


                showMessage(
                    registerMessage,
                    getArabicAuthError(error)
                );


                registerButton.disabled = false;

                registerButton.textContent =
                    "إنشاء الحساب";

            }

        }
    );

}



// =====================================================
// مراقبة حالة المستخدم
// =====================================================

onAuthStateChanged(
    auth,
    async (user) => {

        if (user) {

            console.log(
                "المستخدم مسجل الدخول:",
                user.email
            );

        } else {

            console.log(
                "لا يوجد مستخدم مسجل الدخول."
            );

        }

    }
);



// =====================================================
// دالة تسجيل الخروج
// =====================================================

export async function logoutUser() {

    try {

        await signOut(auth);

        window.location.href =
            "index.html";

    } catch (error) {

        console.error(
            "Logout error:",
            error
        );

    }

}