import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  limit,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// عناصر DOM
const ordersCountEl = document.getElementById("ordersCount");
const productsCountEl = document.getElementById("productsCount");
const usersCountEl = document.getElementById("usersCount");
const revenueEl = document.getElementById("revenue");
const ordersTable = document.getElementById("ordersTable");


// 🔥 تحميل الداشبورد
async function loadDashboard() {

  await loadCounts();
  await loadOrders();

}


// 📊 الأرقام (Products / Orders / Users / Revenue)
async function loadCounts() {

  const ordersSnap = await getDocs(collection(db, "orders"));
  const productsSnap = await getDocs(collection(db, "products"));
  const usersSnap = await getDocs(collection(db, "users"));

  let revenue = 0;

  ordersSnap.forEach(doc => {
    revenue += doc.data().total || 0;
  });

  ordersCountEl.innerText = ordersSnap.size;
  productsCountEl.innerText = productsSnap.size;
  usersCountEl.innerText = usersSnap.size;
  revenueEl.innerText = revenue + " лв";

}


// 📦 آخر الطلبات
async function loadOrders() {

  const q = query(
    collection(db, "orders"),
    orderBy("createdAt", "desc"),
    limit(5)
  );

  const snapshot = await getDocs(q);

  ordersTable.innerHTML = "";

  snapshot.forEach(doc => {

    const o = doc.data();

    ordersTable.innerHTML += `
      <tr>

        <td>${o.orderId || doc.id}</td>
        <td>${o.fullName}</td>
        <td>${o.phone}</td>
        <td>${o.total} лв</td>

        <td>
          <span class="status ${o.status}">
            ${translateStatus(o.status)}
          </span>
        </td>

      </tr>
    `;

  });

}


// 🌍 ترجمة الحالة
function translateStatus(status) {

  if (status === "pending") return "В изчакване";
  if (status === "processing") return "Обработва се";
  if (status === "delivered") return "Доставена";

  return status;

}


// 🚀 تشغيل
loadDashboard();
