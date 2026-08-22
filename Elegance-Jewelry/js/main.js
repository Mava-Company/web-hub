// ======================================
// PAGE LOAD
// ======================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    // ===== Product Cards Animation =====

    const cards =
      document.querySelectorAll(
        ".cake-card"
      );


    cards.forEach(
      (card, index) => {

        card.style.opacity = "0";

        card.style.transform =
          "translateY(30px)";


        setTimeout(() => {

          card.style.transition =
            "0.5s";

          card.style.opacity = "1";

          card.style.transform =
            "translateY(0)";

        }, index * 200);

      }
    );

  }
);



// ======================================
// ADMIN LOGIN
// ======================================

const adminPassword =
  "MamaAndJenanAndRetajAndBesanHalaika11";


const loginModal =
  document.getElementById(
    "adminLogin"
  );


const loginBtn =
  document.getElementById(
    "loginBtn"
  );


const adminLink =
  document.getElementById(
    "adminLink"
  );


const loginError =
  document.getElementById(
    "loginError"
  );



function showAdminLogin() {

  if (loginModal) {

    loginModal.style.display =
      "flex";

  }

}



if (loginBtn) {

  loginBtn.addEventListener(
    "click",
    () => {


      const input =
        document.getElementById(
          "adminPassword"
        ).value;


      if (
        input === adminPassword
      ) {


        loginModal.style.display =
          "none";


        localStorage.setItem(
          "isAdmin",
          "true"
        );


        window.location.href =
          "admin.html";


      } else {


        loginError.innerText =
          "❌ Incorrect password.";

      }

    }
  );

}



// ======================================
// SHOW ADMIN LINK
// ======================================

window.addEventListener(
  "load",
  () => {

    if (
      adminLink &&
      localStorage.getItem(
        "isAdmin"
      ) === "true"
    ) {

      adminLink.style.display =
        "inline-block";

    }

  }
);



// ======================================
// PUBLIC PRODUCTS
// ======================================

const publicCakesContainer =
  document.getElementById(
    "publicCakesContainer"
  );



function loadPublicProducts() {


  if (!publicCakesContainer) {
    return;
  }


  db.collection("cakes")
    .orderBy(
      "createdAt",
      "desc"
    )
    .onSnapshot(
      snapshot => {


        publicCakesContainer.innerHTML =
          "";


        snapshot.forEach(
          doc => {


            const product =
              doc.data();


            const id =
              doc.id;


            const card =
              document.createElement(
                "div"
              );


            card.classList.add(
              "cake-card"
            );


            card.innerHTML = `

              <img
                src="${product.image}"
                alt="${product.name}"
              />


              <h3>
                ${product.name}
              </h3>


              <p>
                ${product.description || ""}
              </p>


              <p>
                💎 ${product.price} $
              </p>


              <p>
                📂 ${product.category || "Other"}
              </p>


              <button
                class="order-btn"
              >
                View & Order
              </button>

            `;



            // ======================================
            // PRODUCT ORDER BUTTON
            // ======================================

            card
              .querySelector(
                ".order-btn"
              )
              .addEventListener(
                "click",
                () => {


                  // Open product details/order page

                  window.location.href =
                    `order1.html?cakeId=${id}`;

                }
              );


            publicCakesContainer
              .appendChild(card);

          }
        );

      }
    );

}



// ======================================
// DOWNLOAD APP MODAL
// ======================================

const downloadModal =
  document.getElementById(
    "downloadModal"
  );


const openDownloadModal =
  document.getElementById(
    "openDownloadModal"
  );


const closeDownloadModal =
  document.getElementById(
    "closeDownloadModal"
  );



// ======================================
// OPEN DOWNLOAD MODAL
// ======================================

if (openDownloadModal) {

  openDownloadModal.addEventListener(
    "click",
    () => {

      downloadModal.style.display =
        "flex";

    }
  );

}



// ======================================
// CLOSE DOWNLOAD MODAL
// ======================================

if (closeDownloadModal) {

  closeDownloadModal.addEventListener(
    "click",
    () => {

      downloadModal.style.display =
        "none";

    }
  );

}



// ======================================
// CLOSE MODAL OUTSIDE
// ======================================

window.addEventListener(
  "click",
  (e) => {


    if (
      downloadModal &&
      e.target === downloadModal
    ) {

      downloadModal.style.display =
        "none";

    }

  }
);



// ======================================
// START
// ======================================

loadPublicProducts();