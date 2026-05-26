import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { db } from "./firebase-config.js";

export async function getOrderByNumber(orderNumber) {

  const q = query(
    collection(db, "orders"),
    where("orderCode", "==", orderNumber)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  return snapshot.docs[0].data();
}

// =====================
// CREATE ORDER
// =====================
export async function createOrder(data) {
  const orderNumber = "ORD-" + Math.floor(Math.random() * 1000000);

  return await addDoc(collection(db, "orders"), {
    ...data,
    orderNumber,
    status: "Pending",
    progress: 0,
    createdAt: new Date().toISOString()
  });
}


// =====================
// GET ALL ORDERS (ADMIN)
// =====================
export async function getOrders() {
  const snapshot = await getDocs(collection(db, "orders"));

  const orders = [];

  snapshot.forEach((docItem) => {
    orders.push({ id: docItem.id, ...docItem.data() });
  });

  return orders;
}


// =====================
// GET USER ORDERS
// =====================
export async function getUserOrders(userId) {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  const orders = [];

  snapshot.forEach((docItem) => {
    orders.push({ id: docItem.id, ...docItem.data() });
  });

  return orders;
}



// =====================
// UPDATE ORDER STATUS (ADMIN)
// =====================
export async function updateOrder(id, data) {
  const ref = doc(db, "orders", id);

  return await updateDoc(ref, data);
}