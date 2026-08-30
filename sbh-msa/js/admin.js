const ordersContainer =
document.getElementById("ordersContainer");

const pizzasContainer =
document.getElementById("pizzasContainer");

const pizzaForm =
document.getElementById("pizzaForm");

// =====================================================
// LOAD ORDERS
// =====================================================
function loadOrders() {

ordersContainer.innerHTML = "";

db.collection("orders")
.orderBy("createdAt", "desc")
.onSnapshot(snapshot => {

  ordersContainer.innerHTML = "";


  // ============================================
  // NO ORDERS
  // ============================================

  if (snapshot.empty) {

    ordersContainer.innerHTML = `
      <div class="empty-message">
        🧾 لا توجد طلبات حالياً
      </div>
    `;

    return;
  }


  // ============================================
  // ORDERS
  // ============================================

  snapshot.forEach(doc => {

    const order = doc.data();

    const id = doc.id;


    const card =
      document.createElement("div");

    card.classList.add("order-card");


    // ==========================================
    // ORDER CARD
    // ==========================================

    card.innerHTML = `

      <div class="order-header">

        <h3>
          🍕 رقم الطلب:
          ${order.orderId || id}
        </h3>

        <span class="order-status">
          ${order.status || "Pending"}
        </span>

      </div>


      <div class="order-details">


        <!-- CUSTOMER -->

        <p>
          <strong>👤 الاسم:</strong>
          ${order.customerName || "-"}
        </p>


        <!-- PHONE -->

        <p>
          <strong>📞 الهاتف:</strong>
          ${order.phone || "-"}
        </p>


        <!-- PIZZA -->

        <p>
          <strong>🍕 البيتزا:</strong>
          ${order.pizzaName || order.pizzaType || "-"}
        </p>


        <!-- PRICE -->

        <p>
          <strong>💰 السعر:</strong>
          ${order.pizzaPrice
            ? order.pizzaPrice + " ₪"
            : "-"
          }
        </p>


        <!-- CATEGORY -->

        <p>
          <strong>📂 التصنيف:</strong>
          ${order.pizzaCategory || "-"}
        </p>


        <!-- SIZE -->

        <p>
          <strong>📏 الحجم:</strong>
          ${order.size || "-"}
        </p>


        <!-- ADDRESS -->

        <p>
          <strong>📍 العنوان:</strong>
          ${order.address || "-"}
        </p>


        <!-- EXTRAS -->

        <p>
          <strong>🧀 الإضافات:</strong>
          ${order.extras || order.toppings || "بدون إضافات"}
        </p>


        <!-- DELIVERY DATE -->

        <p>
          <strong>📅 تاريخ التسليم:</strong>
          ${order.deliveryDate || "-"}
        </p>


        <!-- NOTES -->

        <p>
          <strong>📝 ملاحظات:</strong>
          ${order.notes || "-"}
        </p>


      </div>


      <!-- ===================================== -->
      <!-- STATUS -->
      <!-- ===================================== -->

      <div class="status-area">

        <label>
          تحديث حالة الطلب:
        </label>


        <select class="status-select">

          <option
            value="Pending"
            ${order.status === "Pending"
              ? "selected"
              : ""}
          >
            قيد الانتظار
          </option>


          <option
            value="Preparing"
            ${order.status === "Preparing"
              ? "selected"
              : ""}
          >
            جاري التحضير
          </option>


          <option
            value="Ready"
            ${order.status === "Ready"
              ? "selected"
              : ""}
          >
            جاهز
          </option>


          <option
            value="Delivered"
            ${order.status === "Delivered"
              ? "selected"
              : ""}
          >
            تم التوصيل
          </option>


          <option
            value="Cancelled"
            ${order.status === "Cancelled"
              ? "selected"
              : ""}
          >
            ملغي
          </option>

        </select>

      </div>


      <!-- ===================================== -->
      <!-- BUTTONS -->
      <!-- ===================================== -->

      <div class="order-buttons">

        <button class="update-btn">
          ✅ تحديث الحالة
        </button>


        <button class="delete-btn">
          🗑️ حذف الطلب
        </button>

      </div>

    `;


    // ==========================================
    // UPDATE STATUS
    // ==========================================

    card
      .querySelector(".update-btn")
      .addEventListener(
        "click",
        async () => {

          try {

            const newStatus =
              card
                .querySelector(
                  ".status-select"
                )
                .value;


            await db
              .collection("orders")
              .doc(id)
              .update({

                status:
                  newStatus

              });


            alert(
              "✅ تم تحديث حالة الطلب"
            );


          } catch (error) {

            console.error(
              "Update order error:",
              error
            );


            alert(
              "❌ حدث خطأ أثناء تحديث الطلب"
            );

          }

        }
      );


    // ==========================================
    // DELETE ORDER
    // ==========================================

    card
      .querySelector(".delete-btn")
      .addEventListener(
        "click",
        async () => {


          const confirmDelete =
            confirm(
              "⚠️ هل تريد حذف هذا الطلب نهائياً؟"
            );


          if (!confirmDelete) {

            return;

          }


          try {

            await db
              .collection("orders")
              .doc(id)
              .delete();


            alert(
              "✅ تم حذف الطلب"
            );


          } catch (error) {

            console.error(
              "Delete order error:",
              error
            );


            alert(
              "❌ حدث خطأ أثناء حذف الطلب"
            );

          }

        }
      );


    // ==========================================
    // ADD CARD
    // ==========================================

    ordersContainer.appendChild(card);

  });

}, error => {

  // ============================================
  // FIREBASE ERROR
  // ============================================

  console.error(
    "Orders Error:",
    error
  );


  ordersContainer.innerHTML = `
    <div class="empty-message">

      ❌ حدث خطأ أثناء تحميل الطلبات

      <br><br>

      تأكد من صلاحيات Firebase Firestore.

    </div>
  `;

});

}


// =====================================================
// ADD PIZZA
// =====================================================

pizzaForm.addEventListener(
"submit",
async (e) => {

e.preventDefault();


const file =
  document
    .getElementById("pizzaImage")
    .files[0];


if (!file) {

  alert(
    "❌ اختر صورة للبيتزا"
  );

  return;

}


try {

  // ================================================
  // UPLOAD IMAGE TO CLOUDINARY
  // ================================================

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
      "فشل رفع الصورة"
    );

  }


  const imageURL =
    data.secure_url;


  // ================================================
  // PIZZA DATA
  // ================================================

  const pizzaData = {

    name:
      document
        .getElementById("pizzaName")
        .value
        .trim(),


    price:
      document
        .getElementById("pizzaPrice")
        .value,


    image:
      imageURL,


    description:
      document
        .getElementById("pizzaDescription")
        .value
        .trim(),


    category:
      document
        .getElementById("pizzaCategory")
        .value,


    createdAt:
      Date.now()

  };


  // ================================================
  // SAVE TO FIREBASE
  // ================================================

  await db
    .collection("pizzas")
    .add(pizzaData);


  alert(
    "🍕 تمت إضافة البيتزا بنجاح"
  );


  pizzaForm.reset();


} catch (error) {

  console.error(
    "Pizza Error:",
    error
  );


  alert(
    "❌ حدث خطأ أثناء إضافة البيتزا"
  );

}

}
);

// =====================================================
// LOAD PIZZAS
// =====================================================

function loadPizzas() {

db.collection("pizzas")
.orderBy("createdAt", "desc")
.onSnapshot(
snapshot => {

    pizzasContainer.innerHTML = "";


    if (snapshot.empty) {

      pizzasContainer.innerHTML = `
        <div class="empty-message">
          🍕 لم تتم إضافة أي بيتزا بعد
        </div>
      `;

      return;

    }


    snapshot.forEach(doc => {

      const pizza =
        doc.data();

      const id =
        doc.id;


      const card =
        document.createElement("div");


      card.classList.add(
        "pizza-admin-card"
      );


      card.innerHTML = `

        <img
          src="${pizza.image}"
          alt="${pizza.name}"
        >


        <div class="pizza-admin-info">

          <h3>
            🍕 ${pizza.name}
          </h3>


          <p class="pizza-description">
            ${pizza.description || "لا يوجد وصف"}
          </p>


          <p class="pizza-price">
            💰 ${pizza.price} ₪
          </p>


          <p class="pizza-category">
            📂 ${pizza.category || "-"}
          </p>


        </div>


        <div class="pizza-buttons">

          <button class="edit-btn">
            ✏️ تعديل
          </button>


          <button class="delete-btn">
            🗑️ حذف
          </button>

        </div>

      `;


      // =================================================
      // DELETE PIZZA
      // =================================================

      card
        .querySelector(".delete-btn")
        .addEventListener(
          "click",
          async () => {

            const confirmDelete =
              confirm(
                `هل تريد حذف "${pizza.name}"؟`
              );


            if (!confirmDelete) {

              return;

            }


            try {

              await db
                .collection("pizzas")
                .doc(id)
                .delete();


              alert(
                "✅ تم حذف البيتزا"
              );


            } catch (error) {

              console.error(error);

              alert(
                "❌ حدث خطأ أثناء الحذف"
              );

            }

          }
        );


      // =================================================
      // EDIT PIZZA
      // =================================================

      card
        .querySelector(".edit-btn")
        .addEventListener(
          "click",
          async () => {

            const newName =
              prompt(
                "🍕 اسم البيتزا",
                pizza.name
              );


            if (!newName) {

              return;

            }


            const newPrice =
              prompt(
                "💰 السعر",
                pizza.price
              );


            if (!newPrice) {

              return;

            }


            const newDescription =
              prompt(
                "📝 وصف البيتزا",
                pizza.description || ""
              );


            try {

              await db
                .collection("pizzas")
                .doc(id)
                .update({

                  name:
                    newName.trim(),

                  price:
                    newPrice,

                  description:
                    newDescription || ""

                });


              alert(
                "✅ تم تعديل البيتزا"
              );


            } catch (error) {

              console.error(error);

              alert(
                "❌ حدث خطأ أثناء التعديل"
              );

            }

          }
        );


      pizzasContainer.appendChild(
        card
      );

    });

  },
  error => {

    console.error(error);

    pizzasContainer.innerHTML = `
      <div class="empty-message error">
        ❌ تعذر تحميل البيتزا
      </div>
    `;

  }
);

}

// =====================================================
// START
// =====================================================

loadOrders();

loadPizzas();
