// assets/js/portfolio.js
import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// =======================================
// WEBSITE SETTINGS
// =======================================

const siteSettings = {
  siteName: "Creative Agency",

  description:
    "أفضل منصة للخدمات الرقمية والإبداعية",

  whatsapp: "967773645841",

  email: "ash.design.hd@gmail.com",

  heroTitle: "معرض أعمالنا",

  heroDescription:
    "استكشف أحدث المشاريع والأعمال التي قمنا بتنفيذها لعملائنا.",
};
let portfolioProjects = [];
let filteredProjects = [];
// =======================================
// GLOBAL VARIABLES
// =======================================


let currentPage = 1;

const projectsPerPage = 6;

async function loadProjectsFromDB() {
  try {

    const q = query(
      collection(db, "portfolio"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    portfolioProjects = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    filteredProjects = [...portfolioProjects];

    renderFilters();
    renderProjects();
    renderPagination();

  } catch (err) {
    console.error(err);
  }
}
// =======================================
// DOM
// =======================================

const portfolioContainer =
  document.getElementById(
    "portfolioContainer"
  );

const portfolioFilters =
  document.getElementById(
    "portfolioFilters"
  );

const emptyPortfolio =
  document.getElementById(
    "emptyPortfolio"
  );

const paginationContainer =
  document.getElementById(
    "paginationContainer"
  );

// MODAL

const projectModal =
  document.getElementById(
    "projectModal"
  );

const closeProjectModal =
  document.getElementById(
    "closeProjectModal"
  );

const modalGallery =
  document.getElementById(
    "modalGallery"
  );

const projectTitle =
  document.getElementById(
    "projectTitle"
  );

const projectDescription =
  document.getElementById(
    "projectDescription"
  );

const projectCategory =
  document.getElementById(
    "projectCategory"
  );

const projectDate =
  document.getElementById(
    "projectDate"
  );

// =======================================
// INIT
// =======================================

function init() {
  loadHero();
  loadFooter();
  setupWhatsapp();
  setupMobileMenu();

  loadProjectsFromDB(); // 🔥 بدل البيانات الثابتة
}
document.addEventListener(
  "DOMContentLoaded",
  init
);

// =======================================
// HERO
// =======================================

function loadHero() {
  document.getElementById(
    "portfolioHeroTitle"
  ).textContent =
    siteSettings.heroTitle;

  document.getElementById(
    "portfolioHeroDescription"
  ).textContent =
    siteSettings.heroDescription;
}

// =======================================
// FILTERS
// =======================================
function renderFilters() {

  const categories = [
    "الكل",
    ...new Set(portfolioProjects.map(p => p.category))
  ];

  portfolioFilters.innerHTML = "";

  categories.forEach(category => {

    const button = document.createElement("button");

    button.classList.add("filter-btn");

    if (category === "الكل") {
      button.classList.add("active");
    }

    button.textContent = category;

    button.addEventListener("click", () => {

      document.querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      filterProjects(category);
    });

    portfolioFilters.appendChild(button);
  });
}

// =======================================
// FILTER PROJECTS
// =======================================
function filterProjects(category) {

  if (category === "الكل") {
    filteredProjects = [...portfolioProjects];
  } else {
    filteredProjects = portfolioProjects.filter(
      p => p.category === category
    );
  }

  currentPage = 1;

  renderProjects();
  renderPagination();
}

// =======================================
// RENDER PROJECTS
// =======================================
function renderProjects() {

  portfolioContainer.innerHTML = "";

  if (!filteredProjects.length) {
    emptyPortfolio.classList.remove("hidden");
    return;
  }

  emptyPortfolio.classList.add("hidden");

  const start = (currentPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;

  const paginated = filteredProjects.slice(start, end);

  paginated.forEach(project => {

    const cover = project.media?.[0]?.url || "";

    portfolioContainer.innerHTML += `
      <div class="portfolio-card">

        <div class="portfolio-image">

  <div class="portfolio-media">
  ${
    (project.media || []).map(m => `
      <div class="media-item">
        ${
          m.type === "image"
            ? `<img src="${m.url}" />`
            : `<video src="${m.url}" controls></video>`
        }
      </div>
    `).join("")
  }
</div>

  <div class="portfolio-overlay">
   <button class="view-project-btn" data-id="${project.id}">
  عرض المشروع
</button>
  </div>

</div>

        <div class="portfolio-content">

          <span class="portfolio-category">
            ${project.category || ""}
          </span>

          <h3>${project.title}</h3>

          <p>${project.description || ""}</p>

        </div>

      </div>
    `;
  });

  setupProjectButtons();
}

// =======================================
// PAGINATION
// =======================================

function renderPagination() {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(
    filteredProjects.length /
      projectsPerPage
  );

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {
    const button =
      document.createElement("button");

    button.textContent = i;

    button.classList.add(
      "pagination-btn"
    );

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener(
      "click",
      () => {
        currentPage = i;

        renderProjects();

        renderPagination();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    );

    paginationContainer.appendChild(
      button
    );
  }
}

// =======================================
// PROJECT MODAL
// =======================================
function setupProjectButtons() {
  document.querySelectorAll(".view-project-btn")
    .forEach(button => {
      button.addEventListener("click", () => {

        const id = button.dataset.id;

        window.location.href = `project.html?id=${id}`;
      });
    });
}

function openProjectModal(id) {

  const project = portfolioProjects.find(p => p.id === id);

  if (!project) return;

  modalGallery.innerHTML = "";

  (project.media || []).forEach(m => {

    modalGallery.innerHTML += `
      <div class="modal-media">

        ${
          m.type === "image"
            ? `<img src="${m.url}" />`
            : `<video src="${m.url}" controls></video>`
        }

      </div>
    `;
  });

  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectCategory.textContent = `التصنيف: ${project.category}`;
  projectDate.textContent = `التاريخ: ${project.date}`;

  projectModal.classList.remove("hidden");
}

// =======================================
// FOOTER
// =======================================

function loadFooter() {
  document.getElementById(
    "footerSiteName"
  ).textContent =
    siteSettings.siteName;

  document.getElementById(
    "footerDescription"
  ).textContent =
    siteSettings.description;

  document.getElementById(
    "footerEmail"
  ).textContent =
    siteSettings.email;

  document.getElementById(
    "footerEmail"
  ).href =
    `mailto:${siteSettings.email}`;

  document.getElementById(
    "copyrightText"
  ).textContent =
    `© ${new Date().getFullYear()} جميع الحقوق محفوظة`;
}

// =======================================
// WHATSAPP
// =======================================

function setupWhatsapp() {
  const whatsappURL =
    `https://wa.me/${siteSettings.whatsapp}`;

  document.getElementById(
    "floatingWhatsapp"
  ).href = whatsappURL;

  document.getElementById(
    "footerWhatsapp"
  ).href = whatsappURL;
}

// =======================================
// MOBILE MENU
// =======================================

function setupMobileMenu() {
  const menuBtn =
    document.querySelector(
      ".menu-btn"
    );

  const navbar =
    document.querySelector(
      ".navbar"
    );

  menuBtn.addEventListener(
    "click",
    () => {
      navbar.classList.toggle(
        "active"
      );
    }
  );
}