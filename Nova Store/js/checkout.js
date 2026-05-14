import { db, auth } from "./firebase-config.js";

import {
  collection,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const checkoutForm =
  document.getElementById("checkoutForm");



checkoutForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const user = auth.currentUser;

  if(!user){

    alert("Моля влезте в акаунта");

    window.location.href = "login.html";

    return;
  }

  try{

    // 🔥 cart
    const cartRef = doc(db, "carts", user.uid);

    const cartSnap = await getDoc(cartRef);

    let cartItems = [];

    if(cartSnap.exists()){

      cartItems = cartSnap.data().items || [];

    }

    // ❌ لا يوجد منتجات
    if(cartItems.length === 0){

      alert("Количката е празна");

      return;
    }

    // 🔥 order id
    const orderId =
      "ORD-" +
      Math.random()
      .toString(36)
      .substring(2,8)
      .toUpperCase();


    // 🔥 total
    let total = 0;

    cartItems.forEach(item => {

      total += item.price * item.qty;

    });


    // 🧾 order
    const orderData = {

      orderId,

      userId:user.uid,

      fullName:
        document.querySelector("#fullName").value,

      phone:
        document.querySelector("#phone").value,

      whatsapp:
        document.querySelector("#whatsapp").value,

      country:
        document.querySelector("#country").value,

      city:
        document.querySelector("#city").value,

      address:
        document.querySelector("#address").value,

      items:cartItems,

      total,

      status:"Pending",

      createdAt:serverTimestamp()

    };


    // 💾 save order
    await addDoc(
      collection(db, "orders"),
      orderData
    );


    // 🗑️ حذف السلة
    await deleteDoc(cartRef);


    showToastWithCopy(orderId);


    // 🔥 تحويل


  } catch(error){

    console.error(error);

    alert("❌ Error placing order");

  }

});




function showToastWithCopy(orderId) {

  const toast = document.getElementById("toast");

  toast.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;">

      <div>
        ✅ Поръчката е успешна!
      </div>

      <div>
        Код: <b>${orderId}</b>
      </div>

      <button id="copyBtn" style="
        padding:8px 12px;
        border:none;
        border-radius:6px;
        background:white;
        color:#28a745;
        cursor:pointer;
        font-weight:bold;
      ">
        📋 Копирай кода
      </button>

    </div>
  `;

  toast.classList.add("show");

  const copyBtn = document.getElementById("copyBtn");

  // ✅ عند النسخ
  copyBtn.onclick = async () => {

    try {

      await navigator.clipboard.writeText(orderId);

      toast.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div>✅ Кодът е копиран успешно!</div>
          <b>${orderId}</b>
        </div>
      `;

      // 🔥 تحويل بعد النسخ
      setTimeout(() => {

        window.location.href = "profile.html";

      }, 1500);

    } catch {

      toast.innerHTML = `
        ❌ Грешка при копиране
      `;
    }

  };

  // ⏳ إذا لم يضغط نسخ
  setTimeout(() => {

    window.location.href = "index.html";

  }, 7000);

}