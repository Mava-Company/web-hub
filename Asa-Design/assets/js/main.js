import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// =====================
// تحميل إعدادات الموقع (Settings)
// =====================
export async function loadSiteSettings() {
  const ref = doc(db, "settings", "main");
  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  const data = snap.data();

  // تحديث النصوص العامة (لو موجودة في الصفحة)
  if (document.getElementById("siteName")) {
    document.getElementById("siteName").value = data.siteName || "";
  }

  if (document.getElementById("footerSiteName")) {
    document.getElementById("footerSiteName").innerText = data.siteName || "";
  }

  if (document.getElementById("heroTitle")) {
    document.getElementById("heroTitle").value = data.heroTitle || "";
  }

  if (document.getElementById("heroDescription")) {
    document.getElementById("heroDescription").value = data.heroDescription || "";
  }
}


// =====================
// تحميل الخدمات (ديناميكي)
// =====================
export async function loadServices() {
  const querySnapshot = await getDocs(collection(db, "services"));

  const services = [];

  querySnapshot.forEach((doc) => {
    services.push({ id: doc.id, ...doc.data() });
  });

  return services;
}


// =====================
// تحميل الطلبات
// =====================
export async function loadOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));

  const orders = [];

  querySnapshot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() });
  });

  return orders;
}


// =====================
// تحميل المستخدمين (للأدمن)
// =====================
export async function loadUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));

  const users = [];

  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return users;
}