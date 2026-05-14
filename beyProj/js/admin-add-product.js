import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// 🔥 رفع صورة إلى Cloudinary
async function uploadImage(file) {

  const url = "https://api.cloudinary.com/v1_1/duqx7ngop/image/upload";

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "store_upload");

  const res = await fetch(url, {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  return data.secure_url;
}


// 🧠 إضافة المنتج
const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const files = document.querySelector("#images").files;

  if (!files.length) {
    alert("Please select images");
    return;
  }

  try {

    // 🔥 رفع كل الصور
    let imageUrls = [];

    for (let file of files) {
      const url = await uploadImage(file);
      imageUrls.push(url);
    }

    // 🧾 جمع البيانات
    const product = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      price: Number(document.querySelector("#price").value),
      oldPrice: Number(document.querySelector("#oldPrice").value),
      category: document.querySelector("#category").value,
      type: document.querySelector("#type").value,
      stock: Number(document.querySelector("#stock").value),
      status: document.querySelector("#status").value,
      condition: document.querySelector("#condition").value,
      warranty: Number(document.querySelector("#warranty").value) || 0 ,
      images: imageUrls,

      featured: document.querySelector("#featured").checked,
      bestSeller: document.querySelector("#bestSeller").checked,
      onSale: document.querySelector("#onSale").checked,

      createdAt: serverTimestamp()
    };

    // 💾 حفظ في Firebase
    await addDoc(collection(db, "products"), product);

    showToast("✅ Продуктът е добавен успешно!");

    form.reset();

  } catch (error) {
    console.error(error);
    alert("❌ Error adding product");
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