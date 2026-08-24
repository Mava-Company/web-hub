/* =========================================================
   دفتر أخطاء التركي
   practice.js
   صفحة التدريب
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializePracticePage();
});


/* =========================================================
   متغيرات التدريب
========================================================= */

let practiceQuestions = [];
let currentPracticeIndex = 0;
let practiceScore = 0;
let practiceCorrect = 0;
let practiceWrong = 0;
let practiceStarted = false;
let practiceAnswered = false;

let practiceLevel = "all";
let practiceCategory = "all";
let practiceCount = 10;


/* =========================================================
   تشغيل صفحة التدريب
========================================================= */

function initializePracticePage() {

    if (typeof mistakes === "undefined") {

        showPracticeError(
            "تعذر تحميل بيانات التدريب."
        );

        return;
    }

    initializePracticeControls();
    renderPracticeLevels();
    renderPracticeCategories();
    updateAvailablePracticeQuestions();

    showPracticeStartScreen();
}


/* =========================================================
   عناصر التحكم
========================================================= */

function initializePracticeControls() {

    const levelSelect =
        document.getElementById("practiceLevel");

    if (levelSelect) {

        levelSelect.addEventListener(
            "change",
            function () {

                practiceLevel =
                    levelSelect.value;

                updateAvailablePracticeQuestions();
            }
        );
    }


    const categorySelect =
        document.getElementById("practiceCategory");

    if (categorySelect) {

        categorySelect.addEventListener(
            "change",
            function () {

                practiceCategory =
                    categorySelect.value;

                updateAvailablePracticeQuestions();
            }
        );
    }


    const countSelect =
        document.getElementById("practiceCount");

    if (countSelect) {

        countSelect.addEventListener(
            "change",
            function () {

                practiceCount =
                    Number(countSelect.value) || 10;
            }
        );
    }


    const startButton =
        document.getElementById("startPractice");

    if (startButton) {

        startButton.addEventListener(
            "click",
            startPractice
        );
    }


    const nextButton =
        document.getElementById("nextPractice");

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextPracticeQuestion
        );
    }


    const restartButton =
        document.getElementById("restartPractice");

    if (restartButton) {

        restartButton.addEventListener(
            "click",
            function () {

                resetPractice();

                showPracticeStartScreen();
            }
        );
    }


    const finishButton =
        document.getElementById("finishPractice");

    if (finishButton) {

        finishButton.addEventListener(
            "click",
            finishPractice
        );
    }
}


/* =========================================================
   عرض المستويات
========================================================= */

function renderPracticeLevels() {

    const select =
        document.getElementById("practiceLevel");

    if (!select) {
        return;
    }


    if (select.options.length > 1) {
        return;
    }


    const levels = [
        {
            value: "all",
            name: "جميع المستويات"
        },
        {
            value: "A1",
            name: "A1 - مبتدئ"
        },
        {
            value: "A2",
            name: "A2 - مبتدئ متقدم"
        },
        {
            value: "B1",
            name: "B1 - متوسط"
        },
        {
            value: "B2",
            name: "B2 - متوسط متقدم"
        },
        {
            value: "C1",
            name: "C1 - متقدم"
        }
    ];


    levels.forEach(function (level) {

        const option =
            document.createElement("option");

        option.value =
            level.value;

        option.textContent =
            level.name;

        select.appendChild(option);

    });
}


/* =========================================================
   عرض التصنيفات
========================================================= */

function renderPracticeCategories() {

    const select =
        document.getElementById("practiceCategory");

    if (!select) {
        return;
    }


    if (
        typeof categories === "undefined"
    ) {
        return;
    }


    if (select.options.length > 1) {
        return;
    }


    categories.forEach(function (category) {

        const option =
            document.createElement("option");

        option.value =
            category.id;

        option.textContent =
            `${category.icon || "📖"} ${category.name}`;

        select.appendChild(option);

    });
}


/* =========================================================
   الحصول على الأخطاء المنشورة
========================================================= */

function getPracticeMistakes() {

    if (
        typeof getPublishedMistakes ===
        "function"
    ) {

        return getPublishedMistakes();

    }


    return mistakes.filter(function (mistake) {

        return mistake.published !== false;

    });
}


/* =========================================================
   بدء التدريب
========================================================= */

function startPractice() {

    practiceLevel =
        getValue(
            "practiceLevel",
            "all"
        );


    practiceCategory =
        getValue(
            "practiceCategory",
            "all"
        );


    practiceCount =
        Number(
            getValue(
                "practiceCount",
                10
            )
        );


    let available =
        getPracticeMistakes();


    /*
        فلترة المستوى
    */

    if (practiceLevel !== "all") {

        available =
            available.filter(
                function (mistake) {

                    return mistake.level ===
                        practiceLevel;

                }
            );
    }


    /*
        فلترة التصنيف
    */

    if (practiceCategory !== "all") {

        available =
            available.filter(
                function (mistake) {

                    return mistake.category ===
                        practiceCategory;

                }
            );
    }


    /*
        التأكد من وجود أسئلة
    */

    if (!available.length) {

        showPracticeMessage(
            "لا توجد تدريبات متاحة بهذه الخيارات. اختاري مستوى أو تصنيفًا آخر."
        );

        return;
    }


    /*
        خلط الأسئلة
    */

    available =
        shufflePracticeArray(
            available
        );


    /*
        تحديد عدد الأسئلة
    */

    practiceQuestions =
        available.slice(
            0,
            Math.min(
                practiceCount,
                available.length
            )
        );


    /*
        إعادة ضبط النتائج
    */

    currentPracticeIndex = 0;

    practiceScore = 0;

    practiceCorrect = 0;

    practiceWrong = 0;

    practiceAnswered = false;

    practiceStarted = true;


    showPracticeQuestion();
}


/* =========================================================
   عرض سؤال التدريب
========================================================= */

function showPracticeQuestion() {

    if (!practiceQuestions.length) {
        return;
    }


    const mistake =
        practiceQuestions[
            currentPracticeIndex
        ];


    practiceAnswered = false;


    showPracticeScreen(
        "practiceQuestionScreen"
    );


    /*
        معلومات السؤال
    */

    setPracticeText(
        "practiceQuestionNumber",
        currentPracticeIndex + 1
    );


    setPracticeText(
        "practiceTotalQuestions",
        practiceQuestions.length
    );


    setPracticeText(
        "practiceScore",
        practiceScore
    );


    /*
        العنوان
    */

    setPracticeText(
        "practiceTitle",
        mistake.title || "تدريب تركي"
    );


    /*
        الجملة الخاطئة
    */

    setPracticeText(
        "practiceWrongSentence",
        mistake.wrong || ""
    );


    /*
        المستوى
    */

    setPracticeText(
        "practiceQuestionLevel",
        mistake.level || ""
    );


    /*
        التصنيف
    */

    const category =
        getPracticeCategory(
            mistake.category
        );


    if (category) {

        setPracticeText(
            "practiceQuestionCategory",
            category.name
        );
    }


    /*
        تنظيف الإجابة السابقة
    */

    const input =
        document.getElementById(
            "practiceAnswer"
        );


    if (input) {

        input.value = "";

        input.disabled = false;

        input.focus();
    }


    /*
        إخفاء التغذية الراجعة
    */

    hidePracticeFeedback();


    /*
        إخفاء الشرح
    */

    hidePracticeExplanation();


    /*
        زر التحقق
    */

    const checkButton =
        document.getElementById(
            "checkPractice"
        );


    if (checkButton) {

        checkButton.disabled = false;

        checkButton.style.display = "";
    }


    /*
        زر التالي
    */

    const nextButton =
        document.getElementById(
            "nextPractice"
        );


    if (nextButton) {

        nextButton.disabled = true;

        nextButton.classList.remove("visible");
    }


    /*
        تحديث التقدم
    */

    updatePracticeProgress();


    /*
        تشغيل زر التحقق
    */

    initializeCheckButton();
}


/* =========================================================
   زر التحقق من الإجابة
========================================================= */

function initializeCheckButton() {

    const button =
        document.getElementById(
            "checkPractice"
        );


    if (!button) {
        return;
    }


    /*
        إزالة الأحداث السابقة عن طريق استبدال الزر
        إذا لزم الأمر.
    */

    button.onclick =
        checkPracticeAnswer;
}


/* =========================================================
   التحقق من الإجابة
========================================================= */

function checkPracticeAnswer() {

    if (practiceAnswered) {
        return;
    }


    const mistake =
        practiceQuestions[
            currentPracticeIndex
        ];


    const input =
        document.getElementById(
            "practiceAnswer"
        );


    if (!input) {
        return;
    }


    const userAnswer =
        normalizeTurkishText(
            input.value
        );


    if (!userAnswer) {

        showPracticeMessage(
            "اكتبي إجابتك أولًا ثم اضغطي على تحقق."
        );

        input.focus();

        return;
    }


    const correctAnswer =
        normalizeTurkishText(
            mistake.correct || ""
        );


    practiceAnswered = true;


    /*
        مقارنة الإجابة
    */

    const isCorrect =
        userAnswer ===
        correctAnswer;


    if (isCorrect) {

        practiceCorrect++;

        practiceScore +=
            calculatePracticePoints(
                mistake
            );

        showPracticeFeedback(
            true,
            "إجابة صحيحة! أحسنتِ 👏"
        );

    } else {

        practiceWrong++;

        showPracticeFeedback(
            false,
            "الإجابة ليست صحيحة تمامًا، راجعي التصحيح أدناه. 💡"
        );
    }


    /*
        تعطيل الإدخال
    */

    input.disabled = true;


    /*
        إظهار التصحيح
    */

    showPracticeCorrection(
        mistake,
        isCorrect,
        userAnswer
    );


    /*
        إظهار الشرح
    */

    showPracticeExplanation(
        mistake
    );


    /*
        إخفاء زر التحقق
    */

    const checkButton =
        document.getElementById(
            "checkPractice"
        );


    if (checkButton) {

        checkButton.disabled =
            true;

        checkButton.style.display =
            "none";
    }


    /*
        تفعيل التالي
    */

    const nextButton =
        document.getElementById(
            "nextPractice"
        );


    if (nextButton) {

        nextButton.disabled =
            false;

        nextButton.classList.add(
            "visible"
        );


        if (
            currentPracticeIndex ===
            practiceQuestions.length - 1
        ) {

            nextButton.textContent =
                "عرض النتيجة";

        } else {

            nextButton.textContent =
                "التدريب التالي";

        }
    }


    updatePracticeProgress();
}


/* =========================================================
   تطبيع النص التركي
========================================================= */

function normalizeTurkishText(
    text
) {

    return String(text || "")
        .trim()
        .toLocaleLowerCase("tr-TR")
        .replace(/\s+/g, " ")
        .replace(/[.!؟?،,;:]+$/g, "");
}


/* =========================================================
   عرض التصحيح
========================================================= */

function showPracticeCorrection(
    mistake,
    isCorrect,
    userAnswer
) {

    const container =
        document.getElementById(
            "practiceCorrection"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="correction-box ${
            isCorrect
                ? "correction-success"
                : "correction-error"
        }">

            <div class="correction-row">

                <span class="correction-label">
                    إجابتك:
                </span>

                <strong
                    dir="ltr"
                    class="${
                        isCorrect
                            ? "correct-text"
                            : "wrong-text"
                    }"
                >
                    ${escapePracticeHTML(
                        userAnswer
                    )}
                </strong>

            </div>


            ${
                !isCorrect
                    ? `
                        <div class="correction-row">

                            <span class="correction-label">
                                الصيغة الصحيحة:
                            </span>

                            <strong
                                dir="ltr"
                                class="correct-text"
                            >
                                ${escapePracticeHTML(
                                    mistake.correct
                                )}
                            </strong>

                        </div>
                    `
                    : ""
            }

        </div>

    `;


    container.hidden =
        false;
}


/* =========================================================
   عرض شرح الخطأ
========================================================= */

function showPracticeExplanation(
    mistake
) {

    const container =
        document.getElementById(
            "practiceExplanation"
        );


    if (!container) {
        return;
    }


    const explanation =
        mistake.explanation ||
        mistake.rule ||
        "راجعي تفاصيل هذا الخطأ لمعرفة القاعدة بشكل أفضل.";


    container.innerHTML = `

        <div class="practice-explanation-box">

            <div class="explanation-title">

                <span>💡</span>

                <strong>
                    شرح القاعدة
                </strong>

            </div>


            <p>
                ${escapePracticeHTML(
                    explanation
                )}
            </p>


            ${
                mistake.examples &&
                Array.isArray(
                    mistake.examples
                )
                    ? `
                        <div class="practice-examples">

                            <strong>
                                أمثلة إضافية:
                            </strong>

                            ${mistake.examples
                                .slice(0, 2)
                                .map(
                                    function (
                                        example
                                    ) {

                                        return `
                                            <div
                                                dir="ltr"
                                                class="practice-example"
                                            >
                                                ${escapePracticeHTML(
                                                    typeof example === "string"
                                                        ? example
                                                        : example.correct ||
                                                          example.text ||
                                                          ""
                                                )}
                                            </div>
                                        `;

                                    }
                                )
                                .join("")}

                        </div>
                    `
                    : ""
            }

        </div>

    `;


    container.hidden =
        false;
}


/* =========================================================
   التغذية الراجعة
========================================================= */

function showPracticeFeedback(
    correct,
    message
) {

    const container =
        document.getElementById(
            "practiceFeedback"
        );


    if (!container) {
        return;
    }


    container.className =
        "practice-feedback " +
        (
            correct
                ? "success"
                : "error"
        );


    container.innerHTML = `

        <span class="feedback-icon">

            ${
                correct
                    ? "✓"
                    : "✕"
            }

        </span>


        <span>
            ${escapePracticeHTML(
                message
            )}
        </span>

    `;


    container.hidden =
        false;
}


/* =========================================================
   إخفاء التغذية الراجعة
========================================================= */

function hidePracticeFeedback() {

    const element =
        document.getElementById(
            "practiceFeedback"
        );


    if (element) {

        element.hidden =
            true;

        element.innerHTML =
            "";
    }
}


/* =========================================================
   إخفاء الشرح
========================================================= */

function hidePracticeExplanation() {

    const element =
        document.getElementById(
            "practiceExplanation"
        );


    if (element) {

        element.hidden =
            true;

        element.innerHTML =
            "";
    }
}


/* =========================================================
   الانتقال للسؤال التالي
========================================================= */

function nextPracticeQuestion() {

    if (!practiceAnswered) {
        return;
    }


    if (
        currentPracticeIndex >=
        practiceQuestions.length - 1
    ) {

        finishPractice();

        return;
    }


    currentPracticeIndex++;

    showPracticeQuestion();
}


/* =========================================================
   إنهاء التدريب
========================================================= */

function finishPractice() {

    practiceStarted =
        false;


    const total =
        practiceQuestions.length;


    const percentage =
        total > 0
            ? Math.round(
                (
                    practiceCorrect /
                    total
                ) * 100
            )
            : 0;


    showPracticeScreen(
        "practiceResultScreen"
    );


    setPracticeText(
        "practiceFinalScore",
        practiceScore
    );


    setPracticeText(
        "practiceCorrect",
        practiceCorrect
    );


    setPracticeText(
        "practiceWrong",
        practiceWrong
    );


    setPracticeText(
        "practicePercentage",
        `${percentage}%`
    );


    setPracticeText(
        "practiceResultMessage",
        getPracticeResultMessage(
            percentage
        )
    );


    const progress =
        document.getElementById(
            "practiceResultProgress"
        );


    if (progress) {

        progress.style.width =
            `${percentage}%`;
    }


    savePracticeResult(
        percentage
    );


    renderPracticeReview();
}


/* =========================================================
   رسالة النتيجة
========================================================= */

function getPracticeResultMessage(
    percentage
) {

    if (percentage >= 90) {

        return "ممتاز جدًا! يبدو أنك بدأتِ تسيطرين على الأخطاء التركية. 🌟";

    }


    if (percentage >= 80) {

        return "رائع! استمري بهذا المستوى. 👏";

    }


    if (percentage >= 70) {

        return "جيد جدًا! مع القليل من المراجعة ستتحسن نتيجتك أكثر. 💪";

    }


    if (percentage >= 50) {

        return "بداية جيدة. ركزي على الأخطاء التي تحتاج إلى مراجعة. 📚";

    }


    return "لا تقلقي، الخطأ جزء أساسي من التعلم. أعيدي التدريب وحاولي مرة أخرى. 🌱";
}


/* =========================================================
   مراجعة التدريبات
========================================================= */

function renderPracticeReview() {

    const container =
        document.getElementById(
            "practiceReview"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    practiceQuestions.forEach(
        function (mistake, index) {

            const item =
                document.createElement(
                    "article"
                );


            item.className =
                "practice-review-item";


            item.innerHTML = `

                <div class="review-number">

                    ${index + 1}

                </div>


                <div class="review-content">

                    <h3>
                        ${escapePracticeHTML(
                            mistake.title ||
                            "خطأ تركي"
                        )}
                    </h3>


                    <div
                        class="review-sentence"
                        dir="ltr"
                    >
                        ${escapePracticeHTML(
                            mistake.wrong || ""
                        )}
                    </div>


                    <div
                        class="review-correct"
                        dir="ltr"
                    >
                        ${escapePracticeHTML(
                            mistake.correct || ""
                        )}
                    </div>


                    <a
                        href="mistake.html?id=${encodeURIComponent(
                            mistake.id
                        )}"
                        class="review-link"
                    >
                        مراجعة الخطأ ←
                    </a>

                </div>

            `;


            container.appendChild(
                item
            );

        }
    );
}


/* =========================================================
   حساب نقاط التدريب
========================================================= */

function calculatePracticePoints(
    mistake
) {

    const level =
        String(
            mistake.level || ""
        ).toUpperCase();


    switch (level) {

        case "A1":
            return 10;

        case "A2":
            return 12;

        case "B1":
            return 15;

        case "B2":
            return 18;

        case "C1":
            return 20;

        default:
            return 10;
    }
}


/* =========================================================
   حفظ نتيجة التدريب
========================================================= */

function savePracticeResult(
    percentage
) {

    const result = {

        score:
            practiceScore,

        correct:
            practiceCorrect,

        wrong:
            practiceWrong,

        percentage:
            percentage,

        level:
            practiceLevel,

        category:
            practiceCategory,

        questionCount:
            practiceQuestions.length,

        date:
            new Date().toISOString()

    };


    try {

        const history =
            JSON.parse(
                localStorage.getItem(
                    "turkishMistakesPracticeResults"
                )
            ) || [];


        history.unshift(
            result
        );


        localStorage.setItem(
            "turkishMistakesPracticeResults",
            JSON.stringify(
                history.slice(0, 20)
            )
        );

    } catch (error) {

        console.warn(
            "تعذر حفظ نتيجة التدريب.",
            error
        );
    }


    /*
        إذا كان app.js يحتوي على
        نظام إحصائيات المستخدم
    */

    if (
        typeof updateUserStats ===
        "function"
    ) {

        updateUserStats(
            result
        );
    }
}


/* =========================================================
   إعادة التدريب
========================================================= */

function resetPractice() {

    practiceQuestions = [];

    currentPracticeIndex = 0;

    practiceScore = 0;

    practiceCorrect = 0;

    practiceWrong = 0;

    practiceStarted = false;

    practiceAnswered = false;


    hidePracticeFeedback();

    hidePracticeExplanation();


    const correction =
        document.getElementById(
            "practiceCorrection"
        );


    if (correction) {

        correction.hidden =
            true;

        correction.innerHTML =
            "";
    }
}


/* =========================================================
   شاشة البداية
========================================================= */

function showPracticeStartScreen() {

    showPracticeScreen(
        "practiceStartScreen"
    );

    updateAvailablePracticeQuestions();
}


/* =========================================================
   تحديث عدد الأسئلة
========================================================= */

function updateAvailablePracticeQuestions() {

    const element =
        document.getElementById(
            "availablePracticeQuestions"
        );


    let available =
        getPracticeMistakes();


    if (
        practiceLevel !== "all"
    ) {

        available =
            available.filter(
                function (mistake) {

                    return mistake.level ===
                        practiceLevel;

                }
            );
    }


    if (
        practiceCategory !== "all"
    ) {

        available =
            available.filter(
                function (mistake) {

                    return mistake.category ===
                        practiceCategory;

                }
            );
    }


    if (element) {

        element.textContent =
            available.length;
    }
}


/* =========================================================
   عرض شاشة
========================================================= */

function showPracticeScreen(
    screenId
) {

    const screens =
        document.querySelectorAll(
            ".practice-screen"
        );


    screens.forEach(
        function (screen) {

            screen.classList.remove(
                "active"
            );

            screen.hidden =
                true;
        }
    );


    const screen =
        document.getElementById(
            screenId
        );


    if (!screen) {
        return;
    }


    screen.hidden =
        false;

    screen.classList.add(
        "active"
    );
}


/* =========================================================
   تحديث شريط التقدم
========================================================= */

function updatePracticeProgress() {

    const total =
        practiceQuestions.length;


    const current =
        currentPracticeIndex + 1;


    const percentage =
        total
            ? (
                current /
                total
            ) * 100
            : 0;


    const progress =
        document.getElementById(
            "practiceProgress"
        );


    if (progress) {

        progress.style.width =
            `${percentage}%`;
    }


    setPracticeText(
        "practiceProgressText",
        `${current} / ${total}`
    );


    setPracticeText(
        "practiceScore",
        practiceScore
    );
}


/* =========================================================
   رسالة عامة
========================================================= */

function showPracticeMessage(
    message
) {

    const element =
        document.getElementById(
            "practiceMessage"
        );


    if (element) {

        element.textContent =
            message;

        element.hidden =
            false;

        return;
    }


    alert(message);
}


/* =========================================================
   خطأ الصفحة
========================================================= */

function showPracticeError(
    message
) {

    const container =
        document.getElementById(
            "practiceContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="practice-error">

            <div class="error-icon">
                ⚠️
            </div>


            <h2>
                حدث خطأ
            </h2>


            <p>
                ${escapePracticeHTML(
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
   الحصول على قيمة
========================================================= */

function getValue(
    elementId,
    defaultValue
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        return defaultValue;
    }


    return (
        element.value ||
        defaultValue
    );
}


/* =========================================================
   الحصول على التصنيف
========================================================= */

function getPracticeCategory(
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
   تعيين نص
========================================================= */

function setPracticeText(
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
        value === undefined ||
        value === null
            ? ""
            : value;
}


/* =========================================================
   خلط المصفوفة
========================================================= */

function shufflePracticeArray(
    array
) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }


    return result;
}


/* =========================================================
   حماية HTML
========================================================= */

function escapePracticeHTML(
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
   سجل النتائج
========================================================= */

function getPracticeHistory() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "turkishMistakesPracticeResults"
            )
        ) || [];

    } catch (error) {

        return [];
    }
}


function getBestPracticeResult() {

    const history =
        getPracticeHistory();


    if (!history.length) {
        return null;
    }


    return history.reduce(
        function (best, result) {

            if (
                !best ||
                result.percentage >
                best.percentage
            ) {

                return result;
            }


            return best;
        },
        null
    );
}


window.getPracticeHistory =
    getPracticeHistory;

window.getBestPracticeResult =
    getBestPracticeResult;


/* =========================================================
   تصدير الوظائف
========================================================= */

window.startPractice =
    startPractice;

window.checkPracticeAnswer =
    checkPracticeAnswer;

window.nextPracticeQuestion =
    nextPracticeQuestion;

window.finishPractice =
    finishPractice;

window.resetPractice =
    resetPractice;

window.showPracticeQuestion =
    showPracticeQuestion;


/* =========================================================
   دعم زر Enter داخل حقل الإجابة
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Enter"
        ) {
            return;
        }


        const input =
            document.getElementById(
                "practiceAnswer"
            );


        if (
            document.activeElement !==
            input
        ) {
            return;
        }


        if (
            practiceAnswered
        ) {

            nextPracticeQuestion();

        } else {

            checkPracticeAnswer();

        }

    }
);


/* =========================================================
   نهاية practice.js
========================================================= */