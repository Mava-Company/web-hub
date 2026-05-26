// ===============================
// IMPORTS
// ===============================

import {
  db,
  storage
} from "./firebase-config.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// ===============================
// ELEMENTS
// ===============================

const settingsForm =
  document.getElementById("settingsForm");

// GENERAL

const siteName =
  document.getElementById("siteName");

const siteEmail =
  document.getElementById("siteEmail");

const sitePhone =
  document.getElementById("sitePhone");

const siteWhatsapp =
  document.getElementById("siteWhatsapp");

const siteDescription =
  document.getElementById("siteDescription");

// HERO

const heroTitle =
  document.getElementById("heroTitle");

const heroDescription =
  document.getElementById("heroDescription");

const heroImage =
  document.getElementById("heroImage");

// SOCIAL

const facebookLink =
  document.getElementById("facebookLink");

const instagramLink =
  document.getElementById("instagramLink");

const linkedinLink =
  document.getElementById("linkedinLink");

const telegramLink =
  document.getElementById("telegramLink");

// SEO

const metaTitle =
  document.getElementById("metaTitle");

const metaDescription =
  document.getElementById("metaDescription");

const metaKeywords =
  document.getElementById("metaKeywords");

// ===============================
// VARIABLES
// ===============================

let currentHeroImage = "";

// ===============================
// LOAD SETTINGS
// ===============================

async function loadSettings() {

  try {

    const settingsRef =
      doc(db, "settings", "main");

    const settingsSnap =
      await getDoc(settingsRef);

    if (!settingsSnap.exists()) return;

    const settings =
      settingsSnap.data();

    // GENERAL

    siteName.value =
      settings.siteName || "";

    siteEmail.value =
      settings.siteEmail || "";

    sitePhone.value =
      settings.sitePhone || "";

    siteWhatsapp.value =
      settings.siteWhatsapp || "";

    siteDescription.value =
      settings.siteDescription || "";

    // HERO

    heroTitle.value =
      settings.heroTitle || "";

    heroDescription.value =
      settings.heroDescription || "";

    currentHeroImage =
      settings.heroImage || "";

    // SOCIAL

    facebookLink.value =
      settings.facebookLink || "";

    instagramLink.value =
      settings.instagramLink || "";

    linkedinLink.value =
      settings.linkedinLink || "";

    telegramLink.value =
      settings.telegramLink || "";

    // SEO

    metaTitle.value =
      settings.metaTitle || "";

    metaDescription.value =
      settings.metaDescription || "";

    metaKeywords.value =
      settings.metaKeywords || "";

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحميل الإعدادات");

  }

}

loadSettings();

// ===============================
// SAVE SETTINGS
// ===============================

settingsForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    const submitBtn =
      settingsForm.querySelector("button");

    submitBtn.disabled = true;

    submitBtn.textContent =
      "جاري الحفظ...";

    let heroImageURL =
      currentHeroImage;

    // ===============================
    // UPLOAD HERO IMAGE
    // ===============================

    const heroFile =
      heroImage.files[0];

    if (heroFile) {

      const imageName =
        `hero-${Date.now()}-${heroFile.name}`;

      const imageRef =
        ref(storage, `settings/${imageName}`);

      await uploadBytes(
        imageRef,
        heroFile
      );

      heroImageURL =
        await getDownloadURL(imageRef);

    }

    // ===============================
    // SAVE TO FIRESTORE
    // ===============================

    await setDoc(
      doc(db, "settings", "main"),
      {

        // GENERAL

        siteName:
          siteName.value.trim(),

        siteEmail:
          siteEmail.value.trim(),

        sitePhone:
          sitePhone.value.trim(),

        siteWhatsapp:
          siteWhatsapp.value.trim(),

        siteDescription:
          siteDescription.value.trim(),

        // HERO

        heroTitle:
          heroTitle.value.trim(),

        heroDescription:
          heroDescription.value.trim(),

        heroImage:
          heroImageURL,

        // SOCIAL

        facebookLink:
          facebookLink.value.trim(),

        instagramLink:
          instagramLink.value.trim(),

        linkedinLink:
          linkedinLink.value.trim(),

        telegramLink:
          telegramLink.value.trim(),

        // SEO

        metaTitle:
          metaTitle.value.trim(),

        metaDescription:
          metaDescription.value.trim(),

        metaKeywords:
          metaKeywords.value.trim()

      }
    );

    alert("تم حفظ الإعدادات بنجاح");

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء حفظ الإعدادات");

  } finally {

    const submitBtn =
      settingsForm.querySelector("button");

    submitBtn.disabled = false;

    submitBtn.textContent =
      "حفظ الإعدادات";

  }

});