import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  CLOUD_NAME,
  UPLOAD_PRESET
} from "./cloudinary.js";


// عناصر الصفحة
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const avatarEl = document.getElementById("avatar");

const editBtn = document.getElementById("editBtn");
const editBox = document.getElementById("editBox");

const editName = document.getElementById("editName");
const editPhone = document.getElementById("editPhone");

const saveBtn = document.getElementById("saveProfileBtn");
const avatarInput = document.getElementById("avatarInput");

const ordersList = document.getElementById("ordersList");

let currentUser = null;


// تحميل بيانات المستخدم
onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  currentUser = user;
  emailEl.textContent = user.email;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {

    const data = userSnap.data();

    nameEl.textContent = data.fullName;
    phoneEl.textContent = data.phone;

    editName.value = data.fullName;
    editPhone.value = data.phone;

    if (data.photoURL) {
      avatarEl.src = data.photoURL;
    }
  }


  // ===== جلب الطلبات =====
  const q = query(
    collection(db, "orders"),
    where("userId", "==", user.uid)
  );

  const querySnapshot = await getDocs(q);

  ordersList.innerHTML = "";

  querySnapshot.forEach((orderDoc) => {

    const order = orderDoc.data();

    ordersList.innerHTML += `
      <div class="order-card">

        <h3>Код: ${order.orderId}</h3>

        <p>
          Статус:
          <span class="order-status">
            ${order.status}
          </span>
        </p>

        <p>Общо: $${order.total}</p>

        <p>Продукти: ${order.items.length}</p>

      </div>
    `;
  });

});


// فتح/إغلاق تعديل البروفايل
editBtn.addEventListener("click", () => {
  editBox.style.display =
    editBox.style.display === "block" ? "none" : "block";
});


// حفظ البيانات
saveBtn.addEventListener("click", async () => {

  const newName = editName.value;
  const newPhone = editPhone.value;

  try {

    const userRef = doc(db, "users", currentUser.uid);

    await updateDoc(userRef, {
      fullName: newName,
      phone: newPhone
    });

    await updateProfile(currentUser, {
      displayName: newName
    });

    nameEl.textContent = newName;
    phoneEl.textContent = newPhone;

    alert("تم تحديث البروفايل");

    editBox.style.display = "none";

  } catch (error) {
    console.error(error);
  }
});


// رفع الصورة (Cloudinary)
avatarInput.addEventListener("change", async (e) => {

  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {

    const response = await fetch(
     ` https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();
    const imageUrl = data.secure_url;

    const userRef = doc(db, "users", currentUser.uid);

    await updateDoc(userRef, {
      photoURL: imageUrl
    });

    await updateProfile(currentUser, {
      photoURL: imageUrl
    });

    avatarEl.src = imageUrl;

    alert("تم تحديث الصورة");

  } catch (error) {
    console.error(error);
    alert("فشل رفع الصورة");
  }
});


// تسجيل الخروج
document.getElementById("logoutBtn")
.addEventListener("click", async () => {

  await signOut(auth);

  window.location.href = "login.html";
});