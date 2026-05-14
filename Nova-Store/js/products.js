import { db, auth } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("products");

let allProducts = [];


// 🔥 تحميل المنتجات
async function loadProducts() {

  const snapshot = await getDocs(collection(db, "products"));

  allProducts = [];

  snapshot.forEach(doc => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });

  render(allProducts);

}


// 🧱 عرض المنتجات
function render(products) {

  container.innerHTML = "";

  products.forEach(p => {

   let imagesHTML = "";

// 🔥 عرض كل الصور
if (p.images && p.images.length > 0) {

  p.images.forEach(img => {

    imagesHTML += `
      <img src="${img}" class="slider-image">
    `;

  });

} else {

  imagesHTML = `
    <img
      src="https://via.placeholder.com/300"
      class="slider-image"
    >
  `;

}



container.innerHTML += `

  <div class="product-card">

    <!-- 🔥 slider -->
    <div class="product-slider">

      ${imagesHTML}

    </div>

    <div class="product-info">

      <h3>${p.title}</h3>

      <p class="price">
        ${p.price} лв
      </p>

      <div class="buttons">

        <a
          href="product-details.html?id=${p.id}"
          class="details-btn"
        >
          Детайли
        </a>

        <button
          onclick="addToCart(
            '${p.id}',
            '${p.title}',
            ${p.price},
            '${p.images?.[0] || ""}'
          )"
        >
          Добави
        </button>

      </div>

    </div>

  </div>

`;

  });

}
import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


window.addToCart = async function (
  id,
  title,
  price,
  image
) {

  const user = auth.currentUser;

  // 🔐 تحقق تسجيل الدخول
  if (!user) {
    showToast("❌ Трябва да влезеш в акаунт", "error");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);

    return;
  }

  try {

    const userId = user.uid;

    const cartRef = doc(db, "carts", userId);

    const cartSnap = await getDoc(cartRef);

    let cart = [];

    // 🛒 تحميل السلة إذا موجودة
    if (cartSnap.exists()) {
      cart = cartSnap.data().items || [];
    }

    // 🔍 تحقق إذا المنتج موجود
    const existing = cart.find(item => item.id === id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id,
        title,
        price,
        image,
        qty: 1
      });
    }

    // 💾 حفظ في Firestore
    await setDoc(cartRef, {
      items: cart
    });

    // 🎉 نجاح
    showToast("✅ Добавено в количката");

  } catch (error) {

    console.error(error);

    showToast("❌ Грешка при добавяне в количката", "error");

  }
};

// 🔎 SEARCH
document.getElementById("search").addEventListener("input", applyFilters);


// 🔥 FILTER EVENTS
document.querySelectorAll(".cat").forEach(el => {
  el.addEventListener("change", applyFilters);
});

document.querySelectorAll("input[name='price']").forEach(el => {
  el.addEventListener("change", applyFilters);
});


// 🧠 FILTER ENGINE
function applyFilters() {

  let filtered = [...allProducts];

  // 🔎 search
  const searchValue = document.getElementById("search").value.toLowerCase();

  if (searchValue) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchValue)
    );
  }

  // 📦 category
  const selectedCats = Array.from(document.querySelectorAll(".cat:checked"))
    .map(el => el.value);

  if (selectedCats.length > 0) {
    filtered = filtered.filter(p =>
      selectedCats.includes(p.category)
    );
  }

  // 💰 price
  const price = document.querySelector("input[name='price']:checked").value;

  if (price === "0-100") {
    filtered = filtered.filter(p => p.price <= 100);
  }

  if (price === "100-500") {
    filtered = filtered.filter(p => p.price > 100 && p.price <= 500);
  }

  if (price === "500+") {
    filtered = filtered.filter(p => p.price > 500);
  }

  render(filtered);
}



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
// 🚀 init
loadProducts();