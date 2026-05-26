import { db } from "./firebase-config.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// العناصر
const titleEl = document.getElementById("projectTitle");
const descEl = document.getElementById("projectDescription");
const catEl = document.getElementById("projectCategory");
const dateEl = document.getElementById("projectDate");
const gallery = document.getElementById("projectGallery");

// أخذ ID من الرابط
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

async function loadProject() {

  if (!projectId) return;

  const ref = doc(db, "portfolio", projectId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  const project = snap.data();

  titleEl.textContent = project.title;
  descEl.textContent = project.description;
  catEl.textContent = project.category;
  dateEl.textContent = project.date;

  (project.media || []).forEach(m => {
    gallery.innerHTML += `
      <div class="media-item">
        ${
          m.type === "image"
            ? `<img src="${m.url}" />`
            : `<video src="${m.url}" controls></video>`
        }
      </div>
    `;
  });
}

loadProject();