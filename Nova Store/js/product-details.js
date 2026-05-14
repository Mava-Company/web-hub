import { db } from "./firebase-config.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const container = document.querySelector(".container");



async function loadProduct() {

  if(!productId){

    container.innerHTML = "<h2>Product not found</h2>";

    return;
  }

  const productRef = doc(db, "products", productId);

  const productSnap = await getDoc(productRef);

  if(productSnap.exists()) {

    const product = productSnap.data();

    // 🔥 صور المنتج
    let imagesHTML = "";

    if(product.images && product.images.length > 0){

      product.images.forEach(img => {

        imagesHTML += `
          <img src="${img}" class="details-image">
        `;

      });

    }



    container.innerHTML = `

  <div class="product-details">

    <!-- GALLERY -->
    <div class="details-gallery">
      ${imagesHTML}
    </div>


    <!-- INFO -->
    <div class="details-info">

      <h1>${product.title}</h1>

      <p class="price">
        ${product.price} лв
      </p>

      ${product.oldPrice ? `
        <p style="text-decoration:line-through;color:#999;">
          ${product.oldPrice} лв
        </p>
      ` : ""}


      <p class="description">
        ${product.description}
      </p>


      <!-- 🔥 NEW FIELDS -->
      <div class="extra-info">

        <p><b>Категория:</b> ${product.category || "-"}</p>

        <p><b>Тип:</b> ${product.type || "-"}</p>

        <p><b>Състояние:</b> ${
          product.condition === "new"
            ? "Нов"
            : product.condition === "used"
            ? "Използван"
            : product.condition === "refurbished"
            ? "Рефърбишд"
            : "-"
        }</p>

        <p><b>Гаранция:</b> ${
          product.warranty ? product.warranty + " месеца" : "-"
        }</p>

        <p><b>Наличност:</b> ${product.stock ?? "-"}</p>

        <p><b>Статус:</b> ${product.status || "-"}</p>

      </div>


      <button
        class="buy-btn"
        onclick='addToCart(
          "${productId}",
          "${product.title}",
          ${product.price},
          "${product.images?.[0] || ""}"
        )'
      >
        Добави в количката
      </button>

    </div>

  </div>

`;

  } else {

    container.innerHTML = `
      <h2>Продуктът не е намерен</h2>
    `;

  }

}



import {
 
  
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// 🛒 ADD TO CART
window.addToCart = async function(
  id,
  title,
  price,
  image
){

  const user = auth.currentUser;

  // 🔥 لازم تسجيل دخول
  if(!user){

    alert("Моля влез в акаунт");

    window.location.href = "login.html";

    return;
  }

  const userId = user.uid;

  const cartRef = doc(db, "carts", userId);

  const cartSnap = await getDoc(cartRef);

  let cart = [];

  // 🔥 إذا يوجد سلة
  if(cartSnap.exists()){

    cart = cartSnap.data().items || [];

  }

  // 🔥 هل المنتج موجود؟
  const existing = cart.find(item => item.id === id);

  if(existing){

    existing.qty += 1;

  } else {

    cart.push({
      id,
      title,
      price,
      image,
      qty:1
    });

  }

  // 💾 حفظ
  await setDoc(cartRef, {
    items: cart
  });

  alert("✅ Добавено в количката");

}


loadProduct();