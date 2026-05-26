import { db, auth } from "./firebase-config.js";

import {
  doc,
  getDoc,
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// =======================
// GET SERVICE ID
// =======================

const params = new URLSearchParams(window.location.search);
const serviceId = params.get("id");

// =======================
// LOAD SERVICE
// =======================

let serviceData = null;

async function loadService() {

  const ref = doc(db, "services", serviceId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  serviceData = snap.data();

  document.getElementById("serviceBox").innerHTML = `
    <h3>${serviceData.title}</h3>
    <p>${serviceData.description}</p>
    <span>${serviceData.price}$</span>
  `;
}

loadService();

// =======================
// ORDER FORM
// =======================
document.getElementById("orderForm").addEventListener("submit", async (e) => {

  e.preventDefault();

  // التحقق من تسجيل الدخول
  const user = auth.currentUser;

  if (!user) {

    alert("يجب تسجيل الدخول أولاً");

    // تحويل لصفحة تسجيل الدخول
    window.location.href = "login.html";

    return;
  }

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email1 = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  const email = user.email;
  const uid = user.uid;

  // generate order code
  const orderCode =
    "ORD-" +
    Math.random().toString(36).substr(2, 8).toUpperCase();

  const orderData = {

    orderCode,
    name,
    phone,
    email1,
    address,

    email,
    uid,

    serviceId,
    serviceTitle: serviceData.title,
    price: serviceData.price,

    status: "pending",
    createdAt: serverTimestamp()
  };

  await addDoc(collection(db, "orders"), orderData);

  // SHOW RESULT
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("resultBox").style.display = "block";

  document.getElementById("orderCode").textContent = orderCode;

  // COPY
  document.getElementById("copyCodeBtn").onclick = () => {

    navigator.clipboard.writeText(orderCode);

    alert("تم نسخ الكود");
  };

  // WHATSAPP
  document.getElementById("whatsappBtn").href =
    `https://wa.me/967773645841?text=طلبي رقم: ${orderCode} - خدمة: ${serviceData.title}`;

});
