import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const container = document.getElementById("ordersContainer");

let orders = [];


// 🔥 تحميل الطلبات
async function loadOrders() {

  try {

    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    orders = [];

    snapshot.forEach((docSnap) => {
      orders.push({ id: docSnap.id, ...docSnap.data() });
    });

    renderOrders();

  } catch (error) {
    console.error("Error loading orders:", error);
    container.innerHTML = "<p>❌ Failed to load orders</p>";
  }
}


// 🧱 عرض الطلبات
function renderOrders() {

  container.innerHTML = "";

  if (orders.length === 0) {
    container.innerHTML = "<p> Няма заявки</p>";
    return;
  }

  orders.forEach((order) => {

    container.innerHTML += `
      <div class="order-card">

        <div class="order-header">

          <div class="order-id">
            ${order.orderId || "NO-ID"}
          </div>

          <span class="status ${order.status?.toLowerCase()}">
            ${translateStatus(order.status)}
          </span>

        </div>

        <div class="order-details">

          <div class="detail-box">
            <h3>Информация за клиента</h3>
            <p>Име: ${order.fullName || ""}</p>
            <p>Телефон: ${order.phone || ""}</p>
            <p>WhatsApp: ${order.whatsapp || ""}</p>
          </div>

          <div class="detail-box">
            <h3>Адрес</h3>
            <p>Държава: ${order.country || ""}</p>
            <p>Град: ${order.city || ""}</p>
            <p>Адрес: ${order.address || ""}</p>
          </div>

          <div class="detail-box">
            <h3>Поръчка</h3>
            <p>Продукти: ${order.items ? order.items.length : 0}</p>
            <p>Общо: ${order.total || 0} лв</p>
          </div>

        </div>


        <div class="products">

          <h3>Продукти</h3>

          ${
            order.items?.map(item => `
              <div class="product">

                <img src="${item.image}" width="80">

                <div class="product-info">
                  <h4>${item.title}</h4>
                  <p>Количество: ${item.qty}</p>
                  <p>Цена: ${item.price} лв</p>
                </div>

              </div>
            `).join("") || "<p>لا يوجد منتجات</p>"
          }

        </div>


        <div class="actions">

          <button onclick="updateStatus('${order.id}', 'confirmed')" class="confirm-btn">
            Потвърди
          </button>

          <button onclick="updateStatus('${order.id}', 'processing')" class="process-btn">
            Обработва се
          </button>

          <button onclick="updateStatus('${order.id}', 'cancelled')" class="cancel-btn">
            Откажи
          </button>

        </div>

      </div>
    `;
  });
}


// 🔥 تحديث الحالة
window.updateStatus = async function (orderId, status) {

  try {

    await updateDoc(doc(db, "orders", orderId), {
      status: status
    });

    alert("Status updated");

    loadOrders();

  } catch (error) {
    console.error(error);
    alert("Error updating status");
  }
};


// 🌍 ترجمة الحالات
function translateStatus(status) {

  if (!status) return "Unknown";

  status = status.toLowerCase();

  if (status === "pending") return "В изчакване";
  if (status === "processing") return "Обработва се";
  if (status === "confirmed") return "Потвърден";
  if (status === "cancelled") return "Отказан";

  return status;
}


// 🚀 تشغيل
loadOrders();
