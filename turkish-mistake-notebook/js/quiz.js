/* =====================================================
   quiz.js
   اختبار اللغة التركية
   بدون Firebase وبدون قاعدة بيانات
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeQuiz();

    }
);


/* =====================================================
   المتغيرات
===================================================== */

let currentQuestionIndex = 0;

let score = 0;

let answered = false;

let selectedQuestions = [];



/* =====================================================
   تشغيل الاختبار
===================================================== */

function initializeQuiz() {

    const container =
        document.getElementById("quizContainer");


    if (!container) {

        return;

    }


    // نأخذ الأسئلة من data.js
    selectedQuestions =
        [...quizQuestions];


    if (
        !selectedQuestions ||
        selectedQuestions.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    📚
                </div>

                <h2>
                    لا توجد أسئلة حاليًا
                </h2>

                <p>
                    سيتم إضافة أسئلة جديدة قريبًا.
                </p>

            </div>

        `;

        return;

    }


    // خلط الأسئلة
    selectedQuestions =
        shuffleArray(
            selectedQuestions
        );


    // عرض أول سؤال
    showQuestion();

}



/* =====================================================
   عرض السؤال
===================================================== */

function showQuestion() {

    const container =
        document.getElementById(
            "quizContainer"
        );


    if (!container) {

        return;

    }


    if (
        currentQuestionIndex >=
        selectedQuestions.length
    ) {

        showResult();

        return;

    }


    answered = false;


    const question =
        selectedQuestions[
            currentQuestionIndex
        ];


    const questionNumber =
        currentQuestionIndex + 1;


    const totalQuestions =
        selectedQuestions.length;


    container.innerHTML = `

        <div class="quiz-question-card">

            <div class="quiz-progress">

                <span>
                    السؤال ${questionNumber}
                    من ${totalQuestions}
                </span>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width: ${
                            (questionNumber /
                            totalQuestions) *
                            100
                        }%"
                    ></div>

                </div>

            </div>


            <h2 class="quiz-question">

                ${escapeHTML(
                    question.question
                )}

            </h2>


            <div class="quiz-options">

                ${question.options
                    .map(
                        (option, index) => `

                            <button
                                type="button"
                                class="quiz-option"
                                data-index="${index}"
                            >

                                <span class="option-letter">

                                    ${
                                        String.fromCharCode(
                                            65 + index
                                        )
                                    }

                                </span>

                                <span class="option-text">

                                    ${escapeHTML(
                                        option
                                    )}

                                </span>

                            </button>

                        `
                    )
                    .join("")}

            </div>


            <div
                class="quiz-feedback"
                id="quizFeedback"
                hidden
            ></div>


            <button
                type="button"
                class="btn btn-primary quiz-next"
                id="nextQuestion"
                hidden
            >

                ${
                    questionNumber === totalQuestions
                        ? "عرض النتيجة"
                        : "السؤال التالي"
                }

                ←

            </button>

        </div>

    `;


    const options =
        container.querySelectorAll(
            ".quiz-option"
        );


    options.forEach(
        option => {

            option.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            this.dataset.index
                        );


                    answerQuestion(
                        index
                    );

                }
            );

        }
    );


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                currentQuestionIndex++;

                showQuestion();

            }
        );

    }

}



/* =====================================================
   الإجابة على السؤال
===================================================== */

function answerQuestion(
    selectedIndex
) {

    if (answered) {

        return;

    }


    answered = true;


    const question =
        selectedQuestions[
            currentQuestionIndex
        ];


    const correctIndex =
        question.correctAnswer;


    const options =
        document.querySelectorAll(
            ".quiz-option"
        );


    options.forEach(
        (option, index) => {

            option.disabled = true;


            if (
                index ===
                correctIndex
            ) {

                option.classList.add(
                    "correct"
                );

            }


            if (
                index ===
                selectedIndex &&
                selectedIndex !==
                correctIndex
            ) {

                option.classList.add(
                    "wrong"
                );

            }

        }
    );


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    if (feedback) {

        feedback.hidden = false;


        if (
            selectedIndex ===
            correctIndex
        ) {

            score++;


            feedback.className =
                "quiz-feedback success";


            feedback.innerHTML = `

                <strong>
                    أحسنت! 🎉
                </strong>

                <p>
                    ${
                        escapeHTML(
                            question.explanation ||
                            "إجابة صحيحة."
                        )
                    }
                </p>

            `;

        } else {

            feedback.className =
                "quiz-feedback error";


            feedback.innerHTML = `

                <strong>
                    حاول مرة أخرى 💡
                </strong>

                <p>
                    الإجابة الصحيحة هي:
                    <strong>
                        ${
                            escapeHTML(
                                question.options[
                                    correctIndex
                                ]
                            )
                        }
                    </strong>
                </p>

                <p>
                    ${
                        escapeHTML(
                            question.explanation ||
                            ""
                        )
                    }
                </p>

            `;

        }

    }


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    if (nextButton) {

        nextButton.hidden = false;

    }

}



/* =====================================================
   عرض النتيجة
===================================================== */

function showResult() {

    const container =
        document.getElementById(
            "quizContainer"
        );


    if (!container) {

        return;

    }


    const total =
        selectedQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    let message;


    if (percentage >= 90) {

        message =
            "ممتاز جدًا! مستواك رائع في هذه القواعد. 🌟";

    } else if (percentage >= 70) {

        message =
            "أحسنت! لديك أساس جيد، واستمر في المراجعة. 👏";

    } else if (percentage >= 50) {

        message =
            "بداية جيدة، لكن تحتاج إلى مراجعة بعض الأخطاء. 💪";

    } else {

        message =
            "لا بأس! الأخطاء هي أفضل طريقة للتعلم. 📖";

    }


    container.innerHTML = `

        <div class="quiz-result">

            <div class="result-icon">
                🏆
            </div>


            <h2>
                انتهى الاختبار!
            </h2>


            <div class="result-score">

                <strong>
                    ${score}
                </strong>

                <span>
                    من ${total}
                </span>

            </div>


            <div class="result-percentage">

                ${percentage}%

            </div>


            <p>
                ${message}
            </p>


            <div class="result-actions">

                <button
                    type="button"
                    class="btn btn-primary"
                    id="restartQuiz"
                >

                    إعادة الاختبار

                </button>


                <a
                    href="mistakes.html"
                    class="btn btn-secondary"
                >

                    مراجعة الأخطاء

                </a>

            </div>

        </div>

    `;


    const restart =
        document.getElementById(
            "restartQuiz"
        );


    if (restart) {

        restart.addEventListener(
            "click",
            function () {

                currentQuestionIndex = 0;

                score = 0;

                answered = false;

                initializeQuiz();

            }
        );

    }

}



/* =====================================================
   خلط المصفوفة
===================================================== */

function shuffleArray(array) {

    const newArray =
        [...array];


    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            newArray[i],
            newArray[j]
        ] =
        [
            newArray[j],
            newArray[i]
        ];

    }


    return newArray;

}



/* =====================================================
   حماية النصوص
===================================================== */

function escapeHTML(value) {

    return String(
        value ?? ""
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