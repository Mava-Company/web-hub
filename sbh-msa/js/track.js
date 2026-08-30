const trackBtn =
document.getElementById("trackBtn");

const trackResult =
document.getElementById("trackResult");

const trackInput =
document.getElementById("trackInput");

// =====================================================
// STATUS TEXT
// =====================================================

function getStatusText(status) {

switch (status) {

case "Pending":
  return "⏳ قيد التنفيذ";

case "Preparing":
  return "👨‍🍳 جاري تحضير الطلب";

case "Completed":
  return "✅ تم تجهيز الطلب";

case "Delivered":
  return "🛵 تم التوصيل";

default:
  return status || "غير معروف";

}

}

// =====================================================
// STATUS CLASS
// =====================================================

function getStatusClass(status) {

switch (status) {

case "Pending":
  return "status-pending";

case "Preparing":
  return "status-preparing";

case "Completed":
  return "status-completed";

case "Delivered":
  return "status-delivered";

default:
  return "";

}

}

// =====================================================
// TRACK ORDER
// =====================================================

async function trackOrder() {

let orderId =
trackInput.value.trim();

// إذا كان المستخدم لم يكتب رقم الطلب
if (!orderId) {

trackResult.innerHTML = `
  <div class="track-message track-error">
    ⚠️ الرجاء إدخال رقم الطلب
  </div>
`;

return;

}

// توحيد الأحرف
orderId =
orderId.toUpperCase();

// حالة التحميل
trackResult.innerHTML = `     <div class="track-message">
      🔎 جاري البحث عن طلبك...     </div>
  `;

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


// =================================================
// ORDER NOT FOUND
// =================================================

if (snapshot.empty) {

  trackResult.innerHTML = `
    <div class="track-message track-error">

      ❌ لم يتم العثور على الطلب

      <br><br>

      تأكد من أن رقم الطلب صحيح.

      <br>

      مثال:
      <strong>PZ12345678</strong>

    </div>
  `;

  return;

}


// =================================================
// DISPLAY ORDER
// =================================================

snapshot.forEach(doc => {

  const data =
    doc.data();


  const statusClass =
    getStatusClass(data.status);


  const statusText =
    getStatusText(data.status);


  trackResult.innerHTML = `

    <div class="track-result-card">


      <!-- ========================= -->
      <!-- HEADER -->
      <!-- ========================= -->

      <div class="result-header">

        <div>

          <h3>
            🍕 طلب بيتزا صبح ومسا
          </h3>

          <div class="order-number">
            رقم الطلب:
            ${data.orderId}
          </div>

        </div>


        <span
          class="status-badge ${statusClass}"
        >
          ${statusText}
        </span>

      </div>



      <!-- ========================= -->
      <!-- BODY -->
      <!-- ========================= -->

      <div class="result-body">

        <div class="result-grid">


          <!-- Customer -->

          <div class="result-item">

            <strong>
              👤 اسم العميل
            </strong>

            <span>
              ${data.customerName || "-"}
            </span>

          </div>



          <!-- Phone -->

          <div class="result-item">

            <strong>
              📞 رقم الهاتف
            </strong>

            <span>
              ${data.phone || "-"}
            </span>

          </div>



          <!-- Pizza -->

          <div class="result-item">

            <strong>
              🍕 نوع البيتزا
            </strong>

            <span>
              ${data.pizzaType ||data.pizzaName ||"-"}
            </span>

          </div>



          <!-- Size -->

          <div class="result-item">

            <strong>
              📏 الحجم
            </strong>

            <span>
              ${data.size || "-"}
            </span>

          </div>



          <!-- Toppings -->

          <div class="result-item">

            <strong>
              🧀 الإضافات
            </strong>

            <span>
              ${data.toppings || "بدون إضافات"}
            </span>

          </div>



          <!-- Quantity -->

          <div class="result-item">

            <strong>
              🔢 الكمية
            </strong>

            <span>
              ${data.quantity || 1}
            </span>

          </div>



          <!-- Address -->

          <div class="result-item">

            <strong>
              📍 العنوان
            </strong>

            <span>
              ${data.address || "-"}
            </span>

          </div>



          <!-- Delivery Date -->

          <div class="result-item">

            <strong>
              📅 موعد التوصيل
            </strong>

            <span>
              ${data.deliveryDate || "-"}
            </span>

          </div>


        </div>



        <!-- ========================= -->
        <!-- NOTES -->
        <!-- ========================= -->

        ${
          data.notes
            ?
            `
            <div
              class="result-item"
              style="margin-top:12px;"
            >

              <strong>
                📝 ملاحظات
              </strong>

              <span>
                ${data.notes}
              </span>

            </div>
            `
            :
            ""
        }


      </div>

    </div>

  `;

});

} catch (error) {

console.error(
  "Track Order Error:",
  error
);


trackResult.innerHTML = `
  <div class="track-message track-error">

    ❌ حدث خطأ أثناء البحث عن الطلب

    <br>

    يرجى المحاولة مرة أخرى.

  </div>
`;

}

}

// =====================================================
// BUTTON
// =====================================================

trackBtn.addEventListener(
"click",
trackOrder
);

// =====================================================
// ENTER KEY
// =====================================================

trackInput.addEventListener(
"keydown",
(event) => {

if (
  event.key === "Enter"
) {

  trackOrder();

}

}
);

// =====================================================
// AUTO LOAD LAST ORDER
// =====================================================

window.addEventListener(
"DOMContentLoaded",
() => {

const lastOrderId =
  localStorage.getItem(
    "lastOrderId"
  );


if (lastOrderId) {

  trackInput.value =
    lastOrderId;

}

}
);
