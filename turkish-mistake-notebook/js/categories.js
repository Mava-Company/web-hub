/* =========================================================
   دفتر أخطاء التركي
   categories.js
   صفحة التصنيفات
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeCategoriesPage();

});


/* =========================================================
   تشغيل صفحة التصنيفات
========================================================= */

function initializeCategoriesPage() {

    /*
        التأكد من تحميل البيانات
    */

    if (
        typeof categories === "undefined"
    ) {

        console.error(
            "لم يتم العثور على بيانات التصنيفات."
        );

        showCategoriesError(
            "تعذر تحميل التصنيفات."
        );

        return;

    }


    /*
        عرض التصنيفات
    */

    renderCategories();


    /*
        تشغيل البحث
    */

    initializeCategoriesSearch();


    /*
        عرض إحصائيات عامة
    */

    updateCategoriesStatistics();

}


/* =========================================================
   عرض التصنيفات
========================================================= */

function renderCategories(
    searchTerm = ""
) {

    const container =
        document.getElementById(
            "categoriesContainer"
        );


    if (!container) {

        console.warn(
            "لم يتم العثور على categoriesContainer."
        );

        return;

    }


    container.innerHTML = "";


    /*
        الحصول على التصنيفات
    */

    let filteredCategories =
        [...categories];


    /*
        البحث
    */

    if (searchTerm.trim()) {

        const search =
            searchTerm
                .trim()
                .toLowerCase();


        filteredCategories =
            filteredCategories.filter(
                function (category) {

                    const name =
                        String(
                            category.name || ""
                        ).toLowerCase();


                    const description =
                        String(
                            category.description || ""
                        ).toLowerCase();


                    const keywords =
                        Array.isArray(
                            category.keywords
                        )
                            ? category.keywords.join(" ")
                            : "";


                    return (
                        name.includes(search) ||
                        description.includes(search) ||
                        keywords
                            .toLowerCase()
                            .includes(search)
                    );

                }
            );

    }


    /*
        لا توجد نتائج
    */

    if (
        filteredCategories.length === 0
    ) {

        renderEmptyCategories(
            container
        );

        return;

    }


    /*
        إنشاء البطاقات
    */

    filteredCategories.forEach(
        function (category) {

            const card =
                createCategoryCard(
                    category
                );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   إنشاء بطاقة التصنيف
========================================================= */

function createCategoryCard(
    category
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "category-card";


    card.dataset.category =
        category.id;


    /*
        حساب عدد الأخطاء
    */

    const count =
        getCategoryMistakesCount(
            category.id
        );


    /*
        اسم التصنيف
    */

    const name =
        category.name ||
        "تصنيف";


    /*
        وصف التصنيف
    */

    const description =
        category.description ||
        getDefaultCategoryDescription(
            category.id
        );


    /*
        لون التصنيف
    */

    const color =
        category.color ||
        "#7c5cff";


    /*
        الأيقونة
    */

    const icon =
        category.icon ||
        "📖";


    card.style.setProperty(
        "--category-color",
        color
    );


    card.innerHTML = `

        <div class="category-card-header">

            <div
                class="category-icon"
                style="background-color: ${escapeHTML(
                    color
                )}"
            >
                ${escapeHTML(icon)}
            </div>


            <span class="category-count">

                ${count}

                <span>
                    ${
                        count === 1
                            ? "خطأ"
                            : "أخطاء"
                    }
                </span>

            </span>

        </div>


        <div class="category-card-body">

            <h2 class="category-title">

                ${escapeHTML(name)}

            </h2>


            <p class="category-description">

                ${escapeHTML(description)}

            </p>


            <div class="category-card-footer">

                <a
                    href="mistakes.html?category=${encodeURIComponent(
                        category.id
                    )}"
                    class="category-link"
                >

                    استكشف الأخطاء

                    <span>
                        ←
                    </span>

                </a>

            </div>

        </div>

    `;


    /*
        الضغط على البطاقة
    */

    card.addEventListener(
        "click",
        function (event) {

            /*
                لا نكرر الانتقال إذا ضغط المستخدم
                على الرابط نفسه
            */

            if (
                event.target.closest("a")
            ) {

                return;

            }


            window.location.href =
                `mistakes.html?category=${encodeURIComponent(
                    category.id
                )}`;

        }
    );


    return card;

}


/* =========================================================
   عدد الأخطاء داخل التصنيف
========================================================= */

function getCategoryMistakesCount(
    categoryId
) {

    /*
        استخدام getPublishedMistakes
        إذا كانت موجودة في app.js
    */

    let allMistakes;


    if (
        typeof getPublishedMistakes ===
        "function"
    ) {

        allMistakes =
            getPublishedMistakes();

    } else if (
        typeof mistakes !== "undefined"
    ) {

        allMistakes =
            mistakes.filter(
                function (mistake) {

                    return (
                        mistake.published !==
                        false
                    );

                }
            );

    } else {

        return 0;

    }


    return allMistakes.filter(
        function (mistake) {

            return mistake.category ===
                categoryId;

        }
    ).length;

}


/* =========================================================
   البحث في التصنيفات
========================================================= */

function initializeCategoriesSearch() {

    const searchInput =
        document.getElementById(
            "categoriesSearch"
        );


    if (!searchInput) {
        return;
    }


    /*
        البحث أثناء الكتابة
    */

    searchInput.addEventListener(
        "input",
        function () {

            renderCategories(
                searchInput.value
            );


            updateCategoriesSearchCount(
                searchInput.value
            );

        }
    );


    /*
        زر البحث إن وجد
    */

    const searchButton =
        document.getElementById(
            "categoriesSearchButton"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                renderCategories(
                    searchInput.value
                );


                updateCategoriesSearchCount(
                    searchInput.value
                );

            }
        );

    }


    /*
        زر مسح البحث
    */

    const clearButton =
        document.getElementById(
            "clearCategoriesSearch"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                searchInput.value =
                    "";


                renderCategories();


                updateCategoriesSearchCount(
                    ""
                );


                searchInput.focus();

            }
        );

    }

}


/* =========================================================
   عدد نتائج البحث
========================================================= */

function updateCategoriesSearchCount(
    searchTerm
) {

    const countElement =
        document.getElementById(
            "categoriesSearchCount"
        );


    if (!countElement) {
        return;
    }


    if (!searchTerm.trim()) {

        countElement.textContent =
            categories.length;

        return;

    }


    const search =
        searchTerm
            .trim()
            .toLowerCase();


    const count =
        categories.filter(
            function (category) {

                const name =
                    String(
                        category.name || ""
                    ).toLowerCase();


                const description =
                    String(
                        category.description || ""
                    ).toLowerCase();


                return (
                    name.includes(search) ||
                    description.includes(search)
                );

            }
        ).length;


    countElement.textContent =
        count;

}


/* =========================================================
   الإحصائيات العامة
========================================================= */

function updateCategoriesStatistics() {

    /*
        عدد التصنيفات
    */

    const categoriesCount =
        categories.length;


    setCategoryStatistic(
        "categoriesCount",
        categoriesCount
    );


    /*
        عدد الأخطاء
    */

    let mistakesCount = 0;


    if (
        typeof getPublishedMistakes ===
        "function"
    ) {

        mistakesCount =
            getPublishedMistakes().length;

    } else if (
        typeof mistakes !== "undefined"
    ) {

        mistakesCount =
            mistakes.filter(
                function (mistake) {

                    return (
                        mistake.published !==
                        false
                    );

                }
            ).length;

    }


    setCategoryStatistic(
        "totalMistakesCount",
        mistakesCount
    );


    /*
        عدد التصنيفات التي تحتوي على أخطاء
    */

    const activeCategories =
        categories.filter(
            function (category) {

                return (
                    getCategoryMistakesCount(
                        category.id
                    ) > 0
                );

            }
        ).length;


    setCategoryStatistic(
        "activeCategoriesCount",
        activeCategories
    );

}


/* =========================================================
   تعيين إحصائية
========================================================= */

function setCategoryStatistic(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {
        return;
    }


    element.textContent =
        value;

}


/* =========================================================
   الوصف الافتراضي للتصنيف
========================================================= */

function getDefaultCategoryDescription(
    categoryId
) {

    const descriptions = {

        suffixes:
            "أخطاء تتعلق باللاحقات التي تضاف إلى الكلمات في اللغة التركية.",

        cases:
            "أخطاء استخدام حالات الاسم واللواحق المرتبطة بها.",

        tenses:
            "أخطاء شائعة في استخدام الأزمنة وصيغ الأفعال التركية.",

        sentence_order:
            "أخطاء ترتيب الكلمات وبناء الجملة باللغة التركية.",

        prepositions:
            "أخطاء استخدام حروف الجر والتراكيب المرتبطة بها.",

        similar_words:
            "كلمات تركية متشابهة يخلط بينها المتعلمون.",

        arabic_translation:
            "أخطاء تنتج عن الترجمة الحرفية من العربية إلى التركية."

    };


    return (
        descriptions[categoryId] ||
        "مجموعة من الأخطاء الشائعة التي تساعدك على تحسين لغتك التركية."
    );

}


/* =========================================================
   رسالة عدم وجود نتائج
========================================================= */

function renderEmptyCategories(
    container
) {

    const empty =
        document.createElement(
            "div"
        );


    empty.className =
        "empty-state";


    empty.innerHTML = `

        <div class="empty-state-icon">
            🔍
        </div>


        <h3>
            لم نجد هذا التصنيف
        </h3>


        <p>
            جرّبي البحث باستخدام كلمة أخرى.
        </p>


        <button
            type="button"
            class="btn btn-primary"
            id="resetCategoriesSearch"
        >
            عرض جميع التصنيفات
        </button>

    `;


    container.appendChild(
        empty
    );


    const resetButton =
        document.getElementById(
            "resetCategoriesSearch"
        );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            function () {

                const input =
                    document.getElementById(
                        "categoriesSearch"
                    );


                if (input) {

                    input.value =
                        "";

                }


                renderCategories();

                updateCategoriesSearchCount(
                    ""
                );

            }
        );

    }

}


/* =========================================================
   خطأ تحميل التصنيفات
========================================================= */

function showCategoriesError(
    message
) {

    const container =
        document.getElementById(
            "categoriesContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="details-error">

            <div class="details-error-icon">
                ⚠️
            </div>


            <h2>
                حدث خطأ
            </h2>


            <p>
                ${escapeHTML(message)}
            </p>


            <button
                type="button"
                class="btn btn-primary"
                onclick="location.reload()"
            >
                إعادة المحاولة
            </button>

        </div>

    `;

}


/* =========================================================
   فتح تصنيف محدد
========================================================= */

function openCategory(
    categoryId
) {

    if (!categoryId) {
        return;
    }


    window.location.href =
        `mistakes.html?category=${encodeURIComponent(
            categoryId
        )}`;

}


window.openCategory =
    openCategory;


/* =========================================================
   البحث عن تصنيف بالـ ID
========================================================= */

function findCategory(
    categoryId
) {

    if (
        typeof categories ===
        "undefined"
    ) {

        return null;

    }


    return categories.find(
        function (category) {

            return category.id ===
                categoryId;

        }
    ) || null;

}


window.findCategory =
    findCategory;


/* =========================================================
   دعم فتح التصنيف من الرابط
========================================================= */

function initializeCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const search =
        params.get("search");


    if (search) {

        const searchInput =
            document.getElementById(
                "categoriesSearch"
            );


        if (searchInput) {

            searchInput.value =
                search;

        }


        renderCategories(
            search
        );


        updateCategoriesSearchCount(
            search
        );

    }

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeCategoryFromURL();

    }
);


/* =========================================================
   تحديث الرابط عند البحث
========================================================= */

function updateCategorySearchURL(
    searchTerm
) {

    const url =
        new URL(
            window.location.href
        );


    if (searchTerm.trim()) {

        url.searchParams.set(
            "search",
            searchTerm.trim()
        );

    } else {

        url.searchParams.delete(
            "search"
        );

    }


    window.history.replaceState(
        {},
        "",
        url
    );

}


/* =========================================================
   تصدير الوظائف
========================================================= */

window.renderCategories =
    renderCategories;

window.getCategoryMistakesCount =
    getCategoryMistakesCount;

window.updateCategoriesStatistics =
    updateCategoriesStatistics;


/* =========================================================
   نهاية categories.js
========================================================= */