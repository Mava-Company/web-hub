// ===============================
// IMPORTS
// ===============================

import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===============================
// ELEMENTS
// ===============================

const servicesContainer =
  document.getElementById("servicesContainer");

const categoryFilterContainer =
  document.getElementById("categoryFilterContainer");

const searchInput =
  document.getElementById("serviceSearchInput");

const sortSelect =
  document.getElementById("sortServices");

const emptyState =
  document.getElementById("emptyState");
  

const loadingOverlay =
  document.getElementById("loadingOverlay");

// ===============================
// VARIABLES
// ===============================

let allServices = [];

let currentCategory = "all";

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

      const service = {
        id: docSnap.id,
        ...docSnap.data()
      };

      // only active services
      if (service.status !== "inactive") {
        allServices.push(service);
      }

    });

    renderCategories();

    renderServices(allServices);

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

  servicesContainer.innerHTML = "";

  if (!services.length) {

    emptyState.classList.remove("hidden");

    return;

  }

  emptyState.classList.add("hidden");

  services.forEach((service) => {

    servicesContainer.innerHTML += `

      <div class="service-card">

        <div class="service-image">

          <img src="${service.image}" alt="${service.title}" />

        </div>

        <div class="service-content">

          <span class="service-category">
            ${service.category || "عام"}
          </span>

          <h3>
            ${service.title || ""}
          </h3>

          <p>
            ${service.shortDescription || ""}
          </p>

          <div class="service-meta">

            <span class="price">
              ${service.price || 0}$
            </span>

            <span class="duration">
              ${service.duration || ""}
            </span>

             <!-- زر التفاصيل -->
      <a href="service-details.html?id=${service.id}" class="btn primary-btn">
        عرض التفاصيل
      </a>


          </div>

        </div>

      </div>

    `;

  });

}

// ===============================
// RENDER CATEGORIES
// ===============================

function renderCategories() {

  const categories = [
    ...new Set(
      allServices.map(service => service.category)
    )
  ];

  categoryFilterContainer.innerHTML = `

    <button class="category-btn active"
    data-category="all">

      الكل

    </button>

  `;

  categories.forEach((category) => {

    if (!category) return;

    categoryFilterContainer.innerHTML += `

      <button class="category-btn"
      data-category="${category}">

        ${category}

      </button>

    `;

  });

  attachCategoryEvents();

}

// ===============================
// CATEGORY EVENTS
// ===============================

function attachCategoryEvents() {

  const buttons =
    document.querySelectorAll(".category-btn");

  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      buttons.forEach((b) =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      currentCategory = btn.dataset.category;

      filterServices();

    });

  });

}

// ===============================
// SEARCH + SORT
// ===============================

searchInput.addEventListener("input", filterServices);

sortSelect.addEventListener("change", filterServices);

function filterServices() {

  let filtered = [...allServices];

  // CATEGORY
  if (currentCategory !== "all") {

    filtered = filtered.filter(
      service => service.category === currentCategory
    );

  }

  // SEARCH
  const searchValue =
    searchInput.value.toLowerCase();

  if (searchValue) {

    filtered = filtered.filter(service =>
      (service.title || "")
        .toLowerCase()
        .includes(searchValue)
    );

  }

  // SORT
  const sortValue = sortSelect.value;

  if (sortValue === "latest") {

    filtered.sort((a, b) =>
      b.createdAt?.seconds - a.createdAt?.seconds
    );

  }

  if (sortValue === "oldest") {

    filtered.sort((a, b) =>
      a.createdAt?.seconds - b.createdAt?.seconds
    );

  }

  if (sortValue === "price-low") {

    filtered.sort((a, b) =>
      Number(a.price) - Number(b.price)
    );

  }

  if (sortValue === "price-high") {

    filtered.sort((a, b) =>
      Number(b.price) - Number(a.price)
    );

  }

  renderServices(filtered);

}

