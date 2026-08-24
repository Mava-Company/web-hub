/* =========================================================
   mistakes.js
   صفحة الأخطاء التعليمية
   بحث + فلترة + ترتيب
   متوافق مع data.js
========================================================= */


/* =========================================================
   المتغيرات العامة
========================================================= */

let allMistakes = [];
let filteredMistakes = [];


/* =========================================================
   تشغيل الصفحة
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadMistakesPage();

});


/* =========================================================
   تحميل الصفحة
========================================================= */

function loadMistakesPage() {

    const container =
        document.getElementById("mistakesGrid");


    if (!container) {
        return;
    }


    /*
       جلب الأخطاء المنشورة فقط
    */

    allMistakes =
        getPublishedMistakes();


    /*
       التأكد من أن النتيجة Array
    */

    if (!Array.isArray(allMistakes)) {

        allMistakes = [];

    }


    filteredMistakes =
        [...allMistakes];


    /*
       تجهيز الصفحة
    */

    setupSearch();

    setupFilters();

    setupReset();

    readURLParams();

    applyFilters();

}


/* =========================================================
   البحث
========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "mistakesSearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (!searchInput) {
        return;
    }


    /*
       البحث أثناء الكتابة
    */

    searchInput.addEventListener(
        "input",
        () => {

            applyFilters();

        }
    );


    /*
       الضغط على Enter
    */

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                applyFilters();

            }

        }
    );


    /*
       زر المسح
    */

    if (clearButton) {

        clearButton.addEventListener(
            "click",
            () => {

                searchInput.value = "";

                applyFilters();

                searchInput.focus();

            }
        );

    }

}


/* =========================================================
   الفلاتر
========================================================= */

function setupFilters() {

    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    const levelFilter =
        document.getElementById(
            "levelFilter"
        );


    const sortFilter =
        document.getElementById(
            "sortFilter"
        );


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (levelFilter) {

        levelFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (sortFilter) {

        sortFilter.addEventListener(
            "change",
            applyFilters
        );

    }

}


/* =========================================================
   زر إعادة الضبط
========================================================= */

function setupReset() {

    const resetButton =
        document.getElementById(
            "resetFilters"
        );


    if (!resetButton) {
        return;
    }


    resetButton.addEventListener(
        "click",
        resetFilters
    );

}


/* =========================================================
   إعادة ضبط كل شيء
========================================================= */

function resetFilters() {

    const searchInput =
        document.getElementById(
            "mistakesSearch"
        );


    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    const levelFilter =
        document.getElementById(
            "levelFilter"
        );


    const sortFilter =
        document.getElementById(
            "sortFilter"
        );


    if (searchInput) {

        searchInput.value = "";

    }


    if (categoryFilter) {

        categoryFilter.value = "all";

    }


    if (levelFilter) {

        levelFilter.value = "all";

    }


    if (sortFilter) {

        sortFilter.value = "newest";

    }


    /*
       إزالة البحث والتصنيف من الرابط
    */

    try {

        const url =
            new URL(window.location.href);

        url.search = "";

        window.history.replaceState(
            {},
            "",
            url
        );

    } catch (error) {

        console.warn(
            "تعذر تحديث الرابط",
            error
        );

    }


    applyFilters();

}


/* =========================================================
   قراءة البيانات من URL
========================================================= */

function readURLParams() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get("category");


    const search =
        params.get("search");


    const searchInput =
        document.getElementById(
            "mistakesSearch"
        );


    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    /*
       البحث
    */

    if (
        search &&
        searchInput
    ) {

        searchInput.value =
            search;

    }


    /*
       التصنيف
    */

    if (
        category &&
        categoryFilter
    ) {

        /*
           التأكد أن التصنيف موجود
        */

        const optionExists =
            Array.from(
                categoryFilter.options
            ).some(
                option =>
                    option.value === category
            );


        if (optionExists) {

            categoryFilter.value =
                category;

        }

    }

}


/* =========================================================
   تطبيق البحث والفلاتر
========================================================= */

function applyFilters() {

    const searchInput =
        document.getElementById(
            "mistakesSearch"
        );


    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );


    const levelFilter =
        document.getElementById(
            "levelFilter"
        );


    const sortFilter =
        document.getElementById(
            "sortFilter"
        );


    /*
       قيمة البحث
    */

    const searchValue =
        searchInput
            ? searchInput.value.trim()
            : "";


    /*
       التصنيف
    */

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    /*
       المستوى
    */

    const selectedLevel =
        levelFilter
            ? levelFilter.value
            : "all";


    /*
       الترتيب
    */

    const selectedSort =
        sortFilter
            ? sortFilter.value
            : "newest";


    /*
       تحويل البحث إلى كلمات
    */

    const normalizedSearch =
        normalizeText(
            searchValue
        );


    /*
       الفلترة
    */

    filteredMistakes =
        allMistakes.filter(
            mistake => {


                /* -------------------------------------
                   فلترة التصنيف
                ------------------------------------- */

                if (
                    selectedCategory !== "all" &&
                    mistake.category !== selectedCategory
                ) {

                    return false;

                }


                /* -------------------------------------
                   فلترة المستوى
                ------------------------------------- */

                if (
                    selectedLevel !== "all"
                ) {

                    if (
                        !matchesLevel(
                            mistake.level,
                            selectedLevel
                        )
                    ) {

                        return false;

                    }

                }


                /* -------------------------------------
                   البحث
                ------------------------------------- */

                if (
                    normalizedSearch
                ) {

                    return matchesSearch(
                        mistake,
                        normalizedSearch
                    );

                }


                return true;

            }
        );


    /*
       ترتيب النتائج
    */

    filteredMistakes =
        sortMistakes(
            filteredMistakes,
            selectedSort
        );


    /*
       عرض النتائج
    */

    renderResults();


    /*
       تحديث الرابط
    */

    updateURL();

}


/* =========================================================
   البحث داخل الخطأ
========================================================= */

function matchesSearch(
    mistake,
    searchText
) {


    /*
       تجهيز النص الكامل
    */

    const searchableText =
        buildSearchText(
            mistake
        );


    /*
       تقسيم البحث إلى كلمات
       
       مثال:
       
       gitmek da
       
       سيبحث عن:
       gitmek
       da
    */

    const searchWords =
        searchText
            .split(/\s+/)
            .filter(Boolean);


    /*
       يجب أن تكون كل الكلمات موجودة
    */

    return searchWords.every(
        word => {

            return searchableText
                .includes(word);

        }
    );

}


/* =========================================================
   بناء النص الذي سيتم البحث داخله
========================================================= */

function buildSearchText(
    mistake
) {

    /*
       التصنيف
    */

    const category =
        getCategoryById(
            mistake.category
        );


    /*
       مصفوفة تحتوي كل البيانات
    */

    const values = [

        /*
           البيانات الأساسية
        */

        mistake.title,

        mistake.wrong,

        mistake.correct,

        mistake.shortExplanation,

        mistake.explanation,

        mistake.rule,


        /*
           كلمات البحث
        */

        mistake.keywords,


        /*
           الأمثلة
        */

        mistake.examples,


        /*
           بيانات إضافية مستقبلية
        */

        mistake.description,

        mistake.notes,

        mistake.tip,

        mistake.tags,


        /*
           التصنيف
        */

        mistake.category,

        category
            ? category.name
            : "",


        /*
           المستوى
        */

        mistake.level

    ];


    /*
       تحويل كل شيء إلى نص
    */

    const text =
        values
            .map(value => {

                return convertToSearchString(
                    value
                );

            })
            .join(" ");


    /*
       تطبيع النص
    */

    return normalizeText(
        text
    );

}


/* =========================================================
   تحويل أي نوع بيانات إلى نص
========================================================= */

function convertToSearchString(
    value
) {

    /*
       لا توجد قيمة
    */

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    /*
       نص
    */

    if (
        typeof value === "string"
    ) {

        return value;

    }


    /*
       رقم
    */

    if (
        typeof value === "number"
    ) {

        return String(value);

    }


    /*
       Array
    */

    if (
        Array.isArray(value)
    ) {

        return value
            .map(item =>
                convertToSearchString(item)
            )
            .join(" ");

    }


    /*
       Object
       
       مهم جدًا للأمثلة:
       
       {
          wrong: "...",
          correct: "..."
       }
    */

    if (
        typeof value === "object"
    ) {

        return Object.values(value)
            .map(item =>
                convertToSearchString(item)
            )
            .join(" ");

    }


    return String(value);

}


/* =========================================================
   تطبيع النص
========================================================= */

function normalizeText(
    value
) {

    return String(value || "")

        /*
           تحويل الأحرف الإنجليزية والتركية
           إلى lowercase
        */

        .toLocaleLowerCase("tr-TR")


        /*
           توحيد الألف العربية
        */

        .replace(
            /[إأآٱ]/g,
            "ا"
        )


        /*
           الياء والألف المقصورة
        */

        .replace(
            /ى/g,
            "ي"
        )


        /*
           التاء المربوطة
        */

        .replace(
            /ة/g,
            "ه"
        )


        /*
           الهمزة على الواو
        */

        .replace(
            /ؤ/g,
            "و"
        )


        /*
           الهمزة على الياء
        */

        .replace(
            /ئ/g,
            "ي"
        )


        /*
           إزالة التشكيل العربي
        */

        .replace(
            /[\u064B-\u065F\u0670]/g,
            ""
        )


        /*
           إزالة علامات التطويل
        */

        .replace(
            /ـ/g,
            ""
        )


        /*
           توحيد المسافات
        */

        .replace(
            /\s+/g,
            " "
        )


        /*
           إزالة المسافات من البداية والنهاية
        */

        .trim();

}


/* =========================================================
   فلترة المستوى
========================================================= */

function matchesLevel(
    mistakeLevel,
    selectedLevel
) {

    /*
       بياناتك الحالية تستخدم:
       
       مبتدئ
       
       بينما HTML يستخدم:
       
       A1
       A2
       B1...
       
       لذلك نعمل تحويل.
    */


    const levelMap = {

        "A1": [
            "A1",
            "مبتدئ"
        ],

        "A2": [
            "A2",
            "مبتدئ متقدم"
        ],

        "B1": [
            "B1",
            "متوسط"
        ],

        "B2": [
            "B2",
            "متوسط متقدم"
        ],

        "C1": [
            "C1",
            "متقدم"
        ]

    };


    const possibleValues =
        levelMap[selectedLevel];


    if (!possibleValues) {

        return (
            normalizeText(
                mistakeLevel
            ) ===
            normalizeText(
                selectedLevel
            )
        );

    }


    const normalizedMistakeLevel =
        normalizeText(
            mistakeLevel
        );


    return possibleValues.some(
        level => {

            return (
                normalizedMistakeLevel ===
                normalizeText(level)
            );

        }
    );

}


/* =========================================================
   ترتيب النتائج
========================================================= */

function sortMistakes(
    results,
    sortType
) {

    const sorted =
        [...results];


    /*
       الأحدث
    */

    if (
        sortType === "newest"
    ) {

        sorted.sort(
            (a, b) => {

                return (
                    getDateValue(b) -
                    getDateValue(a)
                );

            }
        );

    }


    /*
       الأقدم
    */

    else if (
        sortType === "oldest"
    ) {

        sorted.sort(
            (a, b) => {

                return (
                    getDateValue(a) -
                    getDateValue(b)
                );

            }
        );

    }


    /*
       الأكثر مشاهدة
    */

    else if (
        sortType === "popular"
    ) {

        sorted.sort(
            (a, b) => {

                return (
                    Number(
                        b.views || 0
                    ) -
                    Number(
                        a.views || 0
                    )
                );

            }
        );

    }


    return sorted;

}


/* =========================================================
   التاريخ
========================================================= */

function getDateValue(
    mistake
) {

    const date =
        mistake.createdAt ||
        mistake.date ||
        mistake.created ||
        mistake.updatedAt;


    if (!date) {

        /*
           إذا لم يوجد تاريخ
           نستخدم id كبديل
        */

        return Number(
            mistake.id || 0
        );

    }


    const timestamp =
        new Date(date).getTime();


    if (
        Number.isNaN(timestamp)
    ) {

        return Number(
            mistake.id || 0
        );

    }


    return timestamp;

}


/* =========================================================
   عرض النتائج
========================================================= */

function renderResults() {

    const container =
        document.getElementById(
            "mistakesGrid"
        );


    const emptyState =
        document.getElementById(
            "emptyState"
        );


    const resultsCount =
        document.getElementById(
            "resultsCount"
        );


    const resultsTitle =
        document.getElementById(
            "resultsTitle"
        );


    if (!container) {
        return;
    }


    /*
       عدد النتائج
    */

    if (resultsCount) {

        resultsCount.textContent =
            `${filteredMistakes.length} خطأ`;

    }


    /*
       عنوان النتائج
    */

    if (resultsTitle) {

        const searchInput =
            document.getElementById(
                "mistakesSearch"
            );


        const searchValue =
            searchInput
                ? searchInput.value.trim()
                : "";


        if (searchValue) {

            resultsTitle.textContent =
                `نتائج البحث عن "${searchValue}"`;

        }

        else {

            resultsTitle.textContent =
                "جميع الأخطاء";

        }

    }


    /*
       لا توجد نتائج
    */

    if (
        filteredMistakes.length === 0
    ) {

        container.innerHTML = "";


        if (emptyState) {

            emptyState.style.display =
                "block";

        }


        return;

    }


    /*
       إخفاء حالة عدم وجود النتائج
    */

    if (emptyState) {

        emptyState.style.display =
            "none";

    }


    /*
       إنشاء البطاقات
    */

    container.innerHTML =
        filteredMistakes
            .map(
                mistake =>
                    createMistakeCard(
                        mistake
                    )
            )
            .join("");

}


/* =========================================================
   بطاقة الخطأ
========================================================= */

function createMistakeCard(
    mistake
) {

    const category =
        getCategoryById(
            mistake.category
        );


    return `

        <article
            class="mistake-card"
            data-mistake-id="${mistake.id}"
        >

            <!-- رأس البطاقة -->

            <div
                class="mistake-card-header"
            >

                <span
                    class="mistake-category"
                >

                    ${
                        category
                            ? category.icon
                            : "📖"
                    }

                    ${
                        category
                            ? escapeHTML(
                                category.name
                              )
                            : "عام"
                    }

                </span>


                <span
                    class="mistake-level"
                >

                    ${escapeHTML(
                        mistake.level ||
                        "عام"
                    )}

                </span>

            </div>


            <!-- العنوان -->

            <h3>

                ${escapeHTML(
                    mistake.title
                )}

            </h3>


            <!-- الأمثلة -->

            <div
                class="mistake-example"
            >

                <!-- الخطأ -->

                <div
                    class="wrong-example"
                >

                    <span>
                        ❌ الخطأ
                    </span>

                    <p>

                        ${escapeHTML(
                            mistake.wrong
                        )}

                    </p>

                </div>


                <!-- الصحيح -->

                <div
                    class="correct-example"
                >

                    <span>
                        ✅ الصحيح
                    </span>

                    <p>

                        ${escapeHTML(
                            mistake.correct
                        )}

                    </p>

                </div>

            </div>


            <!-- الشرح المختصر -->

            <p class="mistake-short-explanation">

                ${escapeHTML(
                    mistake.shortExplanation ||
                    ""
                )}

            </p>


            <!-- القاعدة -->

            ${
                mistake.rule
                    ? `
                        <div class="mistake-rule">

                            <strong>
                                📌 القاعدة:
                            </strong>

                            <span>
                                ${escapeHTML(
                                    mistake.rule
                                )}
                            </span>

                        </div>
                    `
                    : ""
            }


            <!-- كلمات مفتاحية -->

            ${
                Array.isArray(
                    mistake.keywords
                ) &&
                mistake.keywords.length
                    ? `
                        <div class="mistake-keywords">

                            ${mistake.keywords
                                .map(
                                    keyword => `
                                        <span>
                                            ${escapeHTML(
                                                keyword
                                            )}
                                        </span>
                                    `
                                )
                                .join("")
                            }

                        </div>
                    `
                    : ""
            }


        </article>

    `;

}


/* =========================================================
   تحديث الرابط
========================================================= */

function updateURL() {

    /*
       لا نغير الرابط إذا كانت الصفحة
       ليست الصفحة الرئيسية للأخطاء
    */

    try {

        const url =
            new URL(
                window.location.href
            );


        const searchInput =
            document.getElementById(
                "mistakesSearch"
            );


        const categoryFilter =
            document.getElementById(
                "categoryFilter"
            );


        const searchValue =
            searchInput
                ? searchInput.value.trim()
                : "";


        const category =
            categoryFilter
                ? categoryFilter.value
                : "all";


        /*
           البحث
        */

        if (searchValue) {

            url.searchParams.set(
                "search",
                searchValue
            );

        }

        else {

            url.searchParams.delete(
                "search"
            );

        }


        /*
           التصنيف
        */

        if (
            category &&
            category !== "all"
        ) {

            url.searchParams.set(
                "category",
                category
            );

        }

        else {

            url.searchParams.delete(
                "category"
            );

        }


        /*
           تحديث الرابط بدون Reload
        */

        window.history.replaceState(
            {},
            "",
            url
        );

    }

    catch (error) {

        console.warn(
            "تعذر تحديث الرابط",
            error
        );

    }

}


/* =========================================================
   حماية HTML
========================================================= */

function escapeHTML(
    value
) {

    return String(
        value || ""
    )

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