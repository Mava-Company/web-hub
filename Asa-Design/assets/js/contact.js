// assets/js/contact.js
import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ======================================
// WEBSITE SETTINGS
// ======================================

const siteSettings = {
  siteName: "Creative Agency",

  description:
    "أفضل منصة للخدمات الرقمية والإبداعية",

  whatsapp: "967773645841",

  phone: "+967 773 645 841",

  email: "ash.design.hd@gmail.com",

  address:
    "اليمن-صنعاء",

  heroTitle: "تواصل معنا",

  heroDescription:
    "يسعدنا التواصل معك والإجابة على جميع استفساراتك في أي وقت.",
};



// ======================================
// DOM
// ======================================


// ======================================
// INIT
// ======================================

function init() {
  loadHero();
  loadContactInfo();
  loadMap();
  loadFooter();
  setupWhatsapp();
  setupForm();
  setupMobileMenu();
}

document.addEventListener(
  "DOMContentLoaded",
  init
);

// ======================================
// HERO
// ======================================

function loadHero() {
  document.getElementById(
    "contactHeroTitle"
  ).textContent =
    siteSettings.heroTitle;

  document.getElementById(
    "contactHeroDescription"
  ).textContent =
    siteSettings.heroDescription;
}

// ======================================
// CONTACT INFO
// ======================================

function loadContactInfo() {
  document.getElementById(
    "contactPhone"
  ).textContent =
    siteSettings.phone;

  document.getElementById(
    "contactEmail"
  ).textContent =
    siteSettings.email;

  document.getElementById(
    "contactAddress"
  ).textContent =
    siteSettings.address;

  document.getElementById(
    "contactWhatsapp"
  ).href =
    `https://wa.me/${siteSettings.whatsapp}`;
}

// ======================================
// MAP
// ======================================

function loadMap() {
  const mapContainer =
    document.getElementById(
      "mapContainer"
    );

  mapContainer.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3847.4278165652777!2d44.156700175121095!3d15.353299685227224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIxJzExLjkiTiA0NMKwMDknMzMuNCJF!5e0!3m2!1sen!2str!4v1779650502959!5m2!1sen!2str"
      width="100%"
      height="400"
      style="border:0;"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  `;
}


// ======================================
// CONTACT FORM
// ======================================

function setupForm() {
  messageForm.addEventListener(
    "submit",
    handleMessageSubmit
  );
}
async function handleMessageSubmit(e) {

  e.preventDefault();

  try {

    const submitBtn =
      messageForm.querySelector("button");

    submitBtn.disabled = true;

    submitBtn.textContent =
      "جاري الإرسال...";

    const name =
      document.getElementById("fullName").value;

    const email =
      document.getElementById("email").value;

    const subject =
      document.getElementById("subject").value;

    const message =
      document.getElementById("message").value;

    // SAVE TO FIREBASE

    await addDoc(collection(db, "messages"), {

      name,
      email,
      subject,
      message,

      status: "unread",

      createdAt: serverTimestamp()

    });

    alert("تم إرسال رسالتك بنجاح");

    messageForm.reset();

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء إرسال الرسالة");

  } finally {

    const submitBtn =
      messageForm.querySelector("button");

    submitBtn.disabled = false;

    submitBtn.textContent =
      "إرسال الرسالة";

  }

}
  // CREATE MESSAGE

  
  // SAVE


// ======================================
// FOOTER
// ======================================

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

// ======================================
// WHATSAPP
// ======================================

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

// ======================================
// MOBILE MENU
// ======================================

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