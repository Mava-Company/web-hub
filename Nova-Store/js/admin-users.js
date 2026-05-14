import { db } from "./firebase-config.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const table = document.getElementById("usersTable");

let users = [];


// 🔥 تحميل المستخدمين
async function loadUsers() {

  const snapshot = await getDocs(collection(db, "users"));

  users = [];

  snapshot.forEach(docSnap => {
    users.push({ id: docSnap.id, ...docSnap.data() });
  });

  render();

}


// 🧱 عرض المستخدمين
function render() {

  table.innerHTML = "";

  users.forEach(user => {

    const roleClass =
      user.role === "admin" ? "admin" : "customer";

    const roleText =
      user.role === "admin" ? "Admin" : "Customer";

    const photo = user.photo ||
      "https://randomuser.me/api/portraits/lego/1.jpg";

    table.innerHTML += `
      <tr>

        <td>
          <div class="user-info">

            <img src="${photo}" width="40">

            <div>
              <h3>${user.fullName}</h3>
              <p>${user.city || ""}</p>
            </div>

          </div>
        </td>

        <td>${user.email}</td>
        <td>${user.phone || ""}</td>

        <td>
          <span class="role ${roleClass}">
            ${roleText}
          </span>
        </td>

        <td>
          ${user.createdAt ? new Date(user.createdAt.seconds * 1000).toLocaleDateString() : ""}
        </td>

        <td>

          <div class="actions">

            <button onclick="changeRole('${user.id}')" class="edit-btn">
              تغيير دور
            </button>

            <button onclick="deleteUser('${user.id}')" class="delete-btn">
              حذف
            </button>

          </div>

        </td>

      </tr>
    `;

  });

}


// ❌ حذف مستخدم
window.deleteUser = async function(id) {

  if (!confirm("Delete user?")) return;

  await deleteDoc(doc(db, "users", id));

  alert("Deleted");

  loadUsers();

};


// 🔁 تغيير دور المستخدم
window.changeRole = async function(id) {

  const user = users.find(u => u.id === id);

  const newRole = user.role === "admin" ? "customer" : "admin";

  await updateDoc(doc(db, "users", id), {
    role: newRole
  });

  alert("Role updated");

  loadUsers();

};


// 🚀 تشغيل
loadUsers();