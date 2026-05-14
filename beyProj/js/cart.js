import { db, auth } from "./firebase-config.js";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const cartItemsDiv = document.getElementById("cartItems");
const countEl = document.getElementById("count");
const totalEl = document.getElementById("total");

let userId = null;
let cart = [];

// 🔥 جلب المستخدم
onAuthStateChanged(auth, async (user) => {

  if (!user) {
    alert("Моля влез в акаунт");
    return;
  }

  userId = user.uid;

  await loadCart();

});


// 📦 تحميل السلة
async function loadCart() {

  const ref = doc(db, "carts", userId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    cart = snap.data().items || [];
  } else {
    cart = [];
  }

  renderCart();

}


// 🧱 عرض السلة
function renderCart() {

  cartItemsDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price * item.qty;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">

        <img src="${item.image}" width="100">

        <div>
          <h3>${item.title}</h3>
          <p>${item.price} лв</p>

          <div>
            <button onclick="decrease(${index})">-</button>
            <span>${item.qty}</span>
            <button onclick="increase(${index})">+</button>
          </div>
        </div>

        <button onclick="removeItem(${index})">Изтрий</button>

      </div>
    `;

  });

  countEl.innerText = cart.length;
  totalEl.innerText = total + " лв";

}


// 💾 حفظ السلة
async function saveCart() {

  const ref = doc(db, "carts", userId);

  await setDoc(ref, {
    items: cart
  });

}


// ➕ زيادة
window.increase = async function(index) {

  cart[index].qty += 1;

  await saveCart();

  renderCart();

};


// ➖ نقصان
window.decrease = async function(index) {

  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  }

  await saveCart();

  renderCart();

};


// ❌ حذف
window.removeItem = async function(index) {

  cart.splice(index, 1);

  await saveCart();

  renderCart();

};






document
  .getElementById("checkoutBtn")
  .addEventListener("click", () => {

    window.location.href = "checkout.html";

});