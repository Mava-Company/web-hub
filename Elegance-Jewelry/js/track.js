const trackBtn =
  document.getElementById("trackBtn");

const trackResult =
  document.getElementById("trackResult");


// ======================================
// TRACK ORDER
// ======================================

trackBtn.addEventListener(
  "click",
  async () => {

    const orderId =
      document
        .getElementById("trackInput")
        .value
        .trim();


    // Check order number

    if (!orderId) {

      trackResult.innerHTML =
        "<p>⚠️ Please enter your order number.</p>";

      return;

    }


    try {

      const snapshot =
        await db
          .collection("orders")
          .where(
            "orderId",
            "==",
            orderId
          )
          .get();


      // Order not found

      if (snapshot.empty) {

        trackResult.innerHTML =
          "<p>❌ Order not found.</p>";

        return;

      }


      // Display order information

      snapshot.forEach(doc => {

        const data =
          doc.data();


        trackResult.innerHTML = `

          <div class="order-track-card">

            <h2>
              Order #${data.orderId}
            </h2>

            <p>
              <strong>Customer:</strong>
              ${data.customerName || "N/A"}
            </p>

            <p>
              <strong>Phone:</strong>
              ${data.phone || "N/A"}
            </p>

            <p>
              <strong>Product:</strong>
              ${
                data.productName ||
                data.cakeName ||
                data.cakeType ||
                "N/A"
              }
            </p>

            <p>
              <strong>Size:</strong>
              ${
                data.size ||
                "N/A"
              }
            </p>
            <p>
              <strong>Style:</strong>
              ${
                data.flavor ||
                "N/A"
              }
            </p>

            <p>
              <strong>Category:</strong>
              ${
                data.productCategory ||
                "N/A"
              }
            </p>

            <p>
              <strong>Price:</strong>
              ${
                data.productPrice ||
                data.cakePrice ||
                "N/A"
              } $
            </p>

            <p>
              <strong>Address:</strong>
              ${data.address || "N/A"}
            </p>

            <p>
              <strong>Notes:</strong>
              ${data.notes || "None"}
            </p>

            <p>
              <strong>Status:</strong>
              <span class="order-status">
                ${getStatusText(data.status)}
              </span>
            </p>

          </div>

        `;

      });


    } catch (error) {

      console.error(
        "Error tracking order:",
        error
      );

      trackResult.innerHTML =
        "<p>❌ An error occurred while tracking your order. Please try again.</p>";

    }

  }
);



// ======================================
// ORDER STATUS
// ======================================

function getStatusText(status) {

  switch (status) {

    case "Pending":
      return "Pending";

    case "Preparing":
      return "Preparing";

    case "Completed":
      return "Completed";

    case "Delivered":
      return "Delivered";

    default:
      return status || "Unknown";

  }

}