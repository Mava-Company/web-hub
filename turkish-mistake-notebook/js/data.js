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

    /* =====================================================
       1 - النفي مع değil
    ===================================================== */

    {
        id: 1,
        title: "استخدام değil مع لاحقة الشخص الخطأ",
        category: "suffixes",
        level: "مبتدئ",

        wrong: "Ben öğrenci değil.",
        correct: "Ben öğrenci değilim.",

        shortExplanation:
            "عند نفي الجملة الاسمية مع أنا نستخدم değilim.",

        explanation:
            "في الجملة الاسمية المثبتة نقول Ben öğrenciyim. وعند النفي نستخدم değil مع لاحقة الشخص: Ben öğrenci değilim. لا يكفي استخدام değil وحدها مع المتكلم.",

        rule: "değil + لاحقة الشخص",

        examples: [
            {
                wrong: "Ben yorgun değil.",
                correct: "Ben yorgun değilim."
            },
            {
                wrong: "Ben Türk değil.",
                correct: "Ben Türk değilim."
            }
        ],

        keywords: ["değil", "değilim", "النفي", "لاحقة الشخص"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       2 - النفي مع هو/هي
    ===================================================== */

    {
        id: 2,
        title: "إضافة لاحقة الشخص بعد değil مع هو أو هي",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "O öğrenci değilim.",
        correct: "O öğrenci değil.",

        shortExplanation:
            "مع هو أو هي لا نضيف لاحقة الشخص إلى değil.",

        explanation:
            "في المضارع الاسمي مع الشخص الثالث المفرد لا نضيف لاحقة شخصية إلى değil. لذلك نقول O öğrenci değil أي هو أو هي ليس طالبًا.",

        rule: "O + اسم/صفة + değil",

        examples: [
            {
                wrong: "O hasta değilim.",
                correct: "O hasta değil."
            },
            {
                wrong: "Ayşe Türk değilim.",
                correct: "Ayşe Türk değil."
            }
        ],

        keywords: ["değil", "هو", "هي", "النفي"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       3 - gitmek + -e/-a
    ===================================================== */

    {
        id: 3,
        title: "استخدام -de مع فعل الذهاب",

        category: "cases",
        level: "مبتدئ",

        wrong: "Okulda gidiyorum.",
        correct: "Okula gidiyorum.",

        shortExplanation:
            "مع فعل gitmek نستخدم حالة الاتجاه -e أو -a.",

        explanation:
            "الفعل gitmek يعني الذهاب إلى مكان، ولذلك نستخدم لاحقة الاتجاه -e أو -a حسب انسجام حروف العلة. نقول okula gidiyorum أي أذهب إلى المدرسة.",

        rule: "gitmek + -e/-a",

        examples: [
            {
                wrong: "Markette gidiyorum.",
                correct: "Markete gidiyorum."
            },
            {
                wrong: "Evde gidiyorum.",
                correct: "Eve gidiyorum."
            }
        ],

        keywords: ["gitmek", "okula", "market", "e", "a"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       4 - gelmek + -den/-dan
    ===================================================== */

    {
        id: 4,
        title: "استخدام -e مع فعل القدوم من مكان",

        category: "cases",
        level: "مبتدئ",

        wrong: "Okula geliyorum.",
        correct: "Okuldan geliyorum.",

        shortExplanation:
            "عندما نعبّر عن المكان الذي نأتي منه نستخدم -den/-dan.",

        explanation:
            "مع gelmek يمكن أن نعبّر عن نقطة الانطلاق باستخدام لاحقة الخروج أو المصدر -den/-dan. لذلك Okuldan geliyorum تعني أنا قادم من المدرسة.",

        rule: "مكان + -den/-dan + gelmek",

        examples: [
            {
                wrong: "Evde geliyorum.",
                correct: "Evden geliyorum."
            },
            {
                wrong: "İstanbul'a geliyorum.",
                correct: "İstanbul'dan geliyorum."
            }
        ],

        keywords: ["gelmek", "den", "dan", "من", "الخروج"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       5 - -de/-da للمكان
    ===================================================== */

    {
        id: 5,
        title: "الخلط بين -de و -den",

        category: "cases",
        level: "مبتدئ",

        wrong: "İstanbul'dan yaşıyorum.",
        correct: "İstanbul'da yaşıyorum.",

        shortExplanation:
            "-da/-de تعني غالبًا في، بينما -dan/-den تعني من.",

        explanation:
            "عند التعبير عن المكان الذي يعيش فيه الشخص نستخدم لاحقة المكان -da/-de. أما -dan/-den فتستخدم عندما يكون المعنى من مكان معين.",

        rule: "-da/-de = في، -dan/-den = من",

        examples: [
            {
                wrong: "Ankara'dan yaşıyorum.",
                correct: "Ankara'da yaşıyorum."
            },
            {
                wrong: "Evden yaşıyorum.",
                correct: "Evde yaşıyorum."
            }
        ],

        keywords: ["da", "de", "dan", "den", "المكان"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       6 - var
    ===================================================== */

    {
        id: 6,
        title: "إضافة لاحقة الشخص إلى var",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Benim bir arabam varım.",
        correct: "Benim bir arabam var.",

        shortExplanation:
            "في تركيب الملكية Benim ... var لا نضيف لاحقة الشخص إلى var.",

        explanation:
            "لاحقة الملكية تكون على الاسم نفسه مثل arabam، بينما var تبقى كما هي: Benim bir arabam var.",

        rule: "Benim + اسم مع لاحقة الملكية + var",

        examples: [
            {
                wrong: "Benim bir kitabım varım.",
                correct: "Benim bir kitabım var."
            },
            {
                wrong: "Benim kardeşim varım.",
                correct: "Benim kardeşim var."
            }
        ],

        keywords: ["var", "varım", "Benim", "الملكية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       7 - yok
    ===================================================== */

    {
        id: 7,
        title: "إضافة لاحقة الشخص إلى yok في الملكية",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Benim param yokum.",
        correct: "Benim param yok.",

        shortExplanation:
            "في تركيب الملكية المنفية نستخدم yok دون لاحقة شخصية.",

        explanation:
            "نقول Benim param yok أي ليس لدي مال. لاحقة الملكية تظهر على الاسم param، بينما yok لا تأخذ لاحقة الشخص في هذا التركيب.",

        rule: "Benim + اسم الملكية + yok",

        examples: [
            {
                wrong: "Benim arabam yokum.",
                correct: "Benim arabam yok."
            },
            {
                wrong: "Benim zamanım yokum.",
                correct: "Benim zamanım yok."
            }
        ],

        keywords: ["yok", "yokum", "الملكية", "النفي"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       8 - لاحقة الملكية
    ===================================================== */

    {
        id: 8,
        title: "نسيان لاحقة الملكية مع Benim",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Benim araba var.",
        correct: "Benim arabam var.",

        shortExplanation:
            "بعد Benim يحتاج الاسم عادةً إلى لاحقة ملكية مناسبة.",

        explanation:
            "عند استخدام Benim بمعنى لي أو خاصتي، نستخدم لاحقة الملكية على الاسم: araba تصبح arabam. لذلك Benim arabam var تعني لدي سيارة.",

        rule: "Benim + اسم + -(I)m",

        examples: [
            {
                wrong: "Benim kitap var.",
                correct: "Benim kitabım var."
            },
            {
                wrong: "Benim ev var.",
                correct: "Benim evim var."
            }
        ],

        keywords: ["Benim", "arabam", "kitabım", "الملكية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       9 - senin
    ===================================================== */

    {
        id: 9,
        title: "نسيان لاحقة الملكية مع Senin",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Senin araba nerede?",
        correct: "Senin araban nerede?",

        shortExplanation:
            "مع Senin نستخدم لاحقة الملكية المناسبة على الاسم.",

        explanation:
            "Senin تعني لك أو خاصتك، ولذلك الاسم الذي يليها يأخذ لاحقة ملكية الشخص الثاني: araba تصبح araban.",

        rule: "Senin + اسم + -(I)n",

        examples: [
            {
                wrong: "Senin kitap nerede?",
                correct: "Senin kitabın nerede?"
            },
            {
                wrong: "Senin ev nerede?",
                correct: "Senin evin nerede?"
            }
        ],

        keywords: ["Senin", "araban", "kitabın", "الملكية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       10 - صيغة الجمع
    ===================================================== */

    {
        id: 10,
        title: "استخدام لاحقة الجمع بشكل خاطئ",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Kitaplarm var.",
        correct: "Kitaplarım var.",

        shortExplanation:
            "عند الجمع مع الملكية يجب ترتيب اللواحق بشكل صحيح.",

        explanation:
            "في kitaplarım لدينا أولًا لاحقة الجمع -lar ثم لاحقة الملكية -ım. لذلك نقول kitaplarım وليس kitaplarm.",

        rule: "اسم + -lar/-ler + لاحقة الملكية",

        examples: [
            {
                wrong: "Evlerim yerine evlerm.",
                correct: "Evlerim."
            },
            {
                wrong: "Arkadaşlarm.",
                correct: "Arkadaşlarım."
            }
        ],

        keywords: ["الجمع", "lar", "ler", "الملكية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       11 - الجمع بعد الأرقام
    ===================================================== */

    {
        id: 11,
        title: "وضع لاحقة الجمع بعد الأرقام",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Üç kitaplar aldım.",
        correct: "Üç kitap aldım.",

        shortExplanation:
            "بعد الأرقام لا نستخدم عادةً لاحقة الجمع -lar/-ler.",

        explanation:
            "الرقم نفسه يوضح أن الاسم جمع، لذلك نقول üç kitap أي ثلاثة كتب، وليس üç kitaplar.",

        rule: "رقم + اسم مفرد",

        examples: [
            {
                wrong: "İki arabalar var.",
                correct: "İki araba var."
            },
            {
                wrong: "Beş öğrenciler geldi.",
                correct: "Beş öğrenci geldi."
            }
        ],

        keywords: ["الأرقام", "الجمع", "kitap", "öğrenci"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       12 - حالة المفعول به المحدد
    ===================================================== */

    {
        id: 12,
        title: "نسيان لاحقة المفعول به المحدد",

        category: "cases",
        level: "مبتدئ",

        wrong: "Kitap okudum." ,
        correct: "Kitabı okudum.",

        shortExplanation:
            "عندما يكون المقصود كتابًا محددًا نستخدم لاحقة المفعول به.",

        explanation:
            "الفرق بين kitap و kitabı يعتمد على كون المفعول به عامًا أو محددًا. Kitap okudum تعني قرأت كتابًا، بينما Kitabı okudum تعني قرأت الكتاب المحدد المعروف من السياق.",

        rule: "المفعول المحدد + -(y)ı/i/u/ü",

        examples: [
            {
                wrong: "Filmi izledim yerine Film izledim.",
                correct: "Filmi izledim."
            },
            {
                wrong: "Kitabı aldım.",
                correct: "Kitabı aldım."
            }
        ],

        keywords: ["المفعول به", "belirtme", "ı", "i", "u", "ü"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       13 - -ı/-i/-u/-ü
    ===================================================== */

    {
        id: 13,
        title: "اختيار لاحقة المفعول به بشكل خاطئ",

        category: "cases",
        level: "مبتدئ",

        wrong: "Kitabı seviyorum.",
        correct: "Kitabı seviyorum.",

        shortExplanation:
            "لاحقة المفعول به تتغير حسب انسجام حروف العلة.",

        explanation:
            "لاحقة المفعول به المحدد لها أربع صور أساسية: -ı، -i، -u، -ü. الاختيار يعتمد على آخر حرف علة في الكلمة.",

        rule: "-ı/-i/-u/-ü حسب انسجام حروف العلة",

        examples: [
            {
                wrong: "Gülü gördüm yerine Gülü gördüm.",
                correct: "Gülü gördüm."
            },
            {
                wrong: "Evi temizledim yerine Evi temizledim.",
                correct: "Evi temizledim."
            }
        ],

        keywords: ["ı", "i", "u", "ü", "انسجام", "المفعول به"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       14 - حرف الوصل مع الكلمات المنتهية بحرف علة
    ===================================================== */

    {
        id: 14,
        title: "نسيان حرف y مع لاحقة المفعول به",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Arabayı aldım.",
        correct: "Arabayı aldım.",

        shortExplanation:
            "عند إضافة لاحقة تبدأ بحرف علة إلى كلمة تنتهي بحرف علة نستخدم y للفصل.",

        explanation:
            "كلمة araba تنتهي بحرف علة، وعند إضافة لاحقة المفعول به -ı نستخدم حرف الوصل y: araba + yı = arabayı.",

        rule: "حرف علة + y + لاحقة",

        examples: [
            {
                wrong: "Kahveyi içtim yerine Kahveyi içtim.",
                correct: "Kahveyi içtim."
            },
            {
                wrong: "Anneyi gördüm yerine Anneyi gördüm.",
                correct: "Anneyi gördüm."
            }
        ],

        keywords: ["y", "حرف الوصل", "arabayı", "kahveyi"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       15 - المكان de/da
    ===================================================== */

    {
        id: 15,
        title: "الخلط بين لاحقة المكان وكلمة de",

        category: "cases",
        level: "مبتدئ",

        wrong: "Ben de İstanbul yaşıyorum.",
        correct: "Ben İstanbul'da yaşıyorum.",

        shortExplanation:
            "لاحقة المكان -da/-de تختلف عن de التي تعني أيضًا أو كذلك.",

        explanation:
            "في İstanbul'da تكون da لاحقة ملتصقة باسم المكان. أما Ben de تعني أنا أيضًا، وتكتب de منفصلة.",

        rule: "لاحقة المكان ملتصقة، و de بمعنى أيضًا منفصلة",

        examples: [
            {
                wrong: "Ben okul da çalışıyorum.",
                correct: "Ben okulda çalışıyorum."
            },
            {
                wrong: "Ben de geliyorum.",
                correct: "Ben de geliyorum."
            }
        ],

        keywords: ["de", "da", "أيضًا", "المكان"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       16 - de بمعنى أيضًا
    ===================================================== */

    {
        id: 16,
        title: "كتابة de بمعنى أيضًا متصلة",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Bende geliyorum.",
        correct: "Ben de geliyorum.",

        shortExplanation:
            "de بمعنى أيضًا تكتب منفصلة عن الكلمة السابقة.",

        explanation:
            "عندما تكون de بمعنى أيضًا أو كذلك فهي أداة مستقلة وتكتب منفصلة: Ben de geliyorum أي أنا أيضًا قادم.",

        rule: "de = أيضًا → منفصلة",

        examples: [
            {
                wrong: "Sende gel.",
                correct: "Sen de gel."
            },
            {
                wrong: "Ayşede geliyor.",
                correct: "Ayşe de geliyor."
            }
        ],

        keywords: ["de", "أيضًا", "كلمة منفصلة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       17 - da/ de في المكان
    ===================================================== */

    {
        id: 17,
        title: "اختيار da بدل de في لاحقة المكان",

        category: "cases",
        level: "مبتدئ",

        wrong: "Evdeyim.",
        correct: "Evdeyim.",

        shortExplanation:
            "الصيغة الصحيحة تعتمد على آخر حرف علة في الكلمة.",

        explanation:
            "لاحقة المكان لها شكلان رئيسيان -da و-de، والاختيار يعتمد على انسجام حروف العلة. لذلك Ev + de = evde، بينما okul + da = okulda.",

        rule: "e/i/ö/ü → de، a/ı/o/u → da",

        examples: [
            {
                wrong: "Okulde.",
                correct: "Okulda."
            },
            {
                wrong: "Evda.",
                correct: "Evde."
            }
        ],

        keywords: ["da", "de", "انسجام حروف العلة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       18 - den/dan
    ===================================================== */

    {
        id: 18,
        title: "اختيار dan بدل den",

        category: "cases",
        level: "مبتدئ",

        wrong: "Evdan geliyorum.",
        correct: "Evden geliyorum.",

        shortExplanation:
            "لاحقة -dan/-den تتغير حسب انسجام حروف العلة.",

        explanation:
            "كلمة ev تحتوي على e، لذلك نستخدم -den: evden. أما كلمة okul فتأخذ -dan: okuldan.",

        rule: "e/i/ö/ü → den، a/ı/o/u → dan",

        examples: [
            {
                wrong: "Şehirden değil Şehirden.",
                correct: "Şehirden."
            },
            {
                wrong: "Okulden.",
                correct: "Okuldan."
            }
        ],

        keywords: ["dan", "den", "انسجام", "من"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       19 - زمن المضارع المستمر
    ===================================================== */

    {
        id: 19,
        title: "نسيان لاحقة المضارع المستمر",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Ben şimdi yemek yiyorum yerine Ben şimdi yemek yiyorum.",
        correct: "Ben şimdi yemek yiyorum.",

        shortExplanation:
            "المضارع المستمر في التركية يستخدم غالبًا اللاحقة -yor.",

        explanation:
            "عند الحديث عن حدث يحدث الآن نستخدم صيغة المضارع المستمر مع -yor مثل geliyorum، gidiyorum، çalışıyorum.",

        rule: "جذر الفعل + -yor + لاحقة الشخص",

        examples: [
            {
                wrong: "Şimdi çalıştım.",
                correct: "Şimdi çalışıyorum."
            },
            {
                wrong: "Şimdi kitap okuyorum.",
                correct: "Şimdi kitap okuyorum."
            }
        ],

        keywords: ["-yor", "المضارع المستمر", "الآن"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       20 - الماضي
    ===================================================== */

    {
        id: 20,
        title: "استخدام المضارع بدل الماضي",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Dün sinemaya gidiyorum.",
        correct: "Dün sinemaya gittim.",

        shortExplanation:
            "Dün تشير إلى الماضي، لذلك نستخدم زمن الماضي المناسب.",

        explanation:
            "عند الحديث عن حدث انتهى في الماضي مع كلمات مثل dün، نستخدم الماضي المباشر -di مع لاحقة الشخص: gittim.",

        rule: "الماضي المباشر: -dı/-di/-du/-dü",

        examples: [
            {
                wrong: "Dün çalışıyorum.",
                correct: "Dün çalıştım."
            },
            {
                wrong: "Geçen hafta geldim.",
                correct: "Geçen hafta geldim."
            }
        ],

        keywords: ["dün", "الماضي", "gittim", "çalıştım"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       21 - المستقبل
    ===================================================== */

    {
        id: 21,
        title: "استخدام الماضي مع yarın",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Yarın İstanbul'a gittim.",
        correct: "Yarın İstanbul'a gideceğim.",

        shortExplanation:
            "Yarın تشير إلى المستقبل، لذلك نستخدم -ecek/-acak.",

        explanation:
            "عندما نتحدث عن حدث سيحدث غدًا نستخدم زمن المستقبل. الفعل gitmek يصبح gideceğim مع المتكلم.",

        rule: "المستقبل: -ecek/-acak",

        examples: [
            {
                wrong: "Yarın çalıştım.",
                correct: "Yarın çalışacağım."
            },
            {
                wrong: "Yarın geldim.",
                correct: "Yarın geleceğim."
            }
        ],

        keywords: ["yarın", "المستقبل", "gideceğim", "geleceğim"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       22 - الماضي المنفي
    ===================================================== */

    {
        id: 22,
        title: "نسيان -me/-ma في نفي الماضي",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Dün okula gittim değil.",
        correct: "Dün okula gitmedim.",

        shortExplanation:
            "نفي الفعل في الماضي يكون بإضافة -me/-ma قبل لاحقة الزمن.",

        explanation:
            "لنفي الأفعال نستخدم أداة النفي -me/-ma. في الماضي نقول gitmedim أي لم أذهب، وليس gittim değil.",

        rule: "جذر الفعل + -me/-ma + الماضي + الشخص",

        examples: [
            {
                wrong: "Gelmedim değil.",
                correct: "Gelmedim."
            },
            {
                wrong: "Dün çalışmadım değil.",
                correct: "Dün çalışmadım."
            }
        ],

        keywords: ["النفي", "الماضي", "medim", "madım"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       23 - نفي المضارع المستمر
    ===================================================== */

    {
        id: 23,
        title: "استخدام değil لنفي الفعل المستمر",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Ben çalışıyorum değil.",
        correct: "Ben çalışmıyorum.",

        shortExplanation:
            "الأفعال تنفى بـ -me/-ma، وليس بـ değil في هذه الحالة.",

        explanation:
            "değil تستخدم أساسًا مع الجمل الاسمية والصفات وبعض التراكيب الأخرى، بينما الفعل في المضارع المستمر ينفى بإضافة -me/-ma قبل -yor: çalışmıyorum.",

        rule: "فعل + -ma/-me + -yor",

        examples: [
            {
                wrong: "Gitiyorum değil.",
                correct: "Gitmiyorum."
            },
            {
                wrong: "Yemek yiyorum değil.",
                correct: "Yemek yemiyorum."
            }
        ],

        keywords: ["değil", "mıyorum", "النفي", "yor"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       24 - سؤال نعم/لا
    ===================================================== */

    {
        id: 24,
        title: "كتابة أداة السؤال بشكل خاطئ",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Sen öğrenci misin?",
        correct: "Sen öğrenci misin?",

        shortExplanation:
            "أداة السؤال mı/mi/mu/mü تكتب منفصلة عن الكلمة السابقة.",

        explanation:
            "أداة السؤال في التركية لها أربع صور حسب انسجام حروف العلة، وتكتب منفصلة: mı, mi, mu, mü. لاحقة الشخص تأتي بعدها عند الحاجة: öğrenci misin?",

        rule: "mı/mi/mu/mü منفصلة",

        examples: [
            {
                wrong: "Nasılsınmı?",
                correct: "Nasılsın mı?"
            },
            {
                wrong: "Öğrencimisin?",
                correct: "Öğrenci misin?"
            }
        ],

        keywords: ["mı", "mi", "mu", "mü", "السؤال"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       25 - سؤال الفعل
    ===================================================== */

    {
        id: 25,
        title: "وضع لاحقة الشخص قبل أداة السؤال",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Geliyorsun mu?",
        correct: "Geliyor musun?",

        shortExplanation:
            "في السؤال تأتي أداة السؤال بعد صيغة الفعل وقبل لاحقة الشخص.",

        explanation:
            "في Geliyor musun؟ يأتي -yor مع جذر الفعل، ثم أداة السؤال mu، ثم لاحقة الشخص sun: geliyor + musun.",

        rule: "فعل + mı/mi/mu/mü + لاحقة الشخص",

        examples: [
            {
                wrong: "Gidiyorsun mu?",
                correct: "Gidiyor musun?"
            },
            {
                wrong: "Çalışıyorsun mu?",
                correct: "Çalışıyor musun?"
            }
        ],

        keywords: ["geliyor musun", "السؤال", "yor", "mu"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       26 - ne kadar
    ===================================================== */

    {
        id: 26,
        title: "الخلط بين ne kadar و kaç",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bu kitap ne kadar tane?",
        correct: "Bu kitap kaç lira?",

        shortExplanation:
            "kaç تستخدم للسؤال عن العدد، بينما ne kadar تستخدم كثيرًا للسؤال عن الكمية أو السعر.",

        explanation:
            "نستخدم kaç مع الأشياء المعدودة مثل kaç kitap؟ و kaç kişi؟ أما ne kadar فتستخدم للسؤال عن مقدار أو سعر مثل Bu kitap ne kadar؟ أي كم سعر هذا الكتاب؟",

        rule: "kaç = كم عدد، ne kadar = كم مقدار/سعر",

        examples: [
            {
                wrong: "Ne kadar kişi var?",
                correct: "Kaç kişi var?"
            },
            {
                wrong: "Kaç lira?",
                correct: "Kaç lira?"
            }
        ],

        keywords: ["kaç", "ne kadar", "كم", "العدد", "السعر"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       27 - bilmek / tanımak
    ===================================================== */

    {
        id: 27,
        title: "الخلط بين bilmek و tanımak",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Ben Ahmet'i biliyorum.",
        correct: "Ben Ahmet'i tanıyorum.",

        shortExplanation:
            "tanımak تستخدم لمعرفة شخص، و bilmek تستخدم للمعرفة والمعلومات في سياقات كثيرة.",

        explanation:
            "عند الحديث عن معرفة شخص أو التعرف عليه نستخدم tanımak: Ahmet'i tanıyorum. أما معرفة معلومة أو لغة أو شيء معروف فنستخدم bilmek في السياقات المناسبة.",

        rule: "tanımak = معرفة شخص، bilmek = معرفة معلومة/شيء",

        examples: [
            {
                wrong: "Türkçe tanıyorum.",
                correct: "Türkçe biliyorum."
            },
            {
                wrong: "Bu adamı biliyorum.",
                correct: "Bu adamı tanıyorum."
            }
        ],

        keywords: ["bilmek", "tanımak", "biliyorum", "tanıyorum"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       28 - sevmek
    ===================================================== */

    {
        id: 28,
        title: "استخدام صيغة غير طبيعية مع sevmek",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Ben kahveyi seviyorum.",
        correct: "Kahve seviyorum.",

        shortExplanation:
            "عند الحديث بشكل عام يمكن استخدام الاسم دون لاحقة المفعول المحدد.",

        explanation:
            "في التركية يمكن التعبير عن حب أو تفضيل شيء بشكل عام دون تحديده: Kahve seviyorum. أما Kahveyi seviyorum فهي ممكنة عندما يكون المقصود القهوة المحددة أو المعروفة في السياق. لذلك ليست Kahveyi seviyorum خطأ مطلقًا، وإنما يعتمد الاختيار على المعنى.",

        rule: "المفعول العام يختلف عن المفعول المحدد",

        examples: [
            {
                wrong: "Müziği seviyorum.",
                correct: "Müzik seviyorum."
            },
            {
                wrong: "Çayı seviyorum.",
                correct: "Çay seviyorum."
            }
        ],

        keywords: ["sevmek", "kahve", "المفعول", "العربية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       29 - istemek
    ===================================================== */

    {
        id: 29,
        title: "استخدام istemek بطريقة حرفية من العربية",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Ben kahve istiyorum içmek.",
        correct: "Kahve içmek istiyorum.",

        shortExplanation:
            "عند التعبير عن الرغبة في القيام بفعل نستخدم مصدر الفعل + istiyorum.",

        explanation:
            "إذا أردنا قول أريد أن أشرب القهوة، نستخدم مصدر الفعل içmek ثم istiyorum: Kahve içmek istiyorum. الفعل الذي نريده يأتي قبل istiyorum.",

        rule: "الفعل بالمصدر + istemek",

        examples: [
            {
                wrong: "Gitmek ben istiyorum.",
                correct: "Gitmek istiyorum."
            },
            {
                wrong: "Türkçe öğrenmek ben istiyorum.",
                correct: "Türkçe öğrenmek istiyorum."
            }
        ],

        keywords: ["istemek", "istiyorum", "أريد", "المصدر"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       30 - istemek + اسم
    ===================================================== */

    {
        id: 30,
        title: "نسيان لاحقة المفعول مع istemek عندما يكون الشيء محددًا",

        category: "cases",
        level: "مبتدئ",

        wrong: "Bu kitabı istiyorum.",
        correct: "Bu kitabı istiyorum.",

        shortExplanation:
            "عند طلب شيء محدد يمكن استخدام لاحقة المفعول به.",

        explanation:
            "الفعل istemek يمكن أن يأخذ مفعولًا به. عندما يكون الشيء محددًا نقول Bu kitabı istiyorum أي أريد هذا الكتاب.",

        rule: "شيء محدد + لاحقة المفعول + istemek",

        examples: [
            {
                wrong: "Bu kahveyi istiyorum.",
                correct: "Bu kahveyi istiyorum."
            },
            {
                wrong: "O arabayı istiyorum.",
                correct: "O arabayı istiyorum."
            }
        ],

        keywords: ["istemek", "istiyorum", "المفعول"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       31 - ترتيب الصفة
    ===================================================== */

    {
        id: 31,
        title: "وضع الصفة بعد الاسم",

        category: "sentence-order",
        level: "مبتدئ",

        wrong: "Araba kırmızı.",
        correct: "Kırmızı araba.",

        shortExplanation:
            "عندما تكون الصفة قبل الاسم في التركية تأتي الصفة أولًا.",

        explanation:
            "في تركيب مثل سيارة حمراء نقول kırmızı araba، أي الصفة ثم الاسم. أما Araba kırmızı فهي جملة صحيحة أيضًا إذا كان المعنى السيارة حمراء، لكنها ليست تركيب اسم + صفة.",

        rule: "صفة + اسم",

        examples: [
            {
                wrong: "Ev büyük.",
                correct: "Büyük ev."
            },
            {
                wrong: "Kitap güzel.",
                correct: "Güzel kitap."
            }
        ],

        keywords: ["الصفة", "ترتيب الجملة", "kırmızı araba"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       32 - ترتيب الملكية
    ===================================================== */

    {
        id: 32,
        title: "ترتيب الكلمات في تركيب ملكية شخص",

        category: "sentence-order",
        level: "مبتدئ",

        wrong: "Benim araba kırmızı.",
        correct: "Benim arabam kırmızı.",

        shortExplanation:
            "عند استخدام Benim مع اسم مملوك، يحتاج الاسم إلى لاحقة الملكية.",

        explanation:
            "Benim arabam تعني سيارتي. لذلك عند وصف السيارة نقول Benim arabam kırmızı أي سيارتي حمراء.",

        rule: "Benim + اسم مع لاحقة الملكية",

        examples: [
            {
                wrong: "Benim ev büyük.",
                correct: "Benim evim büyük."
            },
            {
                wrong: "Benim telefon yeni.",
                correct: "Benim telefonum yeni."
            }
        ],

        keywords: ["Benim", "الملكية", "arabam", "evim"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       33 - الفعل في نهاية الجملة
    ===================================================== */

    {
        id: 33,
        title: "وضع الفعل في نهاية الجملة التركية",

        category: "sentence-order",
        level: "مبتدئ",

        wrong: "Ben kahve içiyorum şimdi.",
        correct: "Ben şimdi kahve içiyorum.",

        shortExplanation:
            "التركية تميل إلى وضع الفعل في نهاية الجملة.",

        explanation:
            "الترتيب الأساسي الشائع في التركية هو الفاعل ثم بقية عناصر الجملة ثم الفعل. توجد مرونة حسب التركيز، لكن المتعلم المبتدئ من الأفضل أن يتعلم الترتيب الأساسي.",

        rule: "فاعل + مكونات الجملة + فعل",

        examples: [
            {
                wrong: "Ben kitabı okuyorum bugün.",
                correct: "Ben bugün kitabı okuyorum."
            },
            {
                wrong: "Ali okula gidiyor şimdi.",
                correct: "Ali şimdi okula gidiyor."
            }
        ],

        keywords: ["ترتيب الجملة", "الفعل", "نهاية الجملة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       34 - العربية والتركية في ترتيب السؤال
    ===================================================== */

    {
        id: 34,
        title: "ترجمة ترتيب السؤال العربي حرفيًا",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Sen nerede yaşıyorsun?",
        correct: "Sen nerede yaşıyorsun?",

        shortExplanation:
            "ترتيب السؤال في التركية يختلف عن بعض أنماط ترتيب السؤال في العربية.",

        explanation:
            "في السؤال عن المكان نقول Sen nerede yaşıyorsun؟ أي أين تعيش؟ وتأتي أداة الاستفهام في موقع العنصر الذي نسأل عنه، بينما يبقى الفعل غالبًا في نهاية الجملة.",

        rule: "أداة الاستفهام + باقي عناصر الجملة + الفعل",

        examples: [
            {
                wrong: "Sen nerede gidiyorsun?",
                correct: "Sen nereye gidiyorsun?"
            },
            {
                wrong: "Sen nereden geliyorsun?",
                correct: "Sen nereden geliyorsun?"
            }
        ],

        keywords: ["nerede", "nereye", "nereden", "السؤال"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       35 - nerede
    ===================================================== */

    {
        id: 35,
        title: "الخلط بين nerede و nereye",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Nerede gidiyorsun?",
        correct: "Nereye gidiyorsun?",

        shortExplanation:
            "nerede للسؤال عن المكان الموجود فيه الشخص، و nereye للسؤال عن الاتجاه.",

        explanation:
            "نستخدم nerede بمعنى أين في حالة المكان، مثل Nerede yaşıyorsun؟ ونستخدم nereye عندما نسأل إلى أين، مثل Nereye gidiyorsun؟",

        rule: "nerede = أين، nereye = إلى أين",

        examples: [
            {
                wrong: "Nerede gidiyorsun?",
                correct: "Nereye gidiyorsun?"
            },
            {
                wrong: "Nereye yaşıyorsun?",
                correct: "Nerede yaşıyorsun?"
            }
        ],

        keywords: ["nerede", "nereye", "أين", "إلى أين"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       36 - nereden
    ===================================================== */

    {
        id: 36,
        title: "الخلط بين nereye و nereden",

        category: "cases",
        level: "مبتدئ",

        wrong: "Nereye geliyorsun?",
        correct: "Nereden geliyorsun?",

        shortExplanation:
            "nereden تعني من أين، وتستخدم مع مصدر الحركة.",

        explanation:
            "إذا أردنا السؤال عن المكان الذي يأتي منه الشخص نقول Nereden geliyorsun؟ أي من أين أتيت أو من أين تأتي؟ أما Nereye gidiyorsun؟ فتعني إلى أين تذهب؟",

        rule: "nereden = من أين، nereye = إلى أين",

        examples: [
            {
                wrong: "Nereye geliyorsun?",
                correct: "Nereden geliyorsun?"
            },
            {
                wrong: "Nereden gidiyorsun?",
                correct: "Nereye gidiyorsun?"
            }
        ],

        keywords: ["nereden", "nereye", "gelmek", "gitmek"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       37 - bu / şu / o
    ===================================================== */

    {
        id: 37,
        title: "الخلط بين bu و şu و o",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bu araba هناك.",
        correct: "O araba.",

        shortExplanation:
            "bu و şu و o تستخدم للإشارة إلى أشياء بمسافات أو سياقات مختلفة.",

        explanation:
            "bu تشير غالبًا إلى شيء قريب من المتكلم، şu تستخدم للإشارة إلى شيء يمكن تحديده أو الإشارة إليه، و o تشير غالبًا إلى شيء أبعد. الاستخدام يعتمد على السياق.",

        rule: "bu = هذا القريب، şu = ذلك المشار إليه، o = ذاك/ذلك البعيد",

        examples: [
            {
                wrong: "O kitap في يدي.",
                correct: "Bu kitap."
            },
            {
                wrong: "Bu adam هناك بعيد.",
                correct: "O adam."
            }
        ],

        keywords: ["bu", "şu", "o", "هذا", "ذلك"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       38 - benim / bana
    ===================================================== */

    {
        id: 38,
        title: "الخلط بين benim و bana",

        category: "cases",
        level: "مبتدئ",

        wrong: "Benim yardım et.",
        correct: "Bana yardım et.",

        shortExplanation:
            "benim تعني لي/خاصتي، بينما bana تعني إليّ أو لي كجهة مفعول غير مباشر.",

        explanation:
            "عند قول ساعدني نستخدم bana مع فعل yardım etmek: Bana yardım et. أما benim فتستخدم في الملكية مثل Benim kitabım أي كتابي.",

        rule: "benim = ملكيتي، bana = إليّ/لي",

        examples: [
            {
                wrong: "Benim yardım et.",
                correct: "Bana yardım et."
            },
            {
                wrong: "Benim gel.",
                correct: "Bana gel."
            }
        ],

        keywords: ["benim", "bana", "الضمائر", "yardım"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       39 - benim / beni
    ===================================================== */

    {
        id: 39,
        title: "الخلط بين benim و beni",

        category: "cases",
        level: "مبتدئ",

        wrong: "Benim görüyorum.",
        correct: "Beni görüyorum.",

        shortExplanation:
            "beni تعني إياي/ني كمفعول به، بينما benim تعني ملكيتي.",

        explanation:
            "مع فعل görmek نستخدم المفعول به: Beni görüyorum. أما benim فتظهر في تراكيب الملكية مثل benim kitabım.",

        rule: "beni = المفعول به، benim = الملكية",

        examples: [
            {
                wrong: "Benim seviyor.",
                correct: "Beni seviyor."
            },
            {
                wrong: "Benim çağırdı.",
                correct: "Beni çağırdı."
            }
        ],

        keywords: ["beni", "benim", "ضمائر", "المفعول"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       40 - bana / beni
    ===================================================== */

    {
        id: 40,
        title: "الخلط بين bana و beni",

        category: "cases",
        level: "مبتدئ",

        wrong: "Beni yardım et.",
        correct: "Bana yardım et.",

        shortExplanation:
            "الفعل yardım etmek يأخذ جهة الشخص باستخدام bana في هذا التركيب.",

        explanation:
            "نقول Bana yardım et أي ساعدني. أما beni فتستخدم عندما يكون الشخص مفعولًا به مباشرًا مثل Beni gördü أي رآني.",

        rule: "bana = إليّ، beni = إياي كمفعول مباشر",

        examples: [
            {
                wrong: "Beni yardım eder misin?",
                correct: "Bana yardım eder misin?"
            },
            {
                wrong: "Bana gördü.",
                correct: "Beni gördü."
            }
        ],

        keywords: ["bana", "beni", "yardım etmek", "görmek"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       41 - sana / seni
    ===================================================== */

    {
        id: 41,
        title: "الخلط بين sana و seni",

        category: "cases",
        level: "مبتدئ",

        wrong: "Seni bir şey söyleyeceğim.",
        correct: "Sana bir şey söyleyeceğim.",

        shortExplanation:
            "sana تعني لك، بينما seni تعني إياك كمفعول به مباشر.",

        explanation:
            "مع söylemek عندما نقول سأقول لك شيئًا نستخدم Sana bir şey söyleyeceğim. أما seni فتستخدم مع الأفعال التي تأخذ الشخص كمفعول مباشر مثل Seni seviyorum.",

        rule: "sana = لك، seni = إياك",

        examples: [
            {
                wrong: "Seni söyleyeceğim.",
                correct: "Sana söyleyeceğim."
            },
            {
                wrong: "Sana seviyorum.",
                correct: "Seni seviyorum."
            }
        ],

        keywords: ["sana", "seni", "söylemek", "sevmek"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       42 - ona / onu
    ===================================================== */

    {
        id: 42,
        title: "الخلط بين ona و onu",

        category: "cases",
        level: "مبتدئ",

        wrong: "Onu bir şey söyledim.",
        correct: "Ona bir şey söyledim.",

        shortExplanation:
            "ona تعني له/لها، بينما onu تعني إياه/إياها كمفعول مباشر.",

        explanation:
            "مع söylemek نقول Ona bir şey söyledim أي قلت له/لها شيئًا. أما onu فنستخدمها مع المفعول المباشر مثل Onu gördüm أي رأيته/رأيتها.",

        rule: "ona = له/لها، onu = إياه/إياها",

        examples: [
            {
                wrong: "Onu yardım ettim.",
                correct: "Ona yardım ettim."
            },
            {
                wrong: "Ona gördüm.",
                correct: "Onu gördüm."
            }
        ],

        keywords: ["ona", "onu", "ضمائر", "söylemek"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       43 - ile
    ===================================================== */

    {
        id: 43,
        title: "الخلط بين ile و için",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Senin için geldim.",
        correct: "Senin için geldim.",

        shortExplanation:
            "için تعني من أجل/لأجل، بينما ile تعني مع أو بواسطة في كثير من السياقات.",

        explanation:
            "Senin için geldim تعني جئت من أجلك. أما Seninle geldim فتعني جئت معك. لذلك لا ينبغي الخلط بين için و ile.",

        rule: "için = من أجل، ile = مع/بواسطة",

        examples: [
            {
                wrong: "Senin için geldim بمعنى معك.",
                correct: "Seninle geldim."
            },
            {
                wrong: "Seninle yaptım بمعنى من أجلك.",
                correct: "Senin için yaptım."
            }
        ],

        keywords: ["ile", "için", "seninle", "senin için"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       44 - için
    ===================================================== */

    {
        id: 44,
        title: "استخدام için بدون لاحقة الملكية",

        category: "suffixes",
        level: "مبتدئ",

        wrong: "Ben için yaptım.",
        correct: "Benim için yaptım.",

        shortExplanation:
            "مع için نستخدم صيغة الملكية المناسبة للضمير عندما يكون المعنى من أجلي.",

        explanation:
            "نقول Benim için أي من أجلي، Senin için أي من أجلك، Onun için أي من أجله أو أجلها.",

        rule: "benim için / senin için / onun için",

        examples: [
            {
                wrong: "Sen için geldim.",
                correct: "Senin için geldim."
            },
            {
                wrong: "O için aldım.",
                correct: "Onun için aldım."
            }
        ],

        keywords: ["için", "benim", "senin", "onun"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       45 - ile مع الضمائر
    ===================================================== */

    {
        id: 45,
        title: "الخلط بين benimle و benim ile",

        category: "suffixes",
        level: "متوسط",

        wrong: "Benimle ile geldin.",
        correct: "Benimle geldin.",

        shortExplanation:
            "ile يمكن أن تندمج مع الضمير وتصبح benimle، seninle، onunla.",

        explanation:
            "عند استخدام ile بمعنى مع، يمكن كتابتها منفصلة أو في صورة ملحقة بحسب التركيب. مع الضمائر الشائعة نستخدم benimle، seninle، onunla. لا نجمع بين benimle و ile في نفس التركيب.",

        rule: "benimle = benim ile، seninle = senin ile",

        examples: [
            {
                wrong: "Seninle ile konuşuyorum.",
                correct: "Seninle konuşuyorum."
            },
            {
                wrong: "Onunla ile geldim.",
                correct: "Onunla geldim."
            }
        ],

        keywords: ["ile", "benimle", "seninle", "onunla"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       46 - çünkü
    ===================================================== */

    {
        id: 46,
        title: "استخدام çünkü بطريقة غير صحيحة",

        category: "sentence-order",
        level: "مبتدئ",

        wrong: "Çünkü hastayım, gitmiyorum çünkü.",
        correct: "Gitmiyorum çünkü hastayım.",

        shortExplanation:
            "çünkü تعني لأن، وتستخدم لذكر السبب.",

        explanation:
            "التركيب الطبيعي الشائع هو الجملة الأساسية ثم çünkü ثم السبب: Gitmiyorum çünkü hastayım. يمكن أيضًا تقديم السبب حسب السياق، لكن لا حاجة لتكرار çünkü.",

        rule: "الجملة + çünkü + السبب",

        examples: [
            {
                wrong: "Gelmedim çünkü çünkü hastaydım.",
                correct: "Gelmedim çünkü hastaydım."
            },
            {
                wrong: "Çalışmıyorum çünkü yorgunum.",
                correct: "Çalışmıyorum çünkü yorgunum."
            }
        ],

        keywords: ["çünkü", "لأن", "السبب"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       47 - ama
    ===================================================== */

    {
        id: 47,
        title: "الخلط بين ama و fakat",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Gitmek istiyorum ama fakat vaktim yok.",
        correct: "Gitmek istiyorum ama vaktim yok.",

        shortExplanation:
            "ama و fakat كلاهما يستخدم للمخالفة، لكن لا حاجة عادةً للجمع بينهما.",

        explanation:
            "ama و fakat و ancak يمكن أن تؤدي وظائف متقاربة في بعض السياقات. استخدام ama و fakat معًا في نفس الموضع يسبب تكرارًا غير ضروري.",

        rule: "اختر أداة ربط مناسبة بدل جمع الأدوات المتشابهة",

        examples: [
            {
                wrong: "Ama fakat gelmedi.",
                correct: "Ama gelmedi."
            },
            {
                wrong: "Gitmek istiyorum fakat vaktim yok.",
                correct: "Gitmek istiyorum fakat vaktim yok."
            }
        ],

        keywords: ["ama", "fakat", "لكن", "أدوات الربط"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       48 - çok
    ===================================================== */

    {
        id: 48,
        title: "وضع çok في مكان غير طبيعي",

        category: "sentence-order",
        level: "مبتدئ",

        wrong: "Ben seviyorum çok Türk kahvesi.",
        correct: "Türk kahvesini çok seviyorum.",

        shortExplanation:
            "çok تأتي عادة قبل الفعل عندما تعدل درجة الفعل، أو قبل الصفة عند وصف شدتها.",

        explanation:
            "عندما نقول أحب القهوة التركية كثيرًا نستخدم Türk kahvesini çok seviyorum. ويمكن استخدام çok قبل الصفات مثل çok güzel أي جميل جدًا.",

        rule: "المفعول + çok + الفعل، و çok + صفة",

        examples: [
            {
                wrong: "Çok seviyorum seni yerine Seni çok seviyorum.",
                correct: "Seni çok seviyorum."
            },
            {
                wrong: "Güzel çok.",
                correct: "Çok güzel."
            }
        ],

        keywords: ["çok", "كثيرًا", "الترتيب"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       49 - çok güzel
    ===================================================== */

    {
        id: 49,
        title: "الخلط بين çok و çok fazla",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bu yemek çok fazla güzel.",
        correct: "Bu yemek çok güzel.",

        shortExplanation:
            "مع الصفة الجميلة نستخدم عادةً çok güzel، بينما çok fazla تستخدم لمعنى كمية أو درجة زائدة في سياقات أخرى.",

        explanation:
            "çok güzel تعني جميل جدًا. أما çok fazla فهي تعني كثيرًا جدًا أو كمية كبيرة جدًا، وتستخدم حسب السياق مثل çok fazla yemek yemek.",

        rule: "çok + صفة",

        examples: [
            {
                wrong: "Çok fazla güzel.",
                correct: "Çok güzel."
            },
            {
                wrong: "Çok fazla çalışıyorum.",
                correct: "Çok fazla çalışıyorum."
            }
        ],

        keywords: ["çok", "çok fazla", "صفة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       50 - güzel / iyi
    ===================================================== */

    {
        id: 50,
        title: "الخلط بين güzel و iyi",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bugün güzelim.",
        correct: "Bugün iyiyim.",

        shortExplanation:
            "iyi تستخدم كثيرًا لوصف الحالة الجيدة، بينما güzel تستخدم للجمال أو الجودة حسب السياق.",

        explanation:
            "عندما يسأل شخص Nasılsın؟ أي كيف حالك؟ يكون الرد الطبيعي İyiyim. أما güzel فتستخدم كثيرًا لوصف شيء جميل مثل güzel bir ev.",

        rule: "İyiyim = أنا بخير، güzel = جميل/جيد حسب السياق",

        examples: [
            {
                wrong: "Nasılsın? Güzelim.",
                correct: "Nasılsın? İyiyim."
            },
            {
                wrong: "İyi bir kadın.",
                correct: "Güzel bir kadın."
            }
        ],

        keywords: ["iyi", "güzel", "İyiyim", "Nasılsın"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       51 - var / sahip olmak
    ===================================================== */

    {
        id: 51,
        title: "استخدام sahip olmak بدل تركيب الملكية البسيط",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Ben bir arabaya sahibim.",
        correct: "Benim bir arabam var.",

        shortExplanation:
            "للتعبير عن امتلاك شيء في الاستخدام اليومي نستخدم غالبًا Benim ... var.",

        explanation:
            "الصيغة Benim bir arabam var هي الطريقة الشائعة والطبيعية جدًا للتعبير عن لدي سيارة. sahip olmak موجود أيضًا في التركية لكنه أكثر رسمية أو يستخدم في سياقات معينة.",

        rule: "Benim + اسم مملوك + var",

        examples: [
            {
                wrong: "Ben bir ev sahibiyim.",
                correct: "Benim bir evim var."
            },
            {
                wrong: "Ben bir kardeşe sahibim.",
                correct: "Benim bir kardeşim var."
            }
        ],

        keywords: ["var", "sahip olmak", "الملكية"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       52 - yaşamak
    ===================================================== */

    {
        id: 52,
        title: "استخدام لاحقة الاتجاه مع yaşamak",

        category: "cases",
        level: "مبتدئ",

        wrong: "İstanbul'a yaşıyorum.",
        correct: "İstanbul'da yaşıyorum.",

        shortExplanation:
            "مع yaşamak نستخدم لاحقة المكان عند التعبير عن المكان الذي نعيش فيه.",

        explanation:
            "الفعل yaşamak يعني العيش، وعند ذكر مكان الإقامة نقول İstanbul'da yaşıyorum أي أعيش في إسطنبول.",

        rule: "مكان + -da/-de + yaşamak",

        examples: [
            {
                wrong: "Ankara'ya yaşıyorum.",
                correct: "Ankara'da yaşıyorum."
            },
            {
                wrong: "Türkiye'ye yaşıyorum.",
                correct: "Türkiye'de yaşıyorum."
            }
        ],

        keywords: ["yaşamak", "İstanbul'da", "المكان"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       53 - çalışmak
    ===================================================== */

    {
        id: 53,
        title: "الخلط بين العمل في مكان والعمل إلى مكان",

        category: "cases",
        level: "مبتدئ",

        wrong: "Bir şirkete çalışıyorum.",
        correct: "Bir şirkette çalışıyorum.",

        shortExplanation:
            "عند التعبير عن المكان الذي تعمل فيه نستخدم -de/-da.",

        explanation:
            "Bir şirkette çalışıyorum تعني أعمل في شركة. أما şirkete فتدل على الاتجاه إلى الشركة، وليس مكان العمل نفسه.",

        rule: "مكان العمل + -de/-da + çalışmak",

        examples: [
            {
                wrong: "Bir hastaneye çalışıyorum.",
                correct: "Bir hastanede çalışıyorum."
            },
            {
                wrong: "Okula çalışıyorum.",
                correct: "Okulda çalışıyorum."
            }
        ],

        keywords: ["çalışmak", "şirkette", "مكان العمل"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       54 - okumak
    ===================================================== */

    {
        id: 54,
        title: "الخلط بين okumak و öğrenmek",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Türkçe okuyorum.",
        correct: "Türkçe öğreniyorum.",

        shortExplanation:
            "öğrenmek تعني تعلم، بينما okumak تعني القراءة أو الدراسة في بعض السياقات.",

        explanation:
            "إذا أردنا قول أنا أتعلم التركية نقول Türkçe öğreniyorum. أما Türkçe okuyorum فقد تفهم في سياقات معينة مثل دراسة اللغة أو قراءة نص باللغة التركية، لكنها ليست التعبير الأساسي عن تعلم اللغة.",

        rule: "öğrenmek = يتعلم، okumak = يقرأ/يدرس",

        examples: [
            {
                wrong: "İngilizce okuyorum بمعنى أتعلم الإنجليزية.",
                correct: "İngilizce öğreniyorum."
            },
            {
                wrong: "Kitap öğreniyorum.",
                correct: "Kitap okuyorum."
            }
        ],

        keywords: ["öğrenmek", "okumak", "تعلم", "قراءة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       55 - öğretmek / öğrenmek
    ===================================================== */

    {
        id: 55,
        title: "الخلط بين öğrenmek و öğretmek",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Ben Türkçe öğretiyorum.",
        correct: "Ben Türkçe öğreniyorum.",

        shortExplanation:
            "öğrenmek = يتعلم، öğretmek = يعلّم شخصًا آخر.",

        explanation:
            "إذا كنت تتعلم اللغة التركية تقول Türkçe öğreniyorum. أما إذا كنت تقوم بتعليم شخص آخر التركية فتقول Türkçe öğretiyorum.",

        rule: "öğrenmek = يتعلم، öğretmek = يعلّم",

        examples: [
            {
                wrong: "Ben Türkçe öğretiyorum بمعنى أنا أتعلم التركية.",
                correct: "Ben Türkçe öğreniyorum."
            },
            {
                wrong: "Öğrenciler Türkçe öğreniyor.",
                correct: "Öğrenciler Türkçe öğreniyor."
            }
        ],

        keywords: ["öğrenmek", "öğretmek", "öğreniyorum", "öğretiyorum"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       56 - almak / vermek
    ===================================================== */

    {
        id: 56,
        title: "الخلط بين almak و vermek",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bana kitabı verdim.",
        correct: "Bana kitabı verdim.",

        shortExplanation:
            "almak يعني يأخذ/يشتري، و vermek يعني يعطي.",

        explanation:
            "الفرق بين الفعلين مهم جدًا: kitap aldım تعني اشتريت أو أخذت الكتاب، بينما kitabı verdim تعني أعطيت الكتاب. المعنى يعتمد على اتجاه الفعل.",

        rule: "almak = يأخذ/يشتري، vermek = يعطي",

        examples: [
            {
                wrong: "Marketten ekmek verdim.",
                correct: "Marketten ekmek aldım."
            },
            {
                wrong: "Arkadaşıma kitap aldım.",
                correct: "Arkadaşıma kitap verdim."
            }
        ],

        keywords: ["almak", "vermek", "aldım", "verdim"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       57 - götürmek / getirmek
    ===================================================== */

    {
        id: 57,
        title: "الخلط بين götürmek و getirmek",

        category: "similar-words",
        level: "متوسط",

        wrong: "Bana kitabı götür.",
        correct: "Bana kitabı getir.",

        shortExplanation:
            "getirmek يعني إحضار الشيء إلى هنا أو إلى جهة المتكلم، بينما götürmek يعني أخذه إلى هناك.",

        explanation:
            "الفرق يعتمد على اتجاه الحركة. Bana kitabı getir تعني أحضر الكتاب لي. أما kitabı götür فهي تعني خذ الكتاب إلى مكان آخر.",

        rule: "getirmek = إحضار إلى هنا، götürmek = أخذ إلى هناك",

        examples: [
            {
                wrong: "Buraya kitabı götür.",
                correct: "Buraya kitabı getir."
            },
            {
                wrong: "Oraya kitabı getir.",
                correct: "Oraya kitabı götür."
            }
        ],

        keywords: ["getirmek", "götürmek", "إحضار", "أخذ"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       58 - gelmek / gitmek
    ===================================================== */

    {
        id: 58,
        title: "الخلط بين gelmek و gitmek",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Ben İstanbul'a geliyorum عندما المتكلم بعيد عن إسطنبول ويقصد الذهاب إليها.",
        correct: "Ben İstanbul'a gidiyorum.",

        shortExplanation:
            "gitmek يعني الذهاب، و gelmek يعني القدوم نحو المكان المرجعي.",

        explanation:
            "اختيار gelmek أو gitmek يعتمد على نقطة المرجع. إذا كنت تتجه بعيدًا عن مكان المتكلم أو المكان المرجعي نستخدم gitmek، وإذا كنت قادمًا نحو المكان المرجعي نستخدم gelmek.",

        rule: "gitmek = الذهاب، gelmek = القدوم",

        examples: [
            {
                wrong: "Yarın sana gidiyorum.",
                correct: "Yarın sana geliyorum."
            },
            {
                wrong: "Okula geliyorum عندما المتكلم ليس في المدرسة ولا يتحدث من منظورها.",
                correct: "Okula gidiyorum."
            }
        ],

        keywords: ["gelmek", "gitmek", "gidiyorum", "geliyorum"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       59 - bilmek
    ===================================================== */

    {
        id: 59,
        title: "استخدام bilmek مع كل أنواع المعرفة",

        category: "similar-words",
        level: "متوسط",

        wrong: "İstanbul'u biliyorum.",
        correct: "İstanbul'u biliyorum.",

        shortExplanation:
            "bilmek و tanımak يختلفان حسب معنى المعرفة والسياق، وليس كل استعمال له إجابة واحدة.",

        explanation:
            "من الأخطاء الشائعة حفظ قاعدة bilmek = الأشياء و tanımak = الأشخاص بشكل جامد. tanımak يستخدم كثيرًا للأشخاص والأماكن بمعنى معرفة الشيء أو الإلمام به، و bilmek يستخدم للمعلومات والحقائق والمهارات وغيرها. لذلك يجب فهم المعنى والسياق.",

        rule: "لا تحفظ bilmek/tanımak كقاعدة جامدة؛ افهم السياق",

        examples: [
            {
                wrong: "Türkçe tanıyorum.",
                correct: "Türkçe biliyorum."
            },
            {
                wrong: "Ahmet'i biliyorum.",
                correct: "Ahmet'i tanıyorum."
            }
        ],

        keywords: ["bilmek", "tanımak", "المعرفة", "السياق"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       60 - hatırlamak / hatırlatmak
    ===================================================== */

    {
        id: 60,
        title: "الخلط بين hatırlamak و hatırlatmak",

        category: "similar-words",
        level: "متوسط",

        wrong: "Bana bunu hatırladın.",
        correct: "Bana bunu hatırlattın.",

        shortExplanation:
            "hatırlamak يعني يتذكر، بينما hatırlatmak يعني يذكّر شخصًا آخر.",

        explanation:
            "إذا تذكرت شيئًا بنفسك تقول hatırladım. وإذا جعلت شخصًا آخر يتذكر شيئًا أو ذكّرته به تقول hatırlattım.",

        rule: "hatırlamak = يتذكر، hatırlatmak = يذكّر",

        examples: [
            {
                wrong: "Bunu bana hatırladın.",
                correct: "Bunu bana hatırlattın."
            },
            {
                wrong: "Onu hatırlattım.",
                correct: "Onu hatırladım."
            }
        ],

        keywords: ["hatırlamak", "hatırlatmak", "تذكر", "تذكير"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       61 - unutmak
    ===================================================== */

    {
        id: 61,
        title: "استخدام unutmak بطريقة غير صحيحة",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Bunu unutuyorum.",
        correct: "Bunu unuttum.",

        shortExplanation:
            "إذا كنت تقصد لقد نسيت شيئًا بالفعل، فالماضي هو الأنسب.",

        explanation:
            "Bunu unuttum تعني نسيت هذا. أما Bunu unutuyorum فتعني أنني أنساه أو أنا بصدد نسيانه، وهي ممكنة في سياقات مختلفة لكنها لا تعطي نفس معنى حدث النسيان المكتمل.",

        rule: "unuttum = نسيت، unutuyorum = أنسى/أنا أنسى الآن",

        examples: [
            {
                wrong: "Adını unutuyorum بمعنى لقد نسيت اسمك.",
                correct: "Adını unuttum."
            },
            {
                wrong: "Bunu her zaman unutuyorum.",
                correct: "Bunu her zaman unutuyorum."
            }
        ],

        keywords: ["unutmak", "unuttum", "unutuyorum", "النسيان"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       62 - konuşmak
    ===================================================== */

    {
        id: 62,
        title: "استخدام حرف الجر العربي مع konuşmak",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Türkçe ile konuşuyorum.",
        correct: "Türkçe konuşuyorum.",

        shortExplanation:
            "مع أسماء اللغات يمكن استخدام Türkçe konuşuyorum دون حاجة إلى ile.",

        explanation:
            "عندما نقول أتحدث التركية، الصيغة الطبيعية هي Türkçe konuşuyorum. ويمكن استخدام ile في تراكيب أخرى بمعنى مع أو بواسطة، لكن لا نحتاجها هنا.",

        rule: "لغة + konuşmak",

        examples: [
            {
                wrong: "İngilizce ile konuşuyorum.",
                correct: "İngilizce konuşuyorum."
            },
            {
                wrong: "Türkçe ile konuşabilir misin?",
                correct: "Türkçe konuşabilir misin?"
            }
        ],

        keywords: ["konuşmak", "Türkçe", "ile", "التحدث"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       63 - Türkçe biliyorum
    ===================================================== */

    {
        id: 63,
        title: "الخلط بين Türkçe biliyorum و Türkçe konuşuyorum",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Türkçe konuşuyorum بمعنى أعرف اللغة التركية.",
        correct: "Türkçe biliyorum.",

        shortExplanation:
            "biliyorum تعني أعرف اللغة، و konuşuyorum تعني أتحدث بها.",

        explanation:
            "Türkçe biliyorum تعني أعرف التركية أو لدي معرفة بها، بينما Türkçe konuşuyorum تعني أتحدث التركية. الشخص قد يعرف اللغة لكنه لا يتحدث بها في تلك اللحظة.",

        rule: "biliyorum = أعرف، konuşuyorum = أتحدث",

        examples: [
            {
                wrong: "Biraz Türkçe konuşuyorum بمعنى أعرف التركية قليلًا.",
                correct: "Biraz Türkçe biliyorum."
            },
            {
                wrong: "Türkçe konuşuyorum.",
                correct: "Türkçe konuşuyorum."
            }
        ],

        keywords: ["Türkçe", "biliyorum", "konuşuyorum"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       64 - anlamak / bilmek
    ===================================================== */

    {
        id: 64,
        title: "الخلط بين anlamak و bilmek",

        category: "similar-words",
        level: "مبتدئ",

        wrong: "Seni bilmiyorum.",
        correct: "Seni anlamıyorum.",

        shortExplanation:
            "anlamak يعني يفهم، بينما bilmek يعني يعرف.",

        explanation:
            "إذا كنت لا تفهم ما يقوله شخص ما نقول Seni anlamıyorum أي لا أفهمك. أما Seni bilmiyorum فتعني حرفيًا لا أعرفك أو لا أعرف بشأنك، وهي مختلفة في المعنى.",

        rule: "anlamak = يفهم، bilmek = يعرف",

        examples: [
            {
                wrong: "Ne dediğini bilmiyorum بمعنى لا أفهم ما تقول.",
                correct: "Ne dediğini anlamıyorum."
            },
            {
                wrong: "Bu kelimeyi anlamıyorum.",
                correct: "Bu kelimeyi anlamıyorum."
            }
        ],

        keywords: ["anlamak", "bilmek", "anlamıyorum", "لا أفهم"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       65 - söylemek / demek
    ===================================================== */

    {
        id: 65,
        title: "الخلط بين söylemek و demek",

        category: "similar-words",
        level: "متوسط",

        wrong: "Bana bunu dedim.",
        correct: "Bana bunu söyledim.",

        shortExplanation:
            "söylemek يستخدم كثيرًا بمعنى يقول لشخص أو يخبره، بينما demek له استخدامات مختلفة مثل معنى كلمة أو قول عبارة.",

        explanation:
            "عند قول قلت له شيئًا نستخدم Bana bunu söyledim. أما demek فيستخدم مثل Bu ne demek؟ أي ماذا يعني هذا؟ لذلك لا يمكن استبدال الفعلين في كل السياقات.",

        rule: "söylemek = يقول/يخبر، demek = يعني/يقول في تراكيب معينة",

        examples: [
            {
                wrong: "Bu kelime ne söylüyor?",
                correct: "Bu kelime ne demek?"
            },
            {
                wrong: "O bana bunu dedi.",
                correct: "O bana bunu söyledi."
            }
        ],

        keywords: ["söylemek", "demek", "ماذا يعني", "قال"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       66 - demek
    ===================================================== */

    {
        id: 66,
        title: "الخطأ في السؤال عن معنى كلمة",

        category: "arabic-translation",
        level: "مبتدئ",

        wrong: "Bu kelime ne söylüyor?",
        correct: "Bu kelime ne demek?",

        shortExplanation:
            "للسؤال عن معنى كلمة نستخدم ne demek.",

        explanation:
            "Bu kelime ne demek؟ تعني ماذا تعني هذه الكلمة؟ وهي من أكثر التراكيب شيوعًا عند تعلم التركية.",

        rule: "X ne demek? = ماذا يعني X؟",

        examples: [
            {
                wrong: "Merhaba ne söylüyor?",
                correct: "Merhaba ne demek?"
            },
            {
                wrong: "Bu cümle ne söylüyor?",
                correct: "Bu cümle ne demek?"
            }
        ],

        keywords: ["ne demek", "المعنى", "الكلمات"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       67 - lazım
    ===================================================== */

    {
        id: 67,
        title: "الخلط بين lazım و gerekiyor",

        category: "similar-words",
        level: "متوسط",

        wrong: "Gitmem lazım gerekiyor.",
        correct: "Gitmem lazım.",

        shortExplanation:
            "lazım و gerekiyor يمكن أن يعطيا معنى الحاجة، لكن لا نجمعهما هكذا.",

        explanation:
            "نقول Gitmem lazım أو Gitmem gerekiyor بمعنى يجب علي الذهاب/أحتاج إلى الذهاب. الجمع بين lazım و gerekiyor في نفس التركيب غير صحيح.",

        rule: "Gitmem lazım / Gitmem gerekiyor",

        examples: [
            {
                wrong: "Çalışmam lazım gerekiyor.",
                correct: "Çalışmam lazım."
            },
            {
                wrong: "Gitmem gerekiyor.",
                correct: "Gitmem gerekiyor."
            }
        ],

        keywords: ["lazım", "gerekiyor", "يجب", "الحاجة"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       68 - zorunda olmak
    ===================================================== */

    {
        id: 68,
        title: "الخلط بين zorunda و lazım",

        category: "similar-words",
        level: "متوسط",

        wrong: "Gitmek zorunda lazım.",
        correct: "Gitmek zorundayım.",

        shortExplanation:
            "zorunda olmak يحتاج إلى لاحقة الشخص المناسبة.",

        explanation:
            "Gitmek zorundayım تعني أنا مضطر إلى الذهاب. أما lazım فتستخدم في تركيب مختلف مثل Gitmem lazım. يجب عدم دمج الصيغتين.",

        rule: "فعل + zorunda + لاحقة الشخص",

        examples: [
            {
                wrong: "Çalışmak zorunda.",
                correct: "Çalışmak zorundayım."
            },
            {
                wrong: "Gitmem lazım zorundayım.",
                correct: "Gitmek zorundayım."
            }
        ],

        keywords: ["zorunda", "zorundayım", "lazım", "يجب"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       69 - ممكن / -ebilir
    ===================================================== */

    {
        id: 69,
        title: "استخدام olabilir بدل -ebilir في القدرة",

        category: "tenses",
        level: "مبتدئ",

        wrong: "Türkçe konuşmak olabilir.",
        correct: "Türkçe konuşabilirim.",

        shortExplanation:
            "للتعبير عن القدرة على فعل شيء نستخدم لاحقة -ebil/-abil.",

        explanation:
            "Türkçe konuşabilirim تعني أستطيع التحدث بالتركية. لاحقة القدرة تأتي قبل لاحقة الزمن والشخص حسب التصريف.",

        rule: "جذر الفعل + -(y)ebil/abil + التصريف",

        examples: [
            {
                wrong: "Yüzmek olabilirim.",
                correct: "Yüzebilirim."
            },
            {
                wrong: "Gidebilirim.",
                correct: "Gidebilirim."
            }
        ],

        keywords: ["-ebil", "-abil", "القدرة", "أستطيع"],

        published: true,
        createdAt: "2026-08-24"
    },


    /* =====================================================
       70 - عدم إضافة olmak مع -ebil
    ===================================================== */

    {
        id: 70,
        title: "إضافة olmak بعد صيغة القدرة",

        category: "suffixes",
        level: "متوسط",

        wrong: "Gidebilirim olmak.",
        correct: "Gidebilirim.",

        shortExplanation:
            "صيغة القدرة نفسها تعبر عن إمكانية أو قدرة الفعل ولا تحتاج إلى olmak هنا.",

        explanation:
            "Gidebilirim تعني أستطيع الذهاب أو يمكنني الذهاب. لا نضيف olmak في نهاية هذا التركيب.",

        rule: "فعل + -(y)ebil/abil + الشخص",

        examples: [
            {
                wrong: "Yapabilirim olmak.",
                correct: "Yapabilirim."
            },
            {
                wrong: "Gelebilirsin olmak.",
                correct: "Gelebilirsin."
            }
        ],

        keywords: ["gidebilirim", "yapabilirim", "القدرة"],

        published: true,
        createdAt: "2026-08-24"
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
