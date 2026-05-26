import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const profileLink = document.getElementById("profileLink");
const logoutLink = document.getElementById("logoutLink");

onAuthStateChanged(auth, (user) => {

  if (user) {
    // user logged in
    loginLink.style.display = "none";
    registerLink.style.display = "none";

    profileLink.style.display = "inline-block";
    logoutLink.style.display = "inline-block";

  } else {
    // guest
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";

    profileLink.style.display = "none";
    logoutLink.style.display = "none";
  }
});

// logout
logoutLink.addEventListener("click", async (e) => {
  e.preventDefault();
  await signOut(auth);
  window.location.href = "index.html";
});