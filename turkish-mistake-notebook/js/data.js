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
    },
        /* -----------------------------------------------------
       الخطأ 71
    ----------------------------------------------------- */
    {
        id: 71,
        title: "استخدام حرف الجر مع وقت الساعة بشكل خاطئ",
        category: "prepositions",
        level: "مبتدئ",
        wrong: "Saat üçte buluşalım.",
        correct: "Saat üçte buluşalım.",
        shortExplanation: "انتبه إلى أن -te هنا صحيحة لأنها تدل على وقت حدوث الفعل.",
        explanation: "لاحقة -de / -da / -te / -ta تستخدم أيضًا مع أوقات معينة للدلالة على وقت حدوث الفعل. لذلك Saat üçte buluşalım تعني لنلتقِ الساعة الثالثة.",
        rule: "الوقت + -de / -da / -te / -ta",
        examples: [
            {
                wrong: "Saat beşte başlayacak.",
                correct: "Saat beşte başlayacak."
            },
            {
                wrong: "Saat onda geliyorum.",
                correct: "Saat onda geliyorum."
            }
        ],
        keywords: ["الوقت", "saat", "te", "ta", "de", "da"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 72
    ----------------------------------------------------- */
    {
        id: 72,
        title: "الخلط بين ile و için",
        category: "prepositions",
        level: "مبتدئ",
        wrong: "Senin için geldim.",
        correct: "Senin için geldim.",
        shortExplanation: "الجملة صحيحة، لكن يجب التمييز بين معنى ile ومعنى için.",
        explanation: "için تعني من أجل أو بسبب، بينما ile تعني مع أو بواسطة. لذلك Senin için geldim تعني جئت من أجلك، بينما Seninle geldim تعني جئت معك.",
        rule: "için = من أجل / ile = مع أو بواسطة",
        examples: [
            {
                wrong: "Seninle aldım.",
                correct: "Senin için aldım."
            },
            {
                wrong: "Arkadaşımla geldim.",
                correct: "Arkadaşımla geldim."
            }
        ],
        keywords: ["ile", "için", "مع", "من أجل"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 73
    ----------------------------------------------------- */
    {
        id: 73,
        title: "الخلط بين de و da كأداة إضافة",
        category: "prepositions",
        level: "مبتدئ",
        wrong: "Ben de öğrenciyim.",
        correct: "Ben de öğrenciyim.",
        shortExplanation: "الأداة de / da بمعنى أيضًا تكتب منفصلة.",
        explanation: "عندما تأتي de أو da بمعنى أيضًا فإنها تكتب منفصلة عن الكلمة السابقة. أما لاحقة المكان -de / -da فتكتب متصلة بالكلمة.",
        rule: "de / da بمعنى أيضًا = منفصلة",
        examples: [
            {
                wrong: "Bende öğrenciyim.",
                correct: "Ben de öğrenciyim."
            },
            {
                wrong: "Ali de geliyor.",
                correct: "Ali de geliyor."
            }
        ],
        keywords: ["de", "da", "أيضًا", "لاحقة المكان"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 74
    ----------------------------------------------------- */
    {
        id: 74,
        title: "الخلط بين ki المتصلة و ki المنفصلة",
        category: "prepositions",
        level: "متوسط",
        wrong: "Benimki de güzel.",
        correct: "Benimki de güzel.",
        shortExplanation: "بعض استخدامات ki تكون لاحقة متصلة، وبعضها أداة تكتب منفصلة.",
        explanation: "في التركية توجد ki في تراكيب مختلفة. اللاحقة -ki تستخدم لتكوين كلمات مثل benimki و evdeki، بينما bağlaç olan ki تكتب منفصلة في تراكيب مثل biliyorum ki.",
        rule: "-ki اللاحقة متصلة، و ki كأداة ربط منفصلة",
        examples: [
            {
                wrong: "Evde ki insanlar.",
                correct: "Evdeki insanlar."
            },
            {
                wrong: "Biliyorumki gelecek.",
                correct: "Biliyorum ki gelecek."
            }
        ],
        keywords: ["ki", "evdeki", "benimki", "biliyorum ki"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 75
    ----------------------------------------------------- */
    {
        id: 75,
        title: "استخدام çok مع الصفات بطريقة خاطئة",
        category: "prepositions",
        level: "مبتدئ",
        wrong: "Çok daha güzel.",
        correct: "Çok daha güzel.",
        shortExplanation: "الجملة صحيحة، لكن يجب فهم الفرق بين çok و daha.",
        explanation: "çok تعني جدًا أو كثيرًا، بينما daha تعني أكثر أو ما زال. يمكن استخدامهما معًا عندما نقول إن شيئًا أكثر جمالًا بكثير: Çok daha güzel.",
        rule: "çok = جدًا / daha = أكثر",
        examples: [
            {
                wrong: "Bu daha güzel.",
                correct: "Bu daha güzel."
            },
            {
                wrong: "Bu çok güzel.",
                correct: "Bu çok güzel."
            }
        ],
        keywords: ["çok", "daha", "أكثر", "جداً"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 76
    ----------------------------------------------------- */
    {
        id: 76,
        title: "استخدام mı بشكل متصل",
        category: "question",
        level: "مبتدئ",
        wrong: "Sen öğrencimisin?",
        correct: "Sen öğrenci misin?",
        shortExplanation: "أداة السؤال mı / mi / mu / mü تكتب منفصلة.",
        explanation: "أداة السؤال في التركية تكتب منفصلة عن الكلمة السابقة، لكنها تتبع قواعد انسجام الحركات: mı، mi، mu، mü.",
        rule: "اسم + مسافة + mı / mi / mu / mü",
        examples: [
            {
                wrong: "Türk müsün?",
                correct: "Türk müsün?"
            },
            {
                wrong: "Evdemisin?",
                correct: "Evde misin?"
            }
        ],
        keywords: ["mı", "mi", "mu", "mü", "السؤال"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 77
    ----------------------------------------------------- */
    {
        id: 77,
        title: "الخلط بين misin و mısın",
        category: "question",
        level: "مبتدئ",
        wrong: "Sen öğrenci mısın?",
        correct: "Sen öğrenci misin?",
        shortExplanation: "شكل أداة السؤال يتغير حسب انسجام الحركات.",
        explanation: "بعد كلمة تحتوي على الحرف الصوتي e أو i نستخدم mi، وبعد a أو ı نستخدم mı، وبعد o أو u نستخدم mu، وبعد ö أو ü نستخدم mü.",
        rule: "i / ı / u / ü حسب انسجام الحركات",
        examples: [
            {
                wrong: "Sen yorgun mısın?",
                correct: "Sen yorgun musun?"
            },
            {
                wrong: "Sen Türk müsün?",
                correct: "Sen Türk müsün?"
            }
        ],
        keywords: ["misin", "mısın", "musun", "müsün"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 78
    ----------------------------------------------------- */
    {
        id: 78,
        title: "استخدام أداة السؤال مع الفعل بطريقة خاطئة",
        category: "question",
        level: "متوسط",
        wrong: "Sen Türkçe konuşuyor musun?",
        correct: "Sen Türkçe konuşuyor musun?",
        shortExplanation: "أداة السؤال تأتي بعد الجزء الذي نريد السؤال عنه، ثم تأخذ لاحقة الشخص.",
        explanation: "في السؤال بالمضارع المستمر نستخدم الفعل بصيغته المناسبة ثم أداة السؤال ثم لاحقة الشخص: konuşuyor musun؟.",
        rule: "الفعل + mı/mi/mu/mü + لاحقة الشخص",
        examples: [
            {
                wrong: "Geliyorsun mu?",
                correct: "Geliyor musun?"
            },
            {
                wrong: "Çalışıyorsun mu?",
                correct: "Çalışıyor musun?"
            }
        ],
        keywords: ["السؤال", "المضارع", "musun", "misin"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 79
    ----------------------------------------------------- */
    {
        id: 79,
        title: "نسيان لاحقة الشخص في السؤال",
        category: "question",
        level: "مبتدئ",
        wrong: "Sen öğrenci mi?",
        correct: "Sen öğrenci misin?",
        shortExplanation: "عند سؤال المخاطب نحتاج إلى لاحقة الشخص المناسبة.",
        explanation: "عند تكوين سؤال مثل هل أنت طالب؟ نقول Öğrenci misin؟ وليس Öğrenci mi؟ لأن -sin هي لاحقة الشخص الثاني المفرد.",
        rule: "mi + sin = misin",
        examples: [
            {
                wrong: "Sen yorgun mu?",
                correct: "Sen yorgun musun?"
            },
            {
                wrong: "Sen doktor mü?",
                correct: "Sen doktor musun?"
            }
        ],
        keywords: ["sin", "misin", "musun", "السؤال"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 80
    ----------------------------------------------------- */
    {
        id: 80,
        title: "استخدام سؤال ne بدل hangi",
        category: "question",
        level: "مبتدئ",
        wrong: "Ne kitabı okuyorsun?",
        correct: "Hangi kitabı okuyorsun?",
        shortExplanation: "hangi تستخدم عندما نختار شيئًا معينًا من مجموعة.",
        explanation: "ne تعني ماذا، بينما hangi تعني أيّ. عندما يكون لدينا مجموعة محددة من الكتب ونسأل أي كتاب تقرأ؟ نستخدم hangi.",
        rule: "ne = ماذا / hangi = أي",
        examples: [
            {
                wrong: "Ne renk seviyorsun?",
                correct: "Hangi rengi seviyorsun?"
            },
            {
                wrong: "Hangi yapıyorsun?",
                correct: "Ne yapıyorsun?"
            }
        ],
        keywords: ["ne", "hangi", "أي", "ماذا"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 81
    ----------------------------------------------------- */
    {
        id: 81,
        title: "الخلط بين neden و niçin",
        category: "question",
        level: "متوسط",
        wrong: "Neden için geldin?",
        correct: "Neden geldin?",
        shortExplanation: "neden و niçin و niye كلها تستخدم للسؤال عن السبب في سياقات مختلفة.",
        explanation: "لا نضع için بعد neden عندما نريد السؤال مباشرة عن السبب. Neden geldin؟ تعني لماذا جئت؟ ويمكن أيضًا قول Niçin geldin؟ أو Niye geldin؟.",
        rule: "neden / niçin / niye = لماذا",
        examples: [
            {
                wrong: "Neden için üzgünsün?",
                correct: "Neden üzgünsün?"
            },
            {
                wrong: "Niye için ağlıyorsun?",
                correct: "Niye ağlıyorsun?"
            }
        ],
        keywords: ["neden", "niçin", "niye", "لماذا"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 82
    ----------------------------------------------------- */
    {
        id: 82,
        title: "استخدام soru kelimesi بشكل زائد",
        category: "question",
        level: "متوسط",
        wrong: "Nereye gidiyorsun oraya?",
        correct: "Nereye gidiyorsun?",
        shortExplanation: "لا نحتاج إلى تكرار معنى السؤال في الجملة.",
        explanation: "كلمة nereye تحتوي بالفعل على معنى إلى أين، لذلك لا نحتاج إلى إضافة كلمة أخرى تؤدي المعنى نفسه في نهاية السؤال.",
        rule: "استخدم أداة السؤال المناسبة دون تكرار معناها",
        examples: [
            {
                wrong: "Nerede yaşıyorsun orada?",
                correct: "Nerede yaşıyorsun?"
            },
            {
                wrong: "Ne yapıyorsun bunu?",
                correct: "Ne yapıyorsun?"
            }
        ],
        keywords: ["nereye", "nerede", "ne", "السؤال"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 83
    ----------------------------------------------------- */
    {
        id: 83,
        title: "استخدام ليس في التركية بطريقة عربية",
        category: "negation",
        level: "مبتدئ",
        wrong: "Ben öğrenci değil.",
        correct: "Ben öğrenci değilim.",
        shortExplanation: "değil تحتاج إلى لاحقة الشخص عند استخدامها مع الجملة الاسمية.",
        explanation: "في التركية لا نقول فقط değil مع المتكلم. يجب أن تتوافق لاحقة الشخص مع الفاعل: değilim، değilsin، değil، değiliz، değilsiniz، değiller.",
        rule: "değil + لاحقة الشخص",
        examples: [
            {
                wrong: "Sen hasta değil.",
                correct: "Sen hasta değilsin."
            },
            {
                wrong: "Biz hazır değil.",
                correct: "Biz hazır değiliz."
            }
        ],
        keywords: ["değil", "النفي", "ليس"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 84
    ----------------------------------------------------- */
    {
        id: 84,
        title: "نفي الأفعال في المضارع المستمر بطريقة خاطئة",
        category: "negation",
        level: "مبتدئ",
        wrong: "Ben geliyorum değil.",
        correct: "Ben gelmiyorum.",
        shortExplanation: "نفي الفعل يتم باستخدام -ma / -me قبل لاحقة الزمن.",
        explanation: "مع الأفعال نستخدم لاحقة النفي -ma أو -me، ثم تأتي لاحقة الزمن والشخص. لذلك geliyorum تصبح gelmiyorum.",
        rule: "جذر الفعل + ma/me + الزمن + الشخص",
        examples: [
            {
                wrong: "Gitiyorum değil.",
                correct: "Gitmiyorum."
            },
            {
                wrong: "Çalışıyorum değil.",
                correct: "Çalışmıyorum."
            }
        ],
        keywords: ["النفي", "miyorum", "mıyorum", "ma", "me"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 85
    ----------------------------------------------------- */
    {
        id: 85,
        title: "الخلط بين yok و değil",
        category: "negation",
        level: "مبتدئ",
        wrong: "Evde kitap değil.",
        correct: "Evde kitap yok.",
        shortExplanation: "yok تستخدم لنفي وجود شيء، بينما değil تستخدم لنفي الصفات أو الجمل الاسمية.",
        explanation: "عندما نريد القول لا يوجد كتاب في المنزل نستخدم yok. أما عندما نقول الكتاب ليس جديدًا فنستخدم değil.",
        rule: "yok = لا يوجد / değil = ليس",
        examples: [
            {
                wrong: "Evde araba değil.",
                correct: "Evde araba yok."
            },
            {
                wrong: "Bu kitap yok.",
                correct: "Bu kitap değil."
            }
        ],
        keywords: ["yok", "değil", "لا يوجد", "ليس"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 86
    ----------------------------------------------------- */
    {
        id: 86,
        title: "الخلط بين hiç و hiçbir",
        category: "negation",
        level: "متوسط",
        wrong: "Hiçbir zaman gitmedim.",
        correct: "Hiçbir zaman gitmedim.",
        shortExplanation: "hiç و hiçbir لهما استخدامات مختلفة حسب الكلمة التي تأتي بعدهما.",
        explanation: "hiç تستخدم غالبًا مع الأفعال أو للتأكيد في الأسئلة والنفي، بينما hiçbir تأتي قبل الاسم وتعني لا أيّ / ولا واحد من.",
        rule: "hiç + فعل / hiçbir + اسم",
        examples: [
            {
                wrong: "Hiçbir anlamıyorum.",
                correct: "Hiç anlamıyorum."
            },
            {
                wrong: "Hiç kitap okumadım.",
                correct: "Hiç kitap okumadım."
            }
        ],
        keywords: ["hiç", "hiçbir", "النفي"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 87
    ----------------------------------------------------- */
    {
        id: 87,
        title: "استخدام -me و -ma مع انسجام الحركات بشكل خاطئ",
        category: "suffixes",
        level: "متوسط",
        wrong: "Ben gelmaiyorum.",
        correct: "Ben gelmiyorum.",
        shortExplanation: "لاحقة النفي تتغير حسب انسجام الحركات.",
        explanation: "لاحقة النفي تكون -ma أو -me حسب الحرف الصوتي في جذر الفعل. ومع المضارع المستمر تتغير الصيغة وفق القواعد الصوتية، لذلك gelmek تصبح gelmiyorum.",
        rule: "-ma / -me وفق انسجام الحركات",
        examples: [
            {
                wrong: "Bakmeıyorum.",
                correct: "Bakmıyorum."
            },
            {
                wrong: "Sevmaiyorum.",
                correct: "Sevmiyorum."
            }
        ],
        keywords: ["النفي", "انسجام الحركات", "ma", "me"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 88
    ----------------------------------------------------- */
    {
        id: 88,
        title: "استخدام الماضي البسيط بدل الماضي المنقول",
        category: "tenses",
        level: "متوسط",
        wrong: "Ahmet gelmiş, ben gördüm.",
        correct: "Ahmet gelmiş, ben duydum.",
        shortExplanation: "لاحقة -miş تستخدم عندما تكون المعلومة منقولة أو اكتشفها المتحدث.",
        explanation: "الماضي بـ -di يستخدم عادة لما حدث وكان المتحدث شاهدًا عليه أو يتحدث عنه كحقيقة مباشرة. أما -miş فيستخدم كثيرًا للمعلومات المنقولة أو المفاجئة أو المستنتجة.",
        rule: "-di = ماضٍ مباشر / -miş = منقول أو مستنتج",
        examples: [
            {
                wrong: "Ali gelmiş, onu kendim gördüm.",
                correct: "Ali geldi, onu kendim gördüm."
            },
            {
                wrong: "Ali gelmiş, Mehmet söyledi.",
                correct: "Ali gelmiş, Mehmet söyledi."
            }
        ],
        keywords: ["miş", "di", "الماضي", "منقول"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 89
    ----------------------------------------------------- */
    {
        id: 89,
        title: "الخلط بين -iyor و -ecek في المستقبل",
        category: "tenses",
        level: "مبتدئ",
        wrong: "Yarın İstanbul'a gidiyorum.",
        correct: "Yarın İstanbul'a gideceğim.",
        shortExplanation: "عند الحديث عن المستقبل نستخدم غالبًا -ecek / -acak.",
        explanation: "gidiyorum تعني أذهب أو أنا ذاهب الآن/في سياق مستمر، بينما gideceğim تعني سأذهب. مع كلمة yarın يكون المستقبل أوضح.",
        rule: "المستقبل = -ecek / -acak",
        examples: [
            {
                wrong: "Yarın çalışıyorum.",
                correct: "Yarın çalışacağım."
            },
            {
                wrong: "Gelecek hafta gidiyorum.",
                correct: "Gelecek hafta gideceğim."
            }
        ],
        keywords: ["المستقبل", "iyor", "ecek", "acak"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 90
    ----------------------------------------------------- */
    {
        id: 90,
        title: "نسيان لاحقة الشخص في المستقبل",
        category: "tenses",
        level: "متوسط",
        wrong: "Ben yarın geleceğim.",
        correct: "Ben yarın geleceğim.",
        shortExplanation: "لاحقة المستقبل تتبعها لاحقة الشخص عند الحاجة.",
        explanation: "صيغة المستقبل لا تتوقف عند -ecek أو -acak. يجب إضافة لاحقة الشخص: geleceğim، geleceksin، gelecek، geleceğiz، geleceksiniz.",
        rule: "-ecek/-acak + لاحقة الشخص",
        examples: [
            {
                wrong: "Ben yarın gelecek.",
                correct: "Ben yarın geleceğim."
            },
            {
                wrong: "Sen yarın geleceğim.",
                correct: "Sen yarın geleceksin."
            }
        ],
        keywords: ["المستقبل", "geleceğim", "geleceksin"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 91
    ----------------------------------------------------- */
    {
        id: 91,
        title: "الخلط بين -di و -miş في الحديث عن التجربة",
        category: "tenses",
        level: "متقدم",
        wrong: "Türkiye'ye hiç gitmiş değilim.",
        correct: "Türkiye'ye hiç gitmedim.",
        shortExplanation: "عند نفي تجربة حدثت أو لم تحدث نستخدم غالبًا صيغة الماضي المناسبة مع hiç.",
        explanation: "للتعبير عن أنك لم تذهب إلى تركيا من قبل يمكن قول Türkiye'ye hiç gitmedim. أما تراكيب -miş و -miş değilim فلها استخدامات مختلفة ولا ينبغي استعمالها كترجمة مباشرة لكل صيغة عربية.",
        rule: "لا تترجم صيغ الماضي حرفيًا من العربية",
        examples: [
            {
                wrong: "Hiç İstanbul'a gittim.",
                correct: "Hiç İstanbul'a gitmedim."
            },
            {
                wrong: "Hiç bu filmi izledim.",
                correct: "Hiç bu filmi izlemedim."
            }
        ],
        keywords: ["miş", "di", "hiç", "التجربة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 92
    ----------------------------------------------------- */
    {
        id: 92,
        title: "الخلط بين gelmek و gitmek في المحادثة",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Ben senin yanına gidiyorum. Sen de benim yanıma geliyorsun.",
        correct: "Ben senin yanına geliyorum. Sen de benim yanıma geliyorsun.",
        shortExplanation: "gelmek و gitmek يختلفان حسب اتجاه الحركة بالنسبة إلى نقطة الحديث.",
        explanation: "gelmek يعني القدوم باتجاه المتحدث أو المكان الذي ينظر إليه باعتباره نقطة وصول، بينما gitmek يعني الذهاب بعيدًا عن نقطة المرجع.",
        rule: "gelmek = يأتي / gitmek = يذهب",
        examples: [
            {
                wrong: "Ben eve gidiyorum, sen de eve gidiyorsun.",
                correct: "Ben eve gidiyorum, sen de eve geliyorsun."
            },
            {
                wrong: "Ben senin yanına gidiyorum.",
                correct: "Ben senin yanına geliyorum."
            }
        ],
        keywords: ["gelmek", "gitmek", "المحادثة", "يأتي", "يذهب"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 93
    ----------------------------------------------------- */
    {
        id: 93,
        title: "استخدام teşekkürler بشكل غير مناسب",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Teşekkürler sana.",
        correct: "Teşekkür ederim.",
        shortExplanation: "Teşekkür ederim هي الصيغة الشائعة والطبيعية للتعبير عن الشكر.",
        explanation: "يمكن استخدام teşekkürler في سياقات معينة، لكن عندما تريد أن تقول شكرًا لك بطريقة طبيعية وشائعة استخدم Teşekkür ederim.",
        rule: "Teşekkür ederim = شكرًا لك",
        examples: [
            {
                wrong: "Sana teşekkür.",
                correct: "Sana teşekkür ederim."
            },
            {
                wrong: "Teşekkür ederim.",
                correct: "Teşekkür ederim."
            }
        ],
        keywords: ["teşekkür", "شكرًا", "المحادثة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 94
    ----------------------------------------------------- */
    {
        id: 94,
        title: "الرد على الشكر باستخدام صيغة غير طبيعية",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Teşekkür ederim. - Bir şey değil.",
        correct: "Teşekkür ederim. - Rica ederim.",
        shortExplanation: "Rica ederim من أكثر الردود شيوعًا على teşekkür ederim.",
        explanation: "عندما يقول شخص Teşekkür ederim يمكنك الرد بـ Rica ederim بمعنى العفو أو على الرحب والسعة. Bir şey değil ممكنة أيضًا في بعض السياقات، لكن من المفيد للمتعلم معرفة الصيغة الشائعة.",
        rule: "Teşekkür ederim → Rica ederim",
        examples: [
            {
                wrong: "Sağ ol. - Teşekkür ederim.",
                correct: "Sağ ol. - Rica ederim."
            }
        ],
        keywords: ["rica ederim", "teşekkür ederim", "العفو"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 95
    ----------------------------------------------------- */
    {
        id: 95,
        title: "الخلط بين nasılsın و nasıl",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Sen nasıl?",
        correct: "Sen nasılsın?",
        shortExplanation: "عند سؤال شخص عن حاله نستخدم nasılsın.",
        explanation: "nasıl تعني كيف، وعند سؤال شخص مباشرًا عن حاله نقول Nasılsın؟ أي كيف حالك؟ وتضاف لاحقة الشخص الثانية -sın.",
        rule: "nasıl + sın = nasılsın",
        examples: [
            {
                wrong: "Sen nasıl bugün?",
                correct: "Bugün nasılsın?"
            },
            {
                wrong: "Nasılsın?",
                correct: "Nasılsın?"
            }
        ],
        keywords: ["nasılsın", "nasıl", "كيف حالك"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 96
    ----------------------------------------------------- */
    {
        id: 96,
        title: "الخلط بين geçmiş olsun و iyi olsun",
        category: "conversation",
        level: "متوسط",
        wrong: "Hasta oldun. İyi olsun.",
        correct: "Geçmiş olsun.",
        shortExplanation: "Geçmiş olsun تعبير شائع عند المرض أو حدوث شيء سيئ.",
        explanation: "عندما يكون شخص مريضًا أو تعرض لموقف مؤلم نقول Geçmiş olsun. وهي عبارة ثابتة لا تترجم كلمة بكلمة إلى العربية.",
        rule: "Geçmiş olsun = سلامتك / أتمنى أن تمر بسلام",
        examples: [
            {
                wrong: "Ameliyat oldun. İyi olsun.",
                correct: "Ameliyat oldun. Geçmiş olsun."
            }
        ],
        keywords: ["geçmiş olsun", "المرض", "المحادثة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 97
    ----------------------------------------------------- */
    {
        id: 97,
        title: "الخلط بين görüşürüz و hoşça kal",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Ben gidiyorum. Görüşürüz.",
        correct: "Ben gidiyorum. Hoşça kal.",
        shortExplanation: "العبارة المناسبة عند الوداع تختلف حسب من سيغادر ومن سيبقى.",
        explanation: "Hoşça kal تقال عادة للشخص الذي سيبقى عندما يكون المتحدث هو المغادر، بينما Güle güle تقال عادة للمغادر من قبل الشخص الذي سيبقى. Görüşürüz تعني نراك لاحقًا ويمكن استخدامها بين الطرفين.",
        rule: "Hoşça kal / Güle güle / Görüşürüz",
        examples: [
            {
                wrong: "أنا سأبقى وأنت ذاهب: Hoşça kal.",
                correct: "أنا سأبقى وأنت ذاهب: Güle güle."
            }
        ],
        keywords: ["hoşça kal", "güle güle", "görüşürüz"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 98
    ----------------------------------------------------- */
    {
        id: 98,
        title: "ترجمة صباح الخير حرفيًا",
        category: "arabic-translation",
        level: "مبتدئ",
        wrong: "Sabah iyi.",
        correct: "Günaydın.",
        shortExplanation: "التحية الطبيعية لصباح الخير هي Günaydın.",
        explanation: "لا تترجم التحيات العربية حرفيًا. في التركية Günaydın هي التحية الشائعة في الصباح.",
        rule: "صباح الخير = Günaydın",
        examples: [
            {
                wrong: "Akşam iyi.",
                correct: "İyi akşamlar."
            },
            {
                wrong: "Gece iyi.",
                correct: "İyi geceler."
            }
        ],
        keywords: ["Günaydın", "صباح الخير", "التحيات"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 99
    ----------------------------------------------------- */
    {
        id: 99,
        title: "ترجمة عندي جوع حرفيًا",
        category: "arabic-translation",
        level: "مبتدئ",
        wrong: "Benim açlık var.",
        correct: "Açım.",
        shortExplanation: "التعبير التركي الطبيعي عن الجوع هو Açım.",
        explanation: "العربية تستخدم تركيب عندي جوع، بينما التركية تستخدم الصفة aç مع لاحقة الشخص: Açım تعني أنا جائع.",
        rule: "Açım = أنا جائع",
        examples: [
            {
                wrong: "Benim susuzluk var.",
                correct: "Susadım."
            },
            {
                wrong: "Benim uykum var.",
                correct: "Uykum var."
            }
        ],
        keywords: ["açım", "الجوع", "ترجمة حرفية"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 100
    ----------------------------------------------------- */
    {
        id: 100,
        title: "الخلط بين acıkmak و aç olmak",
        category: "similar-words",
        level: "متوسط",
        wrong: "Şimdi çok açıyorum.",
        correct: "Şimdi çok acıktım.",
        shortExplanation: "acıktım تعني أصبحت جائعًا، بينما açım تعني أنا جائع.",
        explanation: "الفعل acıkmak يعني أن يصبح الشخص جائعًا، ولذلك نقول Acıktım عندما نشعر بالجوع. أما Açım فهي صفة بمعنى أنا جائع.",
        rule: "Acıktım = جعت / Açım = أنا جائع",
        examples: [
            {
                wrong: "Çok açıyorum.",
                correct: "Çok acıktım."
            },
            {
                wrong: "Şimdi açım.",
                correct: "Şimdi açım."
            }
        ],
        keywords: ["acıkmak", "acıktım", "açım", "الجوع"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 101
    ----------------------------------------------------- */
    {
        id: 101,
        title: "الخلط بين bilmek و öğrenmek",
        category: "similar-words",
        level: "مبتدئ",
        wrong: "Türkçe öğreniyorum ve çok biliyorum.",
        correct: "Türkçe öğreniyorum ve çok şey biliyorum.",
        shortExplanation: "öğrenmek يعني يتعلم، بينما bilmek يعني يعرف.",
        explanation: "عندما تقول إنك تتعلم التركية تستخدم Türkçe öğreniyorum. أما عندما تريد القول إنك تعرف معلومات أو شيئًا معينًا فتستخدم bilmek.",
        rule: "öğrenmek = يتعلم / bilmek = يعرف",
        examples: [
            {
                wrong: "Türkçe biliyorum.",
                correct: "Türkçe biliyorum."
            },
            {
                wrong: "Türkçe bilmek istiyorum.",
                correct: "Türkçe öğrenmek istiyorum."
            }
        ],
        keywords: ["bilmek", "öğrenmek", "التعلم"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 102
    ----------------------------------------------------- */
    {
        id: 102,
        title: "الخلط بين bakmak و görmek",
        category: "similar-words",
        level: "متوسط",
        wrong: "Seni bakıyorum.",
        correct: "Sana bakıyorum.",
        shortExplanation: "bakmak يأخذ غالبًا لاحقة الاتجاه -e / -a، بينما görmek يأخذ المفعول به.",
        explanation: "bakmak يعني ينظر إلى، ولذلك نقول Sana bakıyorum. أما görmek فهو يرى شخصًا أو شيئًا، ويمكن أن يأخذ المفعول به المحدد مثل Seni görüyorum.",
        rule: "bakmak + -e/-a / görmek + مفعول به",
        examples: [
            {
                wrong: "Seni bakıyorum.",
                correct: "Sana bakıyorum."
            },
            {
                wrong: "Sana görüyorum.",
                correct: "Seni görüyorum."
            }
        ],
        keywords: ["bakmak", "görmek", "sana", "seni"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 103
    ----------------------------------------------------- */
    {
        id: 103,
        title: "الخلط بين dinlemek و duymak",
        category: "similar-words",
        level: "متوسط",
        wrong: "Seni duyuyorum müzik.",
        correct: "Müzik dinliyorum.",
        shortExplanation: "dinlemek يعني الاستماع عمدًا، بينما duymak يعني السماع أو إدراك الصوت.",
        explanation: "عندما تستمع إلى الموسيقى نقول Müzik dinliyorum. أما duymak فيستخدم عندما تسمع صوتًا أو تدركه دون أن يكون التركيز على فعل الاستماع المقصود.",
        rule: "dinlemek = يستمع / duymak = يسمع",
        examples: [
            {
                wrong: "Müzik duyuyorum.",
                correct: "Müzik dinliyorum."
            },
            {
                wrong: "Seni dinliyorum.",
                correct: "Seni dinliyorum."
            }
        ],
        keywords: ["dinlemek", "duymak", "الموسيقى", "الاستماع"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 104
    ----------------------------------------------------- */
    {
        id: 104,
        title: "الخلط بين konuşmak و söylemek",
        category: "similar-words",
        level: "متوسط",
        wrong: "Bana Türkçe konuştu.",
        correct: "Bana Türkçe konuştu.",
        shortExplanation: "konuşmak يعني التحدث، بينما söylemek يعني قول شيء.",
        explanation: "konuşmak يستخدم للحديث أو التحدث بلغة، بينما söylemek يستخدم عندما نقول شيئًا أو ننقل كلامًا. لذلك Bana söyledi تعني قال لي، بينما Benimle konuştu تعني تحدث معي.",
        rule: "konuşmak = يتحدث / söylemek = يقول",
        examples: [
            {
                wrong: "Bana konuştu.",
                correct: "Benimle konuştu."
            },
            {
                wrong: "Benimle bunu söyledi.",
                correct: "Bana bunu söyledi."
            }
        ],
        keywords: ["konuşmak", "söylemek", "الحديث", "القول"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 105
    ----------------------------------------------------- */
    {
        id: 105,
        title: "الخلط بين vermek و almak",
        category: "similar-words",
        level: "مبتدئ",
        wrong: "Senden bir kitap verdim.",
        correct: "Senden bir kitap aldım.",
        shortExplanation: "vermek يعني يعطي، بينما almak يعني يأخذ أو يحصل على.",
        explanation: "من السهل الخلط بين الفعلين. Senden bir kitap aldım تعني أخذت أو حصلت على كتاب منك، بينما Sana bir kitap verdim تعني أعطيتك كتابًا.",
        rule: "vermek = يعطي / almak = يأخذ",
        examples: [
            {
                wrong: "Sana bir hediye aldım.",
                correct: "Sana bir hediye verdim."
            },
            {
                wrong: "Senden para verdim.",
                correct: "Senden para aldım."
            }
        ],
        keywords: ["vermek", "almak", "يعطي", "يأخذ"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 106
    ----------------------------------------------------- */
    {
        id: 106,
        title: "الخلط بين ev و evde و eve",
        category: "cases",
        level: "مبتدئ",
        wrong: "Ben ev gidiyorum.",
        correct: "Ben eve gidiyorum.",
        shortExplanation: "لاحقة الاتجاه ضرورية عندما يكون المعنى إلى المنزل.",
        explanation: "ev تعني منزل، evde تعني في المنزل، و eve تعني إلى المنزل. مع gitmek نستخدم eve عندما نقصد الذهاب إلى المنزل.",
        rule: "ev = منزل / evde = في المنزل / eve = إلى المنزل",
        examples: [
            {
                wrong: "Ev gidiyorum.",
                correct: "Eve gidiyorum."
            },
            {
                wrong: "Evde gidiyorum.",
                correct: "Eve gidiyorum."
            }
        ],
        keywords: ["ev", "evde", "eve", "gitmek"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 107
    ----------------------------------------------------- */
    {
        id: 107,
        title: "الخلط بين -den و -e مع بعض الأفعال",
        category: "cases",
        level: "متوسط",
        wrong: "Senden korkuyorum.",
        correct: "Senden korkuyorum.",
        shortExplanation: "الفعل korkmak يأخذ لاحقة -den / -dan عند تحديد الشيء الذي نخاف منه.",
        explanation: "بعض الأفعال التركية تتطلب حالة إعرابية معينة. korkmak من الأفعال التي تأتي غالبًا مع ablative: Senden korkuyorum أي أخاف منك.",
        rule: "korkmak + -den/-dan",
        examples: [
            {
                wrong: "Sana korkuyorum.",
                correct: "Senden korkuyorum."
            },
            {
                wrong: "Köpekten korkuyorum.",
                correct: "Köpekten korkuyorum."
            }
        ],
        keywords: ["korkmak", "dan", "den", "من", "الخوف"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 108
    ----------------------------------------------------- */
    {
        id: 108,
        title: "الخلط بين yardım etmek و yardım yapmak",
        category: "conversation",
        level: "متوسط",
        wrong: "Bana yardım yapar mısın?",
        correct: "Bana yardım eder misin?",
        shortExplanation: "التعبير الشائع هو yardım etmek.",
        explanation: "في التركية توجد تراكيب ثابتة تتكون من اسم + فعل مساعد. التعبير الصحيح والشائع هو yardım etmek، لذلك نقول Bana yardım eder misin؟.",
        rule: "yardım etmek = يساعد",
        examples: [
            {
                wrong: "Bana yardım yap.",
                correct: "Bana yardım et."
            },
            {
                wrong: "Bana yardım yapabilir misin?",
                correct: "Bana yardım edebilir misin?"
            }
        ],
        keywords: ["yardım etmek", "yardım eder misin", "المساعدة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 109
    ----------------------------------------------------- */
    {
        id: 109,
        title: "الخلط بين karar vermek و karar yapmak",
        category: "conversation",
        level: "متوسط",
        wrong: "Bir karar yaptım.",
        correct: "Bir karar verdim.",
        shortExplanation: "التعبير الثابت هو karar vermek.",
        explanation: "عند التعبير عن اتخاذ قرار نستخدم karar vermek، وليس karar yapmak. لذلك Bir karar verdim تعني اتخذت قرارًا.",
        rule: "karar vermek = يتخذ قرارًا",
        examples: [
            {
                wrong: "Karar yaptım.",
                correct: "Karar verdim."
            },
            {
                wrong: "Bir karar yapmalıyız.",
                correct: "Bir karar vermeliyiz."
            }
        ],
        keywords: ["karar", "vermek", "قرار"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 110
    ----------------------------------------------------- */
    {
        id: 110,
        title: "الخلط بين ders çalışmak و ders yapmak",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Bugün ders yapıyorum.",
        correct: "Bugün ders çalışıyorum.",
        shortExplanation: "التعبير الشائع للدراسة هو ders çalışmak.",
        explanation: "عندما نقصد الدراسة أو المذاكرة نقول ders çalışmak. أما yapmak فيستخدم مع تراكيب أخرى مثل ödev yapmak أي أداء الواجب.",
        rule: "ders çalışmak = يدرس / ödev yapmak = يؤدي الواجب",
        examples: [
            {
                wrong: "Her gün ders yapıyorum.",
                correct: "Her gün ders çalışıyorum."
            },
            {
                wrong: "Ödev çalışıyorum.",
                correct: "Ödev yapıyorum."
            }
        ],
        keywords: ["ders çalışmak", "ödev yapmak", "الدراسة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 111
    ----------------------------------------------------- */
    {
        id: 111,
        title: "استخدام sahip olmak بدل var في الملكية اليومية",
        category: "arabic-translation",
        level: "متوسط",
        wrong: "Ben bir arabaya sahibim.",
        correct: "Benim bir arabam var.",
        shortExplanation: "sahip olmak صحيح لكنه أكثر رسمية، بينما var شائع جدًا في الملكية اليومية.",
        explanation: "الجملة Benim bir arabam var هي الطريقة الطبيعية والشائعة جدًا للتعبير عن لدي سيارة. sahip olmak موجودة وصحيحة لكنها قد تبدو أكثر رسمية في كثير من السياقات.",
        rule: "Benim + الاسم مع لاحقة الملكية + var",
        examples: [
            {
                wrong: "Ben iki kardeşe sahibim.",
                correct: "Benim iki kardeşim var."
            },
            {
                wrong: "Bir ev sahibim.",
                correct: "Bir evim var."
            }
        ],
        keywords: ["var", "sahip olmak", "الملكية", "لدي"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 112
    ----------------------------------------------------- */
    {
        id: 112,
        title: "الخلط بين çok و birçok",
        category: "similar-words",
        level: "متوسط",
        wrong: "Çok insanlar geldi.",
        correct: "Birçok insan geldi.",
        shortExplanation: "birçok تأتي عادة مع الاسم المفرد المعدود.",
        explanation: "birçok تعني العديد من، وتأتي عادة مع الاسم بصيغة المفرد: birçok insan، birçok kitap. أما çok فيمكن أن تأتي مع الجمع أو غير المعدود حسب التركيب.",
        rule: "birçok + اسم مفرد",
        examples: [
            {
                wrong: "Birçok insanlar geldi.",
                correct: "Birçok insan geldi."
            },
            {
                wrong: "Çok insan geldi.",
                correct: "Çok insan geldi."
            }
        ],
        keywords: ["çok", "birçok", "العديد", "الجمع"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 113
    ----------------------------------------------------- */
    {
        id: 113,
        title: "استخدام الجمع بعد بعض كلمات الكمية",
        category: "suffixes",
        level: "متوسط",
        wrong: "İki kitaplar aldım.",
        correct: "İki kitap aldım.",
        shortExplanation: "بعد الأعداد المحددة لا نضع عادة لاحقة الجمع على الاسم.",
        explanation: "عندما يسبق الاسم عدد محدد مثل iki أو üç، يبقى الاسم عادة بصيغة المفرد: iki kitap، üç öğrenci. لا نقول iki kitaplar.",
        rule: "عدد + اسم مفرد",
        examples: [
            {
                wrong: "Beş öğrenciler geldi.",
                correct: "Beş öğrenci geldi."
            },
            {
                wrong: "Üç arabalar var.",
                correct: "Üç araba var."
            }
        ],
        keywords: ["الجمع", "الأعداد", "iki", "üç", "lar", "ler"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 114
    ----------------------------------------------------- */
    {
        id: 114,
        title: "الخلط بين benim و benimki",
        category: "suffixes",
        level: "متوسط",
        wrong: "Bu kitap benimki.",
        correct: "Bu kitap benim.",
        shortExplanation: "benim تعني لي/خاصتي قبل أو بعد الاسم، بينما benimki تستخدم بدل الاسم المحذوف.",
        explanation: "إذا قلت Bu kitap benim فأنت تقول هذا الكتاب لي. أما Bu benimki فهي تعني هذا لي/هذا خاصتي عندما يكون الاسم مفهومًا من السياق.",
        rule: "benim = لي / benimki = خاصتي",
        examples: [
            {
                wrong: "Bu benimki kitabım.",
                correct: "Bu benim kitabım."
            },
            {
                wrong: "Hangisi senin? Bu senin.",
                correct: "Hangisi senin? Bu seninki."
            }
        ],
        keywords: ["benim", "benimki", "senin", "seninki"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 115
    ----------------------------------------------------- */
    {
        id: 115,
        title: "الخلط بين kendi و kendisi",
        category: "suffixes",
        level: "متقدم",
        wrong: "Ben kendisi yaptım.",
        correct: "Ben kendim yaptım.",
        shortExplanation: "kendi تأخذ لاحقة الشخص المناسبة حسب الضمير.",
        explanation: "عندما نقول أنا فعلت ذلك بنفسي نستخدم kendim. مع أنت: kendin، هو: kendisi، نحن: kendimiz، أنتم: kendiniz.",
        rule: "kendi + لاحقة الشخص",
        examples: [
            {
                wrong: "Sen kendisi yaptın.",
                correct: "Sen kendin yaptın."
            },
            {
                wrong: "Biz kendisi yaptık.",
                correct: "Biz kendimiz yaptık."
            }
        ],
        keywords: ["kendi", "kendim", "kendin", "kendisi"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 116
    ----------------------------------------------------- */
    {
        id: 116,
        title: "الخلط بين -ken و عندما",
        category: "sentence-order",
        level: "متقدم",
        wrong: "Ben yemek yiyorum, sen geldin.",
        correct: "Ben yemek yerken sen geldin.",
        shortExplanation: "لاحقة -ken تستخدم للتعبير عن حدوث فعل أثناء فعل آخر.",
        explanation: "عندما نريد القول بينما كنت آكل جاء أنت، يمكن استخدام -ken مع الفعل: yemek yerken. هذه اللاحقة مهمة جدًا في الجمل المركبة.",
        rule: "الفعل + -(y)ken = بينما / عندما",
        examples: [
            {
                wrong: "Uyuyorumken telefon çaldı.",
                correct: "Uyurken telefon çaldı."
            },
            {
                wrong: "Çalışıyorumken geldi.",
                correct: "Çalışırken geldi."
            }
        ],
        keywords: ["ken", "بينما", "عندما", "الجمل المركبة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 117
    ----------------------------------------------------- */
    {
        id: 117,
        title: "استخدام sonra بطريقة خاطئة مع الفعل",
        category: "sentence-order",
        level: "متوسط",
        wrong: "Yemek sonra dışarı çıktım.",
        correct: "Yemekten sonra dışarı çıktım.",
        shortExplanation: "بعد الاسم نستخدم sonra، ومع الحدث نحتاج غالبًا إلى لاحقة -den/-dan.",
        explanation: "عند القول بعد الأكل خرجت، نستخدم yemek + ten ثم sonra: Yemekten sonra dışarı çıktım.",
        rule: "اسم + -den/-dan + sonra",
        examples: [
            {
                wrong: "Ders sonra eve gittim.",
                correct: "Dersten sonra eve gittim."
            },
            {
                wrong: "İş sonra geldim.",
                correct: "İşten sonra geldim."
            }
        ],
        keywords: ["sonra", "بعد", "den", "dan"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 118
    ----------------------------------------------------- */
    {
        id: 118,
        title: "استخدام önce بدون لاحقة مع الاسم",
        category: "sentence-order",
        level: "متوسط",
        wrong: "Ders önce kahve içtim.",
        correct: "Dersten önce kahve içtim.",
        shortExplanation: "مع الاسم نستخدم -den/-dan قبل önce في هذا التركيب.",
        explanation: "Dersten önce تعني قبل الدرس. لاحقة -den هنا تربط الاسم بتعبير önce.",
        rule: "اسم + -den/-dan + önce",
        examples: [
            {
                wrong: "Yemek önce ellerimi yıkadım.",
                correct: "Yemekten önce ellerimi yıkadım."
            },
            {
                wrong: "İş önce geldim.",
                correct: "İşten önce geldim."
            }
        ],
        keywords: ["önce", "قبل", "den", "dan"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 119
    ----------------------------------------------------- */
    {
        id: 119,
        title: "الخلط بين çünkü و bu yüzden",
        category: "sentence-order",
        level: "متوسط",
        wrong: "Hastayım bu yüzden evde kalıyorum çünkü.",
        correct: "Hastayım, bu yüzden evde kalıyorum.",
        shortExplanation: "çünkü تقدم السبب، بينما bu yüzden تقدم النتيجة.",
        explanation: "çünkü تعني لأن وتقدم سببًا: Evde kalıyorum çünkü hastayım. أما bu yüzden فتعني لذلك: Hastayım, bu yüzden evde kalıyorum.",
        rule: "çünkü = لأن / bu yüzden = لذلك",
        examples: [
            {
                wrong: "Çalışmadım, çünkü bu yüzden yorgundum.",
                correct: "Çalışmadım çünkü yorgundum."
            },
            {
                wrong: "Yorgundum, çünkü evde kaldım.",
                correct: "Yorgundum, bu yüzden evde kaldım."
            }
        ],
        keywords: ["çünkü", "bu yüzden", "لأن", "لذلك"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 120
    ----------------------------------------------------- */
    {
        id: 120,
        title: "الخلط بين rağmen و rağmen",
        category: "prepositions",
        level: "متقدم",
        wrong: "Yağmur rağmen dışarı çıktım.",
        correct: "Yağmura rağmen dışarı çıktım.",
        shortExplanation: "كلمة rağmen تأتي عادة مع لاحقة الاتجاه -e/-a.",
        explanation: "التعبير الصحيح هو Yağmura rağmen أي رغم المطر. rağmen من الكلمات التي تتطلب في هذا الاستخدام الاسم في صيغة الاتجاه.",
        rule: "اسم + -e/-a + rağmen",
        examples: [
            {
                wrong: "Zorluklar rağmen devam ettim.",
                correct: "Zorluklara rağmen devam ettim."
            },
            {
                wrong: "Hastalık rağmen çalıştı.",
                correct: "Hastalığa rağmen çalıştı."
            }
        ],
        keywords: ["rağmen", "رغم", "a", "e"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 121
    ----------------------------------------------------- */
    {
        id: 121,
        title: "الخلط بين gibi و kadar",
        category: "prepositions",
        level: "متوسط",
        wrong: "Sen kadar hızlı koşuyor.",
        correct: "Senin kadar hızlı koşuyor.",
        shortExplanation: "gibi تعني مثل، و kadar تستخدم للمقارنة بمعنى بقدر.",
        explanation: "عند مقارنة شخص بآخر نقول Senin kadar hızlı أي سريع بقدر سرعتك. أما senin gibi تعني مثلك أو على طريقتك.",
        rule: "gibi = مثل / kadar = بقدر",
        examples: [
            {
                wrong: "Sen gibi hızlı değil.",
                correct: "Senin kadar hızlı değil."
            },
            {
                wrong: "Senin kadar konuşuyor.",
                correct: "Senin gibi konuşuyor."
            }
        ],
        keywords: ["gibi", "kadar", "المقارنة", "مثل"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 122
    ----------------------------------------------------- */
    {
        id: 122,
        title: "الخلط بين daha و en",
        category: "similar-words",
        level: "متوسط",
        wrong: "Bu en güzel iki kitap.",
        correct: "Bu iki kitabın en güzeli.",
        shortExplanation: "daha تستخدم للمقارنة بين شيئين، و en للتفضيل الأعلى.",
        explanation: "daha güzel تعني أجمل، بينما en güzel تعني الأجمل. عند الحديث عن أعلى درجة من مجموعة نستخدم en.",
        rule: "daha = أكثر / en = الأكثر",
        examples: [
            {
                wrong: "Ali en uzun Ahmet'ten.",
                correct: "Ali Ahmet'ten daha uzun."
            },
            {
                wrong: "Bu daha güzel kitap.",
                correct: "Bu en güzel kitap."
            }
        ],
        keywords: ["daha", "en", "المقارنة", "التفضيل"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 123
    ----------------------------------------------------- */
    {
        id: 123,
        title: "استخدام من المقارنة بطريقة خاطئة",
        category: "cases",
        level: "متوسط",
        wrong: "Ali daha uzun Mehmet.",
        correct: "Ali Mehmet'ten daha uzun.",
        shortExplanation: "المقارنة بـ daha تحتاج غالبًا إلى -den/-dan للشخص أو الشيء الذي نقارن به.",
        explanation: "عندما نقول علي أطول من محمد، نستخدم Mehmet'ten daha uzun. اللاحقة -den/-dan تعطي معنى من في المقارنة.",
        rule: "A + B'den daha + صفة",
        examples: [
            {
                wrong: "Bu araba daha hızlı o araba.",
                correct: "Bu araba o arabadan daha hızlı."
            },
            {
                wrong: "Ayşe daha genç Fatma.",
                correct: "Ayşe Fatma'dan daha genç."
            }
        ],
        keywords: ["المقارنة", "daha", "den", "dan"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 124
    ----------------------------------------------------- */
    {
        id: 124,
        title: "الخلط بين lazım و gerek",
        category: "similar-words",
        level: "متوسط",
        wrong: "Gitmek lazım bana.",
        correct: "Gitmem lazım.",
        shortExplanation: "عند التعبير عن ضرورة قيام شخص بفعل، تتغير بنية الجملة.",
        explanation: "Gitmem lazım تعني يجب أن أذهب. لاحقة الملكية على الفعل الاسمي gitmem تحدد الشخص الذي يجب عليه القيام بالفعل.",
        rule: "الفعل + لاحقة الشخص + lazım",
        examples: [
            {
                wrong: "Çalışmak lazım bana.",
                correct: "Çalışmam lazım."
            },
            {
                wrong: "Gitmek gerek sana.",
                correct: "Gitmen gerek."
            }
        ],
        keywords: ["lazım", "gerek", "الضرورة", "يجب"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 125
    ----------------------------------------------------- */
    {
        id: 125,
        title: "استخدام zorunda بشكل خاطئ",
        category: "suffixes",
        level: "متقدم",
        wrong: "Ben gitmek zorundayım.",
        correct: "Ben gitmek zorundayım.",
        shortExplanation: "التركيب صحيح، لكن يجب الانتباه إلى الفرق بين zorunda و lazım.",
        explanation: "gitmek zorundayım تعني أنا مضطر للذهاب أو يجب علي الذهاب بسبب إلزام أو ضرورة قوية. أما gitmem lazım فتعني يجب أن أذهب، وقد تكون أخف من حيث الإلزام حسب السياق.",
        rule: "الفعل + zorunda + لاحقة الشخص",
        examples: [
            {
                wrong: "Gitmek zorundasın.",
                correct: "Gitmek zorundasın."
            },
            {
                wrong: "Çalışmak zorundayız.",
                correct: "Çalışmak zorundayız."
            }
        ],
        keywords: ["zorunda", "lazım", "gerek", "الإلزام"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 126
    ----------------------------------------------------- */
    {
        id: 126,
        title: "الخلط بين -ebilmek و istemek",
        category: "suffixes",
        level: "متوسط",
        wrong: "Türkçe konuşmak istiyorum çünkü konuşabilirim.",
        correct: "Türkçe konuşabilirim.",
        shortExplanation: "يمكنني وأريد أن أفعل شيئًا معنيان مختلفان.",
        explanation: "konuşabilirim تعني أستطيع التحدث، بينما konuşmak istiyorum تعني أريد التحدث. لاحقة -ebil/-abil تدل على القدرة أو الإمكانية.",
        rule: "-ebil/-abil = يستطيع / istemek = يريد",
        examples: [
            {
                wrong: "Gitmek istiyorum? بمعنى أستطيع الذهاب.",
                correct: "Gidebilirim."
            },
            {
                wrong: "Yüzebilirim. بمعنى أريد السباحة.",
                correct: "Yüzmek istiyorum."
            }
        ],
        keywords: ["ebil", "abil", "istemek", "القدرة", "الرغبة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 127
    ----------------------------------------------------- */
    {
        id: 127,
        title: "نسيان لاحقة الملكية في بعض تراكيب الجسد",
        category: "suffixes",
        level: "مبتدئ",
        wrong: "Benim baş ağrıyor.",
        correct: "Başım ağrıyor.",
        shortExplanation: "أسماء أعضاء الجسم غالبًا تأخذ لاحقة الملكية عند الحديث عن عضو الشخص نفسه.",
        explanation: "عندما نقول رأسي يؤلمني، نستخدم Başım ağrıyor. اللاحقة -ım توضح أن الرأس يعود إلى المتحدث.",
        rule: "عضو الجسم + لاحقة الملكية",
        examples: [
            {
                wrong: "El ağrıyor.",
                correct: "Elim ağrıyor."
            },
            {
                wrong: "Göz ağrıyor.",
                correct: "Gözüm ağrıyor."
            }
        ],
        keywords: ["الملكية", "başım", "gözüm", "الجسم"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 128
    ----------------------------------------------------- */
    {
        id: 128,
        title: "الخلط بين hoşlanmak و sevmek",
        category: "similar-words",
        level: "متوسط",
        wrong: "Türk kahvesini hoşlanıyorum.",
        correct: "Türk kahvesinden hoşlanıyorum.",
        shortExplanation: "hoşlanmak يأخذ غالبًا لاحقة -den/-dan، بينما sevmek يأخذ المفعول به.",
        explanation: "نقول Türk kahvesinden hoşlanıyorum أي تعجبني/أستمتع بالقهوة التركية. أما Türk kahvesini seviyorum فتعني أحب القهوة التركية.",
        rule: "hoşlanmak + -den/-dan / sevmek + مفعول به",
        examples: [
            {
                wrong: "Seni hoşlanıyorum.",
                correct: "Senden hoşlanıyorum."
            },
            {
                wrong: "Bu filmi hoşlanıyorum.",
                correct: "Bu filmden hoşlanıyorum."
            }
        ],
        keywords: ["hoşlanmak", "sevmek", "den", "dan"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 129
    ----------------------------------------------------- */
    {
        id: 129,
        title: "الخلط بين korkmak و korkutmak",
        category: "similar-words",
        level: "متوسط",
        wrong: "Bu film beni korkuyor.",
        correct: "Bu film beni korkutuyor.",
        shortExplanation: "korkmak يعني يخاف، بينما korkutmak يعني يخيف.",
        explanation: "أنا أخاف من الفيلم: Bu filmden korkuyorum. الفيلم يخيفني: Bu film beni korkutuyor. الفرق هو بين الشعور بالخوف والتسبب بالخوف.",
        rule: "korkmak = يخاف / korkutmak = يخيف",
        examples: [
            {
                wrong: "Köpek beni korkuyor.",
                correct: "Köpek beni korkutuyor."
            },
            {
                wrong: "Ben seni korkutuyorum.",
                correct: "Ben senden korkuyorum."
            }
        ],
        keywords: ["korkmak", "korkutmak", "الخوف", "يخيف"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 130
    ----------------------------------------------------- */
    {
        id: 130,
        title: "الخلط بين unutmak و hatırlamak",
        category: "similar-words",
        level: "مبتدئ",
        wrong: "Seni unutmuyorum mu? بمعنى أتذكرك.",
        correct: "Seni hatırlıyorum.",
        shortExplanation: "hatırlamak يعني يتذكر، بينما unutmamak يعني لا ينسى.",
        explanation: "للتعبير بشكل مباشر عن التذكر نقول Seni hatırlıyorum. أما Seni unutmuyorum فتعني حرفيًا أنا لا أنساك، وهي مختلفة في التركيب والمعنى.",
        rule: "hatırlamak = يتذكر / unutmak = ينسى",
        examples: [
            {
                wrong: "Seni unutuyorum.",
                correct: "Seni hatırlıyorum."
            },
            {
                wrong: "Bu kelimeyi hatırlamıyorum.",
                correct: "Bu kelimeyi hatırlamıyorum."
            }
        ],
        keywords: ["unutmak", "hatırlamak", "يتذكر", "ينسى"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 131
    ----------------------------------------------------- */
    {
        id: 131,
        title: "الخلط بين açmak و açılmak",
        category: "similar-words",
        level: "متقدم",
        wrong: "Kapı açtı.",
        correct: "Kapı açıldı.",
        shortExplanation: "açmak فعل متعدٍ، بينما açılmak يدل على الانفتاح أو حدوث الفعل على الشيء.",
        explanation: "Ali kapıyı açtı تعني علي فتح الباب. أما Kapı açıldı فتعني الباب انفتح. اختيار الفعل يعتمد على وجود فاعل يقوم بالفعل أو حدوثه على الشيء.",
        rule: "açmak = يفتح / açılmak = ينفتح",
        examples: [
            {
                wrong: "Pencere açtı.",
                correct: "Pencere açıldı."
            },
            {
                wrong: "Ali açıldı kapıyı.",
                correct: "Ali kapıyı açtı."
            }
        ],
        keywords: ["açmak", "açılmak", "الباب", "الفتح"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 132
    ----------------------------------------------------- */
    {
        id: 132,
        title: "الخلط بين yapmak و olmak في الأحداث",
        category: "similar-words",
        level: "متقدم",
        wrong: "Toplantı yaptık saat üçte.",
        correct: "Saat üçte toplantı yaptık.",
        shortExplanation: "بعض الأسماء تستخدم مع yapmak كتركيب ثابت، بينما أحداث أخرى تستخدم olmak.",
        explanation: "toplantı yapmak تعني عقد اجتماع أو القيام باجتماع، وهي صحيحة. المهم ألا يتم ترجمة كل فعل عربي إلى yapmak بشكل آلي؛ بعض التراكيب تستخدم olmak أو etmek.",
        rule: "احفظ التراكيب الثابتة مع الأفعال المساعدة",
        examples: [
            {
                wrong: "Yardım yapmak.",
                correct: "Yardım etmek."
            },
            {
                wrong: "Karar yapmak.",
                correct: "Karar vermek."
            }
        ],
        keywords: ["yapmak", "olmak", "etmek", "vermek"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 133
    ----------------------------------------------------- */
    {
        id: 133,
        title: "استخدام الترتيب العربي للجملة الشرطية",
        category: "sentence-order",
        level: "متقدم",
        wrong: "Eğer vaktim var, seni ararım.",
        correct: "Eğer vaktim varsa seni ararım.",
        shortExplanation: "الشرط في التركية يحتاج إلى صيغة -sa / -se.",
        explanation: "عند التعبير عن إذا كان لدي وقت فسأتصل بك، نستخدم vaktim varsa. اللاحقة -sa/-se هي علامة الشرط.",
        rule: "الفعل أو الجملة + -sa/-se",
        examples: [
            {
                wrong: "Eğer gelir, seni ararım.",
                correct: "Eğer gelirse seni ararım."
            },
            {
                wrong: "Vaktim var, gelirsem.",
                correct: "Vaktim varsa gelirim."
            }
        ],
        keywords: ["الشرط", "sa", "se", "eğer"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 134
    ----------------------------------------------------- */
    {
        id: 134,
        title: "الخلط بين -se و -sa حسب انسجام الحركات",
        category: "suffixes",
        level: "متوسط",
        wrong: "Gelirsa haber ver.",
        correct: "Gelirse haber ver.",
        shortExplanation: "لاحقة الشرط تتغير إلى -sa أو -se حسب انسجام الحركات.",
        explanation: "إذا كان آخر حرف صوتي في الكلمة من المجموعة الأمامية نستخدم -se، وإذا كان من المجموعة الخلفية نستخدم -sa. لذلك gelirse صحيحة.",
        rule: "-sa / -se وفق انسجام الحركات",
        examples: [
            {
                wrong: "Bakirse.",
                correct: "Bakarsa."
            },
            {
                wrong: "Gelirsa.",
                correct: "Gelirse."
            }
        ],
        keywords: ["sa", "se", "الشرط", "انسجام الحركات"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 135
    ----------------------------------------------------- */
    {
        id: 135,
        title: "استخدام -erek/-arak بطريقة خاطئة",
        category: "suffixes",
        level: "متقدم",
        wrong: "Koşerek eve gittim.",
        correct: "Koşarak eve gittim.",
        shortExplanation: "لاحقة -erek / -arak تعبر عن كيفية القيام بالفعل وتخضع لانسجام الحركات.",
        explanation: "Koşarak eve gittim تعني ذهبت إلى المنزل وأنا أركض/بالركض. شكل اللاحقة يعتمد على آخر حرف صوتي في الفعل.",
        rule: "-erek / -arak = عن طريق فعل الشيء / أثناء فعله",
        examples: [
            {
                wrong: "Gülerek konuştu.",
                correct: "Gülerek konuştu."
            },
            {
                wrong: "Koşerek geldi.",
                correct: "Koşarak geldi."
            }
        ],
        keywords: ["erek", "arak", "طريقة الفعل"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 136
    ----------------------------------------------------- */
    {
        id: 136,
        title: "الخلط بين -meden و -madan",
        category: "suffixes",
        level: "متقدم",
        wrong: "Kahvaltı yapmadan evden çıktım.",
        correct: "Kahvaltı yapmadan evden çıktım.",
        shortExplanation: "لاحقة -madan / -meden تعني دون أن يفعل.",
        explanation: "Kahvaltı yapmadan evden çıktım تعني خرجت من المنزل دون أن أتناول الفطور. شكل اللاحقة يتغير حسب انسجام الحركات.",
        rule: "-madan / -meden = دون أن",
        examples: [
            {
                wrong: "Seni görmeden gitme.",
                correct: "Seni görmeden gitme."
            },
            {
                wrong: "Yemek yemeden uyudu.",
                correct: "Yemek yemeden uyudu."
            }
        ],
        keywords: ["madan", "meden", "دون", "النفي"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 137
    ----------------------------------------------------- */
    {
        id: 137,
        title: "الخلط بين -dikçe و كلما",
        category: "suffixes",
        level: "متقدم",
        wrong: "Türkçe çalıştıkça daha iyi öğreniyorum.",
        correct: "Türkçe çalıştıkça daha iyi öğreniyorum.",
        shortExplanation: "-dikçe تستخدم للتعبير عن كلما أو كلما استمر الفعل.",
        explanation: "Türkçe çalıştıkça daha iyi öğreniyorum تعني كلما درست التركية أكثر تعلمتها بشكل أفضل. هذا التركيب شائع في المستويات المتقدمة.",
        rule: "-dikçe = كلما",
        examples: [
            {
                wrong: "Daha çok okudukça daha çok kelime öğreniyorum.",
                correct: "Daha çok okudukça daha çok kelime öğreniyorum."
            },
            {
                wrong: "Yaşlandıkça değişiyor.",
                correct: "Yaşlandıkça değişiyor."
            }
        ],
        keywords: ["dikçe", "dikca", "كلما", "متقدم"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 138
    ----------------------------------------------------- */
    {
        id: 138,
        title: "الخلط بين rağmen و halde",
        category: "prepositions",
        level: "متقدم",
        wrong: "Hasta rağmen işe gitti.",
        correct: "Hasta olmasına rağmen işe gitti.",
        shortExplanation: "مع الجمل الفعلية أو الصفات قد نحتاج إلى تركيب -masına rağmen.",
        explanation: "عندما نقول رغم أنه مريض ذهب إلى العمل، يمكن استخدام Hasta olmasına rağmen. هذا تركيب متقدم يجمع الاسم الفعلي مع rağmen.",
        rule: "الفعل/الصفة + -mesine/-masına rağmen",
        examples: [
            {
                wrong: "Yorgun rağmen çalıştı.",
                correct: "Yorgun olmasına rağmen çalıştı."
            },
            {
                wrong: "İstemek rağmen geldi.",
                correct: "İstememesine rağmen geldi."
            }
        ],
        keywords: ["rağmen", "olmasına rağmen", "رغم"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 139
    ----------------------------------------------------- */
    {
        id: 139,
        title: "الخلط بين diye و için في الغرض",
        category: "sentence-order",
        level: "متقدم",
        wrong: "Seni görmek için geldim.",
        correct: "Seni görmek için geldim.",
        shortExplanation: "الجملة صحيحة، لكن يجب فهم أن için يمكن أن تربط مصدر الفعل بالهدف.",
        explanation: "Seni görmek için geldim تعني جئت لكي أراك. في التركية نستخدم المصدر görmek مع için للتعبير عن الغرض. كما توجد تراكيب بـ diye في بعض السياقات.",
        rule: "مصدر الفعل + için = لكي / من أجل",
        examples: [
            {
                wrong: "Türkçe öğrenmek için Türkiye'ye geldim.",
                correct: "Türkçe öğrenmek için Türkiye'ye geldim."
            },
            {
                wrong: "Seni görmek için aradım.",
                correct: "Seni görmek için aradım."
            }
        ],
        keywords: ["için", "diye", "الغرض", "لكي"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 140
    ----------------------------------------------------- */
    {
        id: 140,
        title: "الخلط بين diye و ki في نقل الكلام",
        category: "sentence-order",
        level: "متقدم",
        wrong: "Gel diye bana söyledi.",
        correct: "Gel dedi.",
        shortExplanation: "diye و dedi لهما استخدامات مختلفة عند نقل الكلام والأوامر.",
        explanation: "عند نقل أمر مباشر مثل قال لي تعال، يمكن قول Bana 'gel' dedi أو Bana gelmemi söyledi حسب التركيب. أما diye فتستخدم في تراكيب مثل Beni çağır diye söyledi، أي قال لكي يدعوني/قال أن أدعوه حسب السياق.",
        rule: "dedi / söyledi / diye + الجملة حسب المعنى",
        examples: [
            {
                wrong: "Bana gel diye söyledi.",
                correct: "Bana gelmemi söyledi."
            },
            {
                wrong: "Bana gel dedi.",
                correct: "Bana gel dedi."
            }
        ],
        keywords: ["diye", "dedi", "söyledi", "نقل الكلام"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 141
    ----------------------------------------------------- */
    {
        id: 141,
        title: "الخلط بين gerek و gerekmek",
        category: "similar-words",
        level: "متقدم",
        wrong: "Gitmeye gerek ediyorum.",
        correct: "Gitmem gerekiyor.",
        shortExplanation: "gerekmek فعل يعني يكون ضروريًا، وله تراكيب خاصة.",
        explanation: "Gitmem gerekiyor تعني أحتاج إلى الذهاب أو يجب أن أذهب. لا نستخدم gerek ediyorum بهذه الصورة. ويمكن أيضًا قول Gitmem gerek.",
        rule: "الفعل + لاحقة الشخص + gerekiyor/gerek",
        examples: [
            {
                wrong: "Çalışmak gerekiyor bana.",
                correct: "Çalışmam gerekiyor."
            },
            {
                wrong: "Gitmeye gerek ediyorum.",
                correct: "Gitmem gerekiyor."
            }
        ],
        keywords: ["gerekiyor", "gerek", "الضرورة"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 142
    ----------------------------------------------------- */
    {
        id: 142,
        title: "الخلط بين rağmen و fakat",
        category: "prepositions",
        level: "متقدم",
        wrong: "Yağmur rağmen gitmedim.",
        correct: "Yağmura rağmen gitmedim.",
        shortExplanation: "fakat تعني لكن، أما rağmen فتعني رغم وتتطلب تركيبًا مختلفًا.",
        explanation: "لا يمكن استبدال rağmen بـ fakat مباشرة. Fakat تربط بين جملتين متعارضتين بمعنى لكن، بينما rağmen تبني معنى رغم شيء ما.",
        rule: "fakat = لكن / rağmen = رغم",
        examples: [
            {
                wrong: "Yorgunum rağmen çalışıyorum.",
                correct: "Yorgunum fakat çalışıyorum."
            },
            {
                wrong: "Yağmur fakat dışarı çıktım.",
                correct: "Yağmura rağmen dışarı çıktım."
            }
        ],
        keywords: ["rağmen", "fakat", "لكن", "رغم"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 143
    ----------------------------------------------------- */
    {
        id: 143,
        title: "الخلط بين herkes و her insan",
        category: "similar-words",
        level: "متوسط",
        wrong: "Her insanlar bunu biliyor.",
        correct: "Herkes bunu biliyor.",
        shortExplanation: "herkes كلمة واحدة تعني الجميع.",
        explanation: "عند القول الجميع يعرف هذا، نستخدم Herkes bunu biliyor. لا نستخدم her insanlar بهذه الصورة.",
        rule: "herkes = الجميع",
        examples: [
            {
                wrong: "Her insanlar geldi.",
                correct: "Herkes geldi."
            },
            {
                wrong: "Herkesler geldi.",
                correct: "Herkes geldi."
            }
        ],
        keywords: ["herkes", "الجميع", "her"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 144
    ----------------------------------------------------- */
    {
        id: 144,
        title: "الخلط بين hiç kimse و kimse",
        category: "negation",
        level: "متوسط",
        wrong: "Kimse gelmedi hiç.",
        correct: "Hiç kimse gelmedi.",
        shortExplanation: "hiç kimse تعني لا أحد وتستخدم كثيرًا مع النفي.",
        explanation: "Hiç kimse gelmedi تعني لم يأتِ أحد. يمكن أن تظهر kimse وحدها في تراكيب معينة، لكن ترتيب hiç kimse هو من التراكيب الأساسية التي يحتاجها المتعلم.",
        rule: "hiç kimse + فعل منفي",
        examples: [
            {
                wrong: "Hiç kimse gelmedi.",
                correct: "Hiç kimse gelmedi."
            },
            {
                wrong: "Hiçbir kimse gelmedi.",
                correct: "Hiç kimse gelmedi."
            }
        ],
        keywords: ["hiç kimse", "kimse", "لا أحد"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 145
    ----------------------------------------------------- */
    {
        id: 145,
        title: "الخلط بين bir şey و hiçbir şey",
        category: "negation",
        level: "مبتدئ",
        wrong: "Hiçbir şey bilmiyorum." ,
        correct: "Hiçbir şey bilmiyorum.",
        shortExplanation: "hiçbir şey تعني لا شيء وتأتي عادة مع فعل منفي.",
        explanation: "عندما نقول لا أعرف شيئًا نستخدم Hiçbir şey bilmiyorum. لا نحتاج إلى نفي آخر قبل hiçbir، لأن الفعل نفسه يكون منفيًا.",
        rule: "hiçbir şey + فعل منفي",
        examples: [
            {
                wrong: "Hiçbir şey biliyorum.",
                correct: "Hiçbir şey bilmiyorum."
            },
            {
                wrong: "Bir şey bilmiyorum.",
                correct: "Hiçbir şey bilmiyorum."
            }
        ],
        keywords: ["bir şey", "hiçbir şey", "لا شيء"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 146
    ----------------------------------------------------- */
    {
        id: 146,
        title: "الخلط بين biraz و birkaç",
        category: "similar-words",
        level: "مبتدئ",
        wrong: "Biraz kitap aldım.",
        correct: "Birkaç kitap aldım.",
        shortExplanation: "birkaç تستخدم عادة مع الأشياء المعدودة، بينما biraz تستخدم مع الكميات غير المعدودة.",
        explanation: "Birkaç kitap تعني عدة كتب، بينما biraz su تعني قليلًا من الماء. الفرق مهم جدًا في الاستخدام اليومي.",
        rule: "birkaç + معدود / biraz + كمية",
        examples: [
            {
                wrong: "Birkaç su içtim.",
                correct: "Biraz su içtim."
            },
            {
                wrong: "Biraz kitap aldım.",
                correct: "Birkaç kitap aldım."
            }
        ],
        keywords: ["biraz", "birkaç", "كمية", "عدد"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 147
    ----------------------------------------------------- */
    {
        id: 147,
        title: "الخلط بين bütün و tüm",
        category: "similar-words",
        level: "متوسط",
        wrong: "Bütün insanlarlar geldi.",
        correct: "Bütün insanlar geldi.",
        shortExplanation: "بعد bütün و tüm لا نضيف الجمع بشكل إضافي إلى الكلمة إذا كان السياق يتطلب صيغة الجمع الطبيعية فقط.",
        explanation: "Bütün insanlar تعني جميع الناس. الكلمة insanlar بالفعل جمع، لذلك لا نضيف لاحقة جمع ثانية.",
        rule: "bütün/tüm + الاسم بالصيغة المناسبة",
        examples: [
            {
                wrong: "Tüm öğrencilerler geldi.",
                correct: "Tüm öğrenciler geldi."
            },
            {
                wrong: "Bütün kitaplarlar burada.",
                correct: "Bütün kitaplar burada."
            }
        ],
        keywords: ["bütün", "tüm", "الجمع", "جميع"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 148
    ----------------------------------------------------- */
    {
        id: 148,
        title: "الخلط بين sonra و daha sonra",
        category: "conversation",
        level: "مبتدئ",
        wrong: "Ben geliyorum sonra.",
        correct: "Sonra geliyorum.",
        shortExplanation: "مكان sonra يعتمد على المعنى وترتيب الجملة.",
        explanation: "Sonra geliyorum تعني سأأتي لاحقًا. أما وضع sonra في نهاية الجملة قد يكون ممكنًا في بعض السياقات، لكن المتعلم يحتاج إلى معرفة الصيغة الأساسية والطبيعية.",
        rule: "sonra = لاحقًا / بعد ذلك",
        examples: [
            {
                wrong: "Sonra ne yapıyorsun şimdi?",
                correct: "Şimdi ne yapıyorsun? Sonra ne yapacaksın?"
            },
            {
                wrong: "Sonra görüşürüz.",
                correct: "Sonra görüşürüz."
            }
        ],
        keywords: ["sonra", "لاحقًا", "بعد ذلك"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 149
    ----------------------------------------------------- */
    {
        id: 149,
        title: "استخدام abi و abla مع الضمائر بطريقة غير طبيعية",
        category: "conversation",
        level: "متوسط",
        wrong: "Benim abi geldi.",
        correct: "Abim geldi.",
        shortExplanation: "عند الحديث عن الأخ الأكبر نستخدم لاحقة الملكية على abi.",
        explanation: "Abim geldi تعني أخي الأكبر جاء. لا نحتاج إلى Benim في هذا التركيب لأن لاحقة الملكية موجودة بالفعل في Abim.",
        rule: "abi + m = abim / abla + m = ablam",
        examples: [
            {
                wrong: "Benim abla burada.",
                correct: "Ablam burada."
            },
            {
                wrong: "Senin abi nerede?",
                correct: "Abin nerede?"
            }
        ],
        keywords: ["abi", "abla", "abim", "ablam"],
        published: true,
        createdAt: "2026-08-24"
    },


    /* -----------------------------------------------------
       الخطأ 150
    ----------------------------------------------------- */
    {
        id: 150,
        title: "استخدام لاحقة الملكية مرتين",
        category: "suffixes",
        level: "متوسط",
        wrong: "Benim kitabımım.",
        correct: "Benim kitabım.",
        shortExplanation: "لا نضيف لاحقة الملكية مرتين إلى الاسم.",
        explanation: "Benim kitabım تعني كتابي. كلمة kitabım تحتوي بالفعل على لاحقة ملكية المتكلم، لذلك لا نضيف -ım مرة أخرى.",
        rule: "Benim + الاسم + لاحقة ملكية واحدة",
        examples: [
            {
                wrong: "Benim evimim.",
                correct: "Benim evim."
            },
            {
                wrong: "Senin arabanın.",
                correct: "Senin araban."
            }
        ],
        keywords: ["الملكية", "kitabım", "لاحقة الملكية"],
        published: true,
        createdAt: "2026-08-24"
    },
    /* =====================================================
   الأخطاء 151 - 180
===================================================== */

{
    id: 151,
    title: "الخلط بين -miş و -di في نقل الأحداث",
    category: "tenses",
    level: "متوسط",

    wrong: "Ahmet dün gelmişti ve benimle konuştu.",
    correct: "Ahmet dün gelmiş ve benimle konuşmuş.",

    shortExplanation:
        "اختيار -di أو -miş يعتمد على طريقة معرفة المتحدث بالحدث وسياق الكلام.",

    explanation:
        "الزمن المنقول -miş يستخدم عندما ينقل المتحدث معلومة سمعها أو استنتجها أو لم يشاهد الحدث مباشرة، بينما -di يستخدم غالبًا للحدث المعروف أو المشاهد مباشرة.",

    rule:
        "-di = ماضٍ مباشر، -miş = ماضٍ منقول أو مستنتج",

    examples: [
        {
            wrong: "Ali gelmiş, ben onu gördüm.",
            correct: "Ali gelmiş, ben onu görmedim."
        },
        {
            wrong: "Meğer Ayşe evlenmiş.",
            correct: "Meğer Ayşe evlenmiş."
        }
    ],

    keywords: [
        "-miş",
        "-di",
        "الماضي المنقول",
        "الأزمنة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 152,
    title: "الخلط بين ki و -ki",
    category: "suffixes",
    level: "متوسط",

    wrong: "Benim ki çok güzel.",
    correct: "Benimki çok güzel.",

    shortExplanation:
        "اللاحقة -ki تكتب متصلة عندما تكون لاحقة ملكية أو إشارية، بينما bağlaç olan ki تكتب منفصلة.",

    explanation:
        "هناك فرق بين ki التي تأتي كأداة ربط وتكتب منفصلة، وبين -ki التي تأتي لاحقة وتكتب متصلة بالكلمة، مثل benimki، evdeki، dünkü.",

    rule:
        "اللاحقة -ki متصلة، وأداة الربط ki منفصلة",

    examples: [
        {
            wrong: "Masada ki kitap benim.",
            correct: "Masadaki kitap benim."
        },
        {
            wrong: "Biliyorumki gelecek.",
            correct: "Biliyorum ki gelecek."
        }
    ],

    keywords: [
        "ki",
        "-ki",
        "اللاحقة",
        "أداة الربط"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 153,
    title: "استخدام kadar بطريقة خاطئة",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Ben sen kadar uzun değilim.",
    correct: "Ben senin kadar uzun değilim.",

    shortExplanation:
        "عند المقارنة باستخدام kadar نحتاج غالبًا إلى صيغة الملكية/الإضافة المناسبة.",

    explanation:
        "عند قول أنا لست بطولك نستخدم senin kadar. وجود لاحقة الإضافة بعد الضمير مهم في هذا التركيب.",

    rule:
        "الاسم أو الضمير + لاحقة الإضافة + kadar",

    examples: [
        {
            wrong: "Ali benim kadar hızlı.",
            correct: "Ali benim kadar hızlı."
        },
        {
            wrong: "Sen ben kadar çalışıyorsun.",
            correct: "Sen benim kadar çalışıyorsun."
        }
    ],

    keywords: [
        "kadar",
        "المقارنة",
        "senin kadar"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 154,
    title: "الخلط بين rağmen و rağmen بعد الاسم",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Yağmur rağmen dışarı çıktık.",
    correct: "Yağmura rağmen dışarı çıktık.",

    shortExplanation:
        "بعد rağmen نستخدم الاسم مع لاحقة الاتجاه -e / -a.",

    explanation:
        "أداة rağmen تأتي عادة مع الاسم في صيغة الاتجاه، مثل yağmura rağmen أي رغم المطر.",

    rule:
        "الاسم + -a/-e + rağmen",

    examples: [
        {
            wrong: "Hastalığı rağmen çalıştı.",
            correct: "Hastalığına rağmen çalıştı."
        },
        {
            wrong: "Her şeye rağmen devam etti.",
            correct: "Her şeye rağmen devam etti."
        }
    ],

    keywords: [
        "rağmen",
        "رغم",
        "الاستثناء",
        "اللاحقة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 155,
    title: "الخلط بين önce و sonra مع اللواحق",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Yemek önce ellerimi yıkıyorum.",
    correct: "Yemekten önce ellerimi yıkıyorum.",

    shortExplanation:
        "عند استخدام önce مع اسم نستخدم غالبًا لاحقة -den/-dan.",

    explanation:
        "للتعبير عن قبل شيء نقول yemekten önce، وبعد شيء نقول yemekten sonra.",

    rule:
        "الاسم + -den/-dan + önce/sonra",

    examples: [
        {
            wrong: "Ders önce kahve içtim.",
            correct: "Dersten önce kahve içtim."
        },
        {
            wrong: "Ders sonra eve gittim.",
            correct: "Dersten sonra eve gittim."
        }
    ],

    keywords: [
        "önce",
        "sonra",
        "قبل",
        "بعد"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 156,
    title: "استخدام için مع اللاحقة الخطأ",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Sen için bunu yaptım.",
    correct: "Senin için bunu yaptım.",

    shortExplanation:
        "عند استخدام için بعد ضمير الشخص نحتاج إلى صيغة الإضافة.",

    explanation:
        "نقول benim için، senin için، onun için، bizim için، sizin için، onların için.",

    rule:
        "الضمير + لاحقة الإضافة + için",

    examples: [
        {
            wrong: "Ben için geldim.",
            correct: "Benim için geldim."
        },
        {
            wrong: "O için aldım.",
            correct: "Onun için aldım."
        }
    ],

    keywords: [
        "için",
        "من أجل",
        "الضمائر"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 157,
    title: "الخلط بين benimle و benim ile",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Benim ile gelmek ister misin?",
    correct: "Benimle gelmek ister misin?",

    shortExplanation:
        "ile يمكن أن تأتي منفصلة أو متصلة، والصيغة المتصلة شائعة جدًا في المحادثة.",

    explanation:
        "مع الضمائر يمكن استخدام benimle، seninle، onunla، bizimle، sizinle، onlarla. وهي تعني معي، معك، معه، معنا، معكم، معهم.",

    rule:
        "benim ile → benimle",

    examples: [
        {
            wrong: "Senin ile konuşmak istiyorum.",
            correct: "Seninle konuşmak istiyorum."
        },
        {
            wrong: "Onun ile gittim.",
            correct: "Onunla gittim."
        }
    ],

    keywords: [
        "ile",
        "benimle",
        "مع",
        "المحادثة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 158,
    title: "نسيان لاحقة الملكية في تراكيب أجزاء الجسم",
    category: "suffixes",
    level: "متوسط",

    wrong: "Benim baş ağrıyor.",
    correct: "Benim başım ağrıyor.",

    shortExplanation:
        "أجزاء الجسم تحتاج إلى لاحقة الملكية عند التعبير عن أنها تخص الشخص.",

    explanation:
        "في التركية نقول başım ağrıyor أي رأسي يؤلمني، karnım ağrıyor أي بطني يؤلمني، gözüm ağrıyor أي عيني تؤلمني.",

    rule:
        "اسم عضو الجسم + لاحقة الملكية",

    examples: [
        {
            wrong: "Benim karnı ağrıyor.",
            correct: "Benim karnım ağrıyor."
        },
        {
            wrong: "Benim göz ağrıyor.",
            correct: "Benim gözüm ağrıyor."
        }
    ],

    keywords: [
        "الملكية",
        "أجزاء الجسم",
        "başım",
        "karnım"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 159,
    title: "الخلط بين kendim و kendime",
    category: "الضمائر",
    level: "متوسط",

    wrong: "Kendim bir kahve yaptım.",
    correct: "Kendime bir kahve yaptım.",

    shortExplanation:
        "اختيار صيغة kendim/kendime يعتمد على وظيفة الضمير في الجملة.",

    explanation:
        "Kendim تعني بنفسي، بينما kendime تعني لنفسي. لذلك نقول kendime kahve yaptım أي صنعت لنفسي قهوة.",

    rule:
        "kendim = بنفسي، kendime = لنفسي",

    examples: [
        {
            wrong: "Kendim bir hediye aldım.",
            correct: "Kendime bir hediye aldım."
        },
        {
            wrong: "Bu işi kendime yaptım.",
            correct: "Bu işi kendim yaptım."
        }
    ],

    keywords: [
        "kendi",
        "kendim",
        "kendime",
        "الضمائر"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 160,
    title: "استخدام لازم مع gerekmek بطريقة خاطئة",
    category: "المحادثة",
    level: "متوسط",

    wrong: "Ben gitmek gerekiyor.",
    correct: "Gitmem gerekiyor.",

    shortExplanation:
        "مع gerekmek نستخدم صيغة المصدر الاسمية المناسبة للشخص.",

    explanation:
        "عندما نقول يجب أن أذهب نستخدم gitmem gerekiyor. الشخص الذي يحتاج إلى القيام بالفعل يظهر من خلال لاحقة الملكية على الفعل المحول إلى اسم.",

    rule:
        "فعل + لاحقة الملكية + gerekiyor",

    examples: [
        {
            wrong: "Sen çalışmak gerekiyor.",
            correct: "Senin çalışman gerekiyor."
        },
        {
            wrong: "Ben erken kalkmak gerekiyor.",
            correct: "Benim erken kalkmam gerekiyor."
        }
    ],

    keywords: [
        "gerekiyor",
        "يجب",
        "ضرورة",
        "المحادثة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 161,
    title: "الخلط بين zorunda و gerekiyor",
    category: "المحادثة",
    level: "متوسط",

    wrong: "Yarın gitmek zorundayım gerekiyor.",
    correct: "Yarın gitmek zorundayım.",

    shortExplanation:
        "zorunda و gerekiyor يؤديان معنى قريبًا في بعض السياقات، لكن لا نجمعهما بهذه الطريقة.",

    explanation:
        "zorunda olmak تعني أن الشخص مضطر أو ملزم بفعل شيء، بينما gerekiyor تعبر عن الحاجة أو الضرورة. يمكن استخدام أحد التركيبين حسب المعنى.",

    rule:
        "gitmek zorundayım / gitmem gerekiyor",

    examples: [
        {
            wrong: "Çalışmam zorundayım.",
            correct: "Çalışmak zorundayım."
        },
        {
            wrong: "Gitmek gerekiyor.",
            correct: "Gitmem gerekiyor."
        }
    ],

    keywords: [
        "zorunda",
        "gerekiyor",
        "يجب",
        "الضرورة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 162,
    title: "الخلط بين istemek و istememek",
    category: "النفي",
    level: "متوسط",

    wrong: "Ben gitmek istemiyorum değil.",
    correct: "Ben gitmek istemiyorum.",

    shortExplanation:
        "نفي istemek يتم بإضافة -me/-ma ثم لاحقة الزمن والشخص.",

    explanation:
        "الفعل istemek يصبح istemiyorum في المضارع المستمر عند قول لا أريد. لا نحتاج إلى إضافة değil بعده.",

    rule:
        "istemek → istemiyorum",

    examples: [
        {
            wrong: "Yemek istemiyorum değil.",
            correct: "Yemek istemiyorum."
        },
        {
            wrong: "Gitmek istemiyor değilim.",
            correct: "Gitmek istemiyorum."
        }
    ],

    keywords: [
        "istemek",
        "istemiyorum",
        "النفي"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 163,
    title: "استخدام değil مع الأفعال",
    category: "النفي",
    level: "متوسط",

    wrong: "Ben bugün çalışıyor değilim.",
    correct: "Ben bugün çalışmıyorum.",

    shortExplanation:
        "الأفعال تنفى عادة بواسطة -ma/-me، وليس بواسطة değil.",

    explanation:
        "değil تستخدم أساسًا لنفي الجمل الاسمية والصفات وبعض التراكيب، أما الفعل çalışmak في المضارع المستمر فيصبح çalışmıyorum.",

    rule:
        "الفعل + -ma/-me + الزمن + الشخص",

    examples: [
        {
            wrong: "Ben gitmek değilim.",
            correct: "Ben gitmiyorum."
        },
        {
            wrong: "O yemek yemiyor değil.",
            correct: "O yemek yemiyor."
        }
    ],

    keywords: [
        "değil",
        "النفي",
        "الأفعال",
        "çalışmıyorum"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 164,
    title: "الخلط بين hiç و hiçbir",
    category: "النفي",
    level: "متوسط",

    wrong: "Ben hiçbir gitmedim.",
    correct: "Ben hiç gitmedim.",

    shortExplanation:
        "hiç تستخدم مع الفعل بمعنى أبدًا، بينما hiçbir تأتي عادة قبل الاسم بمعنى لا أي/ولا أي.",

    explanation:
        "نقول hiç gitmedim أي لم أذهب أبدًا، ونقول hiçbir şey görmedim أي لم أرَ أي شيء.",

    rule:
        "hiç + فعل، hiçbir + اسم",

    examples: [
        {
            wrong: "Hiçbir anlamıyorum.",
            correct: "Hiç anlamıyorum."
        },
        {
            wrong: "Hiç insan gelmedi.",
            correct: "Hiçbir insan gelmedi."
        }
    ],

    keywords: [
        "hiç",
        "hiçbir",
        "النفي"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 165,
    title: "الخلط بين kim و kimi",
    category: "السؤال",
    level: "متوسط",

    wrong: "Kimi geldi?",
    correct: "Kim geldi?",

    shortExplanation:
        "kim تستخدم للسؤال عن الفاعل، بينما kimi تستخدم غالبًا للسؤال عن المفعول به المحدد.",

    explanation:
        "Kim geldi? تعني من جاء؟ أما Kimi gördün? فتعني من رأيت؟ لأن الشخص هنا مفعول به.",

    rule:
        "kim = من؟ كفاعل، kimi = من؟ كمفعول به",

    examples: [
        {
            wrong: "Kimi seni aradı?",
            correct: "Kim seni aradı?"
        },
        {
            wrong: "Kim gördün?",
            correct: "Kimi gördün?"
        }
    ],

    keywords: [
        "kim",
        "kimi",
        "السؤال",
        "المفعول به"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 166,
    title: "الخلط بين ne و neyi",
    category: "السؤال",
    level: "متوسط",

    wrong: "Neyi bu?",
    correct: "Bu ne?",

    shortExplanation:
        "ne للسؤال عن ماهية الشيء، بينما neyi تسأل عن الشيء بوصفه مفعولًا به.",

    explanation:
        "Bu ne? تعني ما هذا؟ أما Neyi aldın? فتعني ماذا اشتريت؟",

    rule:
        "ne = ما؟، neyi = ماذا؟ كمفعول به محدد",

    examples: [
        {
            wrong: "Neyi bu?",
            correct: "Bu ne?"
        },
        {
            wrong: "Ne aldın?",
            correct: "Ne aldın?"
        }
    ],

    keywords: [
        "ne",
        "neyi",
        "السؤال"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 167,
    title: "نسيان أداة السؤال mı/mi/mu/mü",
    category: "السؤال",
    level: "مبتدئ",

    wrong: "Sen Türkçe konuşuyorsun?",
    correct: "Sen Türkçe konuşuyor musun?",

    shortExplanation:
        "السؤال بنعم أو لا يحتاج إلى أداة السؤال المناسبة.",

    explanation:
        "في التركية تستخدم mı/mi/mu/mü لصناعة السؤال، وتتغير حسب انسجام الحروف الصوتية.",

    rule:
        "mı / mi / mu / mü",

    examples: [
        {
            wrong: "Sen geliyor?",
            correct: "Sen geliyor musun?"
        },
        {
            wrong: "Bu güzel mi?",
            correct: "Bu güzel mi?"
        }
    ],

    keywords: [
        "mı",
        "mi",
        "mu",
        "mü",
        "السؤال"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 168,
    title: "وضع لاحقة السؤال في المكان الخطأ",
    category: "السؤال",
    level: "متوسط",

    wrong: "Mi sen Türkçe konuşuyorsun?",
    correct: "Sen Türkçe konuşuyor musun?",

    shortExplanation:
        "أداة السؤال تأتي بعد الجزء الذي نريد تحويله إلى سؤال وبحسب تركيب الجملة.",

    explanation:
        "في السؤال العام عن الفعل، نقول konuşuyor musun؟ وتأتي أداة السؤال بعد الفعل مع لاحقة الشخص المناسبة.",

    rule:
        "الفعل + mi/mı/mu/mü + لاحقة الشخص",

    examples: [
        {
            wrong: "Sen geliyor mi?",
            correct: "Sen geliyor musun?"
        },
        {
            wrong: "Ali çalışıyor mu?",
            correct: "Ali çalışıyor mu?"
        }
    ],

    keywords: [
        "أداة السؤال",
        "musun",
        "mu",
        "السؤال"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 169,
    title: "الخلط بين ne zaman و ne zamandır",
    category: "السؤال",
    level: "متوسط",

    wrong: "Ne zamandır geldin?",
    correct: "Ne zaman geldin?",

    shortExplanation:
        "ne zaman تعني متى، بينما ne zamandır تسأل غالبًا عن مدة استمرار حالة أو فعل.",

    explanation:
        "Ne zaman geldin? تعني متى أتيت؟ أما Ne zamandır burada yaşıyorsun? فتعني منذ متى تعيش هنا؟",

    rule:
        "ne zaman = متى، ne zamandır = منذ متى/منذ كم مدة",

    examples: [
        {
            wrong: "Ne zamandır geldin?",
            correct: "Ne zaman geldin?"
        },
        {
            wrong: "Ne zaman burada yaşıyorsun?",
            correct: "Ne zamandır burada yaşıyorsun?"
        }
    ],

    keywords: [
        "ne zaman",
        "ne zamandır",
        "متى",
        "منذ متى"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 170,
    title: "الخلط بين beri و önce",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "İki yıl önce burada yaşıyorum.",
    correct: "İki yıldır burada yaşıyorum.",

    shortExplanation:
        "beri و -dır/-dir تستخدم للتعبير عن استمرار حالة بدأت في الماضي، بينما önce تشير إلى وقت سابق.",

    explanation:
        "إذا كان الفعل بدأ في الماضي وما زال مستمرًا نقول iki yıldır أو iki yıldan beri. أما iki yıl önce فتعني قبل سنتين وتشير إلى نقطة زمنية سابقة.",

    rule:
        "iki yıldır / iki yıldan beri = منذ سنتين",

    examples: [
        {
            wrong: "Üç ay önce burada çalışıyorum.",
            correct: "Üç aydır burada çalışıyorum."
        },
        {
            wrong: "Beş yıldır önce İstanbul'a geldim.",
            correct: "Beş yıl önce İstanbul'a geldim."
        }
    ],

    keywords: [
        "beri",
        "önce",
        "منذ",
        "قبل"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 171,
    title: "الخلط بين -dır و -dir في التعبير عن المدة",
    category: "الأزمنة",
    level: "متوسط",

    wrong: "İki yıldır önce burada yaşıyorum.",
    correct: "İki yıldır burada yaşıyorum.",

    shortExplanation:
        "عند التعبير عن مدة مستمرة، تأتي -dır/-dir بعد مدة الزمن.",

    explanation:
        "صيغة مثل iki yıldır burada yaşıyorum تعني أعيش هنا منذ سنتين وما زلت أعيش هنا.",

    rule:
        "مدة + -dır/-dir + فعل مستمر",

    examples: [
        {
            wrong: "Üç aydır önce Türkçe öğreniyorum.",
            correct: "Üç aydır Türkçe öğreniyorum."
        },
        {
            wrong: "Bir haftadır önce hastayım.",
            correct: "Bir haftadır hastayım."
        }
    ],

    keywords: [
        "-dır",
        "المدة",
        "منذ",
        "الأزمنة"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 172,
    title: "الخلط بين -ecek و -iyor عند الحديث عن المستقبل",
    category: "tenses",
    level: "متوسط",

    wrong: "Yarın İstanbul'a gidiyorum." ,
    correct: "Yarın İstanbul'a gideceğim.",

    shortExplanation:
        "المضارع المستمر قد يستخدم للمستقبل المخطط، لكن في سياقات معينة يكون -ecek أوضح للتعبير عن المستقبل.",

    explanation:
        "التركية تستخدم المضارع المستمر أحيانًا للمواعيد والخطط القريبة، لذلك Yarın İstanbul'a gidiyorum ليست دائمًا خاطئة. لكن gideceğim تستخدم بشكل واضح للمستقبل.",

    rule:
        "-ecek/-acak للمستقبل، و-iyor قد يستخدم للمستقبل المخطط",

    examples: [
        {
            wrong: "Yarın sınava gireceğim.",
            correct: "Yarın sınava gireceğim."
        },
        {
            wrong: "Bu akşam arkadaşlarımla buluşuyorum.",
            correct: "Bu akşam arkadaşlarımla buluşuyorum."
        }
    ],

    keywords: [
        "المستقبل",
        "-ecek",
        "-iyor",
        "الخطط"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 173,
    title: "استخدام الماضي المستمر بدل الماضي البسيط",
    category: "tenses",
    level: "متوسط",

    wrong: "Dün saat üçte markete gittimken...",
    correct: "Dün saat üçte markete giderken...",

    shortExplanation:
        "عند التعبير عن فعل كان يحدث أثناء وقوع فعل آخر نستخدم غالبًا -ken مع الجذر المناسب.",

    explanation:
        "giderken تعني أثناء ذهابي/بينما كنت ذاهبًا. لا نستخدم gittimken في هذا السياق إذا كان المقصود فعلًا مستمرًا أثناء وقوع حدث آخر.",

    rule:
        "الفعل + -(y)ken",

    examples: [
        {
            wrong: "Eve geldimken onu gördüm.",
            correct: "Eve gelirken onu gördüm."
        },
        {
            wrong: "Yemek yedimken telefon çaldı.",
            correct: "Yemek yerken telefon çaldı."
        }
    ],

    keywords: [
        "ken",
        "أثناء",
        "الماضي المستمر"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 174,
    title: "الخلط بين -ken و sonra",
    category: "حروف الجر والأدوات",
    level: "متوسط",

    wrong: "Yemek yedikten yemek yaptım.",
    correct: "Yemek yedikten sonra yemek yaptım.",

    shortExplanation:
        "عند قول بعد أن فعلت شيئًا نستخدم -dikten sonra.",

    explanation:
        "التركيب yedikten sonra يعني بعد أن أكلت. لا يكفي استخدام yedikten وحدها عندما نريد التعبير عن الترتيب الزمني بهذا الشكل.",

    rule:
        "جذر/فعل + -dik + لاحقة ablative + sonra",

    examples: [
        {
            wrong: "Ders bitirdikten eve gittim.",
            correct: "Ders bittikten sonra eve gittim."
        },
        {
            wrong: "Uyandıktan kahvaltı yaptım.",
            correct: "Uyandıktan sonra kahvaltı yaptım."
        }
    ],

    keywords: [
        "sonra",
        "-dikten sonra",
        "بعد أن"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 175,
    title: "نسيان توافق حروف العلة في اللواحق",
    category: "suffixes",
    level: "مبتدئ",

    wrong: "Evlar",
    correct: "Evler",

    shortExplanation:
        "اللواحق التركية تتغير حسب انسجام حروف العلة.",

    explanation:
        "إذا كان آخر حرف علة في الكلمة من المجموعة الأمامية نستخدم e، وإذا كان من المجموعة الخلفية نستخدم a. لذلك ev → evler، بينما araba → arabalar.",

    rule:
        "انسجام حروف العلة",

    examples: [
        {
            wrong: "Kitablar",
            correct: "Kitaplar"
        },
        {
            wrong: "Güllar",
            correct: "Güller"
        }
    ],

    keywords: [
        "انسجام الحروف",
        "اللواحق",
        "ler",
        "lar"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 176,
    title: "نسيان التغيير الصوتي في بعض الكلمات",
    category: "suffixes",
    level: "متوسط",

    wrong: "Kitapı",
    correct: "Kitabı",

    shortExplanation:
        "بعض الكلمات التي تنتهي بحروف صامتة مهموسة تتغير عند إضافة لاحقة تبدأ بحرف علة.",

    explanation:
        "في بعض الكلمات يحدث تغير صوتي مثل p → b، t → d، k → ğ، ç → c عند إضافة بعض اللواحق التي تبدأ بحرف علة. لذلك kitap + ı تصبح kitabı.",

    rule:
        "p→b، t→d، k→ğ، ç→c في بعض السياقات",

    examples: [
        {
            wrong: "Ağaçın",
            correct: "Ağacın"
        },
        {
            wrong: "Çiçeki",
            correct: "Çiçeği"
        }
    ],

    keywords: [
        "التغير الصوتي",
        "kitap",
        "kitabı",
        "اللواحق"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 177,
    title: "الخلط بين -ler و -ları في الملكية",
    category: "suffixes",
    level: "متوسط",

    wrong: "Onlar kitaplar.",
    correct: "Onların kitapları var.",

    shortExplanation:
        "الجمع والملكية شيءان مختلفان، وقد نحتاج إلى لاحقة الجمع ثم لاحقة الملكية.",

    explanation:
        "kitaplar تعني كتب، بينما kitapları قد تعني كتبهم أو كتبه/كتبها حسب السياق. عند التعبير عن ملكية جماعية نقول onların kitapları.",

    rule:
        "الجمع لا يعني الملكية",

    examples: [
        {
            wrong: "Biz araba var.",
            correct: "Bizim arabamız var."
        },
        {
            wrong: "Onlar ev var.",
            correct: "Onların evleri var."
        }
    ],

    keywords: [
        "الملكية",
        "الجمع",
        "kitapları",
        "onların"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 178,
    title: "الخلط بين kendi و kendisi",
    category: "كلمات متشابهة",
    level: "فوق متوسط",

    wrong: "Ali kendi söyledi.",
    correct: "Ali kendisi söyledi.",

    shortExplanation:
        "kendi و kendisi تختلفان حسب تركيب الجملة ووظيفة الضمير.",

    explanation:
        "kendi غالبًا تحتاج إلى لاحقة أو تأتي في تركيب ملكية/انعكاسي، بينما kendisi تعني هو نفسه في بعض السياقات.",

    rule:
        "kendi + لاحقة مناسبة حسب الوظيفة",

    examples: [
        {
            wrong: "O kendi yaptı.",
            correct: "O kendisi yaptı."
        },
        {
            wrong: "Kendisi evine gitti.",
            correct: "Kendisi evine gitti."
        }
    ],

    keywords: [
        "kendi",
        "kendisi",
        "الضمائر"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 179,
    title: "الخلط بين yalnız و sadece",
    category: "كلمات متشابهة",
    level: "متوسط",

    wrong: "Sadece başıma gitmek istiyorum.",
    correct: "Yalnız başıma gitmek istiyorum.",

    shortExplanation:
        "yalnız قد تعني وحيدًا، بينما sadece تعني فقط، رغم وجود سياقات يمكن أن تتقارب فيها المعاني.",

    explanation:
        "عندما تريد قول أريد الذهاب وحدي، يكون yalnız başıma أو tek başıma مناسبًا. أما sadece فهو يعني فقط ويستخدم للتحديد أو الحصر.",

    rule:
        "sadece = فقط، yalnız = وحيد/وحده حسب السياق",

    examples: [
        {
            wrong: "Sadece başıma yaşamak istiyorum.",
            correct: "Yalnız yaşamak istiyorum."
        },
        {
            wrong: "Yalnız bunu istiyorum.",
            correct: "Sadece bunu istiyorum."
        }
    ],

    keywords: [
        "yalnız",
        "sadece",
        "فقط",
        "وحدي"
    ],

    published: true,
    createdAt: "2026-08-26"
},


{
    id: 180,
    title: "استخدام حرف الجر العربي حرفيًا في التركية",
    category: "أخطاء الترجمة من العربية",
    level: "فوق متوسط",

    wrong: "Sana göre bence bu konu hakkında göre konuşmalıyız.",
    correct: "Bence bu konu hakkında konuşmalıyız.",

    shortExplanation:
        "التركية لا تستخدم الأدوات بنفس طريقة العربية، لذلك الترجمة الحرفية قد تنتج تركيبًا غير طبيعي.",

    explanation:
        "المتعلم العربي قد يكرر أدوات مثل عن، على، بالنسبة إلى، وفقًا لـ بشكل زائد عند ترجمة الجملة حرفيًا. الأفضل فهم وظيفة الأداة في التركية واختيار التركيب التركي الطبيعي.",

    rule:
        "لا تترجم حروف الجر العربية حرفيًا؛ افهم وظيفة التركيب التركي.",

    examples: [
        {
            wrong: "Bu konu hakkında göre konuşalım.",
            correct: "Bu konu hakkında konuşalım."
        },
        {
            wrong: "Bana göre hakkında bu doğru.",
            correct: "Bana göre bu doğru."
        }
    ],

    keywords: [
        "الترجمة",
        "حروف الجر",
        "العربية",
        "الترجمة الحرفية"
    ],

    published: true,
    createdAt: "2026-08-26"
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
