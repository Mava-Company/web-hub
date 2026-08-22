const ordersContainer =
  document.getElementById("ordersContainer");

const cakesContainer =
  document.getElementById("cakesContainer");

const cakeForm =
  document.getElementById("cakeForm");


// ======================================
// LOAD ORDERS
// ======================================

function loadOrders() {

  ordersContainer.innerHTML = "";

  db.collection("orders")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {

      ordersContainer.innerHTML = "";

      snapshot.forEach(doc => {

        const order = doc.data();
        const id = doc.id;

        const card =
          document.createElement("div");

        card.classList.add("order-card");


        card.innerHTML = `

          <h3>
            Order #: ${order.orderId || "N/A"}
          </h3>

          <p>
            <strong>Customer:</strong>
            ${order.customerName || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            ${order.phone || "N/A"}
          </p>

          <p>
            <strong>Product:</strong>
            ${order.cakeType || "N/A"}
          </p>
          
          <p>
            <strong>Size:</strong>
            ${order.size || "N/A"}
          </p>

          <p>
            <strong>Style:</strong>
            ${order.flavor || "N/A"}
          </p>

          <p>
            <strong>Address:</strong>
            ${order.address || "N/A"}
          </p>

          <p>
            <strong>Notes:</strong>
            ${order.notes || order.customerNote || "No notes"}
          </p>

          <p>
            <strong>Status:</strong>

            <span>
              ${order.status || "Pending"}
            </span>

          </p>


          <select class="status-select">

            <option value="Pending">
              Pending
            </option>

            <option value="Preparing">
              Preparing
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Delivered">
              Delivered
            </option>

          </select>


          <button class="update-btn">
            Update Status
          </button>


          <button class="delete-btn">
            Delete Order
          </button>

        `;


        // ======================================
        // SET CURRENT STATUS
        // ======================================

        const statusSelect =
          card.querySelector(".status-select");

        statusSelect.value =
          order.status || "Pending";


        // ======================================
        // UPDATE STATUS
        // ======================================

        card
          .querySelector(".update-btn")
          .addEventListener(
            "click",
            async () => {

              const newStatus =
                statusSelect.value;


              try {

                await db
                  .collection("orders")
                  .doc(id)
                  .update({

                    status: newStatus

                  });


                alert(
                  "Order status updated successfully!"
                );


              } catch (error) {

                console.error(error);

                alert(
                  "Failed to update order status."
                );

              }

            }
          );


        // ======================================
        // DELETE ORDER
        // ======================================

        card
          .querySelector(".delete-btn")
          .addEventListener(
            "click",
            async () => {


              const confirmDelete =
                confirm(
                  "Are you sure you want to delete this order?"
                );


              if (!confirmDelete) return;


              try {

                await db
                  .collection("orders")
                  .doc(id)
                  .delete();


              } catch (error) {

                console.error(error);

                alert(
                  "Failed to delete the order."
                );

              }

            }
          );


        ordersContainer.appendChild(card);

      });

    });

}



// ======================================
// ADD PRODUCT
// ======================================

cakeForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();


    const file =
      document
        .getElementById("cakeImage")
        .files[0];


    if (!file) {

      alert(
        "Please select a product image."
      );

      return;

    }


    try {


      // ======================================
      // UPLOAD IMAGE TO CLOUDINARY
      // ======================================

      const formData =
        new FormData();


      formData.append(
        "file",
        file
      );


      formData.append(
        "upload_preset",
        "sweetcake"
      );


      const response =
        await fetch(
          "https://api.cloudinary.com/v1_1/dq5g2mg31/image/upload",
          {
            method: "POST",
            body: formData
          }
        );


      const data =
        await response.json();


      if (!data.secure_url) {

        throw new Error(
          "Image upload failed."
        );

      }


      const imageURL =
        data.secure_url;



      // ======================================
      // PRODUCT DATA
      // ======================================

      const productData = {

        name:
          document
            .getElementById("cakeName")
            .value,

        price:
          document
            .getElementById("cakePrice")
            .value,

        image:
          imageURL,

        description:
          document
            .getElementById("cakeDescription")
            .value,

        category:
          document
            .getElementById("cakeCategory")
            .value,

        createdAt:
          Date.now()

      };



      // ======================================
      // SAVE PRODUCT TO FIREBASE
      // ======================================

      await db
        .collection("cakes")
        .add(productData);


      alert(
        "Product added successfully!"
      );


      cakeForm.reset();


    } catch (error) {

      console.error(error);


      alert(
        "An error occurred while adding the product."
      );

    }

  }
);



// ======================================
// LOAD PRODUCTS
// ======================================

function loadCakes() {


  db.collection("cakes")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {


      cakesContainer.innerHTML = "";


      snapshot.forEach(doc => {


        const product =
          doc.data();


        const id =
          doc.id;


        const card =
          document.createElement("div");


        card.classList.add(
          "cake-admin-card"
        );


        card.innerHTML = `

          <img
            src="${product.image}"
            alt="${product.name}"
          />


          <h3>
            ${product.name}
          </h3>


          <p class="cake-description">
            ${product.description || ""}
          </p>


          <p>
            💰 ${product.price} $
          </p>


          <p>
            📂 ${product.category || "Other"}
          </p>


          <div class="cake-buttons">


            <button class="edit-btn">
              Edit Product
            </button>


            <button class="delete-btn">
              Delete Product
            </button>


          </div>

        `;



        // ======================================
        // DELETE PRODUCT
        // ======================================

        card
          .querySelector(".delete-btn")
          .addEventListener(
            "click",
            async () => {


              const confirmDelete =
                confirm(
                  "Are you sure you want to delete this product?"
                );


              if (!confirmDelete)
                return;


              try {

                await db
                  .collection("cakes")
                  .doc(id)
                  .delete();


              } catch (error) {

                console.error(error);

                alert(
                  "Failed to delete the product."
                );

              }

            }
          );



        // ======================================
        // EDIT PRODUCT
        // ======================================

        card
          .querySelector(".edit-btn")
          .addEventListener(
            "click",
            async () => {


              const newName =
                prompt(
                  "Product Name",
                  product.name
                );


              const newPrice =
                prompt(
                  "Price",
                  product.price
                );


              const newDescription =
                prompt(
                  "Product Description",
                  product.description || ""
                );


              const newCategory =
                prompt(
                  "Product Category",
                  product.category || ""
                );


              if (
                !newName ||
                !newPrice
              ) {

                return;

              }


              try {


                await db
                  .collection("cakes")
                  .doc(id)
                  .update({

                    name:
                      newName,

                    price:
                      newPrice,

                    description:
                      newDescription,

                    category:
                      newCategory

                  });


                alert(
                  "Product updated successfully!"
                );


              } catch (error) {

                console.error(error);

                alert(
                  "Failed to update the product."
                );

              }

            }
          );


        cakesContainer.appendChild(
          card
        );

      });

    });

}



// ======================================
// START
// ======================================

loadOrders();

loadCakes();