// ===============================
// IMPORTS
// ===============================

import { auth, db } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  CLOUD_NAME,
  UPLOAD_PRESET
} from "./cloudinary.js";

// ===============================
// ELEMENTS
// ===============================

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

const ordersTableBody = document.getElementById("ordersTableBody");

const logoutBtn = document.getElementById("logoutBtn");

// ===============================
// CURRENT USER
// ===============================

let currentUser = null;

// ===============================
// AUTH STATE
// ===============================

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  currentUser = user;

  emailEl.textContent = user.email;

  await loadUserData(user.uid);
  await loadUserOrders(user.uid);
});

// ===============================
// LOAD USER DATA
// ===============================

async function loadUserData(uid) {

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) return;

  const data = userSnap.data();

  nameEl.textContent = data.fullName || "";
  phoneEl.textContent = data.phone || "";

  editName.value = data.fullName || "";
  editPhone.value = data.phone || "";

  if (data.photoURL) {
    avatarEl.src = data.photoURL;
  }
}

// ===============================
// LOAD ORDERS
// ===============================
async function loadUserOrders(uid) {

   const ordersTableBody = document.getElementById("ordersTableBody");

  if (!ordersTableBody) {
    console.error("ordersTableBody not found in HTML");
    return;
  }
  
  const q = query(
    collection(db, "orders"),
  where("uid", "==", currentUser.uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  ordersTableBody.innerHTML = "";

  if (snapshot.empty) {
    ordersTableBody.innerHTML = `
      <tr>
        <td colspan="6">لا توجد طلبات حالياً</td>
      </tr>
    `;
    return;
  }

  snapshot.forEach((docSnap) => {

    const order = docSnap.data();

    ordersTableBody.innerHTML += `
      <tr>
        <td>${order.orderCode || order.orderNumber || "N/A"}</td>

        <td>${order.serviceTitle || order.serviceName || "Unknown"}</td>

        <td>
          <span class="status ${getStatusClass(order.status)}">
            ${order.status || "Pending"}
          </span>
        </td>

        

        <td>${order.price || 0}$</td>

        <td>${formatDate(order.createdAt)}</td>
      </tr>
    `;
  });
}


function getStatusClass(status) {
  switch (status) {
    case "Pending": return "pending";
    case "Reviewing": return "reviewing";
    case "In Progress": return "progress";
    case "Completed": return "completed";
    case "Delivered": return "delivered";
    case "Cancelled": return "cancelled";
    default: return "pending";
  }
}
// ===============================
// FORMAT DATE
// ===============================

function formatDate(timestamp) {

  if (!timestamp) return "N/A";

  return timestamp
    .toDate()
    .toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
}

// ===============================
// EDIT PROFILE TOGGLE
// ===============================

editBtn.addEventListener("click", () => {
  editBox.style.display =
    editBox.style.display === "block"
      ? "none"
      : "block";
});

// ===============================
// SAVE PROFILE
// ===============================

saveBtn.addEventListener("click", async () => {

  const newName = editName.value.trim();
  const newPhone = editPhone.value.trim();

  if (!currentUser) return;

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

  editBox.style.display = "none";

  alert("تم تحديث البيانات");
});

// ===============================
// AVATAR UPLOAD (Cloudinary)
// ===============================
avatarInput.addEventListener("change", async (e) => {

  const file = e.target.files[0];
  if (!file) return;

  // =========================
  // CHECK FILE TYPE (IMPORTANT)
  // =========================

  if (!file.type.startsWith("image/")) {
    alert("مسموح رفع الصور فقط ❌");
    avatarInput.value = "";
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    if (!data.secure_url) {
      throw new Error("Upload failed");
    }

    const imageUrl = data.secure_url;

    const userRef = doc(db, "users", currentUser.uid);

    await updateDoc(userRef, {
      photoURL: imageUrl
    });

    await updateProfile(currentUser, {
      photoURL: imageUrl
    });

    avatarEl.src = imageUrl;

    alert("تم تحديث الصورة بنجاح");

  } catch (err) {
    console.error(err);
    alert("فشل رفع الصورة");
  }
});
// ===============================
// LOGOUT
// ===============================

logoutBtn.addEventListener("click", async () => {

  await signOut(auth);

  window.location.href = "login.html";
});