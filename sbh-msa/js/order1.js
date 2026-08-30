const pizzaInfoContainer =
document.getElementById("pizzaInfo");

const pizzaPrice =
document.getElementById("pizzaPrice");

const orderForm =
document.getElementById("orderForm");

const orderCodeBox =
document.getElementById("orderCodeBox");

const copyBtn =
document.getElementById("copyCode");

// =====================================================
// GET PIZZA ID FROM URL
// =====================================================

const urlParams =
new URLSearchParams(
window.location.search
);

const pizzaId =
urlParams.get("pizzaId");

// البيتزا المختارة
let selectedPizza = null;

// =====================================================
// LOAD PIZZA
// =====================================================

async function loadPizza() {

if (!pizzaId) {

pizzaInfoContainer.innerHTML = `

  <div class="pizza-error">

    <div class="error-icon">
      🍕
    </div>

    <h3>
      لا توجد بيتزا محددة
    </h3>

    <p>
      يرجى العودة إلى القائمة واختيار بيتزا.
    </p>

  </div>

`;

if (pizzaPrice) {
  pizzaPrice.innerText = "-";
}

return;

}

try {

const doc =
  await db
    .collection("pizzas")
    .doc(pizzaId)
    .get();


// البيتزا غير موجودة
if (!doc.exists) {

  pizzaInfoContainer.innerHTML = `

    <div class="pizza-error">

      <div class="error-icon">
        😔
      </div>

      <h3>
        البيتزا غير موجودة
      </h3>

      <p>
        ربما تم حذفها من القائمة.
      </p>

    </div>

  `;

  if (pizzaPrice) {
    pizzaPrice.innerText = "-";
  }

  return;
}


// حفظ بيانات البيتزا
selectedPizza =
  doc.data();


// =================================================
// DISPLAY PIZZA
// =================================================

pizzaInfoContainer.innerHTML = `

  <div class="selected-pizza">

    <div class="selected-pizza-image">

      <img
        src="${selectedPizza.image || ""}"
        alt="${selectedPizza.name || "بيتزا"}"
        onerror="
          this.style.display='none';
          this.parentElement.innerHTML +=
          '<div class=&quot;pizza-placeholder&quot;>🍕</div>';
        "
      >

    </div>


    <div class="selected-pizza-details">

      <h2>
        🍕 ${selectedPizza.name || "بيتزا"}
      </h2>


      <p class="pizza-description">

        ${
          selectedPizza.description ||
          "بيتزا شهية محضرة بعناية"
        }

      </p>


      <div class="pizza-meta">

        <span>
          📂 ${selectedPizza.category || "بيتزا"}
        </span>

        <span>
          💰 ${selectedPizza.price || 0} ₪
        </span>

      </div>

    </div>

  </div>

`;


// عرض السعر
if (pizzaPrice) {

  pizzaPrice.innerText =
    `💰 ${selectedPizza.price || 0} ₪`;

}

} catch (error) {

console.error(
  "Pizza loading error:",
  error
);


pizzaInfoContainer.innerHTML = `

  <div class="pizza-error">

    <div class="error-icon">
      ⚠️
    </div>

    <h3>
      حدث خطأ
    </h3>

    <p>
      حدث خطأ أثناء تحميل البيتزا.
    </p>

  </div>

`;

}

}

// =====================================================
// GENERATE ORDER CODE
// =====================================================

function generateOrderCode() {

return (
"PZ-" +
Math.floor(
100000 +
Math.random() * 900000
)
);

}

// =====================================================
// SUBMIT ORDER
// =====================================================

if (orderForm) {

orderForm.addEventListener(
"submit",
async (e) => {

  e.preventDefault();


  // ===============================================
  // CHECK PIZZA
  // ===============================================

  if (!selectedPizza) {

    alert(
      "❌ لم يتم تحديد البيتزا"
    );

    return;

  }


  // ===============================================
  // CUSTOMER DATA
  // ===============================================

  const customerName =
    document
      .getElementById("name")
      .value
      .trim();


  const phone =
    document
      .getElementById("phone")
      .value
      .trim();


  const address =
    document
      .getElementById("address")
      .value
      .trim();


  const notes =
    document
      .getElementById("notes")
      .value
      .trim();


  // ===============================================
  // SIZE
  // ===============================================

  const sizeElement =
    document.getElementById("size");


  const size =
    sizeElement
      ? sizeElement.value
      : "";


  // ===============================================
  // EXTRAS
  // ===============================================

  const extrasElement =
    document.getElementById("extras");


  const extras =
    extrasElement
      ? extrasElement.value.trim()
      : "";


  // ===============================================
  // DELIVERY DATE
  // ===============================================

  const deliveryDateElement =
    document.getElementById(
      "deliveryDate"
    );


  const deliveryDate =
    deliveryDateElement
      ? deliveryDateElement.value
      : "";


  // ===============================================
  // VALIDATION
  // ===============================================

  if (
    !customerName ||
    !phone ||
    !address
  ) {

    alert(
      "⚠️ يرجى تعبئة جميع البيانات المطلوبة"
    );

    return;

  }


  // ===============================================
  // GENERATE ORDER ID
  // ===============================================

  const orderId =
    generateOrderCode();


  // ===============================================
  // ORDER DATA
  // ===============================================

  const orderData = {

  // رقم الطلب
  orderId: orderId,

  // =========================
  // PIZZA INFORMATION
  // =========================

  pizzaId: pizzaId,

  pizzaName: String(
    selectedPizza.name || "بيتزا غير محددة"
  ),

  pizzaPrice: Number(
    selectedPizza.price || 0
  ),

  pizzaImage: String(
    selectedPizza.image || ""
  ),

  pizzaCategory: String(
    selectedPizza.category || ""
  ),

  pizzaDescription: String(
    selectedPizza.description || ""
  ),

  // =========================
  // CUSTOMER
  // =========================

  customerName: customerName,

  phone: phone,

  address: address,

  // =========================
  // OPTIONS
  // =========================

  size: size || "Medium",

  extras: extras || "بدون إضافات",

  // =========================
  // DELIVERY
  // =========================

  deliveryDate:
    deliveryDate || "",

  // =========================
  // NOTES
  // =========================

  notes:
    notes || "",

  // =========================
  // STATUS
  // =========================

  status: "Pending",

  // =========================
  // DATE
  // =========================

  createdAt: Date.now()

};

  // ===============================================
  // SUBMIT TO FIREBASE
  // ===============================================

  try {

    const submitBtn =
      orderForm.querySelector(
        ".submit-btn"
      );


    // تعطيل زر الإرسال
    if (submitBtn) {

      submitBtn.disabled =
        true;

      submitBtn.innerText =
        "⏳ جاري إرسال الطلب...";

    }


    // حفظ الطلب
    await db
      .collection("orders")
      .add(orderData);


    // ===========================================
    // SHOW ORDER CODE
    // ===========================================

    if (orderCodeBox) {

      orderCodeBox.innerText =
        orderId;

    }


    // حفظ آخر طلب
    localStorage.setItem(
      "lastOrderId",
      orderId
    );


    // رسالة نجاح
    alert(
      "✅ تم إرسال طلبك بنجاح!\n\n" +
      "🍕 البيتزا: " +
      selectedPizza.name +
      "\n" +
      "📏 الحجم: " +
      (size || "-") +
      "\n" +
      "📦 رقم الطلب: " +
      orderId
    );


    // تفريغ النموذج
    orderForm.reset();


    // إعادة الزر
    if (submitBtn) {

      submitBtn.disabled =
        false;

      submitBtn.innerText =
        "🍕 إرسال طلب البيتزا";

    }


  } catch (error) {

    console.error(
      "Order error:",
      error
    );


    alert(
      "❌ حدث خطأ أثناء إرسال الطلب.\nيرجى المحاولة مرة أخرى."
    );


    const submitBtn =
      orderForm.querySelector(
        ".submit-btn"
      );


    if (submitBtn) {

      submitBtn.disabled =
        false;

      submitBtn.innerText =
        "🍕 إرسال طلب البيتزا";

    }

  }

}

);

}

// =====================================================
// COPY ORDER CODE
// =====================================================

if (copyBtn) {

copyBtn.addEventListener(
"click",
async () => {

  const code =
    orderCodeBox
      ? orderCodeBox.innerText.trim()
      : "";


  if (
    !code ||
    code ===
    "لم يتم إنشاء كود بعد"
  ) {

    alert(
      "⚠️ لا يوجد كود طلب لنسخه"
    );

    return;

  }


  try {

    await navigator
      .clipboard
      .writeText(code);


    alert(
      "📋 تم نسخ كود الطلب"
    );


  } catch (error) {

    // =========================================
    // FALLBACK COPY
    // =========================================

    const textarea =
      document.createElement(
        "textarea"
      );


    textarea.value =
      code;


    document.body.appendChild(
      textarea
    );


    textarea.select();


    document.execCommand(
      "copy"
    );


    textarea.remove();


    alert(
      "📋 تم نسخ كود الطلب"
    );

  }

}

);

}

// =====================================================
// START
// =====================================================

loadPizza();
