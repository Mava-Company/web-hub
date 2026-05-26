// ===============================
// IMPORTS
// ===============================

import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===============================
// ELEMENTS
// ===============================

const ordersTable = document.getElementById("ordersTable");
const searchOrder = document.getElementById("searchOrder");
const statusFilter = document.getElementById("statusFilter");

const orderModal = document.getElementById("orderModal");
const closeOrderModal = document.getElementById("closeOrderModal");

const modalOrderNumber = document.getElementById("modalOrderNumber");
const modalCustomerName = document.getElementById("modalCustomerName");
const modalServiceName = document.getElementById("modalServiceName");
const modalCustomerPhone = document.getElementById("modalCustomerPhone");

const updateOrderStatus = document.getElementById("updateOrderStatus");
const progressRange = document.getElementById("progressRange");
const adminNotes = document.getElementById("adminNotes");
const saveOrderChanges = document.getElementById("saveOrderChanges");
const loadingOverlay = document.getElementById("loadingOverlay");


// ===============================
// VARIABLES
// ===============================

let allOrders = [];
let currentOrderId = null;

// ===============================
// LOAD ORDERS
// ===============================

async function loadOrders() {
  try {

        loadingOverlay.style.display = "flex";

    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    allOrders = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    renderOrders(allOrders);

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء تحميل الطلبات");
  }
  finally {

    loadingOverlay.style.display = "none";
  }
}

loadOrders();

// ===============================
// RENDER ORDERS
// ===============================

function renderOrders(orders) {

  if (!ordersTable) return;

  ordersTable.innerHTML = "";

  if (!orders.length) {
    ordersTable.innerHTML = `
      <tr>
        <td colspan="7">لا توجد طلبات</td>
      </tr>
    `;
    return;
  }

  orders.forEach(order => {

    ordersTable.innerHTML += `
      <tr>
        <td>${order.orderCode || order.orderNumber || "N/A"}</td>
        <td>${order.name || order.customerName || "Unknown"}</td>
        <td>${order.serviceTitle || order.serviceName || "Unknown"}</td>

        <td>
          <span class="status ${getStatusClass(order.status)}">
            ${order.status || "Pending"}
          </span>
        </td>

        <td>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${order.progress || 0}%"></div>
          </div>
          <span>${order.progress || 0}%</span>
        </td>

        <td>${formatDate(order.createdAt)}</td>

        <td>
          <button class="action-btn view-btn" data-id="${order.id}">
            👁
          </button>
        </td>
      </tr>
    `;
  });
}

// ===============================
// EVENT DELEGATION (أفضل من attach)
// ===============================

document.addEventListener("click", (e) => {

  const btn = e.target.closest(".view-btn");

  if (btn) {
    openOrderModal(btn.dataset.id);
  }

});

// ===============================
// OPEN MODAL
// ===============================

function openOrderModal(orderId) {

  const order = allOrders.find(o => o.id === orderId);

  if (!order) return;

  currentOrderId = orderId;

  modalOrderNumber.textContent = order.orderCode || order.orderNumber || "N/A";
  modalCustomerName.textContent = order.name || order.customerName || "Unknown";
  modalServiceName.textContent = order.serviceTitle || order.serviceName || "Unknown";
  modalCustomerPhone.textContent = order.phone || order.customerPhone || "N/A";

  updateOrderStatus.value = order.status || "Pending";
  progressRange.value = order.progress || 0;
  adminNotes.value = order.adminNotes || "";

  orderModal.classList.remove("hidden");
}

// ===============================
// CLOSE MODAL
// ===============================

closeOrderModal?.addEventListener("click", () => {
  orderModal.classList.add("hidden");
});

// ===============================
// SAVE CHANGES
// ===============================

saveOrderChanges?.addEventListener("click", async () => {

  try {

    if (!currentOrderId) return;

    saveOrderChanges.disabled = true;
    saveOrderChanges.textContent = "جاري الحفظ...";

    const ref = doc(db, "orders", currentOrderId);

    await updateDoc(ref, {
      status: updateOrderStatus.value,
      progress: Number(progressRange.value),
      adminNotes: adminNotes.value.trim()
    });

    const index = allOrders.findIndex(o => o.id === currentOrderId);

    if (index !== -1) {
      allOrders[index].status = updateOrderStatus.value;
      allOrders[index].progress = Number(progressRange.value);
      allOrders[index].adminNotes = adminNotes.value.trim();
    }

    renderOrders(allOrders);

    orderModal.classList.add("hidden");

    alert("تم تحديث الطلب بنجاح");

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء التحديث");
  }

  saveOrderChanges.disabled = false;
  saveOrderChanges.textContent = "حفظ التغييرات";
});

// ===============================
// SEARCH + FILTER
// ===============================

searchOrder?.addEventListener("input", filterOrders);
statusFilter?.addEventListener("change", filterOrders);

function filterOrders() {

  const search = searchOrder.value.toLowerCase();
  const status = statusFilter.value;

  const filtered = allOrders.filter(order => {

    const matchSearch =
      (order.orderCode || order.orderNumber || "")
        .toLowerCase()
        .includes(search);

    const matchStatus =
      !status || order.status === status;

    return matchSearch && matchStatus;
  });

  renderOrders(filtered);
}

// ===============================
// DATE FORMAT
// ===============================

function formatDate(timestamp) {
  if (!timestamp?.toDate) return "N/A";

  return timestamp.toDate().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// ===============================
// STATUS CLASS
// ===============================

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