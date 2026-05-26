// ===============================
// IMPORTS
// ===============================

import { db } from "./firebase-config.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===============================
// SETTINGS
// ===============================

const siteSettings = {
  siteName: "Creative Agency",
  description: "أفضل منصة للخدمات الرقمية",
  whatsapp: "967773645841",
  email: "ash.design.hd@gmail.com",
  ctaTitle: "هل أنت جاهز للبدء؟",
  ctaDescription: "تواصل معنا الآن وابدأ مشروعك مباشرة."
};

// ===============================
// GET ID
// ===============================

const params = new URLSearchParams(window.location.search);
const serviceId = params.get("id");
const loadingOverlay =
  document.getElementById("loadingOverlay");

  const serviceMediaSlider =
  document.getElementById("serviceMediaSlider");
// ===============================
// CHECK ID
// ===============================

if (!serviceId) {
  document.body.innerHTML = `
    <div style="height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column">
      <h2>لا يوجد معرف خدمة</h2>
      <a href="services.html">رجوع</a>
    </div>
  `;
  throw new Error("Missing service ID");
}

// ===============================
// LOAD SERVICE FROM FIRESTORE
// ===============================

async function loadService() {
  try {

        loadingOverlay.style.display = "flex";

    const ref = doc(db, "services", serviceId);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      document.body.innerHTML = `
        <div style="height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column">
          <h2>الخدمة غير موجودة</h2>
          <a href="services.html">رجوع</a>
        </div>
      `;
      return;
    }

    const service = snap.data();

    renderService(service);
    setupWhatsapp(service);
    renderFooter();
    renderMediaSlider(service);

  } catch (err) {
    console.error(err);
    alert("خطأ في تحميل الخدمة");
  }
   finally {

    loadingOverlay.style.display = "none";

  }
}

document.addEventListener("DOMContentLoaded", loadService);

// ===============================
// RENDER MAIN DATA
// ===============================
function renderService(service) {

  document.getElementById("serviceTitle").textContent = service.title || "";

  document.getElementById("serviceMainTitle").textContent = service.title || "";
  document.getElementById("serviceFullDescription").textContent = service.description || "";
  document.getElementById("servicePrice").textContent = service.price || "";

  document.getElementById("orderBtn").href =
    `order.html?id=${serviceId}`;

  document.title = service.title || "Service";

  // =========================
  // ACTIVE / INACTIVE STATUS
  // =========================

  const statusBox = document.getElementById("serviceStatus");

  if (statusBox) {

    if (service.isActive) {
      statusBox.textContent = "الخدمة متاحة";
      statusBox.className = "status active";
    } else {
      statusBox.textContent = "الخدمة غير متاحة";
      statusBox.className = "status inactive";
    }

  }
  if (!service.isActive) {
  document.getElementById("orderBtn").style.display = "none";
}
}

// ===============================
// GALLERY
// ===============================

function renderMediaSlider(service) {

  if (!serviceMediaSlider) return;

  const mediaWrapper = document.createElement("div");

  let html = "";

  if (service.image) {
    html += `<img src="${service.image}" class="service-media active"/>`;
  }

  if (service.gallery?.length) {
    service.gallery.forEach(img => {
      html += `<img src="${img.url}" class="service-media"/>`;
    });
  }

  if (service.videos?.length) {
    service.videos.forEach(video => {
      html += `
        <video class="service-media" controls>
          <source src="${video.url}" type="video/mp4">
        </video>
      `;
    });
  }

  mediaWrapper.innerHTML = html;

  // مهم: لا تستخدم innerHTML على الحاوي كامل
  const oldWrapper = serviceMediaSlider.querySelector(".media-wrapper");
  if (oldWrapper) oldWrapper.remove();

  mediaWrapper.classList.add("media-wrapper");
  serviceMediaSlider.appendChild(mediaWrapper);

  requestAnimationFrame(() => {
    initMediaSlider();
  });
}



// ===============================
// WHATSAPP
// ===============================

function setupWhatsapp(service) {

  const message = `مرحباً، أريد طلب خدمة ${service.title}`;

  const url = `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent(message)}`;

  const btn1 = document.getElementById("serviceWhatsappBtn");
  const btn2 = document.getElementById("ctaWhatsappBtn");
  const btn3 = document.getElementById("floatingWhatsapp");
  const btn4 = document.getElementById("footerWhatsapp");

  if (btn1) btn1.href = url;
  if (btn2) btn2.href = url;
  if (btn3) btn3.href = url;
  if (btn4) btn4.href = url;
}

// ===============================
// FOOTER
// ===============================

function renderFooter() {

  document.getElementById("footerSiteName").textContent = siteSettings.siteName;
  document.getElementById("footerDescription").textContent = siteSettings.description;
  document.getElementById("footerEmail").textContent = siteSettings.email;
  document.getElementById("footerEmail").href = `mailto:${siteSettings.email}`;

  document.getElementById("ctaTitle").textContent = siteSettings.ctaTitle;
  document.getElementById("ctaDescription").textContent = siteSettings.ctaDescription;

  document.getElementById("copyrightText").textContent =
    `© ${new Date().getFullYear()} جميع الحقوق محفوظة`;
}

// ===============================
// SIMPLE MEDIA SLIDER
// ===============================
function initMediaSlider() {
  const mediaItems = serviceMediaSlider.querySelectorAll(".service-media");
  const prevBtn = document.getElementById("prevMedia");
  const nextBtn = document.getElementById("nextMedia");

  if (!mediaItems.length) return;

  let current = 0;

  function show(index) {
    mediaItems.forEach((item) => {
      item.classList.remove("active");

      if (item.tagName === "VIDEO") {
        item.pause();
        item.currentTime = 0;
      }
    });

    mediaItems[index].classList.add("active");
  }

  show(current);

  if (nextBtn) {
    nextBtn.onclick = () => {
      current = (current + 1) % mediaItems.length;
      show(current);
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      current = (current - 1 + mediaItems.length) % mediaItems.length;
      show(current);
    };
  }
}