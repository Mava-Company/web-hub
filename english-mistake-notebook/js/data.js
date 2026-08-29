/* =================================
   English Mistake Notebook
   Central Data Source
================================= */

"use strict";


/* =================================
   English Mistakes
================================= */

const mistakesData = [

    {
        id: 1,
        mistake: "I am agree with you.",
        correction: "I agree with you.",
        explanation:
            '“Agree” is a verb, so we do not use “am” before it. Use “I agree” to express your opinion.',
        example:
            "I agree with you about the importance of practice.",
        category: "grammar",
        level: "A2",
        views: 1240,
        date: "2026-08-01"
    },


    {
        id: 2,
        mistake: "She go to school every day.",
        correction: "She goes to school every day.",
        explanation:
            'In the present simple, we usually add “-s” or “-es” to the verb when the subject is he, she, or it.',
        example:
            "She goes to school by bus every morning.",
        category: "tenses",
        level: "A1",
        views: 2180,
        date: "2026-08-02"
    },


    {
        id: 3,
        mistake: "I have 20 years.",
        correction: "I am 20 years old.",
        explanation:
            'In English, we use the verb “be” to talk about age, not “have”.',
        example:
            "I am 20 years old.",
        category: "common-mistakes",
        level: "A1",
        views: 3420,
        date: "2026-08-03"
    },


    {
        id: 4,
        mistake: "I went to home yesterday.",
        correction: "I went home yesterday.",
        explanation:
            'We normally do not use a preposition before “home” when we mean going to or being at our own home.',
        example:
            "I went home after work.",
        category: "prepositions",
        level: "A2",
        views: 1760,
        date: "2026-08-04"
    },


    {
        id: 5,
        mistake: "She is married with John.",
        correction: "She is married to John.",
        explanation:
            'The correct preposition after “married” when talking about a person is “to”.',
        example:
            "She has been married to John for five years.",
        category: "prepositions",
        level: "B1",
        views: 980,
        date: "2026-08-05"
    },


    {
        id: 6,
        mistake: "I have a good news for you.",
        correction: "I have good news for you.",
        explanation:
            '“News” is an uncountable noun, so we do not normally use “a” directly before it.',
        example:
            "I have some good news for you.",
        category: "articles",
        level: "B1",
        views: 1540,
        date: "2026-08-06"
    },


    {
        id: 7,
        mistake: "He don't like coffee.",
        correction: "He doesn't like coffee.",
        explanation:
            'With “he”, “she”, and “it” in the present simple negative, use “doesn’t”, not “don’t”.',
        example:
            "He doesn't like coffee, but he loves tea.",
        category: "grammar",
        level: "A1",
        views: 2870,
        date: "2026-08-07"
    },


    {
        id: 8,
        mistake: "I didn't went there.",
        correction: "I didn't go there.",
        explanation:
            'After “didn’t”, use the base form of the verb, not the past form.',
        example:
            "I didn't go to the party last night.",
        category: "tenses",
        level: "A2",
        views: 2640,
        date: "2026-08-08"
    },


    {
        id: 9,
        mistake: "She is good in English.",
        correction: "She is good at English.",
        explanation:
            'The usual preposition after “good” when talking about a skill is “at”.',
        example:
            "She is very good at English.",
        category: "prepositions",
        level: "A2",
        views: 1890,
        date: "2026-08-09"
    },


    {
        id: 10,
        mistake: "I look forward to meet you.",
        correction: "I look forward to meeting you.",
        explanation:
            'In “look forward to”, “to” is a preposition, so it is followed by a noun or an -ing form.',
        example:
            "I look forward to meeting you soon.",
        category: "grammar",
        level: "B2",
        views: 3210,
        date: "2026-08-10"
    },


    {
        id: 11,
        mistake: "Can you explain me this?",
        correction: "Can you explain this to me?",
        explanation:
            'The verb “explain” is normally followed by the thing being explained, with “to” before the person.',
        example:
            "Can you explain this problem to me?",
        category: "word-order",
        level: "B1",
        views: 1430,
        date: "2026-08-11"
    },


    {
        id: 12,
        mistake: "I am living here since 2020.",
        correction: "I have been living here since 2020.",
        explanation:
            'Use the present perfect continuous for an action that started in the past and is still continuing.',
        example:
            "I have been living here since 2020.",
        category: "tenses",
        level: "B2",
        views: 2350,
        date: "2026-08-12"
    },


    {
        id: 13,
        mistake: "I made a mistake in the homework.",
        correction: "I made a mistake in my homework.",
        explanation:
            'When referring to homework assigned to you, “my homework” is more natural than “the homework” in this context.',
        example:
            "I made a mistake in my homework.",
        category: "vocabulary",
        level: "A2",
        views: 870,
        date: "2026-08-13"
    },


    {
        id: 14,
        mistake: "He said me that he was tired.",
        correction: "He told me that he was tired.",
        explanation:
            'Use “tell” when you mention the person receiving the information directly: “tell someone”.',
        example:
            "He told me that he was tired.",
        category: "vocabulary",
        level: "B1",
        views: 2110,
        date: "2026-08-14"
    },


    {
        id: 15,
        mistake: "I am interesting in music.",
        correction: "I am interested in music.",
        explanation:
            '“Interested” describes how a person feels. “Interesting” describes something that creates interest.',
        example:
            "I am interested in classical music.",
        category: "vocabulary",
        level: "B1",
        views: 2760,
        date: "2026-08-15"
    },


    {
        id: 16,
        mistake: "I need an information.",
        correction: "I need some information.",
        explanation:
            '“Information” is an uncountable noun, so we do not normally say “an information”.',
        example:
            "I need some information about the course.",
        category: "articles",
        level: "B1",
        views: 1680,
        date: "2026-08-16"
    },


    {
        id: 17,
        mistake: "Where you are going?",
        correction: "Where are you going?",
        explanation:
            'In most English questions, the auxiliary or verb comes before the subject.',
        example:
            "Where are you going after work?",
        category: "questions",
        level: "A1",
        views: 2490,
        date: "2026-08-17"
    },


    {
        id: 18,
        mistake: "I don't know nothing.",
        correction: "I don't know anything.",
        explanation:
            'Standard English normally avoids using two negatives in the same clause. Use “anything” with “don’t”.',
        example:
            "I don't know anything about it.",
        category: "negation",
        level: "B1",
        views: 1940,
        date: "2026-08-18"
    },


    {
        id: 19,
        mistake: "She can to swim.",
        correction: "She can swim.",
        explanation:
            'After modal verbs such as “can”, use the base form of the verb without “to”.',
        example:
            "She can swim very well.",
        category: "grammar",
        level: "A1",
        views: 2260,
        date: "2026-08-19"
    },


    {
        id: 20,
        mistake: "I am waiting you.",
        correction: "I am waiting for you.",
        explanation:
            'The verb “wait” normally takes the preposition “for” before the person or thing being waited for.',
        example:
            "I am waiting for you outside.",
        category: "prepositions",
        level: "A2",
        views: 2030,
        date: "2026-08-20"
    },


    {
        id: 21,
        mistake: "I have to wake up early tomorrow.",
        correction: "I have to wake up early tomorrow.",
        explanation:
            'This sentence is already correct. It is useful as a comparison example because “wake up” is a phrasal verb.',
        example:
            "I have to wake up early tomorrow.",
        category: "phrasal-verbs",
        level: "A1",
        views: 720,
        date: "2026-08-21"
    },


    {
        id: 22,
        mistake: "I am agree about this idea.",
        correction: "I agree with this idea.",
        explanation:
            'Use “agree with” when you mean that you share someone’s opinion or accept an idea.',
        example:
            "I agree with your idea.",
        category: "common-mistakes",
        level: "A2",
        views: 1320,
        date: "2026-08-22"
    },


    {
        id: 23,
        mistake: "He has went to London.",
        correction: "He has gone to London.",
        explanation:
            'After “has” or “have”, use the past participle. The past participle of “go” is “gone”.',
        example:
            "He has gone to London for a business meeting.",
        category: "tenses",
        level: "B1",
        views: 1870,
        date: "2026-08-23"
    },


    {
        id: 24,
        mistake: "I am boring.",
        correction: "I am bored.",
        explanation:
            '“Bored” describes how a person feels, while “boring” describes something that causes boredom.',
        example:
            "I am bored because there is nothing to do.",
        category: "vocabulary",
        level: "A2",
        views: 2980,
        date: "2026-08-24"
    },


    {
        id: 25,
        mistake: "She speaks English very good.",
        correction: "She speaks English very well.",
        explanation:
            '“Well” is the adverb used to describe how someone performs an action such as speaking.',
        example:
            "She speaks English very well.",
        category: "grammar",
        level: "A2",
        views: 3120,
        date: "2026-08-25"
    },


    {
        id: 26,
        mistake: "I used to playing football.",
        correction: "I used to play football.",
        explanation:
            '“Used to” is followed by the base form of the verb when talking about a past habit or situation.',
        example:
            "I used to play football when I was younger.",
        category: "grammar",
        level: "B1",
        views: 1590,
        date: "2026-08-26"
    },


    {
        id: 27,
        mistake: "It depends of the situation.",
        correction: "It depends on the situation.",
        explanation:
            'The verb “depend” is normally followed by the preposition “on”.',
        example:
            "It depends on the situation.",
        category: "prepositions",
        level: "B1",
        views: 2240,
        date: "2026-08-27"
    },


    {
        id: 28,
        mistake: "I look for my keys everywhere yesterday.",
        correction: "I looked for my keys everywhere yesterday.",
        explanation:
            'Use the past simple when talking about a completed action at a specific time in the past.',
        example:
            "I looked for my keys everywhere yesterday.",
        category: "tenses",
        level: "A2",
        views: 910,
        date: "2026-08-28"
    },


    {
        id: 29,
        mistake: "Could you borrow me your pen?",
        correction: "Could you lend me your pen?",
        explanation:
            '“Lend” means to give something to someone temporarily. “Borrow” means to receive something temporarily.',
        example:
            "Could you lend me your pen for a minute?",
        category: "vocabulary",
        level: "B1",
        views: 2670,
        date: "2026-08-29"
    },


    {
        id: 30,
        mistake: "I am looking forward to see you.",
        correction: "I am looking forward to seeing you.",
        explanation:
            'In “look forward to”, “to” is a preposition, so the following verb takes the -ing form.',
        example:
            "I am looking forward to seeing you next week.",
        category: "phrasal-verbs",
        level: "B2",
        views: 2310,
        date: "2026-08-29"
    },
{
    id: 31,
    mistake: "She don't like coffee.",
    correction: "She doesn't like coffee.",
    explanation:
        'With “she”, “he”, and “it” in the present simple, we use “doesn’t”, not “don’t”.',
    example:
        "She doesn't like coffee, but she loves tea.",
    category: "grammar",
    level: "A1",
    views: 1875,
    date: "2026-08-29"
},

{
    id: 32,
    mistake: "I have 25 years old.",
    correction: "I am 25 years old.",
    explanation:
        'In English, we use the verb “be” to talk about age. We do not use “have” for age.',
    example:
        "I am 25 years old.",
    category: "translation",
    level: "A1",
    views: 1642,
    date: "2026-08-29"
},

{
    id: 33,
    mistake: "He go to work every day.",
    correction: "He goes to work every day.",
    explanation:
        'In the present simple, a third-person singular subject such as “he” requires the verb to end in -s or -es.',
    example:
        "He goes to work by bus every day.",
    category: "tenses",
    level: "A1",
    views: 2190,
    date: "2026-08-29"
},

{
    id: 34,
    mistake: "There is many people here.",
    correction: "There are many people here.",
    explanation:
        '“People” is plural, so we use “there are”, not “there is”.',
    example:
        "There are many people waiting outside.",
    category: "grammar",
    level: "A2",
    views: 1428,
    date: "2026-08-29"
},

{
    id: 35,
    mistake: "I went to home after work.",
    correction: "I went home after work.",
    explanation:
        'When “home” means your house or usual place of residence, we normally do not use “to” before it after verbs such as “go” and “come”.',
    example:
        "I went home early because I was tired.",
    category: "prepositions",
    level: "A2",
    views: 1764,
    date: "2026-08-29"
},

{
    id: 36,
    mistake: "I have seen him yesterday.",
    correction: "I saw him yesterday.",
    explanation:
        'We normally use the past simple with a finished time expression such as “yesterday”.',
    example:
        "I saw him yesterday at the train station.",
    category: "tenses",
    level: "A2",
    views: 2518,
    date: "2026-08-29"
},

{
    id: 37,
    mistake: "She is married with a doctor.",
    correction: "She is married to a doctor.",
    explanation:
        'The standard preposition used with “married” when identifying a spouse is “to”.',
    example:
        "She is married to a doctor who works at the local hospital.",
    category: "prepositions",
    level: "B1",
    views: 1326,
    date: "2026-08-29"
},

{
    id: 38,
    mistake: "I need an information.",
    correction: "I need some information.",
    explanation:
        '“Information” is an uncountable noun, so we do not normally use “an” before it. Use “some information” or “a piece of information”.',
    example:
        "I need some information about the course.",
    category: "articles",
    level: "B1",
    views: 1987,
    date: "2026-08-29"
},

{
    id: 39,
    mistake: "Can you explain me this problem?",
    correction: "Can you explain this problem to me?",
    explanation:
        'The verb “explain” is normally followed by the thing being explained, with “to” before the person receiving the explanation.',
    example:
        "Can you explain this rule to me?",
    category: "word-order",
    level: "B1",
    views: 1543,
    date: "2026-08-29"
},

{
    id: 40,
    mistake: "I am boring.",
    correction: "I am bored.",
    explanation:
        '“Bored” describes how a person feels, while “boring” describes something that causes the feeling.',
    example:
        "I am bored because the movie is boring.",
    category: "vocabulary",
    level: "A2",
    views: 2876,
    date: "2026-08-29"
},

{
    id: 41,
    mistake: "I have been to London last year.",
    correction: "I went to London last year.",
    explanation:
        'A finished past time such as “last year” normally requires the past simple, not the present perfect.',
    example:
        "I went to London last year for a business conference.",
    category: "tenses",
    level: "B1",
    views: 2104,
    date: "2026-08-29"
},

{
    id: 42,
    mistake: "She suggested me to take a taxi.",
    correction: "She suggested taking a taxi.",
    explanation:
        '“Suggest” is not normally followed by an object + infinitive. We can use “suggest + -ing” or “suggest that + subject + verb”.',
    example:
        "She suggested taking a taxi because it was raining.",
    category: "grammar",
    level: "B2",
    views: 1759,
    date: "2026-08-29"
},

{
    id: 43,
    mistake: "I am used to wake up early.",
    correction: "I am used to waking up early.",
    explanation:
        'In “be used to”, “to” is a preposition, so it is followed by a noun or the -ing form of a verb.',
    example:
        "I am used to waking up early for work.",
    category: "grammar",
    level: "B2",
    views: 2217,
    date: "2026-08-29"
},

{
    id: 44,
    mistake: "He said me that he was tired.",
    correction: "He told me that he was tired.",
    explanation:
        '“Tell” can be followed directly by a person, while “say” is normally followed by the information rather than the person.',
    example:
        "He told me that he was too tired to continue.",
    category: "vocabulary",
    level: "B1",
    views: 1934,
    date: "2026-08-29"
},

{
    id: 45,
    mistake: "I didn't went there.",
    correction: "I didn't go there.",
    explanation:
        'After “didn’t”, we use the base form of the verb, not the past form.',
    example:
        "I didn't go there because I wasn't feeling well.",
    category: "negation",
    level: "A2",
    views: 2641,
    date: "2026-08-29"
},

{
    id: 46,
    mistake: "Where you are going?",
    correction: "Where are you going?",
    explanation:
        'In most English questions, the auxiliary verb comes before the subject.',
    example:
        "Where are you going after work?",
    category: "questions",
    level: "A1",
    views: 2398,
    date: "2026-08-29"
},

{
    id: 47,
    mistake: "I don't know nothing about it.",
    correction: "I don't know anything about it.",
    explanation:
        'In standard English, we normally avoid using two negative words in the same clause. Use “anything” with “don’t”.',
    example:
        "I don't know anything about the new project.",
    category: "negation",
    level: "B1",
    views: 1832,
    date: "2026-08-29"
},

{
    id: 48,
    mistake: "I am living here since 2020.",
    correction: "I have been living here since 2020.",
    explanation:
        'For an action that started in the past and continues now, we commonly use the present perfect continuous with “since”.',
    example:
        "I have been living here since 2020.",
    category: "tenses",
    level: "B1",
    views: 2467,
    date: "2026-08-29"
},

{
    id: 49,
    mistake: "He is good in mathematics.",
    correction: "He is good at mathematics.",
    explanation:
        'The standard preposition used after “good” when talking about ability or skill is “at”.',
    example:
        "She is very good at mathematics.",
    category: "prepositions",
    level: "A2",
    views: 1298,
    date: "2026-08-29"
},

{
    id: 50,
    mistake: "I look forward to meet you.",
    correction: "I look forward to meeting you.",
    explanation:
        'In “look forward to”, “to” is a preposition, so it is followed by a noun or the -ing form.',
    example:
        "I look forward to meeting you in person.",
    category: "phrasal-verbs",
    level: "B2",
    views: 2784,
    date: "2026-08-29"
},

{
    id: 51,
    mistake: "She made me to laugh.",
    correction: "She made me laugh.",
    explanation:
        'After “make” + object, we use the base form of the verb without “to”.',
    example:
        "Her story made me laugh.",
    category: "grammar",
    level: "B2",
    views: 1587,
    date: "2026-08-29"
},

{
    id: 52,
    mistake: "I have a good news for you.",
    correction: "I have some good news for you.",
    explanation:
        '“News” is an uncountable noun, so we do not say “a news”. We can say “some news” or “a piece of news”.',
    example:
        "I have some good news for you.",
    category: "articles",
    level: "B1",
    views: 2315,
    date: "2026-08-29"
},

{
    id: 53,
    mistake: "He explained me why he was late.",
    correction: "He explained to me why he was late.",
    explanation:
        'When “explain” is followed by a person, we normally use “to” before the person.',
    example:
        "He explained to me why the meeting had been cancelled.",
    category: "word-order",
    level: "B1",
    views: 1459,
    date: "2026-08-29"
},

{
    id: 54,
    mistake: "I have less friends than before.",
    correction: "I have fewer friends than before.",
    explanation:
        '“Friends” is a countable plural noun, so “fewer” is preferred when comparing quantities.',
    example:
        "I have fewer friends here than I had at university.",
    category: "vocabulary",
    level: "B2",
    views: 1694,
    date: "2026-08-29"
},

{
    id: 55,
    mistake: "She works hardly every day.",
    correction: "She works hard every day.",
    explanation:
        '“Hard” means with a lot of effort. “Hardly” means almost not, so it changes the meaning completely.',
    example:
        "She works hard every day to achieve her goals.",
    category: "vocabulary",
    level: "B2",
    views: 2051,
    date: "2026-08-29"
},

{
    id: 56,
    mistake: "I am interesting in history.",
    correction: "I am interested in history.",
    explanation:
        '“Interested” describes a person who has an interest in something. “Interesting” describes something that creates interest.',
    example:
        "I am interested in modern history.",
    category: "vocabulary",
    level: "A2",
    views: 2732,
    date: "2026-08-29"
},

{
    id: 57,
    mistake: "I will call you when I will arrive.",
    correction: "I will call you when I arrive.",
    explanation:
        'After time expressions such as “when”, “as soon as”, and “before” referring to the future, we normally use the present simple in the time clause.',
    example:
        "I will call you when I arrive at the airport.",
    category: "tenses",
    level: "B1",
    views: 2176,
    date: "2026-08-29"
},

{
    id: 58,
    mistake: "She has a long hairs.",
    correction: "She has long hair.",
    explanation:
        '“Hair” is usually uncountable when we are talking about the hair on someone’s head as a whole.',
    example:
        "She has long brown hair.",
    category: "grammar",
    level: "A2",
    views: 1167,
    date: "2026-08-29"
},

{
    id: 59,
    mistake: "I didn't used to like coffee.",
    correction: "I didn't use to like coffee.",
    explanation:
        'After “didn’t”, we use the base form “use”, not “used”.',
    example:
        "I didn't use to like coffee, but now I drink it every morning.",
    category: "tenses",
    level: "B2",
    views: 1876,
    date: "2026-08-29"
},

{
    id: 60,
    mistake: "Can you borrow me your pen?",
    correction: "Can you lend me your pen?",
    explanation:
        '“Lend” means to give something temporarily to another person. “Borrow” means to receive something temporarily from someone.',
    example:
        "Can you lend me your pen for a minute?",
    category: "vocabulary",
    level: "A2",
    views: 2493,
    date: "2026-08-29"
},

{
    id: 61,
    mistake: "I have been knowing him for years.",
    correction: "I have known him for years.",
    explanation:
        '“Know” is generally a stative verb, so we normally use the present perfect simple rather than the present perfect continuous.',
    example:
        "I have known him for more than ten years.",
    category: "tenses",
    level: "C1",
    views: 1324,
    date: "2026-08-29"
},

{
    id: 62,
    mistake: "Despite of the rain, we went out.",
    correction: "Despite the rain, we went out.",
    explanation:
        '“Despite” is followed directly by a noun or -ing form. Do not normally use “of” after “despite”.',
    example:
        "Despite the rain, we decided to go for a walk.",
    category: "prepositions",
    level: "B2",
    views: 1718,
    date: "2026-08-29"
},

{
    id: 63,
    mistake: "It depends of the situation.",
    correction: "It depends on the situation.",
    explanation:
        'The verb “depend” is normally followed by the preposition “on”.',
    example:
        "It depends on the situation.",
    category: "prepositions",
    level: "A2",
    views: 1945,
    date: "2026-08-29"
},

{
    id: 64,
    mistake: "I am agree with that idea.",
    correction: "I agree with that idea.",
    explanation:
        '“Agree” is a verb, not an adjective. We say “I agree”, not “I am agree”.',
    example:
        "I agree with that idea completely.",
    category: "common-mistakes",
    level: "A1",
    views: 3124,
    date: "2026-08-29"
},

{
    id: 65,
    mistake: "She told to me the truth.",
    correction: "She told me the truth.",
    explanation:
        '“Tell” can be followed directly by the person receiving the information, so we do not use “to” in this structure.',
    example:
        "She told me the truth about what happened.",
    category: "conversation",
    level: "B1",
    views: 1627,
    date: "2026-08-29"
},

{
    id: 66,
    mistake: "How long time does it take?",
    correction: "How long does it take?",
    explanation:
        'Use “how long” to ask about duration. “How long time” is not used in standard English.',
    example:
        "How long does it take to get to the city center?",
    category: "questions",
    level: "A2",
    views: 2365,
    date: "2026-08-29"
},

{
    id: 67,
    mistake: "I didn't understand what did he say.",
    correction: "I didn't understand what he said.",
    explanation:
        'In an embedded question, we use normal statement word order rather than question word order.',
    example:
        "I didn't understand what he said.",
    category: "questions",
    level: "B2",
    views: 1896,
    date: "2026-08-29"
},

{
    id: 68,
    mistake: "He suggested that we should to leave.",
    correction: "He suggested that we should leave.",
    explanation:
        'After the modal verb “should”, we use the base form of the verb without “to”.',
    example:
        "He suggested that we should leave before it gets dark.",
    category: "grammar",
    level: "B2",
    views: 1438,
    date: "2026-08-29"
},

{
    id: 69,
    mistake: "I have done a mistake.",
    correction: "I have made a mistake.",
    explanation:
        'The natural collocation is “make a mistake”, not “do a mistake”.',
    example:
        "I have made a mistake in the report.",
    category: "collocations",
    level: "A2",
    views: 2917,
    date: "2026-08-29"
},

{
    id: 70,
    mistake: "Please open the light.",
    correction: "Please turn on the light.",
    explanation:
        'For lights and electrical devices, English normally uses “turn on” rather than “open”.',
    example:
        "Could you turn on the light, please?",
    category: "phrasal-verbs",
    level: "A2",
    views: 2139,
    date: "2026-08-29"
},

{
    id: 71,
    mistake: "I must to go now.",
    correction: "I must go now.",
    explanation:
        '“Must” is a modal verb, so it is followed directly by the base form of the verb without “to”.',
    example:
        "I must go now because I have an appointment.",
    category: "grammar",
    level: "A2",
    views: 2458,
    date: "2026-08-29"
},

{
    id: 72,
    mistake: "She can sings very well.",
    correction: "She can sing very well.",
    explanation:
        'After modal verbs such as “can”, we use the base form of the verb.',
    example:
        "She can sing very well.",
    category: "grammar",
    level: "A1",
    views: 2267,
    date: "2026-08-29"
},

{
    id: 73,
    mistake: "I am waiting you outside.",
    correction: "I am waiting for you outside.",
    explanation:
        'The verb “wait” is normally followed by the preposition “for” before the person or thing being awaited.',
    example:
        "I am waiting for you outside the restaurant.",
    category: "prepositions",
    level: "A2",
    views: 1845,
    date: "2026-08-29"
},

{
    id: 74,
    mistake: "I have a lot of homeworks.",
    correction: "I have a lot of homework.",
    explanation:
        '“Homework” is an uncountable noun, so it does not normally have a plural form.',
    example:
        "I have a lot of homework tonight.",
    category: "spelling",
    level: "A2",
    views: 1576,
    date: "2026-08-29"
},

{
    id: 75,
    mistake: "He is responsible of the project.",
    correction: "He is responsible for the project.",
    explanation:
        'The adjective “responsible” is normally followed by the preposition “for”.',
    example:
        "She is responsible for managing the project.",
    category: "prepositions",
    level: "B1",
    views: 1683,
    date: "2026-08-29"
},

{
    id: 76,
    mistake: "I look forward for hearing from you.",
    correction: "I look forward to hearing from you.",
    explanation:
        'The fixed expression is “look forward to”. The “to” is a preposition, so it is followed by the -ing form.',
    example:
        "I look forward to hearing from you soon.",
    category: "phrasal-verbs",
    level: "B2",
    views: 2647,
    date: "2026-08-29"
},

{
    id: 77,
    mistake: "The informations are useful.",
    correction: "The information is useful.",
    explanation:
        '“Information” is uncountable and normally takes a singular verb. We do not normally use “informations” in standard English.',
    example:
        "The information is very useful.",
    category: "spelling",
    level: "B1",
    views: 1492,
    date: "2026-08-29"
},

{
    id: 78,
    mistake: "I have visited Paris three years ago.",
    correction: "I visited Paris three years ago.",
    explanation:
        'A finished time expression such as “three years ago” requires the past simple.',
    example:
        "I visited Paris three years ago.",
    category: "tenses",
    level: "A2",
    views: 2078,
    date: "2026-08-29"
},

{
    id: 79,
    mistake: "She asked me where was I going.",
    correction: "She asked me where I was going.",
    explanation:
        'In an indirect question, the subject comes before the verb, just as in a normal statement.',
    example:
        "She asked me where I was going.",
    category: "questions",
    level: "B2",
    views: 1937,
    date: "2026-08-29"
},

{
    id: 80,
    mistake: "I wish I can speak English fluently.",
    correction: "I wish I could speak English fluently.",
    explanation:
        'After “I wish” when talking about a present situation that we want to be different, we commonly use “could” for ability.',
    example:
        "I wish I could speak English more fluently.",
    category: "grammar",
    level: "B2",
    views: 2284,
    date: "2026-08-29"
},

{
    id: 81,
    mistake: "If I will have time, I will call you.",
    correction: "If I have time, I will call you.",
    explanation:
        'In the first conditional, the “if” clause normally uses the present simple, while the main clause uses “will”.',
    example:
        "If I have time, I will call you tonight.",
    category: "tenses",
    level: "B1",
    views: 2417,
    date: "2026-08-29"
},

{
    id: 82,
    mistake: "I would like that you come with us.",
    correction: "I would like you to come with us.",
    explanation:
        'The common structure is “would like + object + to-infinitive”.',
    example:
        "I would like you to come with us.",
    category: "grammar",
    level: "B1",
    views: 1762,
    date: "2026-08-29"
},

{
    id: 83,
    mistake: "This is more easier than I expected.",
    correction: "This is easier than I expected.",
    explanation:
        '“Easier” already contains the comparative form, so we do not normally add “more” before it.',
    example:
        "The exam was easier than I expected.",
    category: "grammar",
    level: "B1",
    views: 1598,
    date: "2026-08-29"
},

{
    id: 84,
    mistake: "She is one of the best student in the class.",
    correction: "She is one of the best students in the class.",
    explanation:
        'After “one of the”, the noun is normally plural because we are selecting one person from a group.',
    example:
        "She is one of the best students in the class.",
    category: "grammar",
    level: "B2",
    views: 1711,
    date: "2026-08-29"
},

{
    id: 85,
    mistake: "He has been working here since five years.",
    correction: "He has been working here for five years.",
    explanation:
        'Use “for” with a period of time and “since” with the starting point of an action.',
    example:
        "He has been working here for five years.",
    category: "prepositions",
    level: "B1",
    views: 2198,
    date: "2026-08-29"
},

{
    id: 86,
    mistake: "I am afraid from spiders.",
    correction: "I am afraid of spiders.",
    explanation:
        'The adjective “afraid” is followed by the preposition “of”.',
    example:
        "I am afraid of spiders.",
    category: "prepositions",
    level: "A2",
    views: 1357,
    date: "2026-08-29"
},

{
    id: 87,
    mistake: "She arrived to the airport late.",
    correction: "She arrived at the airport late.",
    explanation:
        'We normally use “arrive at” for specific places such as buildings and stations, and “arrive in” for cities and countries.',
    example:
        "She arrived at the airport late.",
    category: "prepositions",
    level: "B1",
    views: 2013,
    date: "2026-08-29"
},

{
    id: 88,
    mistake: "I am agree that this is important.",
    correction: "I agree that this is important.",
    explanation:
        '“Agree” is a verb, so it does not need the verb “be” before it.',
    example:
        "I agree that this is an important issue.",
    category: "common-mistakes",
    level: "A1",
    views: 2841,
    date: "2026-08-29"
},

{
    id: 89,
    mistake: "Could you tell me where is the station?",
    correction: "Could you tell me where the station is?",
    explanation:
        'After “Could you tell me…”, the following indirect question uses statement word order.',
    example:
        "Could you tell me where the nearest station is?",
    category: "questions",
    level: "B1",
    views: 2386,
    date: "2026-08-29"
},

{
    id: 90,
    mistake: "I didn't see nobody there.",
    correction: "I didn't see anybody there.",
    explanation:
        'In standard English, “didn’t” already makes the sentence negative, so we normally use “anybody” rather than another negative word.',
    example:
        "I didn't see anybody there.",
    category: "negation",
    level: "B1",
    views: 1679,
    date: "2026-08-29"
},

{
    id: 91,
    mistake: "He is very sensible about criticism.",
    correction: "He is very sensitive to criticism.",
    explanation:
        '“Sensitive” means easily affected by something, while “sensible” usually means practical and reasonable.',
    example:
        "He is very sensitive to criticism.",
    category: "vocabulary",
    level: "C1",
    views: 1284,
    date: "2026-08-29"
},

{
    id: 92,
    mistake: "The company has made a big success.",
    correction: "The company has achieved great success.",
    explanation:
        '“Success” is commonly used with “achieve” or “have”, while “make a success” has a different structure and meaning.',
    example:
        "The company has achieved great success in recent years.",
    category: "collocations",
    level: "C1",
    views: 1127,
    date: "2026-08-29"
},

{
    id: 93,
    mistake: "It is high time we leave.",
    correction: "It is high time we left.",
    explanation:
        'After “It is high time”, English commonly uses a past form to express that something should happen now or very soon.',
    example:
        "It is high time we left before the traffic gets worse.",
    category: "grammar",
    level: "C1",
    views: 1048,
    date: "2026-08-29"
},

{
    id: 94,
    mistake: "Had I knew about it, I would have helped.",
    correction: "Had I known about it, I would have helped.",
    explanation:
        'In this inverted third conditional, “had” is followed by the past participle “known”, not the past form “knew”.',
    example:
        "Had I known about the problem, I would have helped.",
    category: "grammar",
    level: "C2",
    views: 987,
    date: "2026-08-29"
},

{
    id: 95,
    mistake: "Not only he was late, but he also forgot the documents.",
    correction: "Not only was he late, but he also forgot the documents.",
    explanation:
        'When “not only” begins a sentence in a formal structure, subject-auxiliary inversion is normally used.',
    example:
        "Not only was he late, but he also forgot the documents.",
    category: "word-order",
    level: "C1",
    views: 1136,
    date: "2026-08-29"
},

{
    id: 96,
    mistake: "The results are comprised of three parts.",
    correction: "The results comprise three parts.",
    explanation:
        'In careful formal English, “comprise” can mean “consist of”, so “comprise” is followed directly by the whole rather than “of”.',
    example:
        "The report comprises three main sections.",
    category: "vocabulary",
    level: "C2",
    views: 876,
    date: "2026-08-29"
},

{
    id: 97,
    mistake: "I could care less about what he thinks.",
    correction: "I couldn't care less about what he thinks.",
    explanation:
       "The traditional expression is “couldn't care less”, meaning that it is impossible to care any less than you already do.",
    example:
        "I couldn't care less about what he thinks.",
    category: "common-mistakes",
    level: "C1",
    views: 1548,
    date: "2026-08-29"
},

{
    id: 98,
    mistake: "We discussed about the problem yesterday.",
    correction: "We discussed the problem yesterday.",
    explanation:
        '“Discuss” is a transitive verb, so it is followed directly by the topic. We do not normally use “about” after it.',
    example:
        "We discussed the problem during the meeting.",
    category: "prepositions",
    level: "B2",
    views: 2086,
    date: "2026-08-29"
},

{
    id: 99,
    mistake: "She is capable to solve the problem.",
    correction: "She is capable of solving the problem.",
    explanation:
        'The adjective “capable” is followed by “of” and a noun or -ing form, not normally by a to-infinitive.',
    example:
        "She is capable of solving the problem on her own.",
    category: "grammar",
    level: "B2",
    views: 1457,
    date: "2026-08-29"
},

{
    id: 100,
    mistake: "I look forward to hear from you.",
    correction: "I look forward to hearing from you.",
    explanation:
        '“Look forward to” is followed by a noun or -ing form because “to” is a preposition in this expression.',
    example:
        "I look forward to hearing from you soon.",
    category: "phrasal-verbs",
    level: "B2",
    views: 3256,
    date: "2026-08-29"
},
{
    id: 101,
    mistake: "She has went to the supermarket.",
    correction: "She has gone to the supermarket.",
    explanation:
        'After “has” in the present perfect, we use the past participle. The past participle of “go” is “gone”.',
    example:
        "She has gone to the supermarket and will be back soon.",
    category: "tenses",
    level: "A2",
    views: 1842,
    date: "2026-08-29"
},

{
    id: 102,
    mistake: "I didn't knew the answer.",
    correction: "I didn't know the answer.",
    explanation:
        'After “didn’t”, we use the base form of the verb, so “knew” becomes “know”.',
    example:
        "I didn't know the answer to the question.",
    category: "negation",
    level: "A1",
    views: 2156,
    date: "2026-08-29"
},

{
    id: 103,
    mistake: "She is teacher.",
    correction: "She is a teacher.",
    explanation:
        'Singular countable professions normally need an article such as “a” or “an”.',
    example:
        "She is a teacher at a local school.",
    category: "articles",
    level: "A1",
    views: 2478,
    date: "2026-08-29"
},

{
    id: 104,
    mistake: "I bought new car yesterday.",
    correction: "I bought a new car yesterday.",
    explanation:
        '“Car” is a singular countable noun, so it normally needs a determiner such as “a”, “the”, or “my”.',
    example:
        "I bought a new car yesterday.",
    category: "articles",
    level: "A1",
    views: 1987,
    date: "2026-08-29"
},

{
    id: 105,
    mistake: "He can to swim very well.",
    correction: "He can swim very well.",
    explanation:
        'Modal verbs such as “can” are followed directly by the base form of the verb without “to”.',
    example:
        "He can swim very well.",
    category: "grammar",
    level: "A1",
    views: 2314,
    date: "2026-08-29"
},

{
    id: 106,
    mistake: "I am go to work now.",
    correction: "I am going to work now.",
    explanation:
        'The present continuous requires the -ing form after “am/is/are”.',
    example:
        "I am going to work now.",
    category: "tenses",
    level: "A1",
    views: 1765,
    date: "2026-08-29"
},

{
    id: 107,
    mistake: "Do you have any brother?",
    correction: "Do you have any brothers?",
    explanation:
        'When asking about whether someone has one or more brothers, the plural form is normally used after “any”.',
    example:
        "Do you have any brothers or sisters?",
    category: "grammar",
    level: "A2",
    views: 1248,
    date: "2026-08-29"
},

{
    id: 108,
    mistake: "I like very much this song.",
    correction: "I like this song very much.",
    explanation:
        '“Very much” usually comes after the object when it modifies the verb “like”.',
    example:
        "I like this song very much.",
    category: "word-order",
    level: "A2",
    views: 1689,
    date: "2026-08-29"
},

{
    id: 109,
    mistake: "He always is late.",
    correction: "He is always late.",
    explanation:
        'With the verb “be”, frequency adverbs such as “always” normally come after the verb.',
    example:
        "He is always late for meetings.",
    category: "word-order",
    level: "A2",
    views: 1897,
    date: "2026-08-29"
},

{
    id: 110,
    mistake: "I usually go to there by bus.",
    correction: "I usually go there by bus.",
    explanation:
        '“There” already functions as an adverb of place, so we do not normally use “to” before it.',
    example:
        "I usually go there by bus.",
    category: "prepositions",
    level: "A2",
    views: 1534,
    date: "2026-08-29"
},

{
    id: 111,
    mistake: "She said me that she was busy.",
    correction: "She told me that she was busy.",
    explanation:
        '“Tell” can take a person directly as its object. With “say”, we normally do not put the person directly after the verb without “to”.',
    example:
        "She told me that she was busy.",
    category: "conversation",
    level: "B1",
    views: 2267,
    date: "2026-08-29"
},

{
    id: 112,
    mistake: "He asked me what did I want.",
    correction: "He asked me what I wanted.",
    explanation:
        'Indirect questions use statement word order rather than direct-question word order.',
    example:
        "He asked me what I wanted for dinner.",
    category: "questions",
    level: "B1",
    views: 2145,
    date: "2026-08-29"
},

{
    id: 113,
    mistake: "I don't need no help.",
    correction: "I don't need any help.",
    explanation:
        'In standard English, we normally use “any” with a negative verb instead of using two negative words.',
    example:
        "I don't need any help, thank you.",
    category: "negation",
    level: "B1",
    views: 1724,
    date: "2026-08-29"
},

{
    id: 114,
    mistake: "There were a lot of traffic.",
    correction: "There was a lot of traffic.",
    explanation:
        '“Traffic” is an uncountable noun, so it takes the singular verb “was”.',
    example:
        "There was a lot of traffic on the way home.",
    category: "grammar",
    level: "A2",
    views: 2058,
    date: "2026-08-29"
},

{
    id: 115,
    mistake: "I have many work to do.",
    correction: "I have a lot of work to do.",
    explanation:
        '“Work” is generally uncountable when referring to tasks or employment, so we do not normally say “many work”.',
    example:
        "I have a lot of work to do today.",
    category: "vocabulary",
    level: "A2",
    views: 1637,
    date: "2026-08-29"
},

{
    id: 116,
    mistake: "She gave me an advice.",
    correction: "She gave me some advice.",
    explanation:
        '“Advice” is an uncountable noun. We say “some advice” or “a piece of advice”, not “an advice”.',
    example:
        "She gave me some useful advice.",
    category: "articles",
    level: "B1",
    views: 2346,
    date: "2026-08-29"
},

{
    id: 117,
    mistake: "He gave me a useful advice.",
    correction: "He gave me a useful piece of advice.",
    explanation:
        'Because “advice” is uncountable, we can use “a piece of advice” when referring to one specific suggestion.',
    example:
        "He gave me a useful piece of advice before my interview.",
    category: "collocations",
    level: "B1",
    views: 1468,
    date: "2026-08-29"
},

{
    id: 118,
    mistake: "I made a photo of the building.",
    correction: "I took a photo of the building.",
    explanation:
        'The natural collocation is “take a photo”, not “make a photo”.',
    example:
        "I took a photo of the building before we left.",
    category: "collocations",
    level: "A2",
    views: 1895,
    date: "2026-08-29"
},

{
    id: 119,
    mistake: "Please make attention.",
    correction: "Please pay attention.",
    explanation:
        'The standard English collocation is “pay attention”.',
    example:
        "Please pay attention to the instructions.",
    category: "collocations",
    level: "A2",
    views: 2412,
    date: "2026-08-29"
},

{
    id: 120,
    mistake: "I did a decision.",
    correction: "I made a decision.",
    explanation:
        'The natural collocation is “make a decision”, not “do a decision”.',
    example:
        "We made a decision after discussing all the options.",
    category: "collocations",
    level: "B1",
    views: 2178,
    date: "2026-08-29"
},

{
    id: 121,
    mistake: "He told me don't worry.",
    correction: "He told me not to worry.",
    explanation:
        'After “tell + object”, we use “not to + verb” to report a negative instruction.',
    example:
        "He told me not to worry about the problem.",
    category: "grammar",
    level: "B1",
    views: 1839,
    date: "2026-08-29"
},

{
    id: 122,
    mistake: "She asked me to don't tell anyone.",
    correction: "She asked me not to tell anyone.",
    explanation:
        'With “ask + object + infinitive”, the negative form is “not to + verb”.',
    example:
        "She asked me not to tell anyone about the surprise.",
    category: "grammar",
    level: "B1",
    views: 1946,
    date: "2026-08-29"
},

{
    id: 123,
    mistake: "I want that you help me.",
    correction: "I want you to help me.",
    explanation:
        'The common structure is “want + object + to-infinitive”.',
    example:
        "I want you to help me with this project.",
    category: "grammar",
    level: "A2",
    views: 2364,
    date: "2026-08-29"
},

{
    id: 124,
    mistake: "Let me to explain.",
    correction: "Let me explain.",
    explanation:
        'After “let + object”, we use the base form of the verb without “to”.',
    example:
        "Let me explain what happened.",
    category: "grammar",
    level: "A2",
    views: 1783,
    date: "2026-08-29"
},

{
    id: 125,
    mistake: "I enjoy to read books.",
    correction: "I enjoy reading books.",
    explanation:
        'The verb “enjoy” is followed by a noun or the -ing form, not normally by a to-infinitive.',
    example:
        "I enjoy reading books in my free time.",
    category: "grammar",
    level: "B1",
    views: 2117,
    date: "2026-08-29"
},

{
    id: 126,
    mistake: "She avoided to answer the question.",
    correction: "She avoided answering the question.",
    explanation:
        '“Avoid” is followed by a noun or the -ing form, not by a to-infinitive.',
    example:
        "She avoided answering the difficult question.",
    category: "grammar",
    level: "B2",
    views: 1328,
    date: "2026-08-29"
},

{
    id: 127,
    mistake: "I decided going abroad.",
    correction: "I decided to go abroad.",
    explanation:
        'The verb “decide” is normally followed by a to-infinitive.',
    example:
        "I decided to go abroad after finishing university.",
    category: "grammar",
    level: "B1",
    views: 1654,
    date: "2026-08-29"
},

{
    id: 128,
    mistake: "He promised helping me.",
    correction: "He promised to help me.",
    explanation:
        'The verb “promise” is normally followed by a to-infinitive when referring to a future action.',
    example:
        "He promised to help me with the project.",
    category: "grammar",
    level: "B1",
    views: 1437,
    date: "2026-08-29"
},

{
    id: 129,
    mistake: "I forgot locking the door.",
    correction: "I forgot to lock the door.",
    explanation:
        '“Forget to do something” means that you failed to remember an action that needed to be done.',
    example:
        "I forgot to lock the door before leaving.",
    category: "grammar",
    level: "B1",
    views: 1568,
    date: "2026-08-29"
},

{
    id: 130,
    mistake: "I remember to meet him last year.",
    correction: "I remember meeting him last year.",
    explanation:
        '“Remember doing something” refers to remembering a past experience or action.',
    example:
        "I remember meeting him at a conference last year.",
    category: "grammar",
    level: "B2",
    views: 1289,
    date: "2026-08-29"
},

{
    id: 131,
    mistake: "I stopped to smoke last year.",
    correction: "I stopped smoking last year.",
    explanation:
        '“Stop doing something” means to end an activity. “Stop to do something” means to pause another activity in order to do something else.',
    example:
        "I stopped smoking last year.",
    category: "grammar",
    level: "B2",
    views: 1746,
    date: "2026-08-29"
},

{
    id: 132,
    mistake: "She has gone in Italy.",
    correction: "She has gone to Italy.",
    explanation:
        'We use “go to” when talking about movement toward a country, city, or destination.',
    example:
        "She has gone to Italy for a holiday.",
    category: "prepositions",
    level: "A2",
    views: 1398,
    date: "2026-08-29"
},

{
    id: 133,
    mistake: "We arrived in the station at 8.",
    correction: "We arrived at the station at 8.",
    explanation:
        'We generally use “arrive at” for specific places such as stations, airports, and buildings.',
    example:
        "We arrived at the station at 8 o'clock.",
    category: "prepositions",
    level: "A2",
    views: 1547,
    date: "2026-08-29"
},

{
    id: 134,
    mistake: "He lives at London.",
    correction: "He lives in London.",
    explanation:
        'We normally use “in” with cities and countries when talking about where someone lives.',
    example:
        "He lives in London with his family.",
    category: "prepositions",
    level: "A1",
    views: 2268,
    date: "2026-08-29"
},

{
    id: 135,
    mistake: "I was born on 1998.",
    correction: "I was born in 1998.",
    explanation:
        'We use “in” with years, months, and longer periods of time.',
    example:
        "I was born in 1998.",
    category: "prepositions",
    level: "A1",
    views: 1847,
    date: "2026-08-29"
},

{
    id: 136,
    mistake: "My birthday is in Monday.",
    correction: "My birthday is on Monday.",
    explanation:
        'We use “on” with days and specific dates.',
    example:
        "My birthday is on Monday this year.",
    category: "prepositions",
    level: "A1",
    views: 1619,
    date: "2026-08-29"
},

{
    id: 137,
    mistake: "I will see you in Friday.",
    correction: "I will see you on Friday.",
    explanation:
        'We use “on” before days of the week.',
    example:
        "I will see you on Friday.",
    category: "prepositions",
    level: "A1",
    views: 1456,
    date: "2026-08-29"
},

{
    id: 138,
    mistake: "I have lived here since five years.",
    correction: "I have lived here for five years.",
    explanation:
        'Use “for” with a duration and “since” with the point when an action started.',
    example:
        "I have lived here for five years.",
    category: "prepositions",
    level: "B1",
    views: 2074,
    date: "2026-08-29"
},

{
    id: 139,
    mistake: "She has lived here for 2020.",
    correction: "She has lived here since 2020.",
    explanation:
        '“Since” is used with a starting point such as a year, date, or specific moment.',
    example:
        "She has lived here since 2020.",
    category: "prepositions",
    level: "B1",
    views: 1841,
    date: "2026-08-29"
},

{
    id: 140,
    mistake: "I am interested on learning languages.",
    correction: "I am interested in learning languages.",
    explanation:
        'The adjective “interested” is followed by the preposition “in”.',
    example:
        "I am interested in learning new languages.",
    category: "prepositions",
    level: "A2",
    views: 2195,
    date: "2026-08-29"
},

{
    id: 141,
    mistake: "She is afraid to spiders.",
    correction: "She is afraid of spiders.",
    explanation:
        'The standard expression is “afraid of” followed by a noun or pronoun.',
    example:
        "She is afraid of spiders.",
    category: "prepositions",
    level: "A2",
    views: 1578,
    date: "2026-08-29"
},

{
    id: 142,
    mistake: "He is married with Sarah.",
    correction: "He is married to Sarah.",
    explanation:
        'The standard expression is “married to someone”.',
    example:
        "He has been married to Sarah for ten years.",
    category: "prepositions",
    level: "A2",
    views: 1432,
    date: "2026-08-29"
},

{
    id: 143,
    mistake: "This book belongs to me friend.",
    correction: "This book belongs to my friend.",
    explanation:
        'Possessive adjectives such as “my”, “your”, and “his” must be used before a noun to show possession.',
    example:
        "This book belongs to my friend.",
    category: "grammar",
    level: "A1",
    views: 1287,
    date: "2026-08-29"
},

{
    id: 144,
    mistake: "This is mine book.",
    correction: "This is my book.",
    explanation:
        '“My” is a possessive adjective and must be followed by a noun. “Mine” is used without a noun.',
    example:
        "This is my book, not yours.",
    category: "grammar",
    level: "A2",
    views: 1948,
    date: "2026-08-29"
},

{
    id: 145,
    mistake: "This book is my.",
    correction: "This book is mine.",
    explanation:
        '“Mine” is a possessive pronoun and is used without a noun after it.',
    example:
        "This book is mine.",
    category: "grammar",
    level: "A2",
    views: 1638,
    date: "2026-08-29"
},

{
    id: 146,
    mistake: "She has two childs.",
    correction: "She has two children.",
    explanation:
        '“Child” has the irregular plural form “children”, not “childs”.',
    example:
        "She has two children.",
    category: "spelling",
    level: "A1",
    views: 2517,
    date: "2026-08-29"
},

{
    id: 147,
    mistake: "There are three womans in the room.",
    correction: "There are three women in the room.",
    explanation:
        'The plural of “woman” is the irregular form “women”.',
    example:
        "There are three women in the room.",
    category: "spelling",
    level: "A1",
    views: 1894,
    date: "2026-08-29"
},

{
    id: 148,
    mistake: "I bought two breads.",
    correction: "I bought two loaves of bread.",
    explanation:
        '“Bread” is generally uncountable. To count individual units, we can say “loaves of bread” or “pieces of bread”.',
    example:
        "I bought two loaves of bread from the bakery.",
    category: "vocabulary",
    level: "B1",
    views: 1673,
    date: "2026-08-29"
},

{
    id: 149,
    mistake: "She gave me two useful informations.",
    correction: "She gave me two useful pieces of information.",
    explanation:
        '“Information” is uncountable, so individual items can be described as “pieces of information”.',
    example:
        "She gave me two useful pieces of information.",
    category: "vocabulary",
    level: "B1",
    views: 1396,
    date: "2026-08-29"
},

{
    id: 150,
    mistake: "I need to buy some furnitures.",
    correction: "I need to buy some furniture.",
    explanation:
        '“Furniture” is an uncountable noun in English and normally has no plural “-s” form.',
    example:
        "I need to buy some new furniture for my apartment.",
    category: "spelling",
    level: "B1",
    views: 1817,
    date: "2026-08-29"
},

{
    id: 151,
    mistake: "She gave me many useful advices.",
    correction: "She gave me a lot of useful advice.",
    explanation:
        '“Advice” is uncountable, so we do not normally use “advices”.',
    example:
        "She gave me a lot of useful advice.",
    category: "spelling",
    level: "B1",
    views: 2056,
    date: "2026-08-29"
},

{
    id: 152,
    mistake: "He is an European student.",
    correction: "He is a European student.",
    explanation:
        'The choice between “a” and “an” depends on pronunciation. “European” begins with a /j/ sound, so we use “a”.',
    example:
        "He is a European student studying abroad.",
    category: "articles",
    level: "B2",
    views: 1729,
    date: "2026-08-29"
},

{
    id: 153,
    mistake: "She is a honest person.",
    correction: "She is an honest person.",
    explanation:
        'The “h” in “honest” is silent, so the word begins with a vowel sound and takes “an”.',
    example:
        "She is an honest person who always tells the truth.",
    category: "articles",
    level: "B1",
    views: 2164,
    date: "2026-08-29"
},

{
    id: 154,
    mistake: "I saw an university near the station.",
    correction: "I saw a university near the station.",
    explanation:
        '“University” begins with a /j/ sound, so we use “a”, not “an”.',
    example:
        "I saw a university near the station.",
    category: "articles",
    level: "B1",
    views: 1548,
    date: "2026-08-29"
},

{
    id: 155,
    mistake: "The life is difficult sometimes.",
    correction: "Life is difficult sometimes.",
    explanation:
        'When speaking about life in general, we normally do not use “the”.',
    example:
        "Life is difficult sometimes, but we can learn from challenges.",
    category: "articles",
    level: "B2",
    views: 1327,
    date: "2026-08-29"
},

{
    id: 156,
    mistake: "I love the nature.",
    correction: "I love nature.",
    explanation:
        'When talking about nature in general, we normally use the uncountable noun “nature” without an article.',
    example:
        "I love nature and spending time outdoors.",
    category: "articles",
    level: "B2",
    views: 1189,
    date: "2026-08-29"
},

{
    id: 157,
    mistake: "She speaks English very good.",
    correction: "She speaks English very well.",
    explanation:
        '“Well” is the adverb normally used to describe how someone performs an action such as speaking.',
    example:
        "She speaks English very well.",
    category: "vocabulary",
    level: "A2",
    views: 2974,
    date: "2026-08-29"
},

{
    id: 158,
    mistake: "He drives very careful.",
    correction: "He drives very carefully.",
    explanation:
        'The adverb “carefully” describes how he drives. “Careful” is an adjective.',
    example:
        "He drives very carefully when the roads are wet.",
    category: "grammar",
    level: "A2",
    views: 1738,
    date: "2026-08-29"
},

{
    id: 159,
    mistake: "She sings beautiful.",
    correction: "She sings beautifully.",
    explanation:
        'An adverb is needed to describe how someone performs an action such as singing.',
    example:
        "She sings beautifully.",
    category: "grammar",
    level: "A2",
    views: 1549,
    date: "2026-08-29"
},

{
    id: 160,
    mistake: "He speaks English fluent.",
    correction: "He speaks English fluently.",
    explanation:
        '“Fluently” is the adverb used to describe the way someone speaks a language.',
    example:
        "He speaks English fluently.",
    category: "grammar",
    level: "B1",
    views: 1628,
    date: "2026-08-29"
},

{
    id: 161,
    mistake: "I feel badly today.",
    correction: "I feel bad today.",
    explanation:
        'After linking verbs such as “feel”, we normally use an adjective to describe a state or condition.',
    example:
        "I feel bad today because I didn't sleep well.",
    category: "grammar",
    level: "B2",
    views: 1364,
    date: "2026-08-29"
},

{
    id: 162,
    mistake: "This movie is bored.",
    correction: "This movie is boring.",
    explanation:
        '“Boring” describes something that causes boredom, while “bored” describes a person who experiences the feeling.',
    example:
        "The movie is boring, so everyone looks bored.",
    category: "vocabulary",
    level: "A2",
    views: 2416,
    date: "2026-08-29"
},

{
    id: 163,
    mistake: "I am exciting about the trip.",
    correction: "I am excited about the trip.",
    explanation:
        '“Excited” describes how a person feels, while “exciting” describes something that creates excitement.',
    example:
        "I am excited about the trip next month.",
    category: "vocabulary",
    level: "A2",
    views: 2298,
    date: "2026-08-29"
},

{
    id: 164,
    mistake: "The news were surprising.",
    correction: "The news was surprising.",
    explanation:
        '“News” looks plural but is grammatically singular in standard English, so it takes “was”.',
    example:
        "The news was surprising to everyone.",
    category: "grammar",
    level: "B1",
    views: 1745,
    date: "2026-08-29"
},

{
    id: 165,
    mistake: "My family are very big.",
    correction: "My family is very big.",
    explanation:
        'When “family” is treated as one group in standard American English, it normally takes a singular verb.',
    example:
        "My family is very big.",
    category: "grammar",
    level: "B1",
    views: 1278,
    date: "2026-08-29"
},

{
    id: 166,
    mistake: "Everyone have their own opinion.",
    correction: "Everyone has their own opinion.",
    explanation:
        '“Everyone” is grammatically singular, so it takes “has”, not “have”. “Their” is commonly used as a singular gender-neutral pronoun.',
    example:
        "Everyone has their own opinion.",
    category: "grammar",
    level: "B2",
    views: 2467,
    date: "2026-08-29"
},

{
    id: 167,
    mistake: "Neither of them are available.",
    correction: "Neither of them is available.",
    explanation:
        'In formal standard English, “neither” is treated as singular and takes “is”.',
    example:
        "Neither of them is available today.",
    category: "grammar",
    level: "C1",
    views: 1164,
    date: "2026-08-29"
},

{
    id: 168,
    mistake: "Each students has a book.",
    correction: "Each student has a book.",
    explanation:
        '“Each” is followed by a singular countable noun and takes a singular verb.',
    example:
        "Each student has a book.",
    category: "grammar",
    level: "B1",
    views: 1572,
    date: "2026-08-29"
},

{
    id: 169,
    mistake: "Both of them is ready.",
    correction: "Both of them are ready.",
    explanation:
        '“Both” refers to two people or things and takes a plural verb.',
    example:
        "Both of them are ready to leave.",
    category: "grammar",
    level: "A2",
    views: 1486,
    date: "2026-08-29"
},

{
    id: 170,
    mistake: "One of my friend lives here.",
    correction: "One of my friends lives here.",
    explanation:
        'After “one of”, we use a plural noun because one person is being selected from a group.',
    example:
        "One of my friends lives near here.",
    category: "grammar",
    level: "B1",
    views: 2317,
    date: "2026-08-29"
},

{
    id: 171,
    mistake: "She gave me an useful tip.",
    correction: "She gave me a useful tip.",
    explanation:
        '“Useful” begins with a /j/ sound, so it takes “a”, not “an”.',
    example:
        "She gave me a useful tip for learning vocabulary.",
    category: "articles",
    level: "B1",
    views: 1428,
    date: "2026-08-29"
},

{
    id: 172,
    mistake: "I have been in London since three days.",
    correction: "I have been in London for three days.",
    explanation:
        'Use “for” with a period of time and “since” with a starting point.',
    example:
        "I have been in London for three days.",
    category: "prepositions",
    level: "A2",
    views: 1886,
    date: "2026-08-29"
},

{
    id: 173,
    mistake: "I am here since Monday.",
    correction: "I have been here since Monday.",
    explanation:
        'When an action or state started in the past and continues to the present, the present perfect is commonly used.',
    example:
        "I have been here since Monday.",
    category: "tenses",
    level: "B1",
    views: 2139,
    date: "2026-08-29"
},

{
    id: 174,
    mistake: "She has already finished her work yesterday.",
    correction: "She finished her work yesterday.",
    explanation:
        '“Yesterday” refers to a finished time in the past, so the past simple is normally used.',
    example:
        "She finished her work yesterday.",
    category: "tenses",
    level: "B1",
    views: 1983,
    date: "2026-08-29"
},

{
    id: 175,
    mistake: "When I arrived, they already left.",
    correction: "When I arrived, they had already left.",
    explanation:
        'The past perfect shows that one past action happened before another past action.',
    example:
        "When I arrived, they had already left.",
    category: "tenses",
    level: "B2",
    views: 2257,
    date: "2026-08-29"
},

{
    id: 176,
    mistake: "By the time we arrived, the movie started.",
    correction: "By the time we arrived, the movie had started.",
    explanation:
        'The past perfect is used to show that the movie started before we arrived.',
    example:
        "By the time we arrived, the movie had already started.",
    category: "tenses",
    level: "B2",
    views: 1784,
    date: "2026-08-29"
},

{
    id: 177,
    mistake: "I was sleeping when the phone rang.",
    correction: "I was sleeping when the phone rang.",
    explanation:
        'This sentence is actually correct. The past continuous describes an action in progress interrupted by a shorter past action.',
    example:
        "I was sleeping when the phone rang.",
    category: "common-mistakes",
    level: "B1",
    views: 967,
    date: "2026-08-29"
},

{
    id: 178,
    mistake: "I used to went there every summer.",
    correction: "I used to go there every summer.",
    explanation:
        '“Used to” is followed by the base form of the verb, not the past form.',
    example:
        "I used to go there every summer when I was a child.",
    category: "tenses",
    level: "A2",
    views: 2174,
    date: "2026-08-29"
},

{
    id: 179,
    mistake: "Did you used to live here?",
    correction: "Did you use to live here?",
    explanation:
        'After “did”, we use the base form “use”, not “used”.',
    example:
        "Did you use to live here?",
    category: "questions",
    level: "B1",
    views: 1892,
    date: "2026-08-29"
},

{
    id: 180,
    mistake: "I would rather to stay home.",
    correction: "I would rather stay home.",
    explanation:
        '“Would rather” is followed by the base form of the verb without “to”.',
    example:
        "I would rather stay home tonight.",
    category: "grammar",
    level: "B2",
    views: 1536,
    date: "2026-08-29"
},

{
    id: 181,
    mistake: "I'd rather you to stay here.",
    correction: "I'd rather you stayed here.",
    explanation:
        'After “would rather + subject”, we commonly use the past simple to express a preference about another person’s action.',
    example:
        "I'd rather you stayed here tonight.",
    category: "grammar",
    level: "C1",
    views: 1097,
    date: "2026-08-29"
},

{
    id: 182,
    mistake: "It's time to we leave.",
    correction: "It's time for us to leave.",
    explanation:
        'Use “it’s time for + object + to-infinitive” when specifying who should perform the action.',
    example:
        "It's time for us to leave.",
    category: "grammar",
    level: "B2",
    views: 1387,
    date: "2026-08-29"
},

{
    id: 183,
    mistake: "I suggest you to apply for the job.",
    correction: "I suggest that you apply for the job.",
    explanation:
        '“Suggest” is not normally followed by an object + to-infinitive. Use “suggest that + clause” or “suggest + -ing”.',
    example:
        "I suggest that you apply for the job.",
    category: "grammar",
    level: "B2",
    views: 1948,
    date: "2026-08-29"
},

{
    id: 184,
    mistake: "She recommended me to visit the museum.",
    correction: "She recommended that I visit the museum.",
    explanation:
        '“Recommend” is not normally followed by an object + to-infinitive. A clause or an -ing form is preferred.',
    example:
        "She recommended that I visit the museum.",
    category: "grammar",
    level: "C1",
    views: 1235,
    date: "2026-08-29"
},

{
    id: 185,
    mistake: "He insisted to pay the bill.",
    correction: "He insisted on paying the bill.",
    explanation:
        'The verb “insist” is normally followed by “on” and the -ing form when referring to an action.',
    example:
        "He insisted on paying the bill.",
    category: "prepositions",
    level: "C1",
    views: 1078,
    date: "2026-08-29"
},

{
    id: 186,
    mistake: "She succeeded to solve the problem.",
    correction: "She succeeded in solving the problem.",
    explanation:
        'The verb “succeed” is followed by “in” and the -ing form.',
    example:
        "She succeeded in solving the problem.",
    category: "prepositions",
    level: "C1",
    views: 1146,
    date: "2026-08-29"
},

{
    id: 187,
    mistake: "He apologized me for being late.",
    correction: "He apologized to me for being late.",
    explanation:
        'When saying sorry to a person, we use “apologize to someone for something”.',
    example:
        "He apologized to me for being late.",
    category: "prepositions",
    level: "B2",
    views: 1395,
    date: "2026-08-29"
},

{
    id: 188,
    mistake: "I congratulated him for his promotion.",
    correction: "I congratulated him on his promotion.",
    explanation:
        'The standard expression is “congratulate someone on something”.',
    example:
        "I congratulated him on his promotion.",
    category: "prepositions",
    level: "B2",
    views: 1274,
    date: "2026-08-29"
},

{
    id: 189,
    mistake: "She accused him for lying.",
    correction: "She accused him of lying.",
    explanation:
        'The verb “accuse” is followed by “of” and a noun or -ing form.',
    example:
        "She accused him of lying to the police.",
    category: "prepositions",
    level: "C1",
    views: 1042,
    date: "2026-08-29"
},

{
    id: 190,
    mistake: "They prevented him to enter the building.",
    correction: "They prevented him from entering the building.",
    explanation:
        'The verb “prevent” is followed by an object + “from” + -ing form.',
    example:
        "They prevented him from entering the building.",
    category: "grammar",
    level: "C1",
    views: 1198,
    date: "2026-08-29"
},

{
    id: 191,
    mistake: "I look forward to hear your opinion.",
    correction: "I look forward to hearing your opinion.",
    explanation:
        'In “look forward to”, “to” is a preposition, so it is followed by the -ing form.',
    example:
        "I look forward to hearing your opinion.",
    category: "phrasal-verbs",
    level: "B2",
    views: 2467,
    date: "2026-08-29"
},

{
    id: 192,
    mistake: "Please take off your shoes before to enter.",
    correction: "Please take off your shoes before entering.",
    explanation:
        'After “before” when the subject is understood to be the same, we can use the -ing form.',
    example:
        "Please take off your shoes before entering the room.",
    category: "phrasal-verbs",
    level: "B1",
    views: 1457,
    date: "2026-08-29"
},

{
    id: 193,
    mistake: "I need to figure it out what happened.",
    correction: "I need to figure out what happened.",
    explanation:
        'When the object is a clause, “figure out” is placed before the clause rather than separating “it” from the phrase.',
    example:
        "I need to figure out what happened.",
    category: "phrasal-verbs",
    level: "B2",
    views: 1139,
    date: "2026-08-29"
},

{
    id: 194,
    mistake: "Can you turn off it?",
    correction: "Can you turn it off?",
    explanation:
        'With separable phrasal verbs, a pronoun such as “it” normally goes between the verb and the particle.',
    example:
        "Can you turn it off before you leave?",
    category: "phrasal-verbs",
    level: "B1",
    views: 1682,
    date: "2026-08-29"
},

{
    id: 195,
    mistake: "I need to pick up him at the airport.",
    correction: "I need to pick him up at the airport.",
    explanation:
        'With a separable phrasal verb and a pronoun, the pronoun normally goes between the verb and the particle.',
    example:
        "I need to pick him up at the airport.",
    category: "phrasal-verbs",
    level: "B1",
    views: 1576,
    date: "2026-08-29"
},

{
    id: 196,
    mistake: "Let's discuss about this later.",
    correction: "Let's discuss this later.",
    explanation:
        '“Discuss” is normally followed directly by the topic without “about”.',
    example:
        "Let's discuss this later when we have more information.",
    category: "conversation",
    level: "B1",
    views: 2258,
    date: "2026-08-29"
},

{
    id: 197,
    mistake: "Can you borrow me some money?",
    correction: "Can you lend me some money?",
    explanation:
        '“Lend” means to give something temporarily. “Borrow” means to receive something temporarily.',
    example:
        "Can you lend me some money until tomorrow?",
    category: "vocabulary",
    level: "A2",
    views: 2643,
    date: "2026-08-29"
},

{
    id: 198,
    mistake: "I borrowed him my car.",
    correction: "I lent him my car.",
    explanation:
        'When you give something temporarily to another person, use “lend”, not “borrow”.',
    example:
        "I lent him my car for the weekend.",
    category: "vocabulary",
    level: "B1",
    views: 1784,
    date: "2026-08-29"
},

{
    id: 199,
    mistake: "I hope you will enjoy from the trip.",
    correction: "I hope you will enjoy the trip.",
    explanation:
        '“Enjoy” is a transitive verb and normally takes the object directly without “from”.',
    example:
        "I hope you enjoy the trip.",
    category: "vocabulary",
    level: "A2",
    views: 1489,
    date: "2026-08-29"
},

{
    id: 200,
    mistake: "Thank you for your help me.",
    correction: "Thank you for helping me.",
    explanation:
        'After “thank you for”, we normally use a noun or the -ing form of a verb.',
    example:
        "Thank you for helping me with my English.",
    category: "conversation",
    level: "A2",
    views: 2376,
    date: "2026-08-29"
},

{
    id: 201,
    mistake: "She don't like coffee.",
    correction: "She doesn't like coffee.",
    explanation:
        'With “she”, “he”, and “it” in the present simple, we use “doesn’t”, not “don’t”.',
    example:
        "She doesn't like coffee.",
    category: "negation",
    level: "A1",
    views: 2841,
    date: "2026-08-29"
},

{
    id: 202,
    mistake: "He don't work here.",
    correction: "He doesn't work here.",
    explanation:
        'The third-person singular uses “doesn’t” in negative present simple sentences.',
    example:
        "He doesn't work here anymore.",
    category: "negation",
    level: "A1",
    views: 2317,
    date: "2026-08-29"
},

{
    id: 203,
    mistake: "Does she likes English?",
    correction: "Does she like English?",
    explanation:
        'After “does”, the main verb stays in its base form.',
    example:
        "Does she like English?",
    category: "questions",
    level: "A1",
    views: 2634,
    date: "2026-08-29"
},

{
    id: 204,
    mistake: "Where does he lives?",
    correction: "Where does he live?",
    explanation:
        'After the auxiliary “does”, use the base form “live”, not “lives”.',
    example:
        "Where does he live?",
    category: "questions",
    level: "A1",
    views: 2917,
    date: "2026-08-29"
},

{
    id: 205,
    mistake: "What you are doing?",
    correction: "What are you doing?",
    explanation:
        'In present continuous questions, the auxiliary verb comes before the subject.',
    example:
        "What are you doing right now?",
    category: "questions",
    level: "A1",
    views: 3154,
    date: "2026-08-29"
},

{
    id: 206,
    mistake: "Where you are going?",
    correction: "Where are you going?",
    explanation:
        'Questions with the present continuous require the auxiliary verb before the subject.',
    example:
        "Where are you going after work?",
    category: "questions",
    level: "A1",
    views: 2748,
    date: "2026-08-29"
},

{
    id: 207,
    mistake: "Why you didn't call me?",
    correction: "Why didn't you call me?",
    explanation:
        'In past simple questions, the auxiliary “did” comes before the subject.',
    example:
        "Why didn't you call me yesterday?",
    category: "questions",
    level: "A2",
    views: 2589,
    date: "2026-08-29"
},

{
    id: 208,
    mistake: "Did you went there?",
    correction: "Did you go there?",
    explanation:
        'After “did”, use the base form of the verb.',
    example:
        "Did you go there yesterday?",
    category: "questions",
    level: "A1",
    views: 3076,
    date: "2026-08-29"
},

{
    id: 209,
    mistake: "Did he saw the accident?",
    correction: "Did he see the accident?",
    explanation:
        'The auxiliary “did” already marks the past, so the main verb must be in its base form.',
    example:
        "Did he see the accident?",
    category: "questions",
    level: "A2",
    views: 2471,
    date: "2026-08-29"
},

{
    id: 210,
    mistake: "Have you ever went to Spain?",
    correction: "Have you ever been to Spain?",
    explanation:
        'After “have”, we need the past participle. “Been” is the usual form when talking about visiting a place.',
    example:
        "Have you ever been to Spain?",
    category: "tenses",
    level: "A2",
    views: 2863,
    date: "2026-08-29"
},

{
    id: 211,
    mistake: "I have saw that movie.",
    correction: "I have seen that movie.",
    explanation:
        'The present perfect requires the past participle. The past participle of “see” is “seen”.',
    example:
        "I have seen that movie three times.",
    category: "tenses",
    level: "A2",
    views: 2346,
    date: "2026-08-29"
},

{
    id: 212,
    mistake: "She has ate breakfast.",
    correction: "She has eaten breakfast.",
    explanation:
        'The past participle of “eat” is “eaten”, which is required after “has”.',
    example:
        "She has eaten breakfast already.",
    category: "tenses",
    level: "A2",
    views: 2175,
    date: "2026-08-29"
},

{
    id: 213,
    mistake: "They have took my keys.",
    correction: "They have taken my keys.",
    explanation:
        'The past participle of “take” is “taken”, not “took”.',
    example:
        "They have taken my keys by mistake.",
    category: "tenses",
    level: "B1",
    views: 1958,
    date: "2026-08-29"
},

{
    id: 214,
    mistake: "I have finished it two hours ago.",
    correction: "I finished it two hours ago.",
    explanation:
        'A finished time expression such as “two hours ago” normally requires the past simple.',
    example:
        "I finished it two hours ago.",
    category: "tenses",
    level: "B1",
    views: 2468,
    date: "2026-08-29"
},

{
    id: 215,
    mistake: "She has called me yesterday.",
    correction: "She called me yesterday.",
    explanation:
        '“Yesterday” refers to a finished past time, so we normally use the past simple.',
    example:
        "She called me yesterday.",
    category: "tenses",
    level: "A2",
    views: 2584,
    date: "2026-08-29"
},

{
    id: 216,
    mistake: "I am knowing the answer.",
    correction: "I know the answer.",
    explanation:
        '“Know” is normally a stative verb and is not usually used in the continuous form.',
    example:
        "I know the answer.",
    category: "tenses",
    level: "A2",
    views: 2198,
    date: "2026-08-29"
},

{
    id: 217,
    mistake: "I am understanding you.",
    correction: "I understand you.",
    explanation:
        '“Understand” is normally used as a stative verb rather than in the continuous form.',
    example:
        "I understand you now.",
    category: "tenses",
    level: "B1",
    views: 1876,
    date: "2026-08-29"
},

{
    id: 218,
    mistake: "She is wanting a new phone.",
    correction: "She wants a new phone.",
    explanation:
        '“Want” is normally a stative verb and is generally not used in the continuous form.',
    example:
        "She wants a new phone.",
    category: "tenses",
    level: "A2",
    views: 1765,
    date: "2026-08-29"
},

{
    id: 219,
    mistake: "I am believing you.",
    correction: "I believe you.",
    explanation:
        '“Believe” is normally used as a stative verb and is not usually used in the continuous form.',
    example:
        "I believe you.",
    category: "tenses",
    level: "B1",
    views: 1438,
    date: "2026-08-29"
},

{
    id: 220,
    mistake: "This soup is tasting delicious.",
    correction: "This soup tastes delicious.",
    explanation:
        'When “taste” describes the quality of something, it is normally used in the simple form.',
    example:
        "This soup tastes delicious.",
    category: "tenses",
    level: "B1",
    views: 1297,
    date: "2026-08-29"
},

{
    id: 221,
    mistake: "I have a lot of homeworks.",
    correction: "I have a lot of homework.",
    explanation:
        '“Homework” is an uncountable noun and normally does not take a plural “-s”.',
    example:
        "I have a lot of homework tonight.",
    category: "spelling",
    level: "A2",
    views: 2637,
    date: "2026-08-29"
},

{
    id: 222,
    mistake: "She gave me many homeworks.",
    correction: "She gave me a lot of homework.",
    explanation:
        '“Homework” is uncountable, so we do not normally use “homeworks”.',
    example:
        "The teacher gave us a lot of homework.",
    category: "vocabulary",
    level: "A2",
    views: 1854,
    date: "2026-08-29"
},

{
    id: 223,
    mistake: "I need some informations.",
    correction: "I need some information.",
    explanation:
        '“Information” is uncountable and does not normally have a plural form.',
    example:
        "I need some information about the course.",
    category: "spelling",
    level: "A2",
    views: 2765,
    date: "2026-08-29"
},

{
    id: 224,
    mistake: "He gave me an information.",
    correction: "He gave me a piece of information.",
    explanation:
        '“Information” is uncountable, so we say “a piece of information” when referring to one item.',
    example:
        "He gave me a useful piece of information.",
    category: "vocabulary",
    level: "B1",
    views: 2159,
    date: "2026-08-29"
},

{
    id: 225,
    mistake: "There is many people here.",
    correction: "There are many people here.",
    explanation:
        '“People” is plural, so it requires the plural form “are”.',
    example:
        "There are many people here today.",
    category: "grammar",
    level: "A1",
    views: 3124,
    date: "2026-08-29"
},

{
    id: 226,
    mistake: "There is two chairs in the room.",
    correction: "There are two chairs in the room.",
    explanation:
        'The noun “chairs” is plural, so we use “there are”.',
    example:
        "There are two chairs in the room.",
    category: "grammar",
    level: "A1",
    views: 2741,
    date: "2026-08-29"
},

{
    id: 227,
    mistake: "There are a problem with my computer.",
    correction: "There is a problem with my computer.",
    explanation:
        '“A problem” is singular, so we use “there is”.',
    example:
        "There is a problem with my computer.",
    category: "grammar",
    level: "A1",
    views: 2398,
    date: "2026-08-29"
},

{
    id: 228,
    mistake: "There have many reasons.",
    correction: "There are many reasons.",
    explanation:
        'To say that something exists, use “there is” for singular nouns and “there are” for plural nouns.',
    example:
        "There are many reasons for this decision.",
    category: "grammar",
    level: "A2",
    views: 1812,
    date: "2026-08-29"
},

{
    id: 229,
    mistake: "My friend and me went shopping.",
    correction: "My friend and I went shopping.",
    explanation:
        'Use the subject pronoun “I” when it is part of the subject of the sentence.',
    example:
        "My friend and I went shopping yesterday.",
    category: "grammar",
    level: "A2",
    views: 2927,
    date: "2026-08-29"
},

{
    id: 230,
    mistake: "She gave the book to he.",
    correction: "She gave the book to him.",
    explanation:
        'After a preposition such as “to”, use the object pronoun “him”, not the subject pronoun “he”.',
    example:
        "She gave the book to him.",
    category: "grammar",
    level: "A2",
    views: 1764,
    date: "2026-08-29"
},

{
    id: 231,
    mistake: "Me and my brother went outside.",
    correction: "My brother and I went outside.",
    explanation:
        'Use the subject pronoun “I” in the subject position. In formal English, it is also conventional to mention the other person first.',
    example:
        "My brother and I went outside.",
    category: "grammar",
    level: "A2",
    views: 2513,
    date: "2026-08-29"
},

{
    id: 232,
    mistake: "Between you and I, this is a bad idea.",
    correction: "Between you and me, this is a bad idea.",
    explanation:
        '“Between” is a preposition, so it is followed by the object pronoun “me”.',
    example:
        "Between you and me, I don't trust him.",
    category: "grammar",
    level: "B2",
    views: 2138,
    date: "2026-08-29"
},

{
    id: 233,
    mistake: "Everyone enjoyed theirselves.",
    correction: "Everyone enjoyed themselves.",
    explanation:
        'The reflexive pronoun corresponding to the singular gender-neutral “they” is “themselves”.',
    example:
        "Everyone enjoyed themselves at the party.",
    category: "grammar",
    level: "B2",
    views: 1396,
    date: "2026-08-29"
},

{
    id: 234,
    mistake: "He hurt hisself.",
    correction: "He hurt himself.",
    explanation:
        'The standard reflexive pronoun for “he” is “himself”.',
    example:
        "He hurt himself while playing football.",
    category: "spelling",
    level: "A2",
    views: 1247,
    date: "2026-08-29"
},

{
    id: 235,
    mistake: "She did it by herselfs.",
    correction: "She did it by herself.",
    explanation:
        'The correct reflexive pronoun after “she” is “herself”.',
    example:
        "She fixed the problem by herself.",
    category: "spelling",
    level: "A2",
    views: 1138,
    date: "2026-08-29"
},

{
    id: 236,
    mistake: "I have less friends than before.",
    correction: "I have fewer friends than before.",
    explanation:
        '“Fewer” is generally used with countable plural nouns, while “less” is normally used with uncountable nouns.',
    example:
        "I have fewer friends in this city than before.",
    category: "vocabulary",
    level: "B2",
    views: 2245,
    date: "2026-08-29"
},

{
    id: 237,
    mistake: "There is less cars on the road today.",
    correction: "There are fewer cars on the road today.",
    explanation:
        '“Cars” is a plural countable noun, so “fewer” is normally preferred.',
    example:
        "There are fewer cars on the road today.",
    category: "vocabulary",
    level: "B1",
    views: 1687,
    date: "2026-08-29"
},

{
    id: 238,
    mistake: "I don't have much friends.",
    correction: "I don't have many friends.",
    explanation:
        '“Friends” is a plural countable noun, so “many” is used rather than “much”.',
    example:
        "I don't have many friends in this city.",
    category: "vocabulary",
    level: "A2",
    views: 2478,
    date: "2026-08-29"
},

{
    id: 239,
    mistake: "There isn't many water left.",
    correction: "There isn't much water left.",
    explanation:
        '“Water” is uncountable, so “much” is used rather than “many”.',
    example:
        "There isn't much water left.",
    category: "vocabulary",
    level: "A2",
    views: 1846,
    date: "2026-08-29"
},

{
    id: 240,
    mistake: "I have many money.",
    correction: "I have a lot of money.",
    explanation:
        '“Money” is uncountable, so “many” is not used directly with it.',
    example:
        "I don't have a lot of money right now.",
    category: "vocabulary",
    level: "A2",
    views: 2673,
    date: "2026-08-29"
},

{
    id: 241,
    mistake: "How much people are coming?",
    correction: "How many people are coming?",
    explanation:
        '“People” is a plural countable noun, so we use “how many”.',
    example:
        "How many people are coming to the party?",
    category: "questions",
    level: "A1",
    views: 2948,
    date: "2026-08-29"
},

{
    id: 242,
    mistake: "How many money do you need?",
    correction: "How much money do you need?",
    explanation:
        '“Money” is uncountable, so we use “how much”.',
    example:
        "How much money do you need?",
    category: "questions",
    level: "A2",
    views: 2517,
    date: "2026-08-29"
},

{
    id: 243,
    mistake: "How many time do we have?",
    correction: "How much time do we have?",
    explanation:
        '“Time” is uncountable when referring to an amount or duration, so we use “how much”.',
    example:
        "How much time do we have before the meeting?",
    category: "questions",
    level: "A2",
    views: 2314,
    date: "2026-08-29"
},

{
    id: 244,
    mistake: "What time it is?",
    correction: "What time is it?",
    explanation:
        'In a direct question with “be”, the verb comes before the subject.',
    example:
        "What time is it?",
    category: "questions",
    level: "A1",
    views: 3382,
    date: "2026-08-29"
},

{
    id: 245,
    mistake: "How old you are?",
    correction: "How old are you?",
    explanation:
        'In direct questions, the auxiliary or verb comes before the subject.',
    example:
        "How old are you?",
    category: "questions",
    level: "A1",
    views: 3176,
    date: "2026-08-29"
},

{
    id: 246,
    mistake: "How long you have lived here?",
    correction: "How long have you lived here?",
    explanation:
        'In present perfect questions, “have” comes before the subject.',
    example:
        "How long have you lived here?",
    category: "questions",
    level: "B1",
    views: 2075,
    date: "2026-08-29"
},

{
    id: 247,
    mistake: "Who did call you?",
    correction: "Who called you?",
    explanation:
        'When “who” is the subject of the question, we normally do not use “did”.',
    example:
        "Who called you last night?",
    category: "questions",
    level: "B1",
    views: 1927,
    date: "2026-08-29"
},

{
    id: 248,
    mistake: "Who did you invite to the party?",
    correction: "Who did you invite to the party?",
    explanation:
        'This sentence is correct. Here, “who” is the object of “invite”, so the auxiliary “did” is required.',
    example:
        "Who did you invite to the party?",
    category: "common-mistakes",
    level: "B1",
    views: 1024,
    date: "2026-08-29"
},

{
    id: 249,
    mistake: "Can you tell me where is the station?",
    correction: "Can you tell me where the station is?",
    explanation:
        'In indirect questions, use statement word order: subject before the verb.',
    example:
        "Can you tell me where the station is?",
    category: "questions",
    level: "B1",
    views: 2784,
    date: "2026-08-29"
},

{
    id: 250,
    mistake: "Do you know what time does the shop open?",
    correction: "Do you know what time the shop opens?",
    explanation:
        'Indirect questions use normal statement word order rather than direct-question inversion.',
    example:
        "Do you know what time the shop opens?",
    category: "questions",
    level: "B2",
    views: 2137,
    date: "2026-08-29"
},

{
    id: 251,
    mistake: "I don't know where is he.",
    correction: "I don't know where he is.",
    explanation:
        'After “I don’t know”, the embedded question uses statement word order.',
    example:
        "I don't know where he is.",
    category: "questions",
    level: "B1",
    views: 2459,
    date: "2026-08-29"
},

{
    id: 252,
    mistake: "Could you tell me what is this?",
    correction: "Could you tell me what this is?",
    explanation:
        'Indirect questions use normal statement word order.',
    example:
        "Could you tell me what this is?",
    category: "questions",
    level: "B1",
    views: 1948,
    date: "2026-08-29"
},

{
    id: 253,
    mistake: "I am agree that we should leave.",
    correction: "I agree that we should leave.",
    explanation:
        '“Agree” is a verb, so it does not normally take “am” before it.',
    example:
        "I agree that we should leave early.",
    category: "grammar",
    level: "A2",
    views: 2631,
    date: "2026-08-29"
},

{
    id: 254,
    mistake: "I am disagree with him.",
    correction: "I disagree with him.",
    explanation:
        '“Disagree” is a verb, so we do not use “am” before it.',
    example:
        "I disagree with him about this issue.",
    category: "grammar",
    level: "A2",
    views: 1897,
    date: "2026-08-29"
},

{
    id: 255,
    mistake: "I am understand what you mean.",
    correction: "I understand what you mean.",
    explanation:
        '“Understand” is a verb and normally does not follow “am” in this structure.',
    example:
        "I understand what you mean.",
    category: "grammar",
    level: "A1",
    views: 2457,
    date: "2026-08-29"
},

{
    id: 256,
    mistake: "She explained me the problem.",
    correction: "She explained the problem to me.",
    explanation:
        '“Explain” is normally followed by the thing explained, with “to” before the person.',
    example:
        "She explained the problem to me.",
    category: "grammar",
    level: "B1",
    views: 2368,
    date: "2026-08-29"
},

{
    id: 257,
    mistake: "He described me the situation.",
    correction: "He described the situation to me.",
    explanation:
        '“Describe” normally takes the thing being described directly, followed by “to” + person.',
    example:
        "He described the situation to me.",
    category: "grammar",
    level: "B2",
    views: 1469,
    date: "2026-08-29"
},

{
    id: 258,
    mistake: "She suggested me a restaurant.",
    correction: "She suggested a restaurant to me.",
    explanation:
        '“Suggest” does not normally take a person directly as its object in this structure.',
    example:
        "She suggested a good restaurant to me.",
    category: "grammar",
    level: "B2",
    views: 1574,
    date: "2026-08-29"
},

{
    id: 259,
    mistake: "He mentioned about the problem.",
    correction: "He mentioned the problem.",
    explanation:
        '“Mention” is normally followed directly by the topic without “about”.',
    example:
        "He mentioned the problem during the meeting.",
    category: "common-mistakes",
    level: "B1",
    views: 1837,
    date: "2026-08-29"
},

{
    id: 260,
    mistake: "We discussed about our plans.",
    correction: "We discussed our plans.",
    explanation:
        '“Discuss” already includes the meaning of talking about something, so “about” is unnecessary.',
    example:
        "We discussed our plans yesterday.",
    category: "common-mistakes",
    level: "B1",
    views: 2473,
    date: "2026-08-29"
},

{
    id: 261,
    mistake: "I entered into the room.",
    correction: "I entered the room.",
    explanation:
        'When “enter” means go into a place, it normally takes the place directly without “into”.',
    example:
        "I entered the room quietly.",
    category: "prepositions",
    level: "B1",
    views: 1748,
    date: "2026-08-29"
},

{
    id: 262,
    mistake: "We reached to the hotel at midnight.",
    correction: "We reached the hotel at midnight.",
    explanation:
        '“Reach” is normally followed directly by the destination without “to”.',
    example:
        "We reached the hotel at midnight.",
    category: "prepositions",
    level: "B1",
    views: 2017,
    date: "2026-08-29"
},

{
    id: 263,
    mistake: "I contacted with my teacher.",
    correction: "I contacted my teacher.",
    explanation:
        '“Contact” is normally used directly with the person or organization, without “with”.',
    example:
        "I contacted my teacher about the assignment.",
    category: "prepositions",
    level: "B1",
    views: 1526,
    date: "2026-08-29"
},

{
    id: 264,
    mistake: "We are waiting the bus.",
    correction: "We are waiting for the bus.",
    explanation:
        'The verb “wait” normally requires the preposition “for” before the person or thing expected.',
    example:
        "We are waiting for the bus.",
    category: "prepositions",
    level: "A1",
    views: 2864,
    date: "2026-08-29"
},

{
    id: 265,
    mistake: "I am waiting you outside.",
    correction: "I am waiting for you outside.",
    explanation:
        'Use “wait for” when expecting someone or something.',
    example:
        "I am waiting for you outside.",
    category: "prepositions",
    level: "A1",
    views: 2493,
    date: "2026-08-29"
},

{
    id: 266,
    mistake: "Listen me carefully.",
    correction: "Listen to me carefully.",
    explanation:
        'The verb “listen” is followed by “to” when referring to the person or thing being heard.',
    example:
        "Listen to me carefully.",
    category: "prepositions",
    level: "A1",
    views: 2785,
    date: "2026-08-29"
},

{
    id: 267,
    mistake: "She is listening music.",
    correction: "She is listening to music.",
    explanation:
        'The verb “listen” requires “to” before the thing being listened to.',
    example:
        "She is listening to music in her room.",
    category: "prepositions",
    level: "A1",
    views: 2914,
    date: "2026-08-29"
},

{
    id: 268,
    mistake: "I am looking the picture.",
    correction: "I am looking at the picture.",
    explanation:
        'When “look” means direct your eyes toward something, it is normally followed by “at”.',
    example:
        "I am looking at the picture.",
    category: "prepositions",
    level: "A1",
    views: 2361,
    date: "2026-08-29"
},

{
    id: 269,
    mistake: "Look to this!",
    correction: "Look at this!",
    explanation:
        'Use “look at” when directing someone’s attention toward something.',
    example:
        "Look at this amazing picture!",
    category: "prepositions",
    level: "A1",
    views: 2178,
    date: "2026-08-29"
},

{
    id: 270,
    mistake: "It depends of the weather.",
    correction: "It depends on the weather.",
    explanation:
        'The standard expression is “depend on”, not “depend of”.',
    example:
        "It depends on the weather.",
    category: "prepositions",
    level: "A2",
    views: 2537,
    date: "2026-08-29"
},

{
    id: 271,
    mistake: "It depends from the situation.",
    correction: "It depends on the situation.",
    explanation:
        'The verb “depend” is normally followed by the preposition “on”.',
    example:
        "The answer depends on the situation.",
    category: "prepositions",
    level: "B1",
    views: 1648,
    date: "2026-08-29"
},

{
    id: 272,
    mistake: "I am good in mathematics.",
    correction: "I am good at mathematics.",
    explanation:
        'The standard collocation is “good at” when talking about ability or skill.',
    example:
        "She is very good at mathematics.",
    category: "prepositions",
    level: "A2",
    views: 2194,
    date: "2026-08-29"
},

{
    id: 273,
    mistake: "He is bad in cooking.",
    correction: "He is bad at cooking.",
    explanation:
        'Use “bad at” when describing poor ability in an activity or subject.',
    example:
        "He is bad at cooking.",
    category: "prepositions",
    level: "A2",
    views: 1462,
    date: "2026-08-29"
},

{
    id: 274,
    mistake: "She is afraid from dogs.",
    correction: "She is afraid of dogs.",
    explanation:
        'The standard expression is “afraid of”.',
    example:
        "She is afraid of large dogs.",
    category: "prepositions",
    level: "A1",
    views: 2319,
    date: "2026-08-29"
},

{
    id: 275,
    mistake: "I am proud for you.",
    correction: "I am proud of you.",
    explanation:
        'The standard expression is “proud of someone”.',
    example:
        "I am very proud of you.",
    category: "prepositions",
    level: "A2",
    views: 1957,
    date: "2026-08-29"
},

{
    id: 276,
    mistake: "She is responsible of the project.",
    correction: "She is responsible for the project.",
    explanation:
        'The standard collocation is “responsible for”.',
    example:
        "She is responsible for the project.",
    category: "prepositions",
    level: "B1",
    views: 1683,
    date: "2026-08-29"
},

{
    id: 277,
    mistake: "He is famous by his books.",
    correction: "He is famous for his books.",
    explanation:
        'Use “famous for” to say why someone or something is well known.',
    example:
        "He is famous for his books.",
    category: "prepositions",
    level: "B1",
    views: 1428,
    date: "2026-08-29"
},

{
    id: 278,
    mistake: "I am tired from working all day.",
    correction: "I am tired from working all day.",
    explanation:
        'This sentence is acceptable. “Tired from” can describe tiredness caused by an activity. “Tired of” has a different meaning: being bored or annoyed with something.',
    example:
        "I am tired from working all day.",
    category: "common-mistakes",
    level: "B2",
    views: 913,
    date: "2026-08-29"
},

{
    id: 279,
    mistake: "I am tired from this job.",
    correction: "I am tired of this job.",
    explanation:
        '“Tired of” means bored, annoyed, or fed up with something. “Tired from” usually describes physical tiredness caused by an activity.',
    example:
        "I am tired of this job and want a change.",
    category: "vocabulary",
    level: "B2",
    views: 1764,
    date: "2026-08-29"
},

{
    id: 280,
    mistake: "I look forward for your reply.",
    correction: "I look forward to your reply.",
    explanation:
        'The fixed expression is “look forward to”.',
    example:
        "I look forward to your reply.",
    category: "phrasal-verbs",
    level: "B1",
    views: 2587,
    date: "2026-08-29"
},

{
    id: 281,
    mistake: "Please fill up this form.",
    correction: "Please fill in this form.",
    explanation:
        '“Fill in a form” is the standard expression in British English. “Fill out” is also common, especially in American English.',
    example:
        "Please fill in this form before the interview.",
    category: "phrasal-verbs",
    level: "B1",
    views: 1842,
    date: "2026-08-29"
},

{
    id: 282,
    mistake: "I will call you back later.",
    correction: "I will call you back later.",
    explanation:
        'This sentence is correct. “Call someone back” means to return their phone call.',
    example:
        "I'm busy right now, but I'll call you back later.",
    category: "common-mistakes",
    level: "A2",
    views: 884,
    date: "2026-08-29"
},

{
    id: 283,
    mistake: "Can you give me a call back?",
    correction: "Can you call me back?",
    explanation:
        '“Call me back” is the simpler and more natural expression when asking someone to return your call.',
    example:
        "Can you call me back when you're free?",
    category: "conversation",
    level: "A2",
    views: 1638,
    date: "2026-08-29"
},

{
    id: 284,
    mistake: "I will explain you how it works.",
    correction: "I will explain to you how it works.",
    explanation:
        'When “explain” is followed by a person, use “to” before the person.',
    example:
        "I will explain to you how it works.",
    category: "grammar",
    level: "B1",
    views: 2479,
    date: "2026-08-29"
},

{
    id: 285,
    mistake: "He told to me the truth.",
    correction: "He told me the truth.",
    explanation:
        '“Tell” can be followed directly by the person receiving the information, without “to”.',
    example:
        "He told me the truth.",
    category: "grammar",
    level: "A2",
    views: 2518,
    date: "2026-08-29"
},

{
    id: 286,
    mistake: "She said me the truth.",
    correction: "She told me the truth.",
    explanation:
        'Use “tell someone something”, while “say something to someone” is the usual structure with “say”.',
    example:
        "She told me the truth.",
    category: "conversation",
    level: "A2",
    views: 2746,
    date: "2026-08-29"
},

{
    id: 287,
    mistake: "He said me that he was tired.",
    correction: "He said that he was tired.",
    explanation:
        '“Say” is not normally followed directly by a person. Use “say that...” or “say something to someone”.',
    example:
        "He said that he was tired.",
    category: "conversation",
    level: "B1",
    views: 2387,
    date: "2026-08-29"
},

{
    id: 288,
    mistake: "She told that she was busy.",
    correction: "She said that she was busy.",
    explanation:
        '“Tell” normally requires an object such as “me”, “him”, or “us” when used with a clause.',
    example:
        "She said that she was busy.",
    category: "conversation",
    level: "B1",
    views: 1964,
    date: "2026-08-29"
},

{
    id: 289,
    mistake: "He made me to laugh.",
    correction: "He made me laugh.",
    explanation:
        'After “make + object”, use the base form of the verb without “to”.',
    example:
        "He made me laugh.",
    category: "grammar",
    level: "B1",
    views: 2135,
    date: "2026-08-29"
},

{
    id: 290,
    mistake: "My parents let me to go out.",
    correction: "My parents let me go out.",
    explanation:
        'After “let + object”, use the base form of the verb without “to”.',
    example:
        "My parents let me go out with my friends.",
    category: "grammar",
    level: "A2",
    views: 2298,
    date: "2026-08-29"
},

{
    id: 291,
    mistake: "I was made to clean the room.",
    correction: "I was made to clean the room.",
    explanation:
        'This sentence is correct. In the passive structure with “make”, we use “to + verb”.',
    example:
        "I was made to clean the room before the guests arrived.",
    category: "common-mistakes",
    level: "B2",
    views: 927,
    date: "2026-08-29"
},

{
    id: 292,
    mistake: "She helped me to carrying the bags.",
    correction: "She helped me carry the bags.",
    explanation:
        'After “help + object”, we can use the base form or “to + base form”, but not the -ing form in this structure.',
    example:
        "She helped me carry the bags.",
    category: "grammar",
    level: "B1",
    views: 1548,
    date: "2026-08-29"
},

{
    id: 293,
    mistake: "I saw him to cross the street.",
    correction: "I saw him cross the street.",
    explanation:
        'After verbs of perception such as “see”, we can use object + base form to describe the complete action.',
    example:
        "I saw him cross the street.",
    category: "grammar",
    level: "B2",
    views: 1386,
    date: "2026-08-29"
},

{
    id: 294,
    mistake: "I heard her to sing.",
    correction: "I heard her sing.",
    explanation:
        'After “hear + object”, we can use the base form to describe the complete action.',
    example:
        "I heard her sing a beautiful song.",
    category: "grammar",
    level: "B2",
    views: 1274,
    date: "2026-08-29"
},

{
    id: 295,
    mistake: "She made a mistake on her exam.",
    correction: "She made a mistake on her exam.",
    explanation:
        'This sentence is correct. The natural collocation is “make a mistake”.',
    example:
        "She made a mistake on her exam but corrected it later.",
    category: "common-mistakes",
    level: "A2",
    views: 895,
    date: "2026-08-29"
},

{
    id: 296,
    mistake: "I did a mistake.",
    correction: "I made a mistake.",
    explanation:
        'The natural English collocation is “make a mistake”, not “do a mistake”.',
    example:
        "I made a mistake in the report.",
    category: "collocations",
    level: "A2",
    views: 3197,
    date: "2026-08-29"
},

{
    id: 297,
    mistake: "I made my homework.",
    correction: "I did my homework.",
    explanation:
        'The standard collocation is “do homework”, not “make homework”.',
    example:
        "I did my homework before dinner.",
    category: "collocations",
    level: "A1",
    views: 2876,
    date: "2026-08-29"
},

{
    id: 298,
    mistake: "She did a party last weekend.",
    correction: "She had a party last weekend.",
    explanation:
        'The natural expression is “have a party”, not “do a party”.',
    example:
        "She had a party last weekend.",
    category: "collocations",
    level: "A2",
    views: 1694,
    date: "2026-08-29"
},

{
    id: 299,
    mistake: "We made a party for his birthday.",
    correction: "We had a party for his birthday.",
    explanation:
        'The usual collocation is “have a party”.',
    example:
        "We had a party for his birthday.",
    category: "collocations",
    level: "A2",
    views: 1837,
    date: "2026-08-29"
},

{
    id: 300,
    mistake: "I did a shower before work.",
    correction: "I took a shower before work.",
    explanation:
        'The standard expression is “take a shower” in American English. “Have a shower” is also common, especially in British English.',
    example:
        "I took a shower before work.",
    category: "collocations",
    level: "A1",
    views: 2465,
    date: "2026-08-29"
},


];


/* =================================
   Category Data
================================= */

const categoriesData = [

    {
        id: "grammar",
        name: "Grammar",
        description:
            "Learn from common grammar mistakes and sentence structure problems.",
        icon: "📝"
    },

    {
        id: "vocabulary",
        name: "Vocabulary",
        description:
            "Improve word choice and avoid confusing English vocabulary.",
        icon: "📚"
    },

    {
        id: "tenses",
        name: "Tenses",
        description:
            "Understand how and when to use English verb tenses.",
        icon: "⏳"
    },

    {
        id: "prepositions",
        name: "Prepositions",
        description:
            "Master common prepositions such as in, on, at, for, and to.",
        icon: "📍"
    },

    {
        id: "articles",
        name: "Articles",
        description:
            "Learn when to use a, an, and the correctly.",
        icon: "🔤"
    },

    {
        id: "word-order",
        name: "Word Order",
        description:
            "Build natural English sentences with correct word order.",
        icon: "🔀"
    },

    {
        id: "pronunciation",
        name: "Pronunciation",
        description:
            "Learn about common pronunciation mistakes and improve your speech.",
        icon: "🗣️"
    },

    {
        id: "spelling",
        name: "Spelling",
        description:
            "Identify and correct frequently misspelled English words.",
        icon: "✏️"
    },

    {
        id: "phrasal-verbs",
        name: "Phrasal Verbs",
        description:
            "Understand and use common English phrasal verbs correctly.",
        icon: "💬"
    },

    {
        id: "translation",
        name: "Translation Mistakes",
        description:
            "Avoid unnatural translations and common language-transfer mistakes.",
        icon: "🌐"
    },

    {
        id: "negation",
        name: "Negation",
        description:
            "Learn how to form negative sentences naturally and correctly.",
        icon: "🚫"
    },

    {
        id: "questions",
        name: "Questions",
        description:
            "Learn how to form natural and grammatically correct questions.",
        icon: "❓"
    },

    {
        id: "conversation",
        name: "Conversation",
        description:
            "Improve everyday spoken English and natural conversation.",
        icon: "🗨️"
    },

    {
        id: "common-mistakes",
        name: "Common Mistakes",
        description:
            "Explore mistakes that English learners commonly make.",
        icon: "⭐"
    }

];


/* =================================
   English Levels
================================= */

const levelsData = [

    {
        id: "A1",
        name: "Beginner",
        description:
            "Essential English mistakes and basic sentence structures."
    },

    {
        id: "A2",
        name: "Elementary",
        description:
            "Common mistakes in everyday English."
    },

    {
        id: "B1",
        name: "Intermediate",
        description:
            "More accurate grammar, vocabulary, and communication."
    },

    {
        id: "B2",
        name: "Upper-Intermediate",
        description:
            "Advanced structures and more natural English usage."
    },

    {
        id: "C1",
        name: "Advanced",
        description:
            "Complex grammar, vocabulary, accuracy, and style."
    },

    {
        id: "C2",
        name: "Proficient",
        description:
            "Subtle mistakes and highly accurate English usage."
    }

];


/* =================================
   Data Helpers
================================= */

/**
 * Return all mistakes.
 */
function getAllMistakes() {

    return [...mistakesData];

}


/**
 * Return all categories.
 */
function getAllCategories() {

    return [...categoriesData];

}


/**
 * Return all levels.
 */
function getAllLevels() {

    return [...levelsData];

}


/**
 * Find a mistake by ID.
 */
function getMistakeById(id) {

    return mistakesData.find(
        (mistake) => mistake.id === Number(id)
    );

}


/**
 * Get mistakes by category.
 */
function getMistakesByCategory(category) {

    if (!category || category === "all") {
        return getAllMistakes();
    }

    return mistakesData.filter(
        (mistake) => mistake.category === category
    );

}


/**
 * Get mistakes by level.
 */
function getMistakesByLevel(level) {

    if (!level || level === "all") {
        return getAllMistakes();
    }

    return mistakesData.filter(
        (mistake) => mistake.level === level
    );

}


/* =================================
   Statistics
================================= */

function getMistakesStatistics() {

    const totalMistakes =
        mistakesData.length;

    const totalCategories =
        new Set(
            mistakesData.map(
                (mistake) => mistake.category
            )
        ).size;

    const totalViews =
        mistakesData.reduce(
            (total, mistake) =>
                total + Number(mistake.views || 0),
            0
        );

    const totalLevels =
        levelsData.length;

    return {
        totalMistakes,
        totalCategories,
        totalLevels,
        totalViews
    };

}


/* =================================
   Global Data Object
================================= */

window.MistakeNotebookData = {

    mistakes: mistakesData,

    categories: categoriesData,

    levels: levelsData,

    getAllMistakes,

    getAllCategories,

    getAllLevels,

    getMistakeById,

    getMistakesByCategory,

    getMistakesByLevel,

    getMistakesStatistics

};
