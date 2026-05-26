
import {
  db,
  auth
} from "./firebase-config.js";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";






const usersTable = document.getElementById("usersTable");

const searchUser = document.getElementById("searchUser");
const roleFilter = document.getElementById("roleFilter");

const userModal = document.getElementById("userModal");
const closeUserModal = document.getElementById("closeUserModal");

const modalUserImage = document.getElementById("modalUserImage");
const modalUserName = document.getElementById("modalUserName");
const modalUserEmail = document.getElementById("modalUserEmail");
const modalUserPhone = document.getElementById("modalUserPhone");
const modalUserRole = document.getElementById("modalUserRole");

const updateUserRole = document.getElementById("updateUserRole");
const saveUserChanges = document.getElementById("saveUserChanges");

const loadingOverlay = document.getElementById("loadingOverlay");
const logoutBtn = document.getElementById("logoutBtn");






let allUsers = [];
let currentUserId = null;





async function loadUsers() {
  try {
    loadingOverlay.style.display = "flex";

    const q = query(
      collection(db, "users"),
      orderBy("createdAt", "desc")
    );

    const snap = await getDocs(q);

    allUsers = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    renderUsers(allUsers);

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء تحميل المستخدمين");
  } finally {
    loadingOverlay.style.display = "none";
  }
}

loadUsers();




function renderUsers(users) {
  usersTable.innerHTML = "";

  if (!users.length) {
    usersTable.innerHTML = `
      <tr>
        <td colspan="7">لا يوجد مستخدمين</td>
      </tr>
    `;
    return;
  }

  users.forEach(user => {
    usersTable.innerHTML += `
      <tr>
        <td>
          <img src="${user.photoURL || 'default.png'}" width="40" height="40" style="border-radius:50%">
        </td>

        <td>${user.fullName || "Unknown"}</td>
        <td>${user.email}</td>
        <td>${user.phone || "N/A"}</td>

        <td>
          <span class="status ${user.role}">
            ${user.role}
          </span>
        </td>

        <td>${formatDate(user.createdAt)}</td>

        <td>
          <button class="view-user" data-id="${user.id}">👁</button>
          <button class="delete-user" data-id="${user.id}">🗑</button>
        </td>
      </tr>
    `;
  });
}




document.addEventListener("click", (e) => {
  const viewBtn = e.target.closest(".view-user");

  if (viewBtn) {
    openUserModal(viewBtn.dataset.id);
  }

  const deleteBtn = e.target.closest(".delete-user");

  if (deleteBtn) {
    deleteUser(deleteBtn.dataset.id);
  }
});





function openUserModal(id) {
  const user = allUsers.find(u => u.id === id);
  if (!user) return;

  currentUserId = id;

  modalUserImage.src = user.photoURL || "default.png";
  modalUserName.textContent = user.fullName || "Unknown";
  modalUserEmail.textContent = user.email;
  modalUserPhone.textContent = user.phone || "N/A";
  modalUserRole.textContent = user.role;

  updateUserRole.value = user.role;

  userModal.classList.remove("hidden");
}





closeUserModal?.addEventListener("click", () => {
  userModal.classList.add("hidden");
});




saveUserChanges?.addEventListener("click", async () => {
  try {
    if (!currentUserId) return;

    const ref = doc(db, "users", currentUserId);

    await updateDoc(ref, {
      role: updateUserRole.value
    });

    const index = allUsers.findIndex(u => u.id === currentUserId);

    if (index !== -1) {
      allUsers[index].role = updateUserRole.value;
    }

    renderUsers(allUsers);

    userModal.classList.add("hidden");

    alert("تم تحديث الصلاحية");

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء التحديث");
  }
});




async function deleteUser(id) {
  if (!confirm("هل أنت متأكد من حذف المستخدم؟")) return;

  try {
    await deleteDoc(doc(db, "users", id));

    allUsers = allUsers.filter(u => u.id !== id);

    renderUsers(allUsers);

    alert("تم حذف المستخدم");

  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء الحذف");
  }
}






searchUser?.addEventListener("input", filterUsers);
roleFilter?.addEventListener("change", filterUsers);

function filterUsers() {
  const search = searchUser.value.toLowerCase();
  const role = roleFilter.value;

  const filtered = allUsers.filter(user => {
    const matchSearch =
      (user.fullName || "")
        .toLowerCase()
        .includes(search) ||
      user.email.toLowerCase().includes(search);

    const matchRole =
      !role || user.role === role;

    return matchSearch && matchRole;
  });

  renderUsers(filtered);
}




function formatDate(date) {
  if (!date) return "N/A";

  const d = typeof date === "string"
    ? new Date(date)
    : date.toDate?.() || new Date(date);

  return d.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}





// ===============================
// LOGOUT
// ===============================

logoutBtn.addEventListener("click", async () => {

  try {

    await signOut(auth);

    window.location.href = "../login.html";

  } catch (error) {

    console.error(error);
  }

});




