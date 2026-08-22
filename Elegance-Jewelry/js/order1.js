const productInfoContainer =
  document.getElementById("cakeInfo");

const orderForm =
  document.getElementById("orderForm");

const orderCodeBox =
  document.getElementById("orderCodeBox");

const copyBtn =
  document.getElementById("copyCode");


// ======================================
// GET PRODUCT ID FROM URL
// ======================================

const urlParams =
  new URLSearchParams(
    window.location.search
  );

const productId =
  urlParams.get("cakeId");

let selectedProduct = null;


// ======================================
// LOAD PRODUCT
// ======================================

function loadProduct() {

  if (!productId) {

    productInfoContainer.innerHTML =
      "<p>No product selected.</p>";

    return;

  }


  db.collection("cakes")
    .doc(productId)
    .get()

    .then(doc => {

      if (!doc.exists) {

        productInfoContainer.innerHTML =
          "<p>Product not found.</p>";

        return;

      }


      selectedProduct =
        doc.data();


      productInfoContainer.innerHTML = `

        <h3>
          ${selectedProduct.name}
        </h3>

        <img
          src="${selectedProduct.image}"
          alt="${selectedProduct.name}"
        />

        <p>
          ${selectedProduct.description}
        </p>

        <p>
          💰 ${selectedProduct.price} $
        </p>

        <p>
          ✨ ${selectedProduct.category}
        </p>

      `;

    })

    .catch(error => {

      console.error(
        "Error loading product:",
        error
      );

      productInfoContainer.innerHTML =
        "<p>Unable to load the product.</p>";

    });

}


// ======================================
// GENERATE ORDER CODE
// ======================================

function generateOrderCode() {

  return (
    "ORD-" +
    Math.floor(
      100000 +
      Math.random() * 900000
    )
  );

}


// ======================================
// SEND ORDER
// ======================================

orderForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();


    if (!selectedProduct) {

      alert(
        "❌ Please select a product first."
      );

      return;

    }


    const orderId =
      generateOrderCode();


    const orderData = {

      orderId:
        orderId,


      // Product Information

      productId:
        productId,

      productName:
        selectedProduct.name,

      productImage:
        selectedProduct.image,

      productPrice:
        selectedProduct.price,

      productCategory:
        selectedProduct.category,


      // Customer Information

      customerName:
        document
          .getElementById("name")
          .value,

      phone:
        document
          .getElementById("phone")
          .value,

      address:
        document
          .getElementById("address")
          .value,

      notes:
        document
          .getElementById("notes")
          .value,


      // Order Status

      status:
        "Pending",

      createdAt:
        Date.now()

    };


    try {

      await db
        .collection("orders")
        .add(orderData);


      // Show order code

      orderCodeBox.innerText =
        orderId;


      alert(
        "✅ Your order has been submitted successfully!"
      );


      // Reset form

      orderForm.reset();


    } catch (error) {

      console.error(
        "Order error:",
        error
      );


      alert(
        "❌ An error occurred while submitting your order."
      );

    }

  }
);


// ======================================
// COPY ORDER CODE
// ======================================

copyBtn.addEventListener(
  "click",
  () => {

    const orderCode =
      orderCodeBox.innerText;


    if (
      !orderCode ||
      orderCode ===
      "Order code has not been generated yet"
    ) {

      alert(
        "❌ No order code available."
      );

      return;

    }


    navigator.clipboard
      .writeText(orderCode)

      .then(() => {

        alert(
          "📋 Order code copied successfully!"
        );

      })

      .catch(error => {

        console.error(error);

        alert(
          "❌ Unable to copy the order code."
        );

      });

  }
);


// ======================================
// START
// ======================================

loadProduct();