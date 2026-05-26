// ===============================
// IMPORTS
// ===============================
const CLOUD_NAME = "duqx7ngop";
const UPLOAD_PRESET = "degsinUpload";
import {
  db
} from "./firebase-config.js";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===============================
// ELEMENTS
// ===============================

const portfolioGrid =
  document.getElementById("portfolioGrid");

const addProjectBtn =
  document.getElementById("addProjectBtn");

const projectModal =
  document.getElementById("projectModal");

const closeProjectModal =
  document.getElementById("closeProjectModal");

const projectForm =
  document.getElementById("projectForm");

const projectTitle =
  document.getElementById("projectTitle");



const projectDescription =
  document.getElementById("projectDescription");

const projectImages =
  document.getElementById("projectImages");

const projectDate =
  document.getElementById("projectDate");

const searchProject =
  document.getElementById("searchProject");

const categoryFilter =
  document.getElementById("portfolioCategoryFilter");
  const loadingOverlay = document.getElementById("loadingOverlay");

  

const projectMedia =
  document.getElementById("projectMedia");


// ===============================
// VARIABLES
// ===============================

let allProjects = [];

let currentEditId = null;

// ===============================
// LOAD PROJECTS
// ===============================

async function loadProjects() {

  try {

            loadingOverlay.style.display = "flex";

    const q = query(
      collection(db, "portfolio"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    allProjects = [];

    snapshot.forEach((docSnap) => {

      allProjects.push({
        id: docSnap.id,
        ...docSnap.data()
      });

    });

    renderProjects(allProjects);
   

  } catch (error) {

    console.error(error);

    alert("حدث خطأ أثناء تحميل المشاريع");

  }
  finally {

    loadingOverlay.style.display = "none";
  }

}

loadProjects();

// ===============================
// RENDER PROJECTS
// ===============================

function renderProjects(projects) {

  portfolioGrid.innerHTML = "";

  if (projects.length === 0) {

    portfolioGrid.innerHTML = `
      <p>لا توجد مشاريع</p>
    `;

    return;
  }

  projects.forEach((project) => {

    portfolioGrid.innerHTML += `
    
      <div class="portfolio-card">

<div class="portfolio-media">

  ${
    project.media?.slice(0, 3).map(m => 
      m.type === "image"
        ? `<img src="${m.url}" />`
        : `<video src="${m.url}" muted></video>`
    ).join("")
  }

</div>
        <div class="portfolio-info">

          <h3>${project.title}</h3>

          <p>${project.description || ""}</p>

          <div class="portfolio-actions">

            <button class="edit-btn" data-id="${project.id}">
              تعديل
            </button>

            <button class="delete-btn" data-id="${project.id}">
              حذف
            </button>

          </div>

        </div>

      </div>
    
    `;
  });

  attachEvents();
}

// ===============================
// OPEN MODAL
// ===============================

addProjectBtn.addEventListener("click", () => {

  currentEditId = null;

  projectForm.reset();

  projectModal.classList.remove("hidden");

});

closeProjectModal.addEventListener("click", () => {

  projectModal.classList.add("hidden");

});

// ===============================
// SAVE PROJECT
// ===============================
projectForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const files = Array.from(projectMedia.files);

    if (files.length === 0) {
      alert("اختر صور أو فيديوهات");
      return;
    }

    const mediaUrls = await Promise.all(
      files.map(async (file) => {

        const isVideo = file.type.startsWith("video");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${
          isVideo ? "video" : "image"
        }/upload`;

        const res = await fetch(url, {
          method: "POST",
          body: formData
        });

        const data = await res.json();

        if (!data.secure_url) {
          throw new Error("Upload failed");
        }

        return {
          url: data.secure_url,
          type: isVideo ? "video" : "image"
        };
      })
    );

    const data = {
      title: projectTitle.value,
      description: projectDescription.value,
      date: projectDate.value,
      media: mediaUrls,
      createdAt: serverTimestamp()
    };

    if (currentEditId) {
      await updateDoc(doc(db, "portfolio", currentEditId), data);
    } else {
      await addDoc(collection(db, "portfolio"), data);
    }

    projectModal.classList.add("hidden");
    loadProjects();

  } catch (error) {
    console.error(error);
    alert("حدث خطأ أثناء حفظ المشروع");
  }
});

// ===============================
// EDIT & DELETE
// ===============================

function attachEvents() {

  document.querySelectorAll(".delete-btn")
  .forEach(btn => {

    btn.onclick = async () => {

      const id = btn.dataset.id;

      await deleteDoc(doc(db, "portfolio", id));

      loadProjects();
    };

  });

  document.querySelectorAll(".edit-btn")
  .forEach(btn => {

    btn.onclick = () => {

      const id = btn.dataset.id;

      const project = allProjects.find(p => p.id === id);

      if (!project) return;

      currentEditId = id;

      projectTitle.value = project.title;
     
      projectDescription.value = project.description;
      projectDate.value = project.date;

      projectModal.classList.remove("hidden");
    };

  });

}

// ===============================
// SEARCH
// ===============================

searchProject.addEventListener("input", () => {

  const value = searchProject.value.toLowerCase();

  const filtered = allProjects.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  renderProjects(filtered);
});

// ===============================
// CATEGORIES
// ===============================



// ===============================
// FILTER BY CATEGORY
// ===============================

categoryFilter.addEventListener("change", () => {

  const value = categoryFilter.value;

  if (!value) return renderProjects(allProjects);

  const filtered = allProjects.filter(
    p => p.category === value
  );

  renderProjects(filtered);

});