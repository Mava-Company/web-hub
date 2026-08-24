/* =========================================================
   دفتر أخطاء التركي
   data.js

   هذا الملف يحتوي على جميع بيانات الموقع.
   لا توجد قاعدة بيانات.
   لإضافة خطأ جديد: أضيفيه داخل mistakes فقط.

   جميع البيانات باللغة العربية.
========================================================= */


/* =========================================================
   معلومات الموقع
========================================================= */

const siteData = {

    name: "دفتر أخطاء التركي",

    description:
        "موقع تعليمي يساعد متعلمي اللغة التركية على فهم الأخطاء الشائعة وتجنبها.",

    language: "ar",

    version: "1.0.0"

};



/* =========================================================
   التصنيفات
========================================================= */

const categories = [

    {
        id: "suffixes",
        name: "اللواحق",
        description: "أخطاء استخدام اللواحق في اللغة التركية",
        icon: "🔤",
        color: "red"
    },

    {
        id: "cases",
        name: "حالات الاسم",
        description: "أخطاء استخدام حالات الاسم مثل -i و -e و -de و -den",
        icon: "📍",
        color: "blue"
    },

    {
        id: "tenses",
        name: "الأزمنة",
        description: "أخطاء استخدام الماضي والمضارع والمستقبل",
        icon: "⏰",
        color: "yellow"
    },

    {
        id: "sentence-order",
        name: "ترتيب الجملة",
        description: "أخطاء ترتيب الكلمات داخل الجملة التركية",
        icon: "🧩",
        color: "green"
    },

    {
        id: "similar-words",
        name: "كلمات متشابهة",
        description: "كلمات تركية متشابهة في الشكل أو المعنى",
        icon: "🔀",
        color: "purple"
    },

    {
        id: "arabic-translation",
        name: "أخطاء الترجمة من العربية",
        description: "أخطاء تحدث بسبب ترجمة الجملة العربية حرفيًا",
        icon: "🇸🇦",
        color: "orange"
    }

];



/* =========================================================
   الأخطاء التعليمية
========================================================= */

const mistakes = [

    /* -----------------------------------------------------
       الخطأ 1
    ----------------------------------------------------- */

    {
        id: 1,

        title:
            "استخدام değil مع اللاحقة الخطأ",

        category:
            "suffixes",

        level:
            "مبتدئ",

        wrong:
            "Ben 20 yaşındayım değil.",

        correct:
            "Ben 20 yaşında değilim.",

        shortExplanation:
            "عند نفي الجملة الاسمية في التركية نستخدم değil، ثم نضيف لاحقة الشخص المناسبة.",

        explanation:
            "الجملة الاسمية المثبتة هي: Ben 20 yaşındayım. عند نفيها نستخدم değil، لكن لا نضع değil في نهاية الجملة دون لاحقة الشخص. مع المتكلم نستخدم değilim، لذلك نقول: Ben 20 yaşında değilim.",

        rule:
            "değil + لاحقة الشخص",

        examples: [

            {
                wrong:
                    "Ben öğrenci değil.",

                correct:
                    "Ben öğrenci değilim."
            },

            {
                wrong:
                    "Ben yorgun değil.",

                correct:
                    "Ben yorgun değilim."
            }

        ],

        keywords: [
            "değil",
            "النفي",
            "لاحقة الشخص",
            "yaşındayım"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 2
    ----------------------------------------------------- */

    {
        id: 2,

        title:
            "استخدام حالة المكان مع فعل الذهاب",

        category:
            "cases",

        level:
            "مبتدئ",

        wrong:
            "Ben İstanbul'da gidiyorum.",

        correct:
            "Ben İstanbul'a gidiyorum.",

        shortExplanation:
            "مع فعل الذهاب gitmek نستخدم حالة الاتجاه -e / -a، وليس حالة المكان -de / -da.",

        explanation:
            "عندما نريد التعبير عن المكان الذي نذهب إليه، نستخدم لاحقة الاتجاه -e أو -a. أما -de و-da فتستخدم غالبًا للتعبير عن وجود شيء أو شخص في مكان معين.",

        rule:
            "gitmek + -e / -a",

        examples: [

            {
                wrong:
                    "Okulda gidiyorum.",

                correct:
                    "Okula gidiyorum."
            },

            {
                wrong:
                    "Markette gidiyorum.",

                correct:
                    "Markete gidiyorum."
            }

        ],

        keywords: [
            "gitmek",
            "إلى",
            "في",
            "da",
            "de",
            "a",
            "e"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 3
    ----------------------------------------------------- */

    {
        id: 3,

        title:
            "الخلط بين var و varım",

        category:
            "suffixes",

        level:
            "مبتدئ",

        wrong:
            "Benim bir arabam varım.",

        correct:
            "Benim bir arabam var.",

        shortExplanation:
            "كلمة var لا تحتاج إلى لاحقة الشخص في هذا التركيب.",

        explanation:
            "عند التعبير عن الملكية باستخدام Benim ... var، لا نضيف لاحقة الشخص إلى var. لاحقة الملكية تكون على الاسم نفسه: arabam، وليس على var.",

        rule:
            "Benim + الاسم مع لاحقة الملكية + var",

        examples: [

            {
                wrong:
                    "Benim bir kitabım varım.",

                correct:
                    "Benim bir kitabım var."
            },

            {
                wrong:
                    "Benim kardeşim varım.",

                correct:
                    "Benim kardeşim var."
            }

        ],

        keywords: [
            "var",
            "varım",
            "الملكية",
            "Benim"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 4
    ----------------------------------------------------- */

    {
        id: 4,

        title:
            "ترجمة أنا أحب القهوة حرفيًا",

        category:
            "arabic-translation",

        level:
            "مبتدئ",

        wrong:
            "Ben kahveyi seviyorum.",

        correct:
            "Kahve seviyorum.",

        shortExplanation:
            "في بعض السياقات لا نحتاج إلى استخدام المفعول به المحدد عند الحديث عن شيء بشكل عام.",

        explanation:
            "عند الحديث عن القهوة بشكل عام يمكن قول Kahve seviyorum بمعنى أحب القهوة. استخدام kahveyi ممكن أيضًا عندما يكون المقصود قهوة محددة أو معروفة من السياق، لذلك يجب الانتباه إلى معنى الجملة وليس ترجمتها حرفيًا فقط.",

        rule:
            "التمييز بين المفعول به العام والمحدد",

        examples: [

            {
                wrong:
                    "Ben çayı seviyorum.",
                correct:
                    "Çay seviyorum."
            },

            {
                wrong:
                    "Ben müziği seviyorum.",
                correct:
                    "Müzik seviyorum."
            }

        ],

        keywords: [
            "seviyorum",
            "kahve",
            "الترجمة",
            "العربية"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 5
    ----------------------------------------------------- */

    {
        id: 5,

        title:
            "وضع الفعل في المكان الخطأ",

        category:
            "sentence-order",

        level:
            "مبتدئ",

        wrong:
            "Ben gidiyorum okula.",

        correct:
            "Ben okula gidiyorum.",

        shortExplanation:
            "التركية تميل إلى وضع الفعل في نهاية الجملة.",

        explanation:
            "الترتيب الأساسي للجملة التركية هو الفاعل ثم العناصر الأخرى ثم الفعل في النهاية. لذلك تكون الجملة الطبيعية: Ben okula gidiyorum.",

        rule:
            "الفاعل + المفعول/المكان + الفعل",

        examples: [

            {
                wrong:
                    "Ben içiyorum kahve.",

                correct:
                    "Ben kahve içiyorum."
            },

            {
                wrong:
                    "Ali okuyor kitabı.",

                correct:
                    "Ali kitabı okuyor."
            }

        ],

        keywords: [
            "ترتيب الجملة",
            "الفعل",
            "gidiyorum",
            "okula"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 6
    ----------------------------------------------------- */

    {
        id: 6,

        title:
            "الخلط بين biliyorum و tanıyorum",

        category:
            "similar-words",

        level:
            "مبتدئ",

        wrong:
            "Ben Ahmet'i biliyorum.",

        correct:
            "Ben Ahmet'i tanıyorum.",

        shortExplanation:
            "biliyorum تستخدم غالبًا للمعرفة والمعلومات، بينما tanıyorum تستخدم للتعرف على الأشخاص.",

        explanation:
            "الفعلان bilmek و tanımak قد يسببان ارتباكًا للمتعلمين العرب. عندما نتحدث عن معرفة شخص أو التعرف عليه نستخدم tanımak. أما المعلومات والحقائق واللغات والمهارات فتستخدم معها bilmek في العديد من السياقات.",

        rule:
            "bilmek = معرفة معلومة / tanımak = معرفة شخص أو التعرف عليه",

        examples: [

            {
                wrong:
                    "Bu kişiyi biliyorum.",

                correct:
                    "Bu kişiyi tanıyorum."
            },

            {
                wrong:
                    "Türkçe tanıyorum.",

                correct:
                    "Türkçe biliyorum."
            }

        ],

        keywords: [
            "bilmek",
            "tanımak",
            "biliyorum",
            "tanıyorum"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 7
    ----------------------------------------------------- */

    {
        id: 7,

        title:
            "الخلط بين -de و -den",

        category:
            "cases",

        level:
            "مبتدئ",

        wrong:
            "İstanbul'dan yaşıyorum.",

        correct:
            "İstanbul'da yaşıyorum.",

        shortExplanation:
            "لاحقة -da / -de تعني غالبًا في، بينما -dan / -den تستخدم للدلالة على الخروج أو المصدر بمعنى من.",

        explanation:
            "عند قول إنك تعيش في إسطنبول نستخدم لاحقة المكان: İstanbul'da. أما İstanbul'dan فهي تعني من إسطنبول، مثل: İstanbul'dan geliyorum أي أنا قادم من إسطنبول.",

        rule:
            "-da / -de = في، و -dan / -den = من",

        examples: [

            {
                wrong:
                    "Ankara'dan yaşıyorum.",

                correct:
                    "Ankara'da yaşıyorum."
            },

            {
                wrong:
                    "Evde geliyorum.",

                correct:
                    "Evden geliyorum."
            }

        ],

        keywords: [
            "da",
            "de",
            "dan",
            "den",
            "المكان"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    },


    /* -----------------------------------------------------
       الخطأ 8
    ----------------------------------------------------- */

    {
        id: 8,

        title:
            "الخلط بين geçmiş و gelecek",

        category:
            "tenses",

        level:
            "مبتدئ",

        wrong:
            "Yarın İstanbul'a gittim.",

        correct:
            "Yarın İstanbul'a gideceğim.",

        shortExplanation:
            "كلمة yarın تشير إلى المستقبل، لذلك نحتاج إلى زمن المستقبل وليس الماضي.",

        explanation:
            "عندما نتحدث عن شيء سيحدث غدًا نستخدم زمن المستقبل. لاحقة المستقبل الأساسية هي -ecek أو -acak، ثم نضيف لاحقة الشخص عند الحاجة.",

        rule:
            "المستقبل: -ecek / -acak",

        examples: [

            {
                wrong:
                    "Yarın çalıştım.",

                correct:
                    "Yarın çalışacağım."
            },

            {
                wrong:
                    "Yarın geldim.",

                correct:
                    "Yarın geleceğim."
            }

        ],

        keywords: [
            "yarın",
            "المستقبل",
            "الماضي",
            "gideceğim",
            "gittim"
        ],

        published: true,

        createdAt:
            "2026-08-23"

    }

];



/* =========================================================
   أسئلة الاختبار
========================================================= */

const quizQuestions = [

    {
        id: 1,

        question:
            "أي جملة صحيحة؟",

        options: [
            "Ben 20 yaşındayım değil.",
            "Ben 20 yaşında değilim.",
            "Ben 20 yaşında değil.",
            "Ben 20 yaşındayım değilim."
        ],

        correctAnswer: 1,

        explanation:
            "الصحيح هو Ben 20 yaşında değilim لأن النفي مع الشخص الأول المفرد يحتاج إلى لاحقة -im."
    },


    {
        id: 2,

        question:
            "أي جملة صحيحة؟",

        options: [
            "İstanbul'da gidiyorum.",
            "İstanbul'dan gidiyorum.",
            "İstanbul'a gidiyorum.",
            "İstanbul'ı gidiyorum."
        ],

        correctAnswer: 2,

        explanation:
            "مع فعل gitmek نستخدم لاحقة الاتجاه -a / -e."
    },


    {
        id: 3,

        question:
            "كيف نقول: أنا أعيش في إسطنبول؟",

        options: [
            "İstanbul'dan yaşıyorum.",
            "İstanbul'a yaşıyorum.",
            "İstanbul'da yaşıyorum.",
            "İstanbul'ı yaşıyorum."
        ],

        correctAnswer: 2,

        explanation:
            "لاحقة -da / -de تستخدم للدلالة على المكان."
    },


    {
        id: 4,

        question:
            "أي كلمة نستخدمها غالبًا لمعرفة شخص؟",

        options: [
            "bilmek",
            "tanımak",
            "gitmek",
            "gelmek"
        ],

        correctAnswer: 1,

        explanation:
            "tanımak تستخدم للتعرف على شخص أو معرفته."
    },


    {
        id: 5,

        question:
            "ما الجملة الصحيحة لـ: غدًا سأذهب إلى المدرسة؟",

        options: [
            "Yarın okula gittim.",
            "Yarın okulda gittim.",
            "Yarın okula gideceğim.",
            "Yarın okuldan gittim."
        ],

        correctAnswer: 2,

        explanation:
            "Yarın يدل على المستقبل، ولذلك نستخدم gideceğim."
    }

];



/* =========================================================
   تمارين التدريب
========================================================= */

const practiceQuestions = [

    {
        id: 1,

        type: "correct",

        question:
            "اختر الجملة الصحيحة:",

        options: [
            "Ben öğrenciyim değil.",
            "Ben öğrenci değilim.",
            "Ben öğrenci değil."
        ],

        answer: 1,

        explanation:
            "الصحيح: Ben öğrenci değilim."
    },


    {
        id: 2,

        type: "correct",

        question:
            "اختر الجملة الصحيحة:",

        options: [
            "Okula gidiyorum.",
            "Okulda gidiyorum.",
            "Okuldan gidiyorum."
        ],

        answer: 0,

        explanation:
            "نستخدم -a / -e مع الاتجاه إلى مكان."
    },


    {
        id: 3,

        type: "correct",

        question:
            "اختر الجملة الصحيحة:",

        options: [
            "İstanbul'dan yaşıyorum.",
            "İstanbul'da yaşıyorum.",
            "İstanbul'a yaşıyorum."
        ],

        answer: 1,

        explanation:
            "نستخدم -da / -de عندما نقول إننا نعيش في مكان."
    }

];



/* =========================================================
   أخطاء اليوم
========================================================= */

const dailyMistakes = [

    {
        id: 1,

        mistakeId: 2,

        date:
            "2026-08-23",

        title:
            "هل تعرف لماذا هذه الجملة خاطئة؟",

        wrong:
            "Ben İstanbul'da gidiyorum.",

        correct:
            "Ben İstanbul'a gidiyorum.",

        hint:
            "انتبهي إلى اللاحقة المستخدمة مع فعل الذهاب.",

        explanation:
            "الفعل gitmek يدل على الحركة نحو مكان، لذلك نستخدم -a أو -e."
    }

];



/* =========================================================
   إعدادات الموقع
========================================================= */

const appSettings = {

    itemsPerPage: 9,

    latestMistakesCount: 3,

    quizQuestionsCount: 5,

    dailyMistakeEnabled: true,

    favoritesEnabled: true,

    searchEnabled: true

};



/* =========================================================
   دوال مساعدة
========================================================= */


/*
    الحصول على خطأ بواسطة ID
*/

function getMistakeById(id) {

    return mistakes.find(
        mistake =>
            Number(mistake.id) === Number(id)
    );

}



/*
    الحصول على تصنيف بواسطة ID
*/

function getCategoryById(id) {

    return categories.find(
        category =>
            category.id === id
    );

}



/*
    الحصول على أخطاء تصنيف معين
*/

function getMistakesByCategory(
    categoryId
) {

    return mistakes.filter(
        mistake =>
            mistake.category === categoryId
    );

}



/*
    البحث في الأخطاء
*/

function searchMistakes(
    searchTerm
) {

    const term =
        searchTerm
            .toLowerCase()
            .trim();


    if (!term) {

        return mistakes;

    }


    return mistakes.filter(
        mistake => {

            const searchableText = [

                mistake.title,

                mistake.wrong,

                mistake.correct,

                mistake.shortExplanation,

                mistake.explanation,

                mistake.rule,

                ...(mistake.keywords || [])

            ]
                .join(" ")
                .toLowerCase();


            return searchableText.includes(term);

        }
    );

}



/*
    الحصول على الأخطاء المنشورة فقط
*/

function getPublishedMistakes() {

    return mistakes.filter(
        mistake =>
            mistake.published === true
    );

}



/*
    الحصول على أحدث الأخطاء
*/

function getLatestMistakes(
    count = 3
) {

    return [
        ...getPublishedMistakes()
    ]

        .sort(
            (a, b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
        )

        .slice(0, count);

}



/*
    الحصول على خطأ اليوم
*/

function getDailyMistake() {

    if (
        !dailyMistakes ||
        dailyMistakes.length === 0
    ) {

        return null;

    }


    const today =
        new Date()
            .toISOString()
            .split("T")[0];


    const todayMistake =
        dailyMistakes.find(
            item =>
                item.date === today
        );


    if (todayMistake) {

        return getMistakeById(
            todayMistake.mistakeId
        );

    }


    // إذا لم يوجد خطأ لهذا التاريخ
    // نستخدم أول خطأ منشور

    return getPublishedMistakes()[0] || null;

}



/*
    الحصول على عدد الأخطاء
*/

function getMistakesCount() {

    return getPublishedMistakes().length;

}



/*
    الحصول على عدد التصنيفات
*/

function getCategoriesCount() {

    return categories.length;

}



/* =========================================================
   تصدير البيانات للاستخدام في الملفات الأخرى
========================================================= */

if (typeof window !== "undefined") {

    window.siteData =
        siteData;

    window.categories =
        categories;

    window.mistakes =
        mistakes;

    window.quizQuestions =
        quizQuestions;

    window.practiceQuestions =
        practiceQuestions;

    window.dailyMistakes =
        dailyMistakes;

    window.appSettings =
        appSettings;


    window.getMistakeById =
        getMistakeById;

    window.getCategoryById =
        getCategoryById;

    window.getMistakesByCategory =
        getMistakesByCategory;

    window.searchMistakes =
        searchMistakes;

    window.getPublishedMistakes =
        getPublishedMistakes;

    window.getLatestMistakes =
        getLatestMistakes;

    window.getDailyMistake =
        getDailyMistake;

    window.getMistakesCount =
        getMistakesCount;

    window.getCategoriesCount =
        getCategoriesCount;

}