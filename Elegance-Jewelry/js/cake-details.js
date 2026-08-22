const params =
  new URLSearchParams(
    window.location.search
  );


const cakeId =
  params.get("id");


const cakeDetails =
  document.getElementById(
    "cakeDetails"
  );


let selectedCake = null;



// ======================================
// LOAD PRODUCT DETAILS
// ======================================

async function loadProduct() {

  try {

    const doc =
      await db
        .collection("cakes")
        .doc(cakeId)
        .get();


    if (!doc.exists) {

      cakeDetails.innerHTML =
        "<h2>Product not found</h2>";

      return;

    }


    selectedCake =
      doc.data();


    cakeDetails.innerHTML = `

      <div class="cake-details-card">

        <img
          src="${selectedCake.image}"
          alt="${selectedCake.name}"
        />


        <div class="cake-details-info">

          <h1>
            ${selectedCake.name}
          </h1>


          <p>
            ${selectedCake.description || ""}
          </p>


          <h3>
            💎 ${selectedCake.price} $
          </h3>


          <span>
            📂 ${selectedCake.category || "Other"}
          </span>

        </div>

      </div>

    `;


  } catch (error) {

    console.error(error);

    cakeDetails.innerHTML =
      "<h2>Unable to load product details.</h2>";

  }

}



// ======================================
// SEND ORDER
// ======================================

const orderForm =
  document.getElementById(
    "orderForm"
  );


orderForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();


    // Make sure product is loaded

    if (!selectedCake) {

      alert(
        "Please wait until the product information is loaded."
      );

      return;

    }


    // Generate order ID

    const orderId =
      "ORD-" +
      Math.floor(
        Math.random() * 1000000
      );



    // ======================================
    // ORDER DATA
    // ======================================

    const orderData = {

      orderId,


      // Customer information

      customerName:
        document
          .getElementById(
            "customerName"
          )
          .value,


      phone:
        document
          .getElementById(
            "phone"
          )
          .value,


      address:
        document
          .getElementById(
            "address"
          )
          .value,


      // Product options

      size:
        document
          .getElementById(
            "size"
          )
          .value,


      cakeMessage:
        document
          .getElementById(
            "cakeMessage"
          )
          .value,


      deliveryDate:
        document
          .getElementById(
            "deliveryDate"
          )
          .value,


      notes:
        document
          .getElementById(
            "notes"
          )
          .value,



      // ======================================
      // PRODUCT INFORMATION
      // ======================================

      cakeId:
        cakeId,


      cakeName:
        selectedCake.name,


      cakeImage:
        selectedCake.image,


      cakePrice:
        selectedCake.price,


      cakeCategory:
        selectedCake.category,



      // ======================================
      // ORDER STATUS
      // ======================================

      status:
        "Pending",


      createdAt:
        Date.now()

    };



    // ======================================
    // SAVE ORDER
    // ======================================

    try {


      await db
        .collection("orders")
        .add(orderData);


      showPopup(orderId);


      orderForm.reset();


    } catch (error) {

      console.error(error);


      alert(
        "An error occurred while submitting your order."
      );

    }

  }
);



// ======================================
// POPUP
// ======================================

function showPopup(orderId) {


  document
    .getElementById("popup")
    .style.display = "flex";


  document
    .getElementById("orderText")
    .innerText =
      "Order Number: " +
      orderId;



  // ======================================
  // COPY ORDER NUMBER
  // ======================================

  document
    .getElementById("copyBtn")
    .onclick = async () => {


      try {

        await navigator
          .clipboard
          .writeText(orderId);


        alert(
          "Order number copied successfully!"
        );


      } catch (error) {

        console.error(error);


        alert(
          "Unable to copy the order number."
        );

      }

    };

}



// ======================================
// CLOSE POPUP
// ======================================

function closePopup() {

  document
    .getElementById("popup")
    .style.display = "none";

}



// ======================================
// START
// ======================================

loadProduct();