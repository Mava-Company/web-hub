import { db } from "./firebase-config.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const settingsRef = doc(db, "settings", "global");


// 🔥 تحميل الإعدادات
async function loadSettings() {

  const snap = await getDoc(settingsRef);

  if (!snap.exists()) return;

  const data = snap.data();

  document.getElementById("storeName").value = data.storeName || "";
  document.getElementById("description").value = data.description || "";
  document.getElementById("email").value = data.email || "";
  document.getElementById("phone").value = data.phone || "";

  document.getElementById("shippingPrice").value = data.shippingPrice || "";
  document.getElementById("shippingTime").value = data.shippingTime || "";

  document.getElementById("facebook").value = data.facebook || "";
  document.getElementById("instagram").value = data.instagram || "";
  document.getElementById("whatsapp").value = data.whatsapp || "";

}


// 💾 حفظ الإعدادات
async function saveSettings() {

  const data = {

    storeName: document.getElementById("storeName").value,
    description: document.getElementById("description").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,

    shippingPrice: Number(document.getElementById("shippingPrice").value),
    shippingTime: document.getElementById("shippingTime").value,

    facebook: document.getElementById("facebook").value,
    instagram: document.getElementById("instagram").value,
    whatsapp: document.getElementById("whatsapp").value

  };

  await setDoc(settingsRef, data);

  alert("Settings saved successfully");

}


// 🔘 ربط الأزرار
document.querySelectorAll(".save-btn").forEach(btn => {
  btn.addEventListener("click", saveSettings);
});


// 🚀 تشغيل
loadSettings();