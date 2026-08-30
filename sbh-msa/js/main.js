document.addEventListener("DOMContentLoaded", () => {

// =====================================================
// ADMIN LOGIN
// =====================================================

const adminPassword =
"soBhMajASasRtvw58gfJDER5F45";

const loginModal =
document.getElementById("adminLogin");

const loginBtn =
document.getElementById("loginBtn");

const adminLink =
document.getElementById("adminLink");

const loginError =
document.getElementById("loginError");

// فتح مودال الأدمن
window.showAdminLogin = function () {

if (loginModal) {

  loginModal.style.display = "flex";

}

};

// إغلاق مودال الأدمن
window.closeAdminModal = function () {

if (loginModal) {

  loginModal.style.display = "none";

}

};

// تسجيل الدخول
if (loginBtn) {

loginBtn.addEventListener(
  "click",
  () => {

    const passwordInput =
      document.getElementById(
        "adminPassword"
      );

    const input =
      passwordInput
        ? passwordInput.value
        : "";


    if (
      input === adminPassword
    ) {

      if (loginModal) {

        loginModal.style.display =
          "none";

      }


      localStorage.setItem(
        "isAdmin",
        "true"
      );


      window.location.href =
        "admin.html";


    } else {

      if (loginError) {

        loginError.innerText =
          "❌ كلمة المرور غير صحيحة";

      }

    }

  }
);

}

// إغلاق مودال الأدمن عند الضغط خارجه
window.addEventListener(
"click",
(e) => {

  if (
    loginModal &&
    e.target === loginModal
  ) {

    loginModal.style.display =
      "none";

  }

}

);

// إظهار رابط الأدمن إذا كان مسجلاً
window.addEventListener(
"load",
() => {

  if (
    adminLink &&
    localStorage.getItem(
      "isAdmin"
    ) === "true"
  ) {

    adminLink.style.display =
      "inline-block";

  }

}

);

// =====================================================
// PUBLIC PIZZAS
// =====================================================

const publicPizzasContainer =
document.getElementById(
"publicPizzasContainer"
);

function loadPublicPizzas() {

if (!publicPizzasContainer) {
  return;
}


db.collection("pizzas")
  .orderBy("createdAt", "desc")
  .onSnapshot(

    snapshot => {

      publicPizzasContainer.innerHTML =
        "";


      // إذا لم توجد بيتزا
      if (
        snapshot.empty
      ) {

        publicPizzasContainer.innerHTML = `

          <div class="empty-pizzas">

            <div class="empty-icon">
              🍕
            </div>

            <h3>
              لا توجد بيتزا حالياً
            </h3>

            <p>
              سيتم إضافة البيتزا قريباً.
            </p>

          </div>

        `;

        return;

      }


      snapshot.forEach(
        doc => {

          const pizza =
            doc.data();

          const id =
            doc.id;


          const card =
            document.createElement(
              "div"
            );


          card.classList.add(
            "pizza-card"
          );


          card.innerHTML = `

            <div class="pizza-image-wrapper">

              <img
                src="${pizza.image || ""}"
                alt="${pizza.name || "بيتزا"}"
                class="pizza-image"
              >

              <span class="pizza-badge">
                🍕 طازجة
              </span>

            </div>


            <div class="pizza-card-content">

              <h3>
                ${pizza.name || "بيتزا"}
              </h3>


              <p class="pizza-description">
                ${
                  pizza.description ||
                  "بيتزا شهية محضرة بعناية"
                }
              </p>


              <div class="pizza-info-row">

                <span class="pizza-price">
                  💰 ${pizza.price || 0} ₪
                </span>

                <span class="pizza-category">
                  📂 ${pizza.category || "بيتزا"}
                </span>

              </div>


              <button
                class="order-btn"
                type="button"
              >
                🍕 اطلب الآن
              </button>

            </div>

          `;


          // صورة افتراضية إذا فشل تحميل الصورة
          const image =
            card.querySelector(
              ".pizza-image"
            );


          if (image) {

            image.addEventListener(
              "error",
              () => {

                image.src =
                  "images/pizza-placeholder.jpg";

              }
            );

          }


          // زر الطلب
          const orderBtn =
            card.querySelector(
              ".order-btn"
            );


          if (orderBtn) {

            orderBtn.addEventListener(
              "click",
              () => {

                window.location.href =
                  `order1.html?pizzaId=${encodeURIComponent(id)}`;

              }
            );

          }


          publicPizzasContainer.appendChild(
            card
          );


          // Animation
          card.style.opacity =
            "0";

          card.style.transform =
            "translateY(30px)";


          setTimeout(
            () => {

              card.style.transition =
                "opacity .5s ease, transform .5s ease";

              card.style.opacity =
                "1";

              card.style.transform =
                "translateY(0)";

            },
            100
          );

        }
      );

    },

    error => {

      console.error(
        "Firebase pizzas error:",
        error
      );


      publicPizzasContainer.innerHTML = `

        <div class="empty-pizzas">

          <div class="empty-icon">
            ⚠️
          </div>

          <h3>
            حدث خطأ أثناء تحميل البيتزا
          </h3>

          <p>
            يرجى المحاولة مرة أخرى.
          </p>

        </div>

      `;

    }

  );

}

// =====================================================
// DOWNLOAD APP MODAL
// =====================================================

const downloadModal =
document.getElementById(
"downloadModal"
);

const openDownloadModal =
document.getElementById(
"openDownloadModal"
);

const closeDownloadModal =
document.getElementById(
"closeDownloadModal"
);

// فتح مودال تحميل التطبيق
if (
openDownloadModal &&
downloadModal
) {

openDownloadModal.addEventListener(
  "click",
  () => {

    downloadModal.style.display =
      "flex";

  }
);

}

// إغلاق مودال التحميل
if (
closeDownloadModal &&
downloadModal
) {

closeDownloadModal.addEventListener(
  "click",
  () => {

    downloadModal.style.display =
      "none";

  }
);

}

// إغلاق عند الضغط خارج المودال
window.addEventListener(
"click",
(e) => {

  if (
    downloadModal &&
    e.target === downloadModal
  ) {

    downloadModal.style.display =
      "none";

  }

}

);

// =====================================================
// START
// =====================================================

loadPublicPizzas();

});
