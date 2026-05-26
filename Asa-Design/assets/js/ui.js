import { copyToClipboard } from "./helpers.js";


// =====================
// SHOW/HIDE ELEMENT
// =====================
export function show(el) {
  if (el) el.classList.remove("hidden");
}

export function hide(el) {
  if (el) el.classList.add("hidden");
}


// =====================
// TOGGLE MOBILE MENU
// =====================
export function initMenuToggle() {
  const btn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  if (!btn || !navbar) return;

  btn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}


// =====================
// COPY ORDER NUMBER BUTTON
// =====================
export function initCopyButtons() {
  const btn = document.getElementById("copyOrderNumber");

  if (!btn) return;

  btn.addEventListener("click", async () => {
    const text = document.getElementById("resultOrderNumber")?.innerText;

    if (!text) return;

    const success = await copyToClipboard(text);

    btn.innerHTML = success
      ? "✔"
      : "✖";

    setTimeout(() => {
      btn.innerHTML = `<i class="fa-regular fa-copy"></i>`;
    }, 1500);
  });
}


// =====================
// ACTIVE NAV LINK
// =====================
export function setActiveLink() {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}