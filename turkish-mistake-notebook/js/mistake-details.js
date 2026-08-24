/* =========================================================
   دفتر أخطاء التركي
   mistake-details.js
   صفحة تفاصيل الخطأ
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeMistakeDetailsPage();

});


/* =========================================================
   تشغيل صفحة التفاصيل
========================================================= */

function initializeMistakeDetailsPage() {

    /*
        التأكد من وجود بيانات الموقع
    */

    if (
        typeof mistakes === "undefined" ||
        typeof getMistakeById !== "function"
    ) {

        console.error(
            "تعذر تحميل بيانات الأخطاء."
        );

        showDetailsError(
            "تعذر تحميل بيانات الموقع."
        );

        return;

    }


    /*
        الحصول على ID الخطأ من الرابط
    */

    const mistakeId =
        getMistakeIdFromURL();


    /*
        إذا لم يوجد ID
    */

    if (!mistakeId) {

        showDetailsError(
            "لم يتم تحديد الخطأ المطلوب."
        );

        return;

    }


    /*
        البحث عن الخطأ
    */

    const mistake =
        getMistakeById(
            mistakeId
        );


    /*
        إذا لم نجد الخطأ
    */

    if (!mistake) {

        showDetailsError(
            "عذرًا، لم يتم العثور على هذا الخطأ."
        );

        return;

    }


    /*
        عرض التفاصيل
    */

    renderMistakeDetails(
        mistake
    );


    /*
        تشغيل الوظائف
    */

    initializeMistakeActions(
        mistake
    );


    /*
        عرض أخطاء مشابهة
    */

    renderRelatedMistakes(
        mistake
    );


    /*
        تحديث المفضلة
    */

    if (
        typeof updateFavoriteButtons ===
        "function"
    ) {

        updateFavoriteButtons();

    }


    if (
        typeof updateFavoritesCount ===
        "function"
    ) {

        updateFavoritesCount();

    }

}


/* =========================================================
   الحصول على ID من الرابط
========================================================= */

function getMistakeIdFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    /*
        دعم:

        mistake.html?id=mistake-001

        وأيضًا:

        mistake.html?mistake=mistake-001
    */

    return (
        params.get("id") ||
        params.get("mistake") ||
        params.get("mistakeId")
    );

}


window.getMistakeIdFromURL =
    getMistakeIdFromURL;


/* =========================================================
   عرض تفاصيل الخطأ
========================================================= */

function renderMistakeDetails(
    mistake
) {

    /*
        الصفحة الرئيسية للتفاصيل
    */

    const container =
        document.getElementById(
            "mistakeDetails"
        );


    /*
        إذا كان هناك عنصر عام للتفاصيل
    */

    if (container) {

        container.classList.remove(
            "loading"
        );

        container.classList.add(
            "loaded"
        );

    }


    /*
        العنوان
    */

    setText(
        "mistakeTitle",
        mistake.title
    );


    /*
        الخطأ
    */

    setText(
        "wrongSentence",
        mistake.wrong
    );


    /*
        ترجمة الخطأ
    */

    setText(
        "wrongTranslation",
        mistake.wrongTranslation
    );


    /*
        الجملة الصحيحة
    */

    setText(
        "correctSentence",
        mistake.correct
    );


    /*
        ترجمة الجملة الصحيحة
    */

    setText(
        "correctTranslation",
        mistake.correctTranslation
    );


    /*
        الشرح
    */

    setText(
        "mistakeExplanation",
        mistake.explanation
    );


    /*
        القاعدة
    */

    setText(
        "mistakeRule",
        mistake.rule
    );


    /*
        المستوى
    */

    setText(
        "mistakeLevel",
        mistake.level
    );


    /*
        التصنيف
    */

    const category =
        getCategoryById(
            mistake.category
        );


    if (category) {

        setText(
            "mistakeCategory",
            category.name
        );


        setText(
            "mistakeCategoryIcon",
            category.icon
        );


        /*
            رابط التصنيف
        */

        const categoryLink =
            document.getElementById(
                "mistakeCategoryLink"
            );


        if (categoryLink) {

            categoryLink.href =
                `mistakes.html?category=${encodeURIComponent(
                    category.id
                )}`;

        }

    }


    /*
        عرض الأمثلة
    */

    renderExamples(
        mistake.examples
    );


    /*
        عرض الوسوم
    */

    renderTags(
        mistake.tags
    );


    /*
        سبب الخطأ
    */

    setText(
        "commonReason",
        mistake.commonReason
    );


    /*
        التاريخ
    */

    if (mistake.createdAt) {

        setText(
            "mistakeDate",
            formatMistakeDate(
                mistake.createdAt
            )
        );

    }


    /*
        إضافة ID إلى الصفحة
    */

    document.body.dataset.mistakeId =
        mistake.id;


    /*
        تحديث عنوان الصفحة
    */

    document.title =
        `${mistake.title} | دفتر أخطاء التركي`;

}


/* =========================================================
   تعيين نص لعنصر
========================================================= */

function setText(
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


    if (
        value === null ||
        value === undefined
    ) {

        element.textContent =
            "";

        return;

    }


    element.textContent =
        value;

}


/* =========================================================
   عرض الأمثلة
========================================================= */

function renderExamples(
    examples
) {

    const container =
        document.getElementById(
            "examplesContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (
        !Array.isArray(examples) ||
        examples.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-examples">

                <span>📖</span>

                <p>
                    لا توجد أمثلة إضافية حاليًا.
                </p>

            </div>

        `;

        return;

    }


    examples.forEach(
        function (example, index) {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "example-card";


            article.innerHTML = `

                <div class="example-number">
                    ${index + 1}
                </div>


                <div class="example-content">

                    <p
                        class="example-turkish"
                        dir="ltr"
                    >
                        ${escapeHTML(
                            example.turkish || ""
                        )}
                    </p>


                    <p
                        class="example-arabic"
                    >
                        ${escapeHTML(
                            example.arabic || ""
                        )}
                    </p>

                </div>


                <button
                    type="button"
                    class="copy-example"
                    title="نسخ المثال"
                    aria-label="نسخ المثال"
                >
                    📋
                </button>

            `;


            /*
                زر النسخ
            */

            const copyButton =
                article.querySelector(
                    ".copy-example"
                );


            if (copyButton) {

                copyButton.addEventListener(
                    "click",
                    function () {

                        if (
                            typeof copyToClipboard ===
                            "function"
                        ) {

                            copyToClipboard(
                                example.turkish
                            );

                        }

                    }
                );

            }


            container.appendChild(
                article
            );

        }
    );

}


/* =========================================================
   عرض الوسوم
========================================================= */

function renderTags(
    tags
) {

    const container =
        document.getElementById(
            "mistakeTags"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (
        !Array.isArray(tags) ||
        tags.length === 0
    ) {

        return;

    }


    tags.forEach(
        function (tag) {

            const tagElement =
                document.createElement(
                    "span"
                );


            tagElement.className =
                "mistake-tag";


            tagElement.textContent =
                tag;


            container.appendChild(
                tagElement
            );

        }
    );

}


/* =========================================================
   أزرار الصفحة
========================================================= */

function initializeMistakeActions(
    mistake
) {

    /*
        زر المفضلة
    */

    const favoriteButton =
        document.getElementById(
            "favoriteMistake"
        );


    if (favoriteButton) {

        updateDetailsFavoriteButton(
            favoriteButton,
            mistake
        );


        favoriteButton.addEventListener(
            "click",
            function () {

                if (
                    typeof toggleFavorite !==
                    "function"
                ) {

                    return;

                }


                toggleFavorite(
                    mistake
                );


                updateDetailsFavoriteButton(
                    favoriteButton,
                    mistake
                );


                if (
                    typeof updateFavoritesCount ===
                    "function"
                ) {

                    updateFavoritesCount();

                }

            }
        );

    }


    /*
        زر المشاركة
    */

    const shareButton =
        document.getElementById(
            "shareMistake"
        );


    if (shareButton) {

        shareButton.addEventListener(
            "click",
            function () {

                shareMistake(
                    mistake
                );

            }
        );

    }


    /*
        أزرار نسخ الجمل
    */

    initializeCopyButtons(
        mistake
    );


    /*
        زر العودة
    */

    const backButton =
        document.getElementById(
            "backToMistakes"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            function (event) {

                /*
                    إذا كانت الصفحة السابقة
                    هي صفحة الأخطاء،
                    نعود إليها.
                */

                if (
                    document.referrer &&
                    document.referrer.includes(
                        "mistakes.html"
                    )
                ) {

                    event.preventDefault();

                    window.history.back();

                }

            }
        );

    }

}


/* =========================================================
   تحديث زر المفضلة في صفحة التفاصيل
========================================================= */

function updateDetailsFavoriteButton(
    button,
    mistake
) {

    const active =
        typeof isFavorite ===
        "function"
            ? isFavorite(mistake.id)
            : false;


    button.classList.toggle(
        "active",
        active
    );


    button.setAttribute(
        "aria-pressed",
        active
            ? "true"
            : "false"
    );


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


    const text =
        button.querySelector(
            "[data-favorite-text]"
        );


    if (text) {

        text.textContent =
            active
                ? "إزالة من المفضلة"
                : "إضافة إلى المفضلة";

    }


    if (!text && !icon) {

        button.textContent =
            active
                ? "♥ إزالة من المفضلة"
                : "♡ إضافة إلى المفضلة";

    }

}


/* =========================================================
   أزرار نسخ الجمل
========================================================= */

function initializeCopyButtons(
    mistake
) {

    const wrongCopy =
        document.getElementById(
            "copyWrongSentence"
        );


    const correctCopy =
        document.getElementById(
            "copyCorrectSentence"
        );


    if (wrongCopy) {

        wrongCopy.addEventListener(
            "click",
            function () {

                if (
                    typeof copyToClipboard ===
                    "function"
                ) {

                    copyToClipboard(
                        mistake.wrong
                    );

                }

            }
        );

    }


    if (correctCopy) {

        correctCopy.addEventListener(
            "click",
            function () {

                if (
                    typeof copyToClipboard ===
                    "function"
                ) {

                    copyToClipboard(
                        mistake.correct
                    );

                }

            }
        );

    }

}


/* =========================================================
   مشاركة الخطأ
========================================================= */

function shareMistake(
    mistake
) {

    const shareData = {

        title:
            mistake.title,

        text:
            `❌ ${mistake.wrong}\n\n` +
            `✅ ${mistake.correct}\n\n` +
            `من دفتر أخطاء التركي`,

        url:
            window.location.href

    };


    if (
        typeof shareContent ===
        "function"
    ) {

        shareContent(
            shareData
        );

        return;

    }


    /*
        بديل في حالة عدم وجود shareContent
    */

    if (
        navigator.share
    ) {

        navigator.share(
            shareData
        ).catch(
            function (error) {

                if (
                    error.name !==
                    "AbortError"
                ) {

                    console.error(
                        error
                    );

                }

            }
        );

        return;

    }


    /*
        آخر حل: نسخ الرابط
    */

    if (
        typeof copyToClipboard ===
        "function"
    ) {

        copyToClipboard(
            window.location.href
        );

    }

}


/* =========================================================
   عرض الأخطاء المشابهة
========================================================= */

function renderRelatedMistakes(
    currentMistake
) {

    const container =
        document.getElementById(
            "relatedMistakes"
        );


    if (!container) {
        return;
    }


    let related =
        [];


    /*
        أولًا نحاول إيجاد أخطاء
        من نفس التصنيف.
    */

    related =
        getPublishedMistakes()
            .filter(
                function (mistake) {

                    return (
                        mistake.id !==
                        currentMistake.id
                    ) &&
                    (
                        mistake.category ===
                        currentMistake.category
                    );

                }
            );


    /*
        إذا لم نجد عددًا كافيًا،
        نضيف أخطاء من المستوى نفسه.
    */

    if (related.length < 3) {

        const byLevel =
            getPublishedMistakes()
                .filter(
                    function (mistake) {

                        return (
                            mistake.id !==
                            currentMistake.id
                        ) &&
                        (
                            mistake.level ===
                            currentMistake.level
                        ) &&
                        !related.some(
                            function (item) {

                                return item.id ===
                                    mistake.id;

                            }
                        );

                    }
                );


        related =
            related.concat(
                byLevel
            );

    }


    /*
        الحد الأقصى 3
    */

    related =
        related.slice(
            0,
            3
        );


    container.innerHTML = "";


    if (!related.length) {

        container.innerHTML = `

            <div class="no-related-mistakes">

                <span>📚</span>

                <p>
                    لا توجد أخطاء مشابهة حاليًا.
                </p>

            </div>

        `;

        return;

    }


    related.forEach(
        function (mistake) {

            const card =
                createRelatedMistakeCard(
                    mistake
                );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   بطاقة خطأ مشابه
========================================================= */

function createRelatedMistakeCard(
    mistake
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "related-mistake-card";


    const category =
        getCategoryById(
            mistake.category
        );


    card.innerHTML = `

        <div class="related-card-icon">

            ${
                category
                    ? category.icon
                    : "📖"
            }

        </div>


        <div class="related-card-content">

            <span class="related-card-level">
                المستوى ${escapeHTML(
                    mistake.level
                )}
            </span>


            <h3>
                ${escapeHTML(
                    mistake.title
                )}
            </h3>


            <div
                class="related-card-sentence"
                dir="ltr"
            >
                ${escapeHTML(
                    mistake.correct
                )}
            </div>


            <a
                href="mistake.html?id=${encodeURIComponent(
                    mistake.id
                )}"
                class="related-card-link"
            >
                اقرأ الشرح ←
            </a>

        </div>

    `;


    return card;

}


/* =========================================================
   رسالة الخطأ
========================================================= */

function showDetailsError(
    message
) {

    /*
        نخفي محتوى الصفحة الأساسي
    */

    const container =
        document.getElementById(
            "mistakeDetails"
        );


    if (container) {

        container.innerHTML = `

            <div class="details-error">

                <div class="details-error-icon">
                    📖
                </div>


                <h2>
                    عذرًا!
                </h2>


                <p>
                    ${escapeHTML(message)}
                </p>


                <a
                    href="mistakes.html"
                    class="btn btn-primary"
                >
                    العودة إلى الأخطاء
                </a>

            </div>

        `;

        return;

    }


    /*
        إذا لم يكن العنصر موجودًا،
        ننشئ رسالة مباشرة في الصفحة.
    */

    const fallback =
        document.createElement(
            "div"
        );


    fallback.className =
        "details-error-page";


    fallback.innerHTML = `

        <div class="details-error">

            <div class="details-error-icon">
                📖
            </div>

            <h2>
                عذرًا!
            </h2>

            <p>
                ${escapeHTML(message)}
            </p>

            <a
                href="mistakes.html"
                class="btn btn-primary"
            >
                العودة إلى الأخطاء
            </a>

        </div>

    `;


    document.body.appendChild(
        fallback
    );

}


/* =========================================================
   تنسيق التاريخ
========================================================= */

function formatMistakeDate(
    date
) {

    try {

        return new Intl.DateTimeFormat(
            "ar",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        ).format(
            new Date(date)
        );

    } catch (error) {

        return date;

    }

}


/* =========================================================
   التنقل بين الأخطاء
========================================================= */

function initializeMistakeNavigation(
    currentMistake
) {

    const published =
        getPublishedMistakes();


    const index =
        published.findIndex(
            function (mistake) {

                return mistake.id ===
                    currentMistake.id;

            }
        );


    if (index === -1) {
        return;
    }


    const previous =
        published[index - 1];


    const next =
        published[index + 1];


    const previousButton =
        document.getElementById(
            "previousMistake"
        );


    const nextButton =
        document.getElementById(
            "nextMistake"
        );


    if (previousButton) {

        if (previous) {

            previousButton.href =
                `mistake.html?id=${encodeURIComponent(
                    previous.id
                )}`;

            previousButton.classList.remove(
                "disabled"
            );

            previousButton.removeAttribute(
                "aria-disabled"
            );

        } else {

            previousButton.href =
                "#";

            previousButton.classList.add(
                "disabled"
            );

            previousButton.setAttribute(
                "aria-disabled",
                "true"
            );

        }

    }


    if (nextButton) {

        if (next) {

            nextButton.href =
                `mistake.html?id=${encodeURIComponent(
                    next.id
                )}`;

            nextButton.classList.remove(
                "disabled"
            );

            nextButton.removeAttribute(
                "aria-disabled"
            );

        } else {

            nextButton.href =
                "#";

            nextButton.classList.add(
                "disabled"
            );

            nextButton.setAttribute(
                "aria-disabled",
                "true"
            );

        }

    }

}


/* =========================================================
   تشغيل التنقل
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const id =
            getMistakeIdFromURL();


        if (!id) {
            return;
        }


        const mistake =
            typeof getMistakeById ===
            "function"
                ? getMistakeById(id)
                : null;


        if (!mistake) {
            return;
        }


        initializeMistakeNavigation(
            mistake
        );

    }
);


/* =========================================================
   اختصار لوحة المفاتيح
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
            لا نريد اختصارات أثناء الكتابة
        */

        const activeElement =
            document.activeElement;


        if (
            activeElement &&
            (
                activeElement.tagName ===
                "INPUT" ||
                activeElement.tagName ===
                "TEXTAREA" ||
                activeElement.tagName ===
                "SELECT"
            )
        ) {

            return;

        }


        /*
            مفتاح F للمفضلة
        */

        if (
            event.key.toLowerCase() ===
            "f"
        ) {

            const favoriteButton =
                document.getElementById(
                    "favoriteMistake"
                );


            if (favoriteButton) {

                favoriteButton.click();

            }

        }


        /*
            مفتاح C للنسخ
        */

        if (
            event.key.toLowerCase() ===
            "c" &&
            event.ctrlKey === false
        ) {

            const correctButton =
                document.getElementById(
                    "copyCorrectSentence"
                );


            if (correctButton) {

                correctButton.click();

            }

        }

    }
);


/* =========================================================
   دعم الرابط المباشر للخطأ
========================================================= */

/*
    يمكن فتح الصفحة مثل:

    mistake.html?id=mistake-001

    أو:

    mistake.html?id=mistake-010

*/


/* =========================================================
   تصدير الوظائف
========================================================= */

window.renderMistakeDetails =
    renderMistakeDetails;

window.renderRelatedMistakes =
    renderRelatedMistakes;

window.shareMistake =
    shareMistake;

window.renderExamples =
    renderExamples;


/* =========================================================
   نهاية mistake-details.js
========================================================= */