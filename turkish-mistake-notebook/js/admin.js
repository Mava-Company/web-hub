
import {
    auth,
    db
} from "./firebase.js";


import {
    onAuthStateChanged
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


import {
    doc,
    getDoc
} from
    "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";



onAuthStateChanged(
    auth,
    async (user) => {

        // =========================================
        // لا يوجد تسجيل دخول
        // =========================================

        if (!user) {

            window.location.href =
                "login.html";

            return;
        }


        try {

            // =====================================
            // الحصول على بيانات المستخدم
            // =====================================

            const userRef =
                doc(
                    db,
                    "users",
                    user.uid
                );


            const userSnapshot =
                await getDoc(userRef);


            // =====================================
            // لا يوجد ملف مستخدم
            // =====================================

            if (!userSnapshot.exists()) {

                await auth.signOut();

                window.location.href =
                    "login.html";

                return;
            }


            const userData =
                userSnapshot.data();


            // =====================================
            // المستخدم ليس Admin
            // =====================================

            if (userData.role !== "admin") {

                alert(
                    "ليس لديك صلاحية للوصول إلى لوحة الإدارة."
                );

                window.location.href =
                    "index.html";

                return;
            }


            // =====================================
            // المستخدم Admin
            // =====================================

            console.log(
                "تم السماح بالدخول إلى لوحة الإدارة."
            );


            // هنا نكمل تشغيل وظائف لوحة الإدارة

        } catch (error) {

            console.error(
                "Admin authentication error:",
                error
            );

            window.location.href =
                "index.html";

        }

    }
);




/* =========================================================
   دفتر أخطاء التركي
   admin.js
   لوحة تحكم المدير
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializeAdminPage();
});


/* =========================================================
   إعدادات عامة
========================================================= */

const ADMIN_STORAGE_KEY =
    "turkishMistakesAdminData";

const ADMIN_STATS_KEY =
    "turkishMistakesAdminStats";


let adminMistakes = [];
let editingMistakeId = null;


/* =========================================================
   تشغيل لوحة التحكم
========================================================= */

async function initializeAdminPage() {

    /*
        التأكد من وجود المستخدم
    */

    const user =
        typeof getCurrentUser === "function"
            ? getCurrentUser()
            : null;


    if (!user) {

        redirectAdminToLogin();

        return;
    }


    /*
        التحقق من صلاحية المدير
    */

    const isAdmin =
        await checkAdminPermission(
            user
        );


    if (!isAdmin) {

        showAdminMessage(
            "ليس لديك صلاحية للدخول إلى لوحة الإدارة.",
            "error"
        );


        setTimeout(function () {

            window.location.href =
                "index.html";

        }, 1000);


        return;
    }


    /*
        تحميل البيانات
    */

    loadAdminMistakes();


    /*
        تشغيل الواجهة
    */

    initializeAdminForms();

    initializeAdminSearch();

    initializeAdminFilters();

    initializeAdminButtons();

    initializeAdminModal();

    initializeAdminTabs();


    /*
        عرض البيانات
    */

    renderAdminDashboard();

    renderAdminMistakes();

    updateAdminUser();
}


/* =========================================================
   التحقق من صلاحية المدير
========================================================= */

async function checkAdminPermission(
    user
) {

    if (!user) {
        return false;
    }


    /*
        Firebase Custom Claims
    */

    if (
        typeof user.getIdTokenResult !==
        "function"
    ) {

        return false;
    }


    try {

        const tokenResult =
            await user.getIdTokenResult(
                true
            );


        return !!(
            tokenResult.claims &&
            tokenResult.claims.admin === true
        );

    } catch (error) {

        console.error(
            "Admin permission error:",
            error
        );


        return false;
    }
}


/* =========================================================
   إعادة التوجيه لتسجيل الدخول
========================================================= */

function redirectAdminToLogin() {

    window.location.href =
        "login.html?redirect=admin.html";
}


/* =========================================================
   تحميل الأخطاء
========================================================= */

function loadAdminMistakes() {

    /*
        نبدأ من data.js
    */

    if (
        typeof mistakes !== "undefined" &&
        Array.isArray(mistakes)
    ) {

        adminMistakes =
            JSON.parse(
                JSON.stringify(
                    mistakes
                )
            );

    } else {

        adminMistakes = [];
    }


    /*
        محاولة تحميل تعديلات المدير
    */

    try {

        const saved =
            localStorage.getItem(
                ADMIN_STORAGE_KEY
            );


        if (saved) {

            const parsed =
                JSON.parse(
                    saved
                );


            if (
                Array.isArray(parsed)
            ) {

                adminMistakes =
                    parsed;
            }
        }

    } catch (error) {

        console.warn(
            "تعذر تحميل بيانات الإدارة.",
            error
        );
    }
}


/* =========================================================
   حفظ الأخطاء
========================================================= */

function saveAdminMistakes() {

    try {

        localStorage.setItem(
            ADMIN_STORAGE_KEY,
            JSON.stringify(
                adminMistakes
            )
        );


        /*
            تحديث المتغير العام إن كان موجودًا
        */

        if (
            typeof mistakes !== "undefined"
        ) {

            mistakes.length = 0;


            adminMistakes.forEach(
                function (mistake) {

                    mistakes.push(
                        mistake
                    );

                }
            );
        }


        return true;

    } catch (error) {

        console.error(
            "تعذر حفظ الأخطاء:",
            error
        );


        showAdminMessage(
            "تعذر حفظ التغييرات.",
            "error"
        );


        return false;
    }
}


/* =========================================================
   إعداد النماذج
========================================================= */

function initializeAdminForms() {

    const form =
        document.getElementById(
            "mistakeForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            saveMistakeFromForm();

        }
    );
}


/* =========================================================
   حفظ خطأ من النموذج
========================================================= */

function saveMistakeFromForm() {

    const title =
        getInputValue(
            "mistakeTitle"
        );


    const wrong =
        getInputValue(
            "mistakeWrong"
        );


    const correct =
        getInputValue(
            "mistakeCorrect"
        );


    const explanation =
        getInputValue(
            "mistakeExplanation"
        );


    const category =
        getInputValue(
            "mistakeCategory"
        );


    const level =
        getInputValue(
            "mistakeLevel"
        );


    const examples =
        getExamplesFromForm();


    /*
        التحقق
    */

    if (!title) {

        showAdminMessage(
            "اكتبي عنوان الخطأ.",
            "error"
        );

        return;
    }


    if (!wrong) {

        showAdminMessage(
            "اكتبي الجملة الخاطئة.",
            "error"
        );

        return;
    }


    if (!correct) {

        showAdminMessage(
            "اكتبي الجملة الصحيحة.",
            "error"
        );

        return;
    }


    if (!explanation) {

        showAdminMessage(
            "اكتبي شرح الخطأ.",
            "error"
        );

        return;
    }


    /*
        إنشاء البيانات
    */

    const mistake = {

        id:
            editingMistakeId ||
            generateMistakeId(),

        title:
            title,

        wrong:
            wrong,

        correct:
            correct,

        explanation:
            explanation,

        category:
            category,

        level:
            level || "A1",

        examples:
            examples,

        published:
            true,

        updatedAt:
            new Date().toISOString()

    };


    /*
        تعديل
    */

    if (editingMistakeId) {

        const index =
            adminMistakes.findIndex(
                function (item) {

                    return String(
                        item.id
                    ) === String(
                        editingMistakeId
                    );

                }
            );


        if (index !== -1) {

            adminMistakes[index] =
                {
                    ...adminMistakes[index],
                    ...mistake
                };


            saveAdminMistakes();


            showAdminMessage(
                "تم تعديل الخطأ بنجاح ✓",
                "success"
            );
        }

    }

    /*
        إضافة
    */

    else {

        adminMistakes.unshift(
            mistake
        );


        saveAdminMistakes();


        showAdminMessage(
            "تمت إضافة الخطأ بنجاح ✓",
            "success"
        );
    }


    /*
        تحديث الواجهة
    */

    renderAdminDashboard();

    renderAdminMistakes();

    resetMistakeForm();

    closeAdminModal();


    /*
        تحديث الإحصائيات
    */

    saveAdminStats(
        editingMistakeId
            ? "edit"
            : "add"
    );


    editingMistakeId =
        null;
}


/* =========================================================
   إنشاء ID
========================================================= */

function generateMistakeId() {

    return (
        "mistake-" +
        Date.now() +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 8)
    );
}


/* =========================================================
   الحصول على قيمة Input
========================================================= */

function getInputValue(
    id
) {

    const element =
        document.getElementById(
            id
        );


    return element
        ? element.value.trim()
        : "";
}


/* =========================================================
   الأمثلة
========================================================= */

function getExamplesFromForm() {

    const examples = [];


    const inputs =
        document.querySelectorAll(
            "[data-example-input]"
        );


    inputs.forEach(
        function (input) {

            const value =
                input.value.trim();


            if (value) {

                examples.push(
                    value
                );
            }

        }
    );


    /*
        دعم حقول example1 / example2
    */

    if (
        !inputs.length
    ) {

        const example1 =
            getInputValue(
                "mistakeExample1"
            );


        const example2 =
            getInputValue(
                "mistakeExample2"
            );


        const example3 =
            getInputValue(
                "mistakeExample3"
            );


        if (example1) {
            examples.push(example1);
        }


        if (example2) {
            examples.push(example2);
        }


        if (example3) {
            examples.push(example3);
        }
    }


    return examples;
}


/* =========================================================
   عرض الأخطاء
========================================================= */

function renderAdminMistakes() {

    const container =
        document.getElementById(
            "adminMistakesList"
        );


    if (!container) {
        return;
    }


    const search =
        getInputValue(
            "adminSearch"
        ).toLowerCase();


    const category =
        getInputValue(
            "adminCategoryFilter"
        );


    const level =
        getInputValue(
            "adminLevelFilter"
        );


    const status =
        getInputValue(
            "adminStatusFilter"
        );


    let filtered =
        adminMistakes.filter(
            function (mistake) {

                const matchesSearch =
                    !search ||
                    String(
                        mistake.title || ""
                    )
                        .toLowerCase()
                        .includes(search) ||

                    String(
                        mistake.wrong || ""
                    )
                        .toLowerCase()
                        .includes(search) ||

                    String(
                        mistake.correct || ""
                    )
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =
                    !category ||
                    String(
                        mistake.category || ""
                    ) === category;


                const matchesLevel =
                    !level ||
                    String(
                        mistake.level || ""
                    ) === level;


                const matchesStatus =
                    !status ||
                    (
                        status === "published" &&
                        mistake.published !== false
                    ) ||
                    (
                        status === "draft" &&
                        mistake.published === false
                    );


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesLevel &&
                    matchesStatus
                );
            }
        );


    /*
        حالة عدم وجود نتائج
    */

    if (!filtered.length) {

        container.innerHTML = `

            <div class="admin-empty">

                <div class="admin-empty-icon">
                    🔎
                </div>

                <h3>
                    لا توجد نتائج
                </h3>

                <p>
                    لم نجد أخطاء تطابق البحث الحالي.
                </p>

            </div>

        `;

        return;
    }


    /*
        بناء القائمة
    */

    container.innerHTML = "";


    filtered.forEach(
        function (mistake) {

            container.appendChild(
                createMistakeAdminCard(
                    mistake
                )
            );

        }
    );
}


/* =========================================================
   بطاقة الخطأ
========================================================= */

function createMistakeAdminCard(
    mistake
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "admin-mistake-card";


    const published =
        mistake.published !== false;


    card.innerHTML = `

        <div class="admin-mistake-card-top">

            <div>

                <span class="admin-mistake-id">
                    #${escapeAdminHTML(
                        mistake.id
                    )}
                </span>

                <h3>
                    ${escapeAdminHTML(
                        mistake.title ||
                        "بدون عنوان"
                    )}
                </h3>

            </div>


            <span class="admin-status ${
                published
                    ? "published"
                    : "draft"
            }">

                ${
                    published
                        ? "منشور"
                        : "مسودة"
                }

            </span>

        </div>


        <div class="admin-mistake-content">

            <div class="admin-wrong">

                <span>
                    ❌ الخطأ
                </span>

                <p dir="ltr">
                    ${escapeAdminHTML(
                        mistake.wrong || ""
                    )}
                </p>

            </div>


            <div class="admin-correct">

                <span>
                    ✅ الصحيح
                </span>

                <p dir="ltr">
                    ${escapeAdminHTML(
                        mistake.correct || ""
                    )}
                </p>

            </div>

        </div>


        <div class="admin-mistake-meta">

            <span>
                📚 ${escapeAdminHTML(
                    mistake.category ||
                    "عام"
                )}
            </span>

            <span>
                🎓 ${escapeAdminHTML(
                    mistake.level ||
                    "عام"
                )}
            </span>

        </div>


        <div class="admin-mistake-actions">

            <button
                type="button"
                class="admin-btn edit"
                data-edit-mistake="${
                    escapeAdminAttribute(
                        mistake.id
                    )
                }"
            >
                ✏️ تعديل
            </button>


            <button
                type="button"
                class="admin-btn toggle"
                data-toggle-mistake="${
                    escapeAdminAttribute(
                        mistake.id
                    )
                }"
            >
                ${
                    published
                        ? "👁️ إخفاء"
                        : "👁️ نشر"
                }
            </button>


            <button
                type="button"
                class="admin-btn delete"
                data-delete-mistake="${
                    escapeAdminAttribute(
                        mistake.id
                    )
                }"
            >
                🗑️ حذف
            </button>

        </div>

    `;


    return card;
}


/* =========================================================
   أزرار الأخطاء
========================================================= */

function initializeAdminButtons() {

    document.addEventListener(
        "click",
        function (event) {

            const editButton =
                event.target.closest(
                    "[data-edit-mistake]"
                );


            const deleteButton =
                event.target.closest(
                    "[data-delete-mistake]"
                );


            const toggleButton =
                event.target.closest(
                    "[data-toggle-mistake]"
                );


            if (editButton) {

                editMistake(
                    editButton.dataset
                        .editMistake
                );

                return;
            }


            if (deleteButton) {

                deleteMistake(
                    deleteButton.dataset
                        .deleteMistake
                );

                return;
            }


            if (toggleButton) {

                toggleMistakeStatus(
                    toggleButton.dataset
                        .toggleMistake
                );

                return;
            }
        }
    );


    /*
        زر إضافة خطأ
    */

    const addButtons =
        document.querySelectorAll(
            "[data-add-mistake]"
        );


    addButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    openAddMistakeModal();

                }
            );

        }
    );
}


/* =========================================================
   تعديل خطأ
========================================================= */

function editMistake(
    id
) {

    const mistake =
        findAdminMistake(
            id
        );


    if (!mistake) {

        showAdminMessage(
            "لم يتم العثور على الخطأ.",
            "error"
        );

        return;
    }


    editingMistakeId =
        mistake.id;


    setInputValue(
        "mistakeTitle",
        mistake.title
    );


    setInputValue(
        "mistakeWrong",
        mistake.wrong
    );


    setInputValue(
        "mistakeCorrect",
        mistake.correct
    );


    setInputValue(
        "mistakeExplanation",
        mistake.explanation
    );


    setInputValue(
        "mistakeCategory",
        mistake.category
    );


    setInputValue(
        "mistakeLevel",
        mistake.level
    );


    setExamplesToForm(
        mistake.examples || []
    );


    updateModalTitle(
        "تعديل الخطأ"
    );


    openAdminModal();


    /*
        التمرير لأعلى النموذج
    */

    const form =
        document.getElementById(
            "mistakeForm"
        );


    if (form) {

        form.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/* =========================================================
   إضافة خطأ جديد
========================================================= */

function openAddMistakeModal() {

    editingMistakeId =
        null;


    resetMistakeForm();


    updateModalTitle(
        "إضافة خطأ جديد"
    );


    openAdminModal();
}


/* =========================================================
   حذف خطأ
========================================================= */

function deleteMistake(
    id
) {

    const mistake =
        findAdminMistake(
            id
        );


    if (!mistake) {

        showAdminMessage(
            "لم يتم العثور على الخطأ.",
            "error"
        );

        return;
    }


    const confirmed =
        window.confirm(
            `هل أنتِ متأكدة من حذف "${mistake.title}"؟`
        );


    if (!confirmed) {
        return;
    }


    adminMistakes =
        adminMistakes.filter(
            function (item) {

                return String(
                    item.id
                ) !== String(
                    id
                );

            }
        );


    saveAdminMistakes();


    renderAdminMistakes();

    renderAdminDashboard();


    saveAdminStats(
        "delete"
    );


    showAdminMessage(
        "تم حذف الخطأ بنجاح.",
        "success"
    );
}


/* =========================================================
   نشر / إخفاء الخطأ
========================================================= */

function toggleMistakeStatus(
    id
) {

    const mistake =
        findAdminMistake(
            id
        );


    if (!mistake) {
        return;
    }


    mistake.published =
        mistake.published === false;


    mistake.updatedAt =
        new Date().toISOString();


    saveAdminMistakes();


    renderAdminMistakes();

    renderAdminDashboard();


    showAdminMessage(

        mistake.published
            ? "تم نشر الخطأ."
            : "تم إخفاء الخطأ.",

        "success"
    );
}


/* =========================================================
   العثور على خطأ
========================================================= */

function findAdminMistake(
    id
) {

    return adminMistakes.find(
        function (mistake) {

            return String(
                mistake.id
            ) === String(
                id
            );

        }
    ) || null;
}


/* =========================================================
   البحث
========================================================= */

function initializeAdminSearch() {

    const input =
        document.getElementById(
            "adminSearch"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        function () {

            renderAdminMistakes();

        }
    );
}


/* =========================================================
   الفلاتر
========================================================= */

function initializeAdminFilters() {

    const filters =
        document.querySelectorAll(
            "#adminCategoryFilter, #adminLevelFilter, #adminStatusFilter"
        );


    filters.forEach(
        function (filter) {

            filter.addEventListener(
                "change",
                function () {

                    renderAdminMistakes();

                }
            );

        }
    );
}


/* =========================================================
   لوحة الإحصائيات
========================================================= */

function renderAdminDashboard() {

    const total =
        adminMistakes.length;


    const published =
        adminMistakes.filter(
            function (mistake) {

                return mistake.published !== false;

            }
        ).length;


    const drafts =
        total -
        published;


    const categories =
        new Set(
            adminMistakes
                .map(
                    function (mistake) {

                        return mistake.category;

                    }
                )
                .filter(Boolean)
        ).size;


    setAdminText(
        "totalMistakes",
        total
    );


    setAdminText(
        "publishedMistakes",
        published
    );


    setAdminText(
        "draftMistakes",
        drafts
    );


    setAdminText(
        "totalCategories",
        categories
    );


    /*
        أسماء بديلة إذا كانت موجودة في HTML
    */

    setAdminText(
        "adminTotalMistakes",
        total
    );


    setAdminText(
        "adminPublishedMistakes",
        published
    );


    setAdminText(
        "adminDraftMistakes",
        drafts
    );


    setAdminText(
        "adminTotalCategories",
        categories
    );


    /*
        إحصائيات المستويات
    */

    renderLevelStatistics();


    /*
        إحصائيات التصنيفات
    */

    renderCategoryStatistics();
}


/* =========================================================
   إحصائيات المستويات
========================================================= */

function renderLevelStatistics() {

    const container =
        document.getElementById(
            "adminLevelStats"
        );


    if (!container) {
        return;
    }


    const levels = {};


    adminMistakes.forEach(
        function (mistake) {

            const level =
                mistake.level ||
                "غير محدد";


            levels[level] =
                (
                    levels[level] ||
                    0
                ) + 1;

        }
    );


    container.innerHTML = "";


    Object.keys(levels)
        .sort()
        .forEach(
            function (level) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "admin-stat-row";


                item.innerHTML = `

                    <span>
                        ${escapeAdminHTML(
                            level
                        )}
                    </span>

                    <strong>
                        ${levels[level]}
                    </strong>

                `;


                container.appendChild(
                    item
                );

            }
        );
}


/* =========================================================
   إحصائيات التصنيفات
========================================================= */

function renderCategoryStatistics() {

    const container =
        document.getElementById(
            "adminCategoryStats"
        );


    if (!container) {
        return;
    }


    const categories = {};


    adminMistakes.forEach(
        function (mistake) {

            const category =
                mistake.category ||
                "عام";


            categories[category] =
                (
                    categories[category] ||
                    0
                ) + 1;

        }
    );


    container.innerHTML = "";


    Object.entries(
        categories
    )
        .sort(
            function (a, b) {

                return b[1] - a[1];

            }
        )
        .forEach(
            function (entry) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "admin-stat-row";


                item.innerHTML = `

                    <span>
                        ${escapeAdminHTML(
                            entry[0]
                        )}
                    </span>

                    <strong>
                        ${entry[1]}
                    </strong>

                `;


                container.appendChild(
                    item
                );

            }
        );
}


/* =========================================================
   فتح المودال
========================================================= */

function openAdminModal() {

    const modal =
        document.getElementById(
            "mistakeModal"
        );


    if (!modal) {
        return;
    }


    modal.hidden =
        false;


    modal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================================
   إغلاق المودال
========================================================= */

function closeAdminModal() {

    const modal =
        document.getElementById(
            "mistakeModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    modal.hidden =
        true;


    document.body.classList.remove(
        "modal-open"
    );


    editingMistakeId =
        null;
}


/* =========================================================
   إعداد المودال
========================================================= */

function initializeAdminModal() {

    const closeButtons =
        document.querySelectorAll(
            "[data-close-admin-modal]"
        );


    closeButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    closeAdminModal();

                }
            );

        }
    );


    const modal =
        document.getElementById(
            "mistakeModal"
        );


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    modal
                ) {

                    closeAdminModal();

                }

            }
        );
    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
            ) {

                closeAdminModal();

            }

        }
    );
}


/* =========================================================
   عنوان المودال
========================================================= */

function updateModalTitle(
    title
) {

    const elements =
        document.querySelectorAll(
            "#mistakeModalTitle, [data-admin-modal-title]"
        );


    elements.forEach(
        function (element) {

            element.textContent =
                title;

        }
    );
}


/* =========================================================
   إعادة ضبط النموذج
========================================================= */

function resetMistakeForm() {

    const form =
        document.getElementById(
            "mistakeForm"
        );


    if (form) {

        form.reset();
    }


    /*
        مسح حقول الأمثلة
    */

    const examples =
        document.querySelectorAll(
            "[data-example-input]"
        );


    examples.forEach(
        function (input) {

            input.value =
                "";

        }
    );
}


/* =========================================================
   وضع الأمثلة في النموذج
========================================================= */

function setExamplesToForm(
    examples
) {

    if (
        !Array.isArray(
            examples
        )
    ) {

        return;
    }


    const inputs =
        document.querySelectorAll(
            "[data-example-input]"
        );


    if (inputs.length) {

        inputs.forEach(
            function (input, index) {

                input.value =
                    examples[index] ||
                    "";

            }
        );


        return;
    }


    setInputValue(
        "mistakeExample1",
        examples[0] || ""
    );


    setInputValue(
        "mistakeExample2",
        examples[1] || ""
    );


    setInputValue(
        "mistakeExample3",
        examples[2] || ""
    );
}


/* =========================================================
   إعداد التبويبات
========================================================= */

function initializeAdminTabs() {

    const buttons =
        document.querySelectorAll(
            "[data-admin-tab]"
        );


    const panels =
        document.querySelectorAll(
            "[data-admin-panel]"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const target =
                        button.dataset
                            .adminTab;


                    buttons.forEach(
                        function (item) {

                            item.classList.toggle(
                                "active",
                                item === button
                            );

                        }
                    );


                    panels.forEach(
                        function (panel) {

                            panel.hidden =
                                panel.dataset
                                    .adminPanel !==
                                target;

                        }
                    );

                }
            );

        }
    );
}


/* =========================================================
   تحديث بيانات المدير
========================================================= */

function updateAdminUser() {

    const user =
        typeof getCurrentUser ===
        "function"
            ? getCurrentUser()
            : null;


    if (!user) {
        return;
    }


    const name =
        user.displayName ||
        user.email ||
        "المدير";


    setAdminText(
        "adminUserName",
        name
    );


    setAdminText(
        "adminUserEmail",
        user.email || ""
    );


    const photo =
        document.getElementById(
            "adminUserPhoto"
        );


    if (
        photo &&
        user.photoURL
    ) {

        photo.src =
            user.photoURL;

        photo.hidden =
            false;
    }
}


/* =========================================================
   إحصائيات العمليات
========================================================= */

function saveAdminStats(
    action
) {

    try {

        const stats =
            JSON.parse(
                localStorage.getItem(
                    ADMIN_STATS_KEY
                )
            ) || {

                add: 0,

                edit: 0,

                delete: 0

            };


        if (
            Object.prototype.hasOwnProperty
                .call(
                    stats,
                    action
                )
        ) {

            stats[action]++;
        }


        localStorage.setItem(
            ADMIN_STATS_KEY,
            JSON.stringify(
                stats
            )
        );

    } catch (error) {

        console.warn(
            "تعذر حفظ إحصائيات الإدارة.",
            error
        );
    }
}


/* =========================================================
   تصدير البيانات
========================================================= */

function exportAdminData() {

    const data =
        JSON.stringify(
            adminMistakes,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        "turkish-mistakes-backup.json";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );


    showAdminMessage(
        "تم تصدير نسخة احتياطية من الأخطاء.",
        "success"
    );
}


/* =========================================================
   استيراد البيانات
========================================================= */

function importAdminData(
    file
) {

    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        function (event) {

            try {

                const data =
                    JSON.parse(
                        event.target.result
                    );


                if (
                    !Array.isArray(
                        data
                    )
                ) {

                    throw new Error(
                        "Invalid data"
                    );
                }


                const confirmed =
                    window.confirm(
                        "هل تريدين استبدال بيانات الأخطاء الحالية بالبيانات المستوردة؟"
                    );


                if (!confirmed) {
                    return;
                }


                adminMistakes =
                    data;


                saveAdminMistakes();


                renderAdminDashboard();

                renderAdminMistakes();


                showAdminMessage(
                    "تم استيراد البيانات بنجاح.",
                    "success"
                );

            } catch (error) {

                console.error(
                    "Import error:",
                    error
                );


                showAdminMessage(
                    "ملف البيانات غير صالح.",
                    "error"
                );
            }
        };


    reader.readAsText(
        file,
        "UTF-8"
    );
}


/* =========================================================
   تعيين قيمة
========================================================= */

function setInputValue(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.value =
            value === undefined ||
            value === null
                ? ""
                : value;
    }
}


/* =========================================================
   تعيين نص
========================================================= */

function setAdminText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.textContent =
            value === undefined ||
            value === null
                ? ""
                : value;
    }
}


/* =========================================================
   رسالة الإدارة
========================================================= */

function showAdminMessage(
    message,
    type
) {

    let element =
        document.getElementById(
            "adminMessage"
        );


    if (!element) {

        element =
            document.createElement(
                "div"
            );


        element.id =
            "adminMessage";


        element.className =
            "admin-message";


        document.body.appendChild(
            element
        );
    }


    element.className =
        `admin-message ${
            type || "info"
        } show`;


    element.textContent =
        message;


    clearTimeout(
        window.adminMessageTimer
    );


    window.adminMessageTimer =
        setTimeout(
            function () {

                element.classList.remove(
                    "show"
                );

            },
            3000
        );
}


/* =========================================================
   حماية النص
========================================================= */

function escapeAdminHTML(
    value
) {

    return String(
        value === undefined ||
        value === null
            ? ""
            : value
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


/* =========================================================
   حماية Attribute
========================================================= */

function escapeAdminAttribute(
    value
) {

    return String(
        value === undefined ||
        value === null
            ? ""
            : value
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        );
}


/* =========================================================
   تصدير الوظائف
========================================================= */

window.editMistake =
    editMistake;

window.deleteMistake =
    deleteMistake;

window.toggleMistakeStatus =
    toggleMistakeStatus;

window.openAddMistakeModal =
    openAddMistakeModal;

window.openAdminModal =
    openAdminModal;

window.closeAdminModal =
    closeAdminModal;

window.exportAdminData =
    exportAdminData;

window.importAdminData =
    importAdminData;

window.renderAdminMistakes =
    renderAdminMistakes;


/* =========================================================
   نهاية admin.js
========================================================= */