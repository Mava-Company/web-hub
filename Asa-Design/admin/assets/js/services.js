// ===============================
// IMPORTS
// ===============================


import {
  db,
  auth
} from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// ===============================
// WAIT FOR DOM (IMPORTANT FIX)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // ELEMENTS
  // ===============================

  const servicesTable = document.getElementById("servicesTable");
  const searchService = document.getElementById("searchService");
  const categoryFilter = document.getElementById("categoryFilter");
  const deleteModal = document.getElementById("deleteModal");
  const confirmDelete = document.getElementById("confirmDelete");
  const cancelDelete = document.getElementById("cancelDelete");
  const loadingOverlay = document.getElementById("loadingOverlay");
const logoutBtn = document.getElementById("logoutBtn");

  // ===============================
  // VARIABLES
  // ===============================

  let allServices = [];
  let currentDeleteId = null;
  let currentImageName = null;

  // ===============================
  // LOAD SERVICES
  // ===============================

  async function loadServices() {
    try {
      loadingOverlay.style.display = "flex";

      const servicesQuery = query(
        collection(db, "services"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(servicesQuery);

      allServices = [];

      snapshot.forEach((docSnap) => {
        allServices.push({
          id: docSnap.id,
          ...docSnap.data()
        });
      });

      renderServices(allServices);
      loadCategories();

    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء تحميل الخدمات");
    } finally {
      loadingOverlay.style.display = "none";
    }
  }

  loadServices();

  // ===============================
  // RENDER SERVICES
  // ===============================

  function renderServices(services) {
    servicesTable.innerHTML = "";

    if (!services.length) {
      servicesTable.innerHTML = `
        <tr>
          <td colspan="7">لا توجد خدمات</td>
        </tr>
      `;
      return;
    }

    services.forEach((service) => {
      servicesTable.innerHTML += `
        <tr>
          <td>
            <img src="${service.image}" class="service-thumb" />
          </td>

          <td>${service.title || "N/A"}</td>
          <td>${service.category || "عام"}</td>
          <td>${service.price || 0}$</td>

          <td>
            <span class="service-status ${service.status || "active"}">
              ${service.status || "active"}
            </span>
          </td>

          <td>${formatDate(service.createdAt)}</td>

          <td>
            <div class="table-actions">

              <a href="edit-service.html?id=${service.id}" class="action-btn edit-btn">
                ✏️
              </a>

              <button
                class="action-btn delete-btn"
                data-id="${service.id}"
                data-image="${service.imageName || ""}">
                🗑️
              </button>

            </div>
          </td>
        </tr>
      `;
    });

    attachDeleteEvents();
  }

  // ===============================
  // DELETE EVENTS
  // ===============================

  function attachDeleteEvents() {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentDeleteId = btn.dataset.id;
        currentImageName = btn.dataset.image || null;

        deleteModal.classList.remove("hidden");
      });
    });
  }

  // ===============================
  // CONFIRM DELETE
  // ===============================

  confirmDelete.addEventListener("click", async () => {
    try {
      if (!currentDeleteId) return;

      confirmDelete.disabled = true;
      confirmDelete.textContent = "جاري الحذف...";

      // delete image
      if (currentImageName) {
        const imageRef = ref(storage, `services/${currentImageName}`);
        await deleteObject(imageRef);
      }

      // delete doc
      await deleteDoc(doc(db, "services", currentDeleteId));

      // update UI
      allServices = allServices.filter(
        (s) => s.id !== currentDeleteId
      );

      renderServices(allServices);

      deleteModal.classList.add("hidden");

      currentDeleteId = null;
      currentImageName = null;

      alert("تم حذف الخدمة بنجاح");

    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الحذف");

    } finally {
      confirmDelete.disabled = false;
      confirmDelete.textContent = "حذف";
    }
  });

  // ===============================
  // CANCEL DELETE
  // ===============================

  cancelDelete.addEventListener("click", () => {
    deleteModal.classList.add("hidden");
    currentDeleteId = null;
    currentImageName = null;
  });

  // ===============================
  // SEARCH + FILTER
  // ===============================

  searchService.addEventListener("input", filterServices);
  categoryFilter.addEventListener("change", filterServices);

  function filterServices() {
    const searchValue = searchService.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    const filtered = allServices.filter((service) => {
      const matchSearch =
        (service.title || "").toLowerCase().includes(searchValue);

      const matchCategory =
        !categoryValue || service.category === categoryValue;

      return matchSearch && matchCategory;
    });

    renderServices(filtered);
  }

  // ===============================
  // LOAD CATEGORIES
  // ===============================

  function loadCategories() {
    const categories = [
      ...new Set(allServices.map((s) => s.category))
    ];

    categoryFilter.innerHTML = `
      <option value="">جميع التصنيفات</option>
    `;

    categories.forEach((cat) => {
      if (!cat) return;

      categoryFilter.innerHTML += `
        <option value="${cat}">${cat}</option>
      `;
    });
  }

  // ===============================
  // FORMAT DATE
  // ===============================

  function formatDate(timestamp) {
    if (!timestamp) return "N/A";

    return timestamp.toDate().toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

});




// ===============================
// LOGOUT
// ===============================

logoutBtn.addEventListener("click", async () => {

  try {

    await signOut(auth);

    window.location.href = "../login.html";

  } catch (error) {

    console.error(error);
  }

});