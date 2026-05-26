// ===============================
// IMPORTS
// ===============================

import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  uploadImage,
  uploadVideo
} from "./cloudinary.js";

// ===============================
// ELEMENTS
// ===============================

const form = document.getElementById("addServiceForm");

const titleInput = document.getElementById("serviceTitle");
const descriptionInput = document.getElementById("serviceDescription");
const priceInput = document.getElementById("servicePrice");

const imageInput = document.getElementById("serviceImage");
const galleryInput = document.getElementById("galleryImages");

const videoInput = document.getElementById("serviceVideos");

const statusInput = document.getElementById("serviceStatus");

const previewImage = document.getElementById("previewImage");

const submitBtn = document.getElementById("submitBtn");

const galleryPreview = document.getElementById("galleryPreview");

const videoPreviewContainer = document.getElementById("videoPreviewContainer");
// ===============================
// IMAGE PREVIEW
// ===============================

imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);

});

// ===============================
// ADD SERVICE
// ===============================

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    // ===============================
    // BUTTON LOADING
    // ===============================

    submitBtn.disabled = true;
    submitBtn.textContent = "جاري الإضافة...";

    // ===============================
    // GET VALUES
    // ===============================

    const title = titleInput.value.trim();

    const description = descriptionInput.value.trim();

    const price = Number(priceInput.value);

    const mainImageFile = imageInput.files[0];

    const galleryFiles = galleryInput.files;

    const videoFiles = videoInput.files;

    const isActive = statusInput.checked;

    // ===============================
    // VALIDATION
    // ===============================

    if (!title || !description || !price || !mainImageFile) {

      alert("يرجى ملء جميع الحقول المطلوبة");

      return;

    }

    // ===============================
    // UPLOAD MAIN IMAGE
    // ===============================

    const mainImageData = await uploadImage(mainImageFile);

    // ===============================
    // UPLOAD GALLERY IMAGES
    // ===============================

    let gallery = [];

    if (galleryFiles.length > 0) {

      for (const file of galleryFiles) {

        const uploaded = await uploadImage(file);

        gallery.push({
          url: uploaded.url,
          public_id: uploaded.public_id
        });

      }

    }

    // ===============================
    // UPLOAD VIDEOS
    // ===============================

    let videos = [];

    if (videoFiles.length > 0) {

      for (const file of videoFiles) {

        const uploadedVideo = await uploadVideo(file);

        videos.push({
          url: uploadedVideo.url,
          public_id: uploadedVideo.public_id
        });

      }

    }

    // ===============================
    // SAVE TO FIRESTORE
    // ===============================

    await addDoc(collection(db, "services"), {

      // BASIC INFO
      title,
      description,
      price,

      // STATUS
      isActive,

      // MAIN IMAGE
      image: mainImageData.url,
      imageId: mainImageData.public_id,

      // GALLERY
      gallery,

      // VIDEOS
      videos,

      // EXTRA
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()

    });

    // ===============================
    // SUCCESS
    // ===============================

    alert("تمت إضافة الخدمة بنجاح");

    form.reset();

    previewImage.src = "";

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء إضافة الخدمة");

  } finally {

    submitBtn.disabled = false;

    submitBtn.textContent = "حفظ الخدمة";

  }

});


// ===============================
// ELEMENTS
// ===============================



// ===============================
// MAIN IMAGE PREVIEW
// ===============================

imageInput.addEventListener("change", () => {

  const file = imageInput.files[0];

  if (!file) return;

  const imageURL = URL.createObjectURL(file);

  previewImage.src = imageURL;

});

// ===============================
// GALLERY IMAGES PREVIEW
// ===============================

galleryInput.addEventListener("change", () => {

  galleryPreview.innerHTML = "";

  const files = galleryInput.files;

  if (!files.length) return;

  for (const file of files) {

    const imageURL = URL.createObjectURL(file);

    const img = document.createElement("img");

    img.src = imageURL;

    img.classList.add("gallery-preview-image");

    galleryPreview.appendChild(img);

  }

});

// ===============================
// VIDEOS PREVIEW
// ===============================

videoInput.addEventListener("change", () => {

  videoPreviewContainer.innerHTML = "";

  const files = videoInput.files;

  if (!files.length) return;

  for (const file of files) {

    const videoURL = URL.createObjectURL(file);

    const video = document.createElement("video");

    video.src = videoURL;

    video.controls = true;

    video.classList.add("preview-video");

    videoPreviewContainer.appendChild(video);

  }

});