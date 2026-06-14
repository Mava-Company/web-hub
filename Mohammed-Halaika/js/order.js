const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderId = "CK" + Math.floor(Math.random() * 100000);

  const orderData = {
    orderId: orderId,
    customerName: document.getElementById("customerName").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    cakeType: document.getElementById("cakeType").value,
    size: document.getElementById("size").value,
    flavor: document.getElementById("flavor").value,
    deliveryDate: document.getElementById("deliveryDate").value,
    notes: document.getElementById("notes").value,
    status: "Pending",
    createdAt: Date.now()
  };

  try {
    await db.collection("orders").add(orderData);

    alert("✅ تم إرسال الطلب بنجاح");
    alert("رقم الطلب: " + orderId);

    orderForm.reset();

    window.location.href = "track.html";

  } catch (error) {
    console.error(error);
    alert("❌ حدث خطأ أثناء إرسال الطلب");
  }
});