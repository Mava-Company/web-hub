// ===============================
// IMPORTS
// ===============================

import {
  db,
  auth
} from "./firebase-config.js";

import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  setDoc,
    getDoc,

  limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// ===============================
// ELEMENTS
// ===============================

const adminName = document.getElementById("adminName");

const adminRole = document.getElementById("adminRole");


const servicesCount = document.getElementById("servicesCount");

const ordersCount = document.getElementById("ordersCount");

const usersCount = document.getElementById("usersCount");

const messagesCount = document.getElementById("messagesCount");

const recentOrdersTable = document.getElementById("recentOrdersTable");

const dashboardServices = document.getElementById("dashboardServices");

const loadingOverlay = document.getElementById("loadingOverlay");

const logoutBtn = document.getElementById("logoutBtn");
const adminAvatar =
  document.getElementById("adminAvatar");

const avatarInput =
  document.getElementById("avatarInput");

const avatarOverlay =
  document.getElementById("avatarOverlay");

// ===============================
// AUTH CHECK
// ===============================

onAuthStateChanged(auth, async (user) => {

  if (!user) {

    window.location.href = "../login.html";

    return;
  }

  loadDashboard();

});

// ===============================
// LOAD DASHBOARD
// ===============================

async function loadDashboard() {

  try {

    loadingOverlay.style.display = "flex";

    // ===============================
    // COUNTS
    // ===============================

    const servicesSnap = await getDocs(collection(db, "services"));

    const ordersSnap = await getDocs(collection(db, "orders"));

    const usersSnap = await getDocs(collection(db, "users"));

    const messagesSnap = await getDocs(collection(db, "messages"));

    servicesCount.textContent = servicesSnap.size;

    ordersCount.textContent = ordersSnap.size;

    usersCount.textContent = usersSnap.size;

    messagesCount.textContent = messagesSnap.size;

    // ===============================
    // RECENT ORDERS
    // ===============================

    const recentOrdersQuery = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const recentOrders = await getDocs(recentOrdersQuery);

    recentOrdersTable.innerHTML = "";
const recentOrdersData = recentOrders.docs.map(doc => doc.data());
renderDashboardOrders(recentOrdersData);

    // ===============================
    // RECENT SERVICES
    // ===============================

    const recentServicesQuery = query(
      collection(db, "services"),
      orderBy("createdAt", "desc"),
      limit(4)
    );

    const recentServices = await getDocs(recentServicesQuery);

    dashboardServices.innerHTML = "";

    recentServices.forEach((doc) => {

      const service = doc.data();

      dashboardServices.innerHTML += `
      
        <div class="service-card">

          <img src="${service.image}" alt="${service.title}"/>

          <div class="service-content">

            <h3>${service.title}</h3>

            <p>
              ${service.description}
            </p>

          </div>

        </div>

      `;
    });

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحميل البيانات");

  } finally {

    loadingOverlay.style.display = "none";
  }
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

// ===============================
// DATE FORMAT
// ===============================


function renderDashboardOrders(orders) {
  recentOrdersTable.innerHTML = "";

  if (!orders.length) {
    recentOrdersTable.innerHTML = `
      <tr>
        <td colspan="5">لا توجد طلبات</td>
      </tr>
    `;
    return;
  }

  orders.forEach(order => {
    recentOrdersTable.innerHTML += `
      <tr>
         <td>${order.orderCode || order.orderNumber || "N/A"}</td>
        <td>${order.name || order.customerName || "Unknown"}</td>
        <td>${order.serviceTitle || order.serviceName || "Unknown"}</td>

        <td>
          <span class="status ${getStatusClass(order.status)}">
            ${order.status || "Pending"}
          </span>
        </td>

        <td>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${order.progress || 0}%"></div>
          </div>
          <span>${order.progress || 0}%</span>
        </td>

        <td>${formatDate(order.createdAt)}</td>

      </tr>
    `;
  });
}

function getStatusClass(status) {
  switch (status) {
    case "Pending": return "pending";
    case "Reviewing": return "reviewing";
    case "In Progress": return "progress";
    case "Completed": return "completed";
    case "Delivered": return "delivered";
    case "Cancelled": return "cancelled";
    default: return "pending";
  }
}

function formatDate(timestamp) {
  if (!timestamp?.toDate) return "N/A";

  return timestamp.toDate().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}


setupAvatarUpload();

loadAdminAvatar();


function setupAvatarUpload() {

  avatarOverlay.addEventListener("click", () => {

    avatarInput.click();

  });

  adminAvatar.addEventListener("click", () => {

    avatarInput.click();

  });

  avatarInput.addEventListener(
    "change",
    uploadAvatar
  );

}
async function uploadAvatar(e) {

  try {

    const file = e.target.files[0];

    if (!file) return;

    loadingOverlay.style.display = "flex";

    const formData = new FormData();

    formData.append("file", file);

    // اسم Upload Preset

    formData.append(
      "upload_preset",
      "degsinUpload"
    );

    // CLOUDINARY UPLOAD

    const response = await fetch(

      "https://api.cloudinary.com/v1_1/duqx7ngop/image/upload",

      {

        method: "POST",

        body: formData

      }

    );

    const data = await response.json();

    console.log(data);

    if (!data.secure_url) {

      throw new Error("Upload Failed");

    }

    // SAVE TO FIREBASE

    await setDoc(

      doc(db, "settings", "admin"),

      {

        avatar: data.secure_url

      },

      {

        merge: true

      }

    );

    // UPDATE UI

    adminAvatar.src = data.secure_url;

    alert("تم تحديث الصورة بنجاح");

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء رفع الصورة");

  } finally {

    loadingOverlay.style.display = "none";

  }

}


async function loadAdminAvatar() {

  try {

    const docRef =
      doc(db, "settings", "admin");

    const snapshot =
      await getDoc(docRef);

    if (snapshot.exists()) {

      const data = snapshot.data();

      if (data.avatar) {

        adminAvatar.src =
          data.avatar;

      }

    }

  } catch (error) {

    console.error(error);

  }

}



