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
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// ===============================
// ELEMENTS
// ===============================

const messagesTable =
  document.getElementById("messagesTable");

const searchMessage =
  document.getElementById("searchMessage");

const messageStatusFilter =
  document.getElementById("messageStatusFilter");

const messageModal =
  document.getElementById("messageModal");

const closeMessageModal =
  document.getElementById("closeMessageModal");

const modalSenderName =
  document.getElementById("modalSenderName");

const modalSenderEmail =
  document.getElementById("modalSenderEmail");

const modalMessageSubject =
  document.getElementById("modalMessageSubject");

const modalMessageDate =
  document.getElementById("modalMessageDate");

const modalMessageContent =
  document.getElementById("modalMessageContent");

const markAsRead =
  document.getElementById("markAsRead");

const deleteMessage =
  document.getElementById("deleteMessage");

  const loadingOverlay = document.getElementById("loadingOverlay");

  const logoutBtn = document.getElementById("logoutBtn");



// ===============================
// VARIABLES
// ===============================

let allMessages = [];

let currentMessageId = null;

// ===============================
// LOAD MESSAGES
// ===============================

async function loadMessages() {

  try {

        loadingOverlay.style.display = "flex";

    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(messagesQuery);

    allMessages = [];

    snapshot.forEach((docSnap) => {

      allMessages.push({

        id: docSnap.id,

        ...docSnap.data()

      });

    });

    renderMessages(allMessages);

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحميل الرسائل");

  }
  finally {
    loadingOverlay.style.display = "none";
  }

}

loadMessages();

// ===============================
// RENDER MESSAGES
// ===============================

function renderMessages(messages) {

  messagesTable.innerHTML = "";

  if (messages.length === 0) {

    messagesTable.innerHTML = `
    
      <tr>

        <td colspan="6">
          لا توجد رسائل
        </td>

      </tr>

    `;

    return;
  }

  messages.forEach((message) => {

    messagesTable.innerHTML += `
    
      <tr class="${message.status === "unread" ? "unread-row" : ""}">

        <td>
          ${message.name || "Unknown"}
        </td>

        <td>
          ${message.email || "N/A"}
        </td>

        <td>
          ${message.subject || "بدون عنوان"}
        </td>

        <td>
          ${formatDate(message.createdAt)}
        </td>

        <td>

          <span class="message-status ${message.status}">

            ${message.status === "read"
              ? "مقروءة"
              : "غير مقروءة"}

          </span>

        </td>

        <td>

          <button
          class="action-btn view-btn"
          data-id="${message.id}">

            <i class="fa-solid fa-eye"></i>

          </button>

        </td>

      </tr>

    `;
  });

  attachViewEvents();

}

// ===============================
// ATTACH EVENTS
// ===============================

function attachViewEvents() {

  const buttons =
    document.querySelectorAll(".view-btn");

  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const messageId =
        btn.dataset.id;

      openMessageModal(messageId);

    });

  });

}

// ===============================
// OPEN MODAL
// ===============================

function openMessageModal(messageId) {

  const message = allMessages.find(
    (item) => item.id === messageId
  );

  if (!message) return;

  currentMessageId = messageId;

  modalSenderName.textContent =
    message.name || "Unknown";

  modalSenderEmail.textContent =
    message.email || "N/A";

  modalMessageSubject.textContent =
    message.subject || "بدون عنوان";

  modalMessageDate.textContent =
    formatDate(message.createdAt);

  modalMessageContent.textContent =
    message.message || "";

  messageModal.classList.remove("hidden");

}

// ===============================
// CLOSE MODAL
// ===============================

closeMessageModal.addEventListener("click", () => {

  messageModal.classList.add("hidden");

});

// ===============================
// MARK AS READ
// ===============================

markAsRead.addEventListener("click", async () => {

  try {

    if (!currentMessageId) return;

    markAsRead.disabled = true;

    markAsRead.textContent =
      "جاري التحديث...";

    const messageRef = doc(
      db,
      "messages",
      currentMessageId
    );

    await updateDoc(messageRef, {

      status: "read"

    });

    // UPDATE LOCAL

    const index = allMessages.findIndex(
      (item) => item.id === currentMessageId
    );

    if (index !== -1) {

      allMessages[index].status = "read";

    }

    renderMessages(allMessages);

    messageModal.classList.add("hidden");

    alert("تم تعليم الرسالة كمقروءة");

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحديث الرسالة");

  } finally {

    markAsRead.disabled = false;

    markAsRead.textContent =
      "تعليم كمقروءة";

  }

});

// ===============================
// DELETE MESSAGE
// ===============================

deleteMessage.addEventListener("click", async () => {

  try {

    if (!currentMessageId) return;

    const confirmDelete = confirm(
      "هل أنت متأكد من حذف الرسالة؟"
    );

    if (!confirmDelete) return;

    deleteMessage.disabled = true;

    deleteMessage.textContent =
      "جاري الحذف...";

    await deleteDoc(
      doc(db, "messages", currentMessageId)
    );

    // REMOVE LOCAL

    allMessages = allMessages.filter(
      (item) => item.id !== currentMessageId
    );

    renderMessages(allMessages);

    messageModal.classList.add("hidden");

    alert("تم حذف الرسالة");

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء حذف الرسالة");

  } finally {

    deleteMessage.disabled = false;

    deleteMessage.textContent =
      "حذف الرسالة";

  }

});

// ===============================
// FILTER
// ===============================

searchMessage.addEventListener("input", filterMessages);

messageStatusFilter.addEventListener("change", filterMessages);

function filterMessages() {

  const searchValue =
    searchMessage.value.toLowerCase();

  const statusValue =
    messageStatusFilter.value;

  const filtered = allMessages.filter((message) => {

    const matchSearch =

      (message.name || "")
      .toLowerCase()
      .includes(searchValue)

      ||

      (message.subject || "")
      .toLowerCase()
      .includes(searchValue);

    const matchStatus =

      !statusValue ||

      message.status === statusValue;

    return matchSearch && matchStatus;

  });

  renderMessages(filtered);

}

// ===============================
// FORMAT DATE
// ===============================

function formatDate(timestamp) {

  if (!timestamp) return "N/A";

  const date = timestamp.toDate();

  return date.toLocaleDateString("ar-EG", {

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