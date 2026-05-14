import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const table = document.getElementById("productsTable");

let products = [];


// 🔥 تحميل المنتجات
async function loadProducts() {

  const snapshot = await getDocs(collection(db, "products"));

  products = [];

  snapshot.forEach((docSnap) => {
    products.push({ id: docSnap.id, ...docSnap.data() });
  });

  render();
}


// 🧱 عرض المنتجات
function render() {

  table.innerHTML = "";

  products.forEach((p) => {

    const image =
      p.images && p.images.length > 0
        ? p.images[0]
        : "https://via.placeholder.com/60";

    const statusClass = p.stock > 0 ? "available" : "out";
    const statusText = p.stock > 0 ? "В наличност" : "Изчерпан";

    table.innerHTML += `
      <tr>

        <td>
          <div class="product-info">
            <img src="${image}" width="50">

            <div>
              <h3>${p.title || ""}</h3>
              <p>${p.type || ""}</p>
            </div>
          </div>
        </td>

        <td>${p.category || ""}</td>
        <td>${p.price || 0} лв</td>
        <td>${p.stock || 0}</td>

        <td>
          <span class="status ${statusClass}">
            ${statusText}
          </span>
        </td>

        <td>
          <div class="actions">

            <button class="edit-btn" data-id="${p.id}">
              Редактирай
            </button>

            <button class="delete-btn" data-id="${p.id}">
              Изтрий
            </button>

          </div>
        </td>

      </tr>
    `;
  });
}


// 🧠 Event delegation (احترافي)
document.addEventListener("click", async (e) => {

  // ✏️ تعديل
  if (e.target.classList.contains("edit-btn")) {

    const id = e.target.dataset.id;

    window.location.href = `edit-product.html?id=${id}`;
  }


  // ❌ حذف
  if (e.target.classList.contains("delete-btn")) {

    const id = e.target.dataset.id;

    if (!confirm("Delete product?")) return;

    await deleteDoc(doc(db, "products", id));

showToast("✅ Изтрито");
    loadProducts();
  }
});

function showToast(message, type = "success") {

  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.style.background =
    type === "error" ? "#dc3545" : "#28a745";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}
// 🚀 تشغيل
loadProducts();