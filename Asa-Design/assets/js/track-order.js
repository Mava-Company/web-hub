import { getOrderByNumber } from "./orders.js";

import { formatDate, showLoader, hideLoader } from "./helpers.js";

import { show, hide, initCopyButtons } from "./ui.js";
import { db }
from "./firebase-config.js";

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  initCopyButtons();

  const btn = document.getElementById("trackOrderBtn");

  if (btn) {
    btn.addEventListener("click", trackOrder);
  }
});


// =====================
// TRACK ORDER
// =====================
async function trackOrder() {
  const input = document.getElementById("orderNumberInput");
  const orderNumber = input.value.trim();

  const resultBox = document.getElementById("trackResult");
  const emptyBox = document.getElementById("emptyResult");

  if (!orderNumber) return;

  showLoader(document.getElementById("loadingOverlay"));

  const order = await getOrderByNumber(orderNumber);

  hideLoader(document.getElementById("loadingOverlay"));

  if (!order) {
    show(emptyBox);
    hide(resultBox);
    return;
  }

  hide(emptyBox);
  show(resultBox);

  // Fill data
  document.getElementById("resultOrderNumber").innerText = order.orderCode;
  document.getElementById("resultService").innerText = order.serviceTitle;
  document.getElementById("resultStatus").innerText = order.status;
  document.getElementById("resultDate").innerText = formatDate(order.createdAt);
  

  renderTimeline(order.status);
}

function renderTimeline(status) {
  const container = document.getElementById("timelineContainer");
  if (!container) return;

  const steps = [
    "Pending",
    "Reviewing",
    "In Progress",
    "Completed",
    "Delivered"
  ];

  container.innerHTML = "";

  // 🔥 توحيد الحالة
  const normalizedStatus = normalizeStatus(status);

  const currentIndex = steps.indexOf(normalizedStatus);

  steps.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "timeline-step";

    if (index < currentIndex) {
      div.classList.add("done");
    } 
    else if (index === currentIndex) {
      div.classList.add("current");
    }

    div.innerHTML = `<span>${step}</span>`;
    container.appendChild(div);
  });
}


function normalizeStatus(status) {
  if (!status) return "Pending";

  const map = {
    pending: "Pending",
    reviewing: "Reviewing",
    "in progress": "In Progress",
    completed: "Completed",
    delivered: "Delivered"
  };

  return map[status.toLowerCase()] || "Pending";
}