/* =========================================================
   دفتر أخطاء التركي
   favorites.js
   صفحة المفضلة
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializeFavoritesPage();
});


/* =========================================================
   إعدادات المفضلة
========================================================= */

const FAVORITES_STORAGE_KEY =
    "turkishMistakesFavorites";


/* =========================================================
   تشغيل الصفحة
========================================================= */

function initializeFavoritesPage() {

    /*
        التأكد من وجود البيانات
    */

    if (typeof mistakes === "undefined") {

        showFavoritesError(
            "تعذر تحميل قائمة الأخطاء."
        );

        return;
    }


    /*
        عرض المفضلة
    */

    renderFavorites();


    /*
        تحديث العداد
    */

    updateFavoritesCount();


    /*
        البحث
    */

    initializeFavoritesSearch();


    /*
        الفلترة
    */

    initializeFavoritesFilter();


    /*
        زر حذف الكل
    */

    initializeClearFavoritesButton();
}


/* =========================================================
   الحصول على المفضلة
========================================================= */

function getFavorites() {

    try {

        const saved =
            localStorage.getItem(
                FAVORITES_STORAGE_KEY
            );


        if (!saved) {
            return [];
        }


        const parsed =
            JSON.parse(saved);


        if (!Array.isArray(parsed)) {
            return [];
        }


        return parsed;

    } catch (error) {

        console.warn(
            "تعذر قراءة المفضلة.",
            error
        );

        return [];
    }
}


/* =========================================================
   حفظ المفضلة
========================================================= */

function saveFavorites(
    favorites
) {

    try {

        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(
                favorites
            )
        );


        return true;

    } catch (error) {

        console.warn(
            "تعذر حفظ المفضلة.",
            error
        );

        return false;
    }
}


/* =========================================================
   التحقق هل الخطأ مفضل
========================================================= */

function isFavorite(
    mistakeId
) {

    const favorites =
        getFavorites();


    return favorites.includes(
        String(mistakeId)
    );
}


/* =========================================================
   إضافة إلى المفضلة
========================================================= */

function addFavorite(
    mistakeId
) {

    const id =
        String(mistakeId);


    const favorites =
        getFavorites();


    if (
        favorites.includes(id)
    ) {

        return false;
    }


    favorites.push(id);


    const saved =
        saveFavorites(
            favorites
        );


    if (saved) {

        updateFavoritesCount();

        updateFavoriteButtons(
            id,
            true
        );

        showFavoriteNotification(
            "تمت إضافة الخطأ إلى المفضلة ⭐",
            "success"
        );
    }


    return saved;
}


/* =========================================================
   إزالة من المفضلة
========================================================= */

function removeFavorite(
    mistakeId
) {

    const id =
        String(mistakeId);


    const favorites =
        getFavorites();


    const updated =
        favorites.filter(
            function (favoriteId) {

                return favoriteId !==
                    id;

            }
        );


    const saved =
        saveFavorites(
            updated
        );


    if (saved) {

        updateFavoritesCount();

        updateFavoriteButtons(
            id,
            false
        );

        /*
            إذا كنا داخل صفحة المفضلة
            نعيد عرض القائمة
        */

        if (
            document.body.dataset.page ===
            "favorites"
        ) {

            renderFavorites();

        } else if (
            document.getElementById(
                "favoritesList"
            )
        ) {

            renderFavorites();

        }


        showFavoriteNotification(
            "تم حذف الخطأ من المفضلة.",
            "success"
        );
    }


    return saved;
}


/* =========================================================
   تبديل حالة المفضلة
========================================================= */

function toggleFavorite(
    mistakeId
) {

    if (
        isFavorite(mistakeId)
    ) {

        return removeFavorite(
            mistakeId
        );

    }


    return addFavorite(
        mistakeId
    );
}


/* =========================================================
   عرض قائمة المفضلة
========================================================= */

function renderFavorites(
    customList
) {

    const container =
        document.getElementById(
            "favoritesList"
        );


    if (!container) {
        return;
    }


    const favorites =
        getFavorites();


    /*
        الحصول على الأخطاء الموجودة
    */

    let favoriteMistakes =
        getFavoriteMistakes(
            favorites
        );


    /*
        استخدام قائمة مخصصة إذا تم تمريرها
    */

    if (
        Array.isArray(customList)
    ) {

        favoriteMistakes =
            customList;

    }


    /*
        تحديث العداد
    */

    updateFavoritesCount(
        favoriteMistakes.length
    );


    /*
        لا توجد مفضلة
    */

    if (
        favoriteMistakes.length === 0
    ) {

        renderEmptyFavorites(
            container
        );

        return;
    }


    /*
        إنشاء البطاقات
    */

    container.innerHTML = "";


    favoriteMistakes.forEach(
        function (mistake) {

            const card =
                createFavoriteCard(
                    mistake
                );


            container.appendChild(
                card
            );

        }
    );
}


/* =========================================================
   الحصول على الأخطاء المفضلة
========================================================= */

function getFavoriteMistakes(
    favoriteIds
) {

    const ids =
        favoriteIds || getFavorites();


    if (
        typeof mistakes ===
        "undefined"
    ) {

        return [];
    }


    return ids
        .map(
            function (id) {

                return mistakes.find(
                    function (mistake) {

                        return String(
                            mistake.id
                        ) === String(id);

                    }
                );

            }
        )
        .filter(
            function (mistake) {

                return !!mistake;

            }
        );
}


/* =========================================================
   إنشاء بطاقة المفضلة
========================================================= */

function createFavoriteCard(
    mistake
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "favorite-card";


    card.dataset.id =
        mistake.id;


    /*
        التصنيف
    */

    const category =
        getFavoriteCategory(
            mistake.category
        );


    const categoryName =
        category
            ? category.name
            : "عام";


    const categoryIcon =
        category
            ? category.icon || "📖"
            : "📖";


    /*
        المستوى
    */

    const level =
        mistake.level ||
        "عام";


    /*
        الجملة الخاطئة
    */

    const wrongSentence =
        mistake.wrong ||
        mistake.incorrect ||
        "";


    /*
        الجملة الصحيحة
    */

    const correctSentence =
        mistake.correct ||
        "";


    card.innerHTML = `

        <div class="favorite-card-header">

            <div class="favorite-category">

                <span>
                    ${escapeFavoriteHTML(
                        categoryIcon
                    )}
                </span>

                <span>
                    ${escapeFavoriteHTML(
                        categoryName
                    )}
                </span>

            </div>


            <span class="favorite-level">

                ${escapeFavoriteHTML(
                    level
                )}

            </span>

        </div>


        <div class="favorite-card-body">

            <h3>

                ${escapeFavoriteHTML(
                    mistake.title ||
                    "خطأ في اللغة التركية"
                )}

            </h3>


            <div class="favorite-sentence wrong">

                <span class="sentence-label">
                    ❌ الخطأ
                </span>

                <p dir="ltr">

                    ${escapeFavoriteHTML(
                        wrongSentence
                    )}

                </p>

            </div>


            <div class="favorite-sentence correct">

                <span class="sentence-label">
                    ✅ الصحيح
                </span>

                <p dir="ltr">

                    ${escapeFavoriteHTML(
                        correctSentence
                    )}

                </p>

            </div>

        </div>


        <div class="favorite-card-footer">

            <a
                href="mistake.html?id=${encodeURIComponent(
                    mistake.id
                )}"
                class="favorite-view-btn"
            >

                عرض الشرح

                <span>←</span>

            </a>


            <button
                type="button"
                class="favorite-remove-btn"
                data-remove-favorite="${escapeFavoriteHTML(
                    mistake.id
                )}"
                aria-label="إزالة من المفضلة"
                title="إزالة من المفضلة"
            >

                ♡

            </button>

        </div>

    `;


    /*
        زر الحذف
    */

    const removeButton =
        card.querySelector(
            "[data-remove-favorite]"
        );


    if (removeButton) {

        removeButton.addEventListener(
            "click",
            function () {

                removeFavorite(
                    mistake.id
                );

            }
        );
    }


    return card;
}


/* =========================================================
   القائمة الفارغة
========================================================= */

function renderEmptyFavorites(
    container
) {

    container.innerHTML = `

        <div class="empty-favorites">

            <div class="empty-favorites-icon">
                ♡
            </div>


            <h2>
                لا توجد أخطاء في المفضلة
            </h2>


            <p>
                عندما تجدين خطأ مهمًا تريدين مراجعته لاحقًا،
                أضيفيه إلى المفضلة ليظهر هنا.
            </p>


            <a
                href="mistakes.html"
                class="btn btn-primary"
            >
                تصفح الأخطاء
            </a>

        </div>

    `;
}


/* =========================================================
   تحديث عداد المفضلة
========================================================= */

function updateFavoritesCount(
    customCount
) {

    const count =
        customCount !== undefined
            ? customCount
            : getFavorites().length;


    const elements =
        document.querySelectorAll(
            "[data-favorites-count]"
        );


    elements.forEach(
        function (element) {

            element.textContent =
                count;

        }
    );


    /*
        عناصر بأسماء ثابتة
    */

    setFavoritesText(
        "favoritesCount",
        count
    );


    setFavoritesText(
        "favoriteCount",
        count
    );


    /*
        إظهار أو إخفاء badge
    */

    const badges =
        document.querySelectorAll(
            ".favorites-badge"
        );


    badges.forEach(
        function (badge) {

            badge.textContent =
                count;

            badge.hidden =
                count === 0;

        }
    );
}


/* =========================================================
   البحث
========================================================= */

function initializeFavoritesSearch() {

    const searchInput =
        document.getElementById(
            "favoritesSearch"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        function () {

            filterFavorites();

        }
    );
}


/* =========================================================
   فلترة التصنيف
========================================================= */

function initializeFavoritesFilter() {

    const filter =
        document.getElementById(
            "favoritesCategory"
        );


    if (!filter) {
        return;
    }


    renderFavoriteCategoryFilter();


    filter.addEventListener(
        "change",
        function () {

            filterFavorites();

        }
    );
}


/* =========================================================
   عرض تصنيفات الفلتر
========================================================= */

function renderFavoriteCategoryFilter() {

    const select =
        document.getElementById(
            "favoritesCategory"
        );


    if (!select) {
        return;
    }


    if (
        typeof categories ===
        "undefined"
    ) {

        return;
    }


    /*
        إذا كانت الخيارات موجودة
    */

    if (
        select.options.length > 1
    ) {

        return;
    }


    categories.forEach(
        function (category) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                category.id;


            option.textContent =
                `${category.icon || "📖"} ${
                    category.name
                }`;


            select.appendChild(
                option
            );

        }
    );
}


/* =========================================================
   فلترة المفضلة
========================================================= */

function filterFavorites() {

    const searchInput =
        document.getElementById(
            "favoritesSearch"
        );


    const categorySelect =
        document.getElementById(
            "favoritesCategory"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLocaleLowerCase(
                    "ar"
                )
            : "";


    const category =
        categorySelect
            ? categorySelect.value
            : "all";


    let favoriteMistakes =
        getFavoriteMistakes();


    /*
        البحث
    */

    if (search) {

        favoriteMistakes =
            favoriteMistakes.filter(
                function (mistake) {

                    const text = [

                        mistake.title,

                        mistake.wrong,

                        mistake.correct,

                        mistake.explanation,

                        mistake.rule,

                        mistake.level

                    ]
                        .filter(Boolean)
                        .join(" ")
                        .toLocaleLowerCase(
                            "ar"
                        );


                    return text.includes(
                        search
                    );

                }
            );
    }


    /*
        التصنيف
    */

    if (
        category &&
        category !== "all"
    ) {

        favoriteMistakes =
            favoriteMistakes.filter(
                function (mistake) {

                    return mistake.category ===
                        category;

                }
            );
    }


    renderFavorites(
        favoriteMistakes
    );


    /*
        رسالة عدم وجود نتائج
    */

    if (
        favoriteMistakes.length === 0
    ) {

        showFavoritesFilterMessage();

    }
}


/* =========================================================
   رسالة الفلترة الفارغة
========================================================= */

function showFavoritesFilterMessage() {

    const container =
        document.getElementById(
            "favoritesList"
        );


    if (!container) {
        return;
    }


    const favorites =
        getFavorites();


    /*
        إذا كانت المفضلة فارغة أصلًا
        نستخدم الرسالة الأصلية.
    */

    if (!favorites.length) {
        return;
    }


    container.innerHTML = `

        <div class="empty-favorites filtered-empty">

            <div class="empty-favorites-icon">
                🔎
            </div>


            <h2>
                لم نجد نتائج
            </h2>


            <p>
                جربي كلمة بحث مختلفة أو اختاري تصنيفًا آخر.
            </p>


            <button
                type="button"
                class="btn btn-secondary"
                id="clearFavoritesFilter"
            >
                إظهار كل المفضلة
            </button>

        </div>

    `;


    const button =
        document.getElementById(
            "clearFavoritesFilter"
        );


    if (button) {

        button.addEventListener(
            "click",
            clearFavoritesFilters
        );
    }
}


/* =========================================================
   مسح الفلاتر
========================================================= */

function clearFavoritesFilters() {

    const searchInput =
        document.getElementById(
            "favoritesSearch"
        );


    const categorySelect =
        document.getElementById(
            "favoritesCategory"
        );


    if (searchInput) {
        searchInput.value = "";
    }


    if (categorySelect) {
        categorySelect.value = "all";
    }


    renderFavorites();

}


/* =========================================================
   زر حذف جميع المفضلة
========================================================= */

function initializeClearFavoritesButton() {

    const button =
        document.getElementById(
            "clearAllFavorites"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        clearAllFavorites
    );
}


/* =========================================================
   حذف جميع المفضلة
========================================================= */

function clearAllFavorites() {

    const favorites =
        getFavorites();


    if (!favorites.length) {

        showFavoriteNotification(
            "قائمة المفضلة فارغة أصلًا.",
            "info"
        );

        return;
    }


    const confirmed =
        window.confirm(
            "هل أنتِ متأكدة من حذف جميع الأخطاء من المفضلة؟"
        );


    if (!confirmed) {
        return;
    }


    saveFavorites([]);


    updateFavoritesCount();


    renderFavorites();


    updateFavoriteButtons(
        null,
        false
    );


    showFavoriteNotification(
        "تم حذف جميع الأخطاء من المفضلة.",
        "success"
    );
}


/* =========================================================
   تحديث أزرار المفضلة
========================================================= */

function updateFavoriteButtons(
    mistakeId,
    favorite
) {

    const buttons =
        document.querySelectorAll(
            "[data-favorite]"
        );


    buttons.forEach(
        function (button) {

            const id =
                button.dataset.favorite;


            if (
                mistakeId !== null &&
                String(id) !==
                String(mistakeId)
            ) {

                return;
            }


            const isFav =
                mistakeId === null
                    ? false
                    : favorite;


            button.classList.toggle(
                "is-favorite",
                isFav
            );


            button.classList.toggle(
                "active",
                isFav
            );


            button.setAttribute(
                "aria-pressed",
                String(isFav)
            );


            /*
                تحديث النص
            */

            const text =
                button.querySelector(
                    "[data-favorite-text]"
                );


            if (text) {

                text.textContent =
                    isFav
                        ? "في المفضلة"
                        : "إضافة للمفضلة";
            }


            /*
                تحديث القلب
            */

            const icon =
                button.querySelector(
                    "[data-favorite-icon]"
                );


            if (icon) {

                icon.textContent =
                    isFav
                        ? "♥"
                        : "♡";
            }

        }
    );
}


/* =========================================================
   تفعيل أزرار المفضلة في أي صفحة
========================================================= */

function initializeFavoriteButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-favorite]"
        );


    buttons.forEach(
        function (button) {

            const id =
                button.dataset.favorite;


            if (
                !id
            ) {
                return;
            }


            /*
                الحالة الحالية
            */

            const active =
                isFavorite(id);


            button.classList.toggle(
                "is-favorite",
                active
            );


            button.classList.toggle(
                "active",
                active
            );


            button.setAttribute(
                "aria-pressed",
                String(active)
            );


            /*
                منع إضافة أكثر من event
            */

            if (
                button.dataset.favoriteInitialized ===
                "true"
            ) {

                return;
            }


            button.dataset.favoriteInitialized =
                "true";


            button.addEventListener(
                "click",
                function () {

                    toggleFavorite(id);

                }
            );

        }
    );
}


/* =========================================================
   تحديث جميع أزرار المفضلة
========================================================= */

function refreshFavoriteButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-favorite]"
        );


    buttons.forEach(
        function (button) {

            const id =
                button.dataset.favorite;


            const active =
                isFavorite(id);


            button.classList.toggle(
                "is-favorite",
                active
            );


            button.classList.toggle(
                "active",
                active
            );


            button.setAttribute(
                "aria-pressed",
                String(active)
            );


            const text =
                button.querySelector(
                    "[data-favorite-text]"
                );


            if (text) {

                text.textContent =
                    active
                        ? "في المفضلة"
                        : "إضافة للمفضلة";
            }


            const icon =
                button.querySelector(
                    "[data-favorite-icon]"
                );


            if (icon) {

                icon.textContent =
                    active
                        ? "♥"
                        : "♡";
            }

        }
    );
}


/* =========================================================
   البحث عن تصنيف
========================================================= */

function getFavoriteCategory(
    categoryId
) {

    if (
        typeof getCategoryById ===
        "function"
    ) {

        return getCategoryById(
            categoryId
        );
    }


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


/* =========================================================
   إشعار
========================================================= */

function showFavoriteNotification(
    message,
    type
) {

    let notification =
        document.getElementById(
            "favoriteNotification"
        );


    /*
        إنشاء العنصر إذا لم يكن موجودًا
    */

    if (!notification) {

        notification =
            document.createElement(
                "div"
            );


        notification.id =
            "favoriteNotification";


        notification.className =
            "favorite-notification";


        document.body.appendChild(
            notification
        );
    }


    notification.className =
        `favorite-notification ${
            type || "info"
        }`;


    notification.textContent =
        message;


    notification.classList.add(
        "show"
    );


    /*
        إزالة الإشعار بعد فترة
    */

    clearTimeout(
        window.favoriteNotificationTimer
    );


    window.favoriteNotificationTimer =
        setTimeout(
            function () {

                notification.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   تعيين نص
========================================================= */

function setFavoritesText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (!element) {
        return;
    }


    element.textContent =
        value;
}


/* =========================================================
   حماية HTML
========================================================= */

function escapeFavoriteHTML(
    value
) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   تصدير الوظائف
========================================================= */

window.getFavorites =
    getFavorites;

window.isFavorite =
    isFavorite;

window.addFavorite =
    addFavorite;

window.removeFavorite =
    removeFavorite;

window.toggleFavorite =
    toggleFavorite;

window.renderFavorites =
    renderFavorites;

window.initializeFavoriteButtons =
    initializeFavoriteButtons;

window.refreshFavoriteButtons =
    refreshFavoriteButtons;

window.clearAllFavorites =
    clearAllFavorites;


/* =========================================================
   تشغيل أزرار المفضلة الموجودة في الصفحة
========================================================= */

initializeFavoriteButtons();


/* =========================================================
   نهاية favorites.js
========================================================= */