const orderForm =
  document.getElementById(
    "orderForm"
  );



orderForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();


    // ======================================
    // GENERATE ORDER ID
    // ======================================

    const orderId =
      "ORD-" +
      Math.floor(
        Math.random() * 1000000
      );



    // ======================================
    // ORDER DATA
    // ======================================

    const orderData = {

      orderId:
        orderId,


      // Customer Information

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



      // Product Information

      cakeType:
        document
          .getElementById(
            "cakeType"
          )
          .value,


      size:
        document
          .getElementById(
            "size"
          )
          .value,


      flavor:
        document
          .getElementById(
            "flavor"
          )
          .value,


      deliveryDate:
        document
          .getElementById(
            "deliveryDate"
          )
          .value,


      // Additional Notes

      notes:
        document
          .getElementById(
            "notes"
          )
          .value,


      // Order Status

      status:
        "Pending",


      createdAt:
        Date.now()

    };



    // ======================================
    // SEND ORDER TO FIREBASE
    // ======================================

    try {


      await db
        .collection("orders")
        .add(orderData);



      // ======================================
      // SUCCESS MESSAGE
      // ======================================

      alert(
        "✅ Your order has been submitted successfully!"
      );


      alert(
        "Order Number: " +
        orderId
      );



      // Reset form

      orderForm.reset();



      // Go to tracking page

      window.location.href =
        "track.html";


    } catch (error) {


      console.error(error);


      alert(
        "❌ An error occurred while submitting your order."
      );

    }

  }
);