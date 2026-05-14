import { db } from "./firebase-config.js";

import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// 🔥 Cloudinary upload
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


// 🔥 ID من الرابط
const id = new URLSearchParams(window.location.search).get("id");

const productRef = doc(db, "products", id);


// 🧾 inputs
const form = document.getElementById("productForm");

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const oldPrice = document.getElementById("oldPrice");
const category = document.getElementById("category");
const type = document.getElementById("type");
const stock = document.getElementById("stock");
const status = document.getElementById("status");
const condition = document.getElementById("condition");
const warranty = document.getElementById("warranty");

const featured = document.getElementById("featured");
const bestSeller = document.getElementById("bestSeller");
const onSale = document.getElementById("onSale");

const imagesInput = document.getElementById("images");

let oldImages = [];


// 🔥 تحميل البيانات الحالية
async function loadProduct() {

  const snap = await getDoc(productRef);

  if (!snap.exists()) {
    alert("Product not found");
    return;
  }

  const data = snap.data();

  title.value = data.title || "";
  description.value = data.description || "";
  price.value = data.price || 0;
  oldPrice.value = data.oldPrice || 0;
  category.value = data.category || "";
  type.value = data.type || "";
  stock.value = data.stock || 0;
  status.value = data.status || "";
  condition.value = data.condition || "";
  warranty.value = data.warranty || 0;

  featured.checked = data.featured || false;
  bestSeller.checked = data.bestSeller || false;
  onSale.checked = data.onSale || false;

  oldImages = data.images || [];
}


// 💾 حفظ التعديلات (كل الخصائص)
form.addEventListener("submit", async (e) => {

  e.preventDefault();

  try {

    let newImages = [];

    // إذا رفع صور جديدة
    if (imagesInput.files.length > 0) {

      for (let file of imagesInput.files) {
        const url = await uploadImage(file);
        newImages.push(url);
      }

    } else {
      newImages = oldImages; // احتفظ بالقديمة
    }


    await updateDoc(productRef, {

      title: title.value,
      description: description.value,
      price: Number(price.value),
      oldPrice: Number(oldPrice.value),
      category: category.value,
      type: type.value,
      stock: Number(stock.value),
      status: status.value,
      condition: condition.value,
      warranty: Number(warranty.value),

      featured: featured.checked,
      bestSeller: bestSeller.checked,
      onSale: onSale.checked,

      images: newImages,

      updatedAt: serverTimestamp()
    });

    showToast("✅ Продуктът е обновен успешно!");

setTimeout(() => {
  window.location.href = "products.html";
}, 1200);


  } catch (error) {
    console.error(error);
    alert("Error updating product");
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

// 🚀 تشغيل
loadProduct();
