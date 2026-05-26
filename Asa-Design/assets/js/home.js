// assets/js/home.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  doc,
  getDoc, 
  onSnapshot, 
  query,
  orderBy, 
  limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===========================
// WEBSITE SETTINGS
// ===========================

const siteSettings = {
  siteName: "Creative Agency",
  description: "أفضل منصة للخدمات الرقمية والإبداعية",
  whatsapp: "967773645841",
  email: "info@example.com",
  heroTitle: "حوّل فكرتك إلى مشروع ناجح",
  heroDescription:
    "نقدم خدمات احترافية في التصميم، البرمجة، التسويق وصناعة الهوية التجارية.",
};

// ===========================
// DUMMY DATA
// لاحقاً نستبدلها بـ Firebase
// ===========================

// ===========================
// DOM ELEMENTS
// ===========================

const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");

const featuredServicesContainer = document.getElementById(
  "featuredServicesContainer"
);

const portfolioContainer =
  document.getElementById("portfolioContainer");

const testimonialsContainer = document.getElementById(
  "testimonialsContainer"
);

const projectsCount = document.getElementById("projectsCount");
const servicesCount = document.getElementById("servicesCount");
const clientsCount = document.getElementById("clientsCount");

const whatsappBtn =
  document.getElementById("whatsappBtn");

const ctaWhatsappBtn =
  document.getElementById("ctaWhatsappBtn");

const floatingWhatsapp =
  document.getElementById("floatingWhatsapp");

const footerWhatsapp =
  document.getElementById("footerWhatsapp");

const footerEmail =
  document.getElementById("footerEmail");

const footerSiteName =
  document.getElementById("footerSiteName");

const footerDescription =
  document.getElementById("footerDescription");

const copyrightText =
  document.getElementById("copyrightText");

// ===========================
// INIT WEBSITE
// ===========================
async function initWebsite() {
  loadSettings();
  loadServices();
  loadPortfolio();
  loadStatsRealtime();
  loadStats();
  setupMobileMenu();
}

function loadServices() {
  const container = document.getElementById("featuredServicesContainer");

  const q = query(
    collection(db, "services"),
    orderBy("createdAt", "desc"),
    limit(3)
  );

  onSnapshot(q, (snapshot) => {
    container.innerHTML = "";

    snapshot.forEach((docSnap) => {
      const service = docSnap.data();
      const id = docSnap.id;

      container.innerHTML += `
        <div class="service-card">

          <div class="service-image">
            <img src="${service.image}" alt="${service.title}">
          </div>

          <div class="service-content">

            <h3>${service.title}</h3>

            <p>${service.description}</p>

            <span class="service-price">
              ${service.price}
            </span>

            <a href="order.html?id=${id}" class="order-btn">
              اطلب الآن
            </a>

          </div>

        </div>
      `;
    });
  });
}





function loadPortfolio() {
  onSnapshot(collection(db, "portfolio"), (snapshot) => {

    const projects = [];

    snapshot.forEach((docSnap) => {
      projects.push({
        id: docSnap.id,
        ...docSnap.data()
      });
    });

    // 🔥 ترتيب الأحدث أولاً (إذا عندك date أو createdAt)
    projects.sort((a, b) => {
      return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
    });

    // 🔥 أخذ آخر 4 فقط
    const latest = projects.slice(0, 4);

    portfolioContainer.innerHTML = "";

    latest.forEach((p) => {

      const cover =
        p.media?.find(m => m.type === "image")?.url ||
        p.media?.[0]?.url ||
        "";

      portfolioContainer.innerHTML += `
        <div class="portfolio-card">

          <div class="portfolio-image">

            <img src="${cover}" class="portfolio-cover" />

            <div class="portfolio-overlay">
              <a href="project.html?id=${p.id}" class="view-btn">
                عرض المشروع
              </a>
            </div>

          </div>

          <div class="portfolio-content">
            <h3>${p.title}</h3>
          </div>

        </div>
      `;
    });
  });
}
function loadStatsRealtime() {

  onSnapshot(collection(db, "portfolio"), (snap) => {
    animateCounter(projectsCount, snap.size);
  });

  onSnapshot(collection(db, "services"), (snap) => {
    animateCounter(servicesCount, snap.size);
  });

  onSnapshot(collection(db, "users"), (snap) => {
    animateCounter(clientsCount, snap.size);
  });
}


function loadSettings() {
  const ref = doc(db, "settings", "site");

  onSnapshot(ref, (snap) => {
    if (!snap.exists()) return;

    const data = snap.data();

    heroTitle.textContent = data.heroTitle;
    heroDescription.textContent = data.heroDescription;

    footerSiteName.textContent = data.siteName;
    footerDescription.textContent = data.description;

    footerEmail.textContent = data.email;
    footerEmail.href = `mailto:${data.email}`;

    siteSettings.whatsapp = data.whatsapp;

    setupWhatsappLinks();
  });
}







// ===========================
// STATS
// ===========================

function animateCounter(element, target) {
  let count = 0;

  const speed = target / 100;

  const interval = setInterval(() => {
    count += speed;

    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    element.textContent = Math.floor(count);
  }, 20);
}

function loadStats() {
  animateCounter(projectsCount, 250);
  animateCounter(servicesCount, 45);
  animateCounter(clientsCount, 180);
}

// ===========================
// FOOTER
// ===========================

function loadFooter() {
  footerSiteName.textContent =
    siteSettings.siteName;

  footerDescription.textContent =
    siteSettings.description;

  footerEmail.textContent =
    siteSettings.email;

  footerEmail.href =
    `mailto:${siteSettings.email}`;
    
    footerWhatsapp.textContent =
    siteSettings.whatsapp;

  const currentYear =
    new Date().getFullYear();

  copyrightText.textContent =
    `© ${currentYear} جميع الحقوق محفوظة`;
}

// ===========================
// WHATSAPP
// ===========================

function setupWhatsappLinks() {
  const whatsappURL =
    `https://wa.me/${siteSettings.whatsapp}`;

  whatsappBtn.href = whatsappURL;

  ctaWhatsappBtn.href = whatsappURL;

  floatingWhatsapp.href = whatsappURL;

  footerWhatsapp.href = whatsappURL;
}

// ===========================
// MOBILE MENU
// ===========================

function setupMobileMenu() {
  const menuBtn =
    document.querySelector(".menu-btn");

  const navbar =
    document.querySelector(".navbar");

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// ===========================
// START
// ===========================

document.addEventListener(
  "DOMContentLoaded",
  initWebsite
);