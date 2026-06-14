const ordersContainer = document.getElementById("ordersContainer");
const cakesContainer =
  document.getElementById("cakesContainer");

const cakeForm =
  document.getElementById("cakeForm");
  
function loadOrders() {

  ordersContainer.innerHTML = "";

  db.collection("orders")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {

      ordersContainer.innerHTML = "";

      snapshot.forEach(doc => {

        const order = doc.data();
        const id = doc.id;

        const card = document.createElement("div");
        card.classList.add("order-card");

        card.innerHTML = `
          <h3>رقم الطلب: ${order.orderId}</h3>

          <p><strong>الاسم:</strong> ${order.customerName}</p>
          <p><strong>الهاتف:</strong> ${order.phone}</p>
          <p><strong>الكيك:</strong> ${order.cakeType}</p>
          <p><strong>الحجم:</strong> ${order.size}</p>
          <p><strong>العنوان:</strong> ${order.address}</p>
          <p><strong>النكهة:</strong> ${order.flavor}</p>
          <p><strong>تاريخ التسليم:</strong> ${order.deliveryDate}</p>
          <p><strong>ملاحظات إضافية:</strong> ${order.notes}</p>

          <p>
            <strong>الحالة:</strong>
            <span>${order.status}</span>
          </p>

          <select class="status-select">
            <option value="Pending">قيد التنفيذ</option>
            <option value="Preparing">جاري التحضير</option>
            <option value="Completed">تم الانتهاء</option>
            <option value="Delivered">تم التوصيل</option>
          </select>

          <button class="update-btn">تحديث</button>
          <button class="delete-btn">حذف</button>
        `;

        // Update status
        card.querySelector(".update-btn").addEventListener("click", async () => {
          const newStatus = card.querySelector(".status-select").value;

          await db.collection("orders").doc(id).update({
            status: newStatus
          });

          alert("✅ تم تحديث الحالة");
        });

        // Delete order
        card.querySelector(".delete-btn").addEventListener("click", async () => {

          if (confirm("هل تريد حذف الطلب؟")) {
            await db.collection("orders").doc(id).delete();
          }

        });

        ordersContainer.appendChild(card);

      });

    });

}

// ======================================
// ADD CAKE
// ======================================

cakeForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const file =
    document.getElementById("cakeImage").files[0];

  if (!file) {

    alert("اختر صورة");

    return;

  }

  try {

    // رفع الصورة

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      "sweetcake"
    );

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dq5g2mg31/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    const imageURL = data.secure_url;

    // حفظ البيانات

    const cakeData = {

      name:
        document.getElementById("cakeName").value,

      price:
        document.getElementById("cakePrice").value,

      image: imageURL,

      description:
        document.getElementById("cakeDescription").value,

      category:
        document.getElementById("cakeCategory").value,

      createdAt: Date.now()

    };

    await db.collection("cakes")
      .add(cakeData);

    alert("✅ تمت إضافة الكيكة");

    cakeForm.reset();

  } catch (error) {

    console.error(error);

    alert("❌ حدث خطأ");

  }

});



// ======================================
// LOAD CAKES
// ======================================

function loadCakes() {

  db.collection("cakes")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {

      cakesContainer.innerHTML = "";

      snapshot.forEach(doc => {

        const cake = doc.data();
        const id = doc.id;

        const card =
          document.createElement("div");

        card.classList.add("cake-admin-card");

        card.innerHTML = `

          <img src="${cake.image}" />

          <h3>${cake.name}</h3>

          <p class="cake-description">${cake.description}</p>

          <p>💰 ${cake.price} $</p>

          <p>📂 ${cake.category}</p>

          <div class="cake-buttons">

            <button class="edit-btn">
              تعديل
            </button>

            <button class="delete-btn">
              حذف
            </button>

          </div>

        `;

        // حذف
        card.querySelector(".delete-btn")
          .addEventListener("click", async () => {

            const confirmDelete =
              confirm("هل تريد حذف الكيكة؟");

            if (!confirmDelete) return;

            await db.collection("cakes")
              .doc(id)
              .delete();

          });

        // تعديل
        card.querySelector(".edit-btn")
          .addEventListener("click", async () => {

            const newName =
              prompt("اسم الكيكة", cake.name);

            const newPrice =
              prompt("السعر", cake.price);

            const newDescription =
              prompt("الوصف", cake.description);

            if (!newName || !newPrice) return;

            await db.collection("cakes")
              .doc(id)
              .update({

                name: newName,

                price: newPrice,

                description: newDescription

              });

            alert("✅ تم التعديل");

          });

        cakesContainer.appendChild(card);

      });

    });

}



// ======================================
// START
// ======================================

loadOrders();

loadCakes();