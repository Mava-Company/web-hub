const orderForm = document.getElementById("orderForm");

// =====================================================
// CREATE ORDER
// =====================================================

orderForm.addEventListener("submit", async (e) => {

e.preventDefault();

// منع الضغط المتكرر أثناء الإرسال
const submitBtn =
orderForm.querySelector(".submit-btn");

submitBtn.disabled = true;

submitBtn.textContent =
"⏳ جاري إرسال الطلب...";

// =====================================================
// GENERATE ORDER ID
// =====================================================

const orderId =
"PZ" +
Date.now().toString().slice(-8);

// =====================================================
// GET FORM DATA
// =====================================================

const orderData = {

// Order ID
orderId: orderId,


// Customer
customerName:
  document
    .getElementById("customerName")
    .value
    .trim(),

phone:
  document
    .getElementById("phone")
    .value
    .trim(),

address:
  document
    .getElementById("address")
    .value
    .trim(),


// Pizza
pizzaType:
  document
    .getElementById("pizzaType")
    .value,

size:
  document
    .getElementById("size")
    .value,

toppings:
  document
    .getElementById("toppings")
    .value,

quantity:
  Number(
    document
      .getElementById("quantity")
      .value
  ),


// Delivery
deliveryDate:
  document
    .getElementById("deliveryDate")
    .value,


// Notes
notes:
  document
    .getElementById("notes")
    .value
    .trim(),


// Status
status:
  "Pending",


// Creation time
createdAt:
  Date.now()


};

// =====================================================
// SEND TO FIREBASE
// =====================================================

try {

await db
  .collection("orders")
  .add(orderData);


// حفظ رقم الطلب حتى نستخدمه في صفحة التتبع
localStorage.setItem(
  "lastOrderId",
  orderId
);


// نجاح
alert(
  "✅ تم إرسال طلبك بنجاح!\n\n" +
  "رقم الطلب: " +
  orderId
);


// إعادة تعيين النموذج
orderForm.reset();


// إعادة الكمية إلى 1
document.getElementById("quantity").value = 1;


// الانتقال إلى التتبع
window.location.href =
  "track.html";


} catch (error) {

console.error(
  "Order Error:",
  error
);


alert(
  "❌ حدث خطأ أثناء إرسال الطلب.\n" +
  "يرجى المحاولة مرة أخرى."
);


// إعادة الزر
submitBtn.disabled = false;

submitBtn.textContent =
  "🍕 إرسال الطلب";

}

});
