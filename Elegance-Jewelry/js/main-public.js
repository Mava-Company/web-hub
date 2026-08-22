const publicProductsContainer =
  document.getElementById(
    "publicCakesContainer"
  );


// ======================================
// LOAD PUBLIC PRODUCTS
// ======================================

function loadPublicProducts() {

  db.collection("cakes")
    .orderBy("createdAt", "desc")

    .onSnapshot(snapshot => {

      publicProductsContainer.innerHTML = "";


      snapshot.forEach(doc => {

        const product =
          doc.data();

        const id =
          doc.id;


        // ======================================
        // PRODUCT CARD
        // ======================================

        const card =
          document.createElement("div");

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
            ${product.description}
          </p>

          <p>
            💎 ${product.price} $
          </p>

          <p>
            📂 ${product.category}
          </p>


          <button class="order-btn">

            View Product

          </button>

        `;


        // ======================================
        // ORDER / PRODUCT DETAILS BUTTON
        // ======================================

        card
          .querySelector(".order-btn")
          .addEventListener(
            "click",
            () => {

              window.location.href =
                `order.html?cakeId=${id}`;

            }
          );


        publicProductsContainer
          .appendChild(card);

      });

    });

}



// ======================================
// START
// ======================================

loadPublicProducts();