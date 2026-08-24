/* =====================================================
   app.js
   دفتر أخطاء التركي
   بدون Firebase وبدون قاعدة بيانات
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       القائمة في الهاتف
    ================================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const isOpen =
                navMenu.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }



    /* =================================================
       إحصائيات الصفحة الرئيسية
    ================================================= */

    const mistakesCount =
        document.getElementById("mistakesCount");

    const categoriesCount =
        document.getElementById("categoriesCount");


    if (
        mistakesCount &&
        typeof getMistakesCount === "function"
    ) {

        mistakesCount.textContent =
            getMistakesCount();

    }


    if (
        categoriesCount &&
        typeof getCategoriesCount === "function"
    ) {

        categoriesCount.textContent =
            getCategoriesCount();

    }



    /* =================================================
       أحدث الأخطاء
    ================================================= */

    loadLatestMistakes();



    /* =================================================
       البحث
    ================================================= */

    setupHomeSearch();

});



/* =====================================================
   تحميل أحدث الأخطاء
===================================================== */

function loadLatestMistakes() {

    const container =
        document.getElementById("latestMistakes");


    if (!container) {

        return;

    }


    try {

        const latest =
            getLatestMistakes(3);


        if (!latest || latest.length === 0) {

            container.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        📖
                    </div>

                    <h3>
                        لا توجد أخطاء حاليًا
                    </h3>

                    <p>
                        سيتم إضافة أخطاء جديدة قريبًا.
                    </p>

                </div>

            `;

            return;

        }


        container.innerHTML =
            latest
                .map(
                    mistake =>
                        createMistakeCard(mistake)
                )
                .join("");


    } catch (error) {

        console.error(
            "خطأ في تحميل الأخطاء:",
            error
        );


        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    حدث خطأ
                </h3>

                <p>
                    تعذر تحميل الأخطاء.
                </p>

            </div>

        `;

    }

}



/* =====================================================
   إنشاء بطاقة الخطأ
===================================================== */

function createMistakeCard(mistake) {

    const category =
        getCategoryById(mistake.category);


    const categoryName =
        category
            ? category.name
            : "عام";


    return `

        <article class="mistake-card">

            <div class="mistake-card-header">

                <span class="mistake-category">

                    ${category ? category.icon : "📖"}

                    ${categoryName}

                </span>

                <span class="mistake-level">

                    ${mistake.level || "عام"}

                </span>

            </div>


            <h3 class="mistake-card-title">

                ${escapeHTML(mistake.title)}

            </h3>


            <div class="mistake-example">

                <div class="wrong-example">

                    <span class="example-label">
                        ❌ الخطأ
                    </span>

                    <p>
                        ${escapeHTML(mistake.wrong)}
                    </p>

                </div>


                <div class="correct-example">

                    <span class="example-label">
                        ✅ الصحيح
                    </span>

                    <p>
                        ${escapeHTML(mistake.correct)}
                    </p>

                </div>

            </div>


            <p class="mistake-card-description">

                ${escapeHTML(
                    mistake.shortExplanation || ""
                )}

            </p>


            <a
                href="mistake.html?id=${mistake.id}"
                class="mistake-card-link"
            >

                اقرأ الشرح الكامل

                <span>
                    ←
                </span>

            </a>

        </article>

    `;

}



/* =====================================================
   البحث من الصفحة الرئيسية
===================================================== */

function setupHomeSearch() {

    const input =
        document.getElementById("homeSearch");


    const button =
        document.getElementById("searchButton");


    if (!input) {

        return;

    }


    function search() {

        const value =
            input.value.trim();


        if (!value) {

            window.location.href =
                "mistakes.html";

            return;

        }


        window.location.href =
            "mistakes.html?search=" +
            encodeURIComponent(value);

    }


    if (button) {

        button.addEventListener(
            "click",
            search
        );

    }


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                search();

            }

        }
    );

}



/* =====================================================
   حماية النصوص من HTML
===================================================== */

function escapeHTML(value) {

    if (value === null || value === undefined) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}