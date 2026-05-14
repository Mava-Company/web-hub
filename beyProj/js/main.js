console.log("Home Page Loaded");

document.addEventListener("DOMContentLoaded", () => {

  
// ===== Modal =====
const modal = document.getElementById("welcomeModal");
const closeBtn = document.getElementById("closeModal");

// الوقت بالدقائق (10 دقائق)
const SHOW_INTERVAL = 10 * 60 * 1000;

// آخر وقت ظهر فيه المودال
const lastShown = localStorage.getItem("welcomeModalLastShown");

// الوقت الحالي
const now = Date.now();

// إذا ما ظهر قبل أو مرّت 10 دقائق
if (!lastShown || now - lastShown > SHOW_INTERVAL) {
  if (modal) {
    modal.style.display = "flex";

    // حفظ وقت الظهور
    localStorage.setItem("welcomeModalLastShown", now);
  }
}

// زر الإغلاق
if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
}

// إغلاق عند الضغط خارج المودال
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

});

