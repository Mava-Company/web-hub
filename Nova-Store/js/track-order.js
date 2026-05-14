import { db } from "./firebase-config.js";

import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const trackBtn = document.querySelector("#trackBtn");

trackBtn.addEventListener("click", async () => {

  const orderId =
    document.querySelector("#orderId").value;

  const q = query(
    collection(db, "orders"),
    where("orderId", "==", orderId)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {

    const order = doc.data();

    document.querySelector(".result").innerHTML = `

      <h2>${order.orderId}</h2>

      <p>Status: ${order.status}</p>

      <p>Phone: ${order.phone}</p>

    `;

  });

});