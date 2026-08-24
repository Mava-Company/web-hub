/* =========================================================
   دفتر أخطاء التركي
   daily.js
   صفحة خطأ اليوم
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializeDailyPage();
});


/* =========================================================
   إعدادات خطأ اليوم
========================================================= */

const DAILY_MISTAKE_KEY =
    "turkishMistakesDailyMistake";

const DAILY_DATE_KEY =
    "turkishMistakesDailyDate";

const DAILY_HISTORY_KEY =
    "turkishMistakesDailyHistory";


/* =========================================================
   تشغيل الصفحة
========================================================= */

function initializeDailyPage() {

    if (
        typeof mistakes === "undefined"
    ) {

        showDailyError(
            "تعذر تحميل خطأ اليوم."
        );

        return;
    }


    /*
        الحصول على خطأ اليوم
    */

    const dailyMistake =
        getDailyMistake();


    if (!dailyMistake) {

        showDailyError(
            "لا توجد أخطاء متاحة حاليًا."
        );

        return;
    }


    /*
        عرض الخطأ
    */

    renderDailyMistake(
        dailyMistake
    );


    /*
        العد التنازلي لليوم التالي
    */

    startDailyCountdown();


    /*
        زر المفضلة
    */

    initializeDailyFavoriteButton(
        dailyMistake
    );


    /*
        زر إظهار الإجابة
    */

    initializeDailyAnswerButton(
        dailyMistake
    );


    /*
        تسجيل الزيارة
    */

    saveDailyVisit(
        dailyMistake
    );
}


/* =========================================================
   الحصول على الأخطاء المتاحة
========================================================= */

function getDailyMistakes() {

    if (
        typeof getPublishedMistakes ===
        "function"
    ) {

        return getPublishedMistakes();
    }


    return mistakes.filter(
        function (mistake) {

            return mistake.published !== false;

        }
    );
}


/* =========================================================
   الحصول على خطأ اليوم
========================================================= */

function getDailyMistake() {

    const available =
        getDailyMistakes();


    if (!available.length) {
        return null;
    }


    /*
        تاريخ اليوم بصيغة ثابتة
    */

    const today =
        getLocalDateKey();


    /*
        قراءة البيانات السابقة
    */

    let savedDate = null;
    let savedId = null;


    try {

        savedDate =
            localStorage.getItem(
                DAILY_DATE_KEY
            );


        savedId =
            localStorage.getItem(
                DAILY_MISTAKE_KEY
            );

    } catch (error) {

        console.warn(
            "تعذر قراءة خطأ اليوم.",
            error
        );
    }


    /*
        إذا كان لدينا خطأ محفوظ
        لنفس اليوم نعيده.
    */

    if (
        savedDate === today &&
        savedId
    ) {

        const savedMistake =
            available.find(
                function (mistake) {

                    return String(
                        mistake.id
                    ) === String(
                        savedId
                    );

                }
            );


        if (savedMistake) {

            return savedMistake;
        }
    }


    /*
        اختيار خطأ جديد
    */

    const newMistake =
        chooseDailyMistake(
            available,
            today
        );


    /*
        حفظه
    */

    try {

        localStorage.setItem(
            DAILY_DATE_KEY,
            today
        );


        localStorage.setItem(
            DAILY_MISTAKE_KEY,
            String(
                newMistake.id
            )
        );

    } catch (error) {

        console.warn(
            "تعذر حفظ خطأ اليوم.",
            error
        );
    }


    return newMistake;
}


/* =========================================================
   اختيار خطأ اليوم
========================================================= */

function chooseDailyMistake(
    available,
    dateKey
) {

    /*
        نحول التاريخ إلى رقم ثابت
        حتى يكون الاختيار متغيرًا حسب اليوم.
    */

    const seed =
        createDailySeed(
            dateKey
        );


    const index =
        seed %
        available.length;


    return available[index];
}


/* =========================================================
   إنشاء رقم ثابت من التاريخ
========================================================= */

function createDailySeed(
    dateKey
) {

    let hash = 0;


    for (
        let i = 0;
        i < dateKey.length;
        i++
    ) {

        hash =
            (
                (
                    hash << 5
                ) -
                hash
            ) +
            dateKey.charCodeAt(i);


        hash |= 0;
    }


    return Math.abs(
        hash
    );
}


/* =========================================================
   مفتاح تاريخ اليوم
========================================================= */

function getLocalDateKey() {

    const date =
        new Date();


    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${year}-${month}-${day}`;
}


/* =========================================================
   عرض خطأ اليوم
========================================================= */

function renderDailyMistake(
    mistake
) {

    /*
        العنوان
    */

    setDailyText(
        "dailyTitle",
        mistake.title ||
        "خطأ اليوم"
    );


    /*
        الخطأ
    */

    setDailyText(
        "dailyWrong",
        mistake.wrong ||
        mistake.incorrect ||
        ""
    );


    /*
        الصيغة الصحيحة
    */

    setDailyText(
        "dailyCorrect",
        mistake.correct ||
        ""
    );


    /*
        الشرح
    */

    setDailyText(
        "dailyExplanation",
        mistake.explanation ||
        mistake.rule ||
        "راجعي شرح هذا الخطأ لمعرفة القاعدة."
    );


    /*
        المستوى
    */

    setDailyText(
        "dailyLevel",
        mistake.level ||
        "عام"
    );


    /*
        التصنيف
    */

    const category =
        getDailyCategory(
            mistake.category
        );


    if (category) {

        setDailyText(
            "dailyCategory",
            category.name
        );


        setDailyText(
            "dailyCategoryIcon",
            category.icon ||
            "📖"
        );
    }


    /*
        المعرف
    */

    setDailyText(
        "dailyMistakeId",
        mistake.id
    );


    /*
        رابط التفاصيل
    */

    const detailLinks =
        document.querySelectorAll(
            "[data-daily-detail]"
        );


    detailLinks.forEach(
        function (link) {

            link.href =
                `mistake.html?id=${encodeURIComponent(
                    mistake.id
                )}`;

        }
    );


    /*
        الأمثلة
    */

    renderDailyExamples(
        mistake
    );


    /*
        إظهار الخطأ
    */

    const wrongContainer =
        document.getElementById(
            "dailyWrongContainer"
        );


    if (wrongContainer) {

        wrongContainer.classList.add(
            "visible"
        );
    }


    /*
        إخفاء الإجابة الصحيحة
        إلى أن تضغط المستخدمة على الزر
    */

    const correctContainer =
        document.getElementById(
            "dailyCorrectContainer"
        );


    if (correctContainer) {

        correctContainer.classList.remove(
            "visible"
        );

        correctContainer.hidden =
            true;
    }


    /*
        تحديث زر الإجابة
    */

    const answerButton =
        document.getElementById(
            "showDailyAnswer"
        );


    if (answerButton) {

        answerButton.textContent =
            "أريني الصيغة الصحيحة";
    }
}


/* =========================================================
   عرض الأمثلة
========================================================= */

function renderDailyExamples(
    mistake
) {

    const container =
        document.getElementById(
            "dailyExamples"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    let examples =
        [];


    /*
        إذا كانت البيانات تحتوي على examples
    */

    if (
        Array.isArray(
            mistake.examples
        )
    ) {

        examples =
            mistake.examples;
    }


    /*
        إذا لم توجد أمثلة
        نحاول استخدام example1 / example2
    */

    if (
        !examples.length
    ) {

        if (
            mistake.example1
        ) {

            examples.push(
                mistake.example1
            );
        }


        if (
            mistake.example2
        ) {

            examples.push(
                mistake.example2
            );
        }
    }


    /*
        لا توجد أمثلة
    */

    if (
        !examples.length
    ) {

        container.hidden =
            true;

        return;
    }


    container.hidden =
        false;


    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        "أمثلة إضافية";


    container.appendChild(
        title
    );


    examples
        .slice(0, 3)
        .forEach(
            function (example) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "daily-example";


                let text =
                    "";


                if (
                    typeof example ===
                    "string"
                ) {

                    text =
                        example;

                } else if (
                    example &&
                    typeof example ===
                    "object"
                ) {

                    text =
                        example.correct ||
                        example.text ||
                        example.example ||
                        "";

                }


                item.textContent =
                    text;


                item.dir =
                    "ltr";


                container.appendChild(
                    item
                );

            }
        );
}


/* =========================================================
   زر إظهار الإجابة
========================================================= */

function initializeDailyAnswerButton(
    mistake
) {

    const button =
        document.getElementById(
            "showDailyAnswer"
        );


    if (!button) {
        return;
    }


    button.onclick =
        function () {

            revealDailyAnswer(
                mistake
            );

        };
}


/* =========================================================
   إظهار الإجابة الصحيحة
========================================================= */

function revealDailyAnswer(
    mistake
) {

    const container =
        document.getElementById(
            "dailyCorrectContainer"
        );


    if (container) {

        container.hidden =
            false;

        container.classList.add(
            "visible"
        );


        /*
            حركة بسيطة
        */

        setTimeout(
            function () {

                container.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            },
            100
        );
    }


    const button =
        document.getElementById(
            "showDailyAnswer"
        );


    if (button) {

        button.textContent =
            "تم عرض الصيغة الصحيحة ✓";

        button.disabled =
            true;

        button.classList.add(
            "answered"
        );
    }


    /*
        تسجيل التفاعل
    */

    saveDailyInteraction(
        mistake.id,
        "revealed"
    );
}


/* =========================================================
   زر المفضلة
========================================================= */

function initializeDailyFavoriteButton(
    mistake
) {

    const button =
        document.getElementById(
            "dailyFavorite"
        );


    if (!button) {
        return;
    }


    /*
        إذا كان favorites.js موجودًا
    */

    if (
        typeof isFavorite ===
        "function"
    ) {

        updateDailyFavoriteButton(
            button,
            mistake.id
        );
    }


    /*
        منع تكرار الحدث
    */

    if (
        button.dataset.dailyFavoriteInitialized ===
        "true"
    ) {

        return;
    }


    button.dataset.dailyFavoriteInitialized =
        "true";


    button.addEventListener(
        "click",
        function () {

            toggleDailyFavorite(
                mistake.id,
                button
            );

        }
    );
}


/* =========================================================
   تبديل مفضلة خطأ اليوم
========================================================= */

function toggleDailyFavorite(
    mistakeId,
    button
) {

    /*
        استخدام favorites.js
    */

    if (
        typeof toggleFavorite ===
        "function"
    ) {

        toggleFavorite(
            mistakeId
        );


        updateDailyFavoriteButton(
            button,
            mistakeId
        );


        return;
    }


    /*
        نظام احتياطي
        إذا لم يتم تحميل favorites.js
    */

    let favorites = [];


    try {

        favorites =
            JSON.parse(
                localStorage.getItem(
                    "turkishMistakesFavorites"
                )
            ) || [];

    } catch (error) {

        favorites = [];
    }


    const id =
        String(
            mistakeId
        );


    const index =
        favorites.indexOf(
            id
        );


    if (index === -1) {

        favorites.push(
            id
        );

        showDailyNotification(
            "تمت الإضافة إلى المفضلة ⭐",
            "success"
        );

    } else {

        favorites.splice(
            index,
            1
        );

        showDailyNotification(
            "تمت إزالة الخطأ من المفضلة.",
            "info"
        );
    }


    localStorage.setItem(
        "turkishMistakesFavorites",
        JSON.stringify(
            favorites
        )
    );


    updateDailyFavoriteButton(
        button,
        mistakeId
    );
}


/* =========================================================
   تحديث زر المفضلة
========================================================= */

function updateDailyFavoriteButton(
    button,
    mistakeId
) {

    if (!button) {
        return;
    }


    let favorite =
        false;


    if (
        typeof isFavorite ===
        "function"
    ) {

        favorite =
            isFavorite(
                mistakeId
            );

    } else {

        try {

            const favorites =
                JSON.parse(
                    localStorage.getItem(
                        "turkishMistakesFavorites"
                    )
                ) || [];


            favorite =
                favorites.includes(
                    String(
                        mistakeId
                    )
                );

        } catch (error) {

            favorite = false;
        }
    }


    button.classList.toggle(
        "active",
        favorite
    );


    button.classList.toggle(
        "is-favorite",
        favorite
    );


    button.setAttribute(
        "aria-pressed",
        String(
            favorite
        )
    );


    const icon =
        button.querySelector(
            "[data-daily-favorite-icon]"
        );


    if (icon) {

        icon.textContent =
            favorite
                ? "♥"
                : "♡";
    }


    const text =
        button.querySelector(
            "[data-daily-favorite-text]"
        );


    if (text) {

        text.textContent =
            favorite
                ? "في المفضلة"
                : "إضافة للمفضلة";
    }
}


/* =========================================================
   العد التنازلي لخطأ الغد
========================================================= */

let dailyCountdownTimer =
    null;


function startDailyCountdown() {

    /*
        إيقاف المؤقت القديم
    */

    if (
        dailyCountdownTimer
    ) {

        clearInterval(
            dailyCountdownTimer
        );
    }


    updateDailyCountdown();


    dailyCountdownTimer =
        setInterval(
            updateDailyCountdown,
            1000
        );
}


/* =========================================================
   تحديث العد التنازلي
========================================================= */

function updateDailyCountdown() {

    const now =
        new Date();


    const tomorrow =
        new Date(
            now
        );


    tomorrow.setDate(
        now.getDate() + 1
    );


    tomorrow.setHours(
        0,
        0,
        0,
        0
    );


    const difference =
        tomorrow.getTime() -
        now.getTime();


    if (
        difference <= 0
    ) {

        reloadDailyMistake();

        return;
    }


    const hours =
        Math.floor(
            difference /
            (
                1000 *
                60 *
                60
            )
        );


    const minutes =
        Math.floor(
            (
                difference %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    const seconds =
        Math.floor(
            (
                difference %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    const text =
        formatDailyNumber(hours) +
        ":" +
        formatDailyNumber(minutes) +
        ":" +
        formatDailyNumber(seconds);


    setDailyText(
        "dailyCountdown",
        text
    );
}


/* =========================================================
   إعادة تحميل خطأ اليوم
========================================================= */

function reloadDailyMistake() {

    if (
        dailyCountdownTimer
    ) {

        clearInterval(
            dailyCountdownTimer
        );
    }


    /*
        إزالة التاريخ القديم
    */

    try {

        localStorage.removeItem(
            DAILY_DATE_KEY
        );

        localStorage.removeItem(
            DAILY_MISTAKE_KEY
        );

    } catch (error) {

        console.warn(
            "تعذر تحديث خطأ اليوم.",
            error
        );
    }


    /*
        إعادة الصفحة
    */

    window.location.reload();
}


/* =========================================================
   تسجيل زيارة خطأ اليوم
========================================================= */

function saveDailyVisit(
    mistake
) {

    const today =
        getLocalDateKey();


    try {

        const history =
            JSON.parse(
                localStorage.getItem(
                    DAILY_HISTORY_KEY
                )
            ) || [];


        const exists =
            history.some(
                function (item) {

                    return (
                        item.date ===
                        today
                    );

                }
            );


        if (!exists) {

            history.push({

                date:
                    today,

                mistakeId:
                    mistake.id,

                visitedAt:
                    new Date().toISOString()

            });
        }


        localStorage.setItem(
            DAILY_HISTORY_KEY,
            JSON.stringify(
                history.slice(-60)
            )
        );

    } catch (error) {

        console.warn(
            "تعذر حفظ سجل خطأ اليوم.",
            error
        );
    }
}


/* =========================================================
   تسجيل تفاعل
========================================================= */

function saveDailyInteraction(
    mistakeId,
    action
) {

    try {

        const key =
            "turkishMistakesDailyInteractions";


        const interactions =
            JSON.parse(
                localStorage.getItem(
                    key
                )
            ) || [];


        interactions.push({

            mistakeId:
                mistakeId,

            action:
                action,

            date:
                new Date().toISOString()

        });


        localStorage.setItem(
            key,
            JSON.stringify(
                interactions.slice(-100)
            )
        );

    } catch (error) {

        console.warn(
            "تعذر حفظ التفاعل.",
            error
        );
    }
}


/* =========================================================
   الحصول على سجل خطأ اليوم
========================================================= */

function getDailyHistory() {

    try {

        return JSON.parse(
            localStorage.getItem(
                DAILY_HISTORY_KEY
            )
        ) || [];

    } catch (error) {

        return [];
    }
}


/* =========================================================
   عدد الأيام التي تمت زيارتها
========================================================= */

function getDailyVisitedDays() {

    return getDailyHistory().length;
}


/* =========================================================
   الحصول على تصنيف
========================================================= */

function getDailyCategory(
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

function showDailyNotification(
    message,
    type
) {

    let notification =
        document.getElementById(
            "dailyNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );


        notification.id =
            "dailyNotification";


        notification.className =
            "daily-notification";


        document.body.appendChild(
            notification
        );
    }


    notification.className =
        `daily-notification ${
            type || "info"
        } show`;


    notification.textContent =
        message;


    clearTimeout(
        window.dailyNotificationTimer
    );


    window.dailyNotificationTimer =
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
   رسالة خطأ
========================================================= */

function showDailyError(
    message
) {

    const container =
        document.getElementById(
            "dailyContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="daily-error">

            <div class="daily-error-icon">
                ⚠️
            </div>


            <h2>
                حدث خطأ
            </h2>


            <p>
                ${escapeDailyHTML(
                    message
                )}
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
   تعيين نص
========================================================= */

function setDailyText(
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
        value === undefined ||
        value === null
            ? ""
            : value;
}


/* =========================================================
   تنسيق الأرقام
========================================================= */

function formatDailyNumber(
    number
) {

    return String(
        number
    ).padStart(
        2,
        "0"
    );
}


/* =========================================================
   حماية HTML
========================================================= */

function escapeDailyHTML(
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


/* =========================================================
   تصدير الوظائف
========================================================= */

window.getDailyMistake =
    getDailyMistake;

window.getDailyHistory =
    getDailyHistory;

window.getDailyVisitedDays =
    getDailyVisitedDays;

window.revealDailyAnswer =
    revealDailyAnswer;

window.toggleDailyFavorite =
    toggleDailyFavorite;

window.reloadDailyMistake =
    reloadDailyMistake;


/* =========================================================
   نهاية daily.js
========================================================= */