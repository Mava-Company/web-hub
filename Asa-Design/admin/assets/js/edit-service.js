// ===============================
// IMPORTS
// ===============================


import {
  db,
  auth
} from "./firebase-config.js";

import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  uploadImage,
  uploadVideo
} from "./cloudinary.js";


import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// SERVICE ID
// ===============================

const params = new URLSearchParams(window.location.search);

const serviceId = params.get("id");

// ===============================
// ELEMENTS
// ===============================

const form = document.getElementById("editServiceForm");

const titleInput = document.getElementById("serviceTitle");

const descriptionInput = document.getElementById("serviceDescription");

const priceInput = document.getElementById("servicePrice");

const imageInput = document.getElementById("serviceImage");

const galleryInput = document.getElementById("galleryImages");

const videoInput = document.getElementById("serviceVideos");

const statusInput = document.getElementById("serviceStatus");

const previewImage = document.getElementById("previewImage");

const galleryPreview = document.getElementById("galleryPreview");

const videoPreviewContainer = document.getElementById("videoPreviewContainer");

const currentImages = document.getElementById("currentImages");

const submitBtn = document.getElementById("submitBtn");
const loadingOverlay = document.getElementById("loadingOverlay");

const logoutBtn = document.getElementById("logoutBtn");



// ===============================
// CURRENT DATA
// ===============================

let currentMainImage = "";

let currentMainImageId = "";

let currentGallery = [];

let currentVideos = [];

// ===============================
// LOAD SERVICE
// ===============================

async function loadService() {

  try {

            loadingOverlay.style.display = "flex";


    const serviceRef = doc(db, "services", serviceId);

    const snap = await getDoc(serviceRef);

    if (!snap.exists()) {

      alert("الخدمة غير موجودة");

      return;

    }

    const service = snap.data();

    // ===============================
    // SET VALUES
    // ===============================

    titleInput.value = service.title || "";

    descriptionInput.value = service.description || "";

    priceInput.value = service.price || "";

    statusInput.checked = service.isActive || false;

    // ===============================
    // MAIN IMAGE
    // ===============================

    currentMainImage = service.image || "";

    currentMainImageId = service.imageId || "";

    previewImage.src = currentMainImage;

    // ===============================
    // GALLERY
    // ===============================

    currentGallery = service.gallery || [];

    currentGallery.forEach((img) => {

      const image = document.createElement("img");

      image.src = img.url;

      image.classList.add("gallery-preview-image");

      currentImages.appendChild(image);

    });

    // ===============================
    // VIDEOS
    // ===============================

    currentVideos = service.videos || [];

    currentVideos.forEach((vid) => {

      const video = document.createElement("video");

      video.src = vid.url;

      video.controls = true;

      video.classList.add("preview-video");

      currentImages.appendChild(video);

    });

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحميل الخدمة");

  }
  finally {

    loadingOverlay.style.display = "none";
  }

}

loadService();

// ===============================
// MAIN IMAGE PREVIEW
// ===============================

imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if (!file) return;

  previewImage.src = URL.createObjectURL(file);

});

// ===============================
// GALLERY PREVIEW
// ===============================

galleryInput.addEventListener("change", () => {

  galleryPreview.innerHTML = "";

  const files = galleryInput.files;

  for (const file of files) {

    const img = document.createElement("img");

    img.src = URL.createObjectURL(file);

    img.classList.add("gallery-preview-image");

    galleryPreview.appendChild(img);

  }

});

// ===============================
// VIDEO PREVIEW
// ===============================

videoInput.addEventListener("change", () => {

  videoPreviewContainer.innerHTML = "";

  const files = videoInput.files;

  for (const file of files) {

    const video = document.createElement("video");

    video.src = URL.createObjectURL(file);

    video.controls = true;

    video.classList.add("preview-video");

    videoPreviewContainer.appendChild(video);

  }

});

// ===============================
// UPDATE SERVICE
// ===============================

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    submitBtn.disabled = true;

    submitBtn.textContent = "جاري الحفظ...";

    let mainImage = currentMainImage;

    let mainImageId = currentMainImageId;

    // ===============================
    // NEW MAIN IMAGE
    // ===============================

    const newMainImage = imageInput.files[0];

    if (newMainImage) {

      const uploaded = await uploadImage(newMainImage);

      mainImage = uploaded.url;

      mainImageId = uploaded.public_id;

    }

    // ===============================
    // NEW GALLERY
    // ===============================

    let gallery = [...currentGallery];

    if (galleryInput.files.length > 0) {

      gallery = [];

      for (const file of galleryInput.files) {

        const uploaded = await uploadImage(file);

        gallery.push({
          url: uploaded.url,
          public_id: uploaded.public_id
        });

      }

    }

    // ===============================
    // NEW VIDEOS
    // ===============================

    let videos = [...currentVideos];

    if (videoInput.files.length > 0) {

      videos = [];

      for (const file of videoInput.files) {

        const uploaded = await uploadVideo(file);

        videos.push({
          url: uploaded.url,
          public_id: uploaded.public_id
        });

      }

    }

    // ===============================
    // UPDATE FIRESTORE
    // ===============================

    await updateDoc(doc(db, "services", serviceId), {

      title: titleInput.value.trim(),

      description: descriptionInput.value.trim(),

      price: Number(priceInput.value),

      isActive: statusInput.checked,

      image: mainImage,

      imageId: mainImageId,

      gallery,

      videos

    });

    alert("تم تحديث الخدمة بنجاح");

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحديث الخدمة");

  } finally {

    submitBtn.disabled = false;

    submitBtn.textContent = "حفظ التعديلات";

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