/* =========================================================
   PROTEGE+
   Dados do projeto - Brasil
   ========================================================= */

"use strict";


/* =========================================================
   1. INFORMAÇÕES GERAIS
   ========================================================= */

const protegeData = {

    site: {
        name: "Protege+",

        description:
            "Informação e orientação para proteção de mulheres e famílias no Brasil.",

        country: "Brasil",

        language: "pt-BR"
    },


    /* =====================================================
       2. EMERGÊNCIA
       ===================================================== */

    emergency: {

        general: {
            name: "Polícia Militar",
            number: "190",
            description:
                "Para situações de emergência e perigo imediato."
        },

        medical: {
            name: "SAMU",
            number: "192",
            description:
                "Serviço de Atendimento Móvel de Urgência."
        },

        fire: {
            name: "Corpo de Bombeiros",
            number: "193",
            description:
                "Para incêndios, acidentes e situações de resgate."
        },

        violenceAgainstWomen: {
            name: "Ligue 180",
            number: "180",
            description:
                "Central de Atendimento à Mulher. Orientação e informações sobre direitos e serviços."
        },

        humanRights: {
            name: "Disque 100",
            number: "100",
            description:
                "Canal para denúncias e orientações relacionadas a violações de direitos humanos."
        }
    },


    /* =====================================================
       3. MULHER
       ===================================================== */

    mulher: {

        title:
            "Proteção e informação para mulheres",

        description:
            "Conheça sinais de violência, formas de proteção e caminhos para buscar ajuda.",

        warningSigns: [

            {
                title: "Controle excessivo",
                description:
                    "Tentativas constantes de controlar sua rotina, amizades, roupas, dinheiro ou decisões."
            },

            {
                title: "Ameaças",
                description:
                    "Ameaças contra você, familiares, amigos, animais ou outras pessoas importantes."
            },

            {
                title: "Violência física",
                description:
                    "Empurrões, tapas, socos, chutes ou qualquer outra agressão física."
            },

            {
                title: "Violência psicológica",
                description:
                    "Humilhações, insultos, manipulação, intimidação ou comportamentos que causam medo."
            },

            {
                title: "Isolamento",
                description:
                    "Tentativas de afastar você de familiares, amigos, trabalho ou outras redes de apoio."
            },

            {
                title: "Controle financeiro",
                description:
                    "Impedir o acesso ao próprio dinheiro, controlar gastos ou dificultar sua autonomia financeira."
            }
        ],


        protectionSteps: [

            {
                number: "01",
                title: "Procure um local seguro",
                description:
                    "Se houver perigo imediato, procure um lugar onde você possa ficar protegida."
            },

            {
                number: "02",
                title: "Converse com alguém de confiança",
                description:
                    "Informe uma pessoa de confiança sobre o que está acontecendo."
            },

            {
                number: "03",
                title: "Guarde documentos importantes",
                description:
                    "Mantenha documentos pessoais e informações importantes em um local seguro."
            },

            {
                number: "04",
                title: "Busque orientação",
                description:
                    "Procure serviços públicos ou organizações que possam orientar você sobre seus direitos."
            }
        ],


        rights: [

            "Direito à proteção contra violência.",

            "Direito de buscar atendimento e orientação.",

            "Direito à informação sobre serviços de apoio.",

            "Direito de registrar uma ocorrência quando necessário.",

            "Direito a buscar medidas de proteção previstas em lei."
        ]
    },


    /* =====================================================
       4. FAMÍLIA
       ===================================================== */

    familia: {

        title:
            "Proteção e segurança para toda a família",

        description:
            "Pequenas medidas podem ajudar a família a se preparar para situações de emergência.",


        topics: [

            {
                icon: "🏠",

                title: "Plano familiar",

                description:
                    "Converse com a família sobre o que fazer em situações de emergência.",

                tips: [
                    "Defina um local seguro para encontro.",
                    "Mantenha contatos importantes acessíveis.",
                    "Ensine as crianças a pedir ajuda.",
                    "Tenha documentos importantes organizados."
                ]
            },


            {
                icon: "📱",

                title: "Segurança digital",

                description:
                    "Ajude todos os membros da família a utilizar a internet de forma mais segura.",

                tips: [
                    "Use senhas fortes e diferentes.",
                    "Ative a autenticação em dois fatores.",
                    "Evite compartilhar informações pessoais publicamente.",
                    "Converse com crianças sobre segurança online."
                ]
            },


            {
                icon: "👨‍👩‍👧‍👦",

                title: "Rede de apoio",

                description:
                    "Uma rede de pessoas confiáveis pode ser importante em momentos difíceis.",

                tips: [
                    "Identifique pessoas de confiança.",
                    "Mantenha contatos atualizados.",
                    "Combine formas de comunicação.",
                    "Peça ajuda quando necessário."
                ]
            },


            {
                icon: "🧒",

                title: "Proteção das crianças",

                description:
                    "Ensine crianças e adolescentes sobre limites, segurança e como pedir ajuda.",

                tips: [
                    "Ensine a diferença entre situações seguras e perigosas.",
                    "Mostre quem são os adultos de confiança.",
                    "Incentive a comunicação aberta.",
                    "Leve a sério qualquer relato de violência."
                ]
            }
        ],


        checklist: [

            "A família possui uma lista de contatos importantes.",

            "Todos sabem qual é o local de encontro em uma emergência.",

            "Documentos importantes estão organizados.",

            "As crianças sabem quem são os adultos de confiança.",

            "A família conversa sobre segurança digital.",

            "Existe uma pessoa de confiança que pode ajudar em uma emergência.",

            "Todos sabem como pedir ajuda."
        ]
    },


    /* =====================================================
       5. SEGURANÇA
       ===================================================== */

    seguranca: {

        title:
            "Segurança no dia a dia",

        description:
            "Informações simples para ajudar você e sua família a reduzir riscos.",


        categories: [

            {
                icon: "🏠",

                title: "Segurança em casa",

                description:
                    "Alguns cuidados podem tornar o ambiente doméstico mais seguro.",

                tips: [
                    "Mantenha portas e janelas seguras.",
                    "Tenha iluminação adequada nas áreas externas.",
                    "Evite deixar chaves em locais de fácil acesso.",
                    "Conheça seus vizinhos de confiança."
                ]
            },


            {
                icon: "📱",

                title: "Segurança digital",

                description:
                    "Proteja suas contas, dados pessoais e dispositivos.",

                tips: [
                    "Use senhas fortes.",
                    "Ative a autenticação em dois fatores.",
                    "Mantenha aplicativos e sistemas atualizados.",
                    "Não compartilhe códigos de acesso."
                ]
            },


            {
                icon: "🚶",

                title: "Segurança na rua",

                description:
                    "Tenha atenção ao ambiente e planeje seus deslocamentos.",

                tips: [
                    "Compartilhe seu trajeto com alguém de confiança quando necessário.",
                    "Prefira locais movimentados e bem iluminados.",
                    "Mantenha seus objetos pessoais protegidos.",
                    "Se perceber uma situação de risco, procure um local seguro."
                ]
            },


            {
                icon: "👨‍👩‍👧",

                title: "Segurança da família",

                description:
                    "Prepare a família para diferentes situações.",

                tips: [
                    "Tenha contatos de emergência acessíveis.",
                    "Ensine crianças a pedir ajuda.",
                    "Defina um ponto de encontro familiar.",
                    "Converse regularmente sobre segurança."
                ]
            }
        ],


        checklist: [

            "Tenho contatos de emergência salvos.",

            "Minhas principais contas utilizam senhas fortes.",

            "Ativei autenticação em dois fatores quando disponível.",

            "Minha família conhece um ponto de encontro.",

            "Sei onde procurar ajuda em uma situação de emergência.",

            "Tenho uma pessoa de confiança para entrar em contato."
        ]
    },


    /* =====================================================
       6. AJUDA
       ===================================================== */

    ajuda: {

        title:
            "Onde buscar ajuda no Brasil",

        description:
            "Em situações de perigo, procure ajuda imediatamente. Em emergências, utilize os serviços oficiais.",


        emergencyServices: [

            {
                icon: "🚨",

                name: "Polícia Militar",

                number: "190",

                description:
                    "Para situações de emergência e perigo imediato."
            },


            {
                icon: "🚑",

                name: "SAMU",

                number: "192",

                description:
                    "Atendimento médico de urgência e emergência."
            },


            {
                icon: "🚒",

                name: "Corpo de Bombeiros",

                number: "193",

                description:
                    "Atendimento para incêndios, acidentes e resgates."
            },


            {
                icon: "💜",

                name: "Ligue 180",

                number: "180",

                description:
                    "Central de Atendimento à Mulher para orientação e informações."
            },


            {
                icon: "🛡️",

                name: "Disque 100",

                number: "100",

                description:
                    "Canal para denúncias e orientações sobre violações de direitos humanos."
            }
        ],


        steps: [

            {
                number: "01",

                icon: "📍",

                title: "Vá para um local seguro",

                description:
                    "Se houver risco imediato, afaste-se da situação e procure um lugar seguro."
            },


            {
                number: "02",

                icon: "📞",

                title: "Entre em contato com alguém",

                description:
                    "Ligue para uma pessoa de confiança ou para um serviço de emergência."
            },


            {
                number: "03",

                icon: "📝",

                title: "Registre informações importantes",

                description:
                    "Quando for seguro, guarde documentos, mensagens ou outras informações relevantes."
            },


            {
                number: "04",

                icon: "🤝",

                title: "Procure orientação",

                description:
                    "Busque orientação em serviços públicos, órgãos de proteção ou profissionais especializados."
            }
        ],


        resources: [

            {
                icon: "💜",

                title: "Ligue 180",

                description:
                    "Orientação e informações para mulheres em situação de violência.",

                tag: "Mulheres"
            },


            {
                icon: "🛡️",

                title: "Disque 100",

                description:
                    "Canal relacionado a violações de direitos humanos.",

                tag: "Direitos"
            },


            {
                icon: "🚔",

                title: "Polícia",

                description:
                    "Em uma emergência ou situação de perigo imediato.",

                tag: "Emergência"
            },


            {
                icon: "🏥",

                title: "Atendimento de saúde",

                description:
                    "Procure uma unidade de saúde quando precisar de atendimento médico.",

                tag: "Saúde"
            }
        ]
    },


    /* =====================================================
       7. MENSAGENS DO SITE
       ===================================================== */

    messages: {

        emergency:
            "Se você estiver em perigo imediato, procure um local seguro e entre em contato com um serviço de emergência.",

        privacy:
            "Sua segurança e privacidade são importantes. Evite compartilhar informações pessoais desnecessariamente.",

        support:
            "Você não precisa enfrentar uma situação difícil sozinha. Procure uma pessoa de confiança ou um serviço de apoio.",

        children:
            "Se uma criança estiver em perigo, procure ajuda de um adulto de confiança ou dos serviços oficiais."
    },


    /* =====================================================
       8. FAQ
       ===================================================== */

    faq: [

        {
            question:
                "O que devo fazer em uma situação de perigo imediato?",

            answer:
                "Procure um local seguro e entre em contato com um serviço de emergência adequado à situação."
        },


        {
            question:
                "O que é o Ligue 180?",

            answer:
                "O Ligue 180 é a Central de Atendimento à Mulher, que oferece orientação e informações relacionadas à violência contra a mulher."
        },


        {
            question:
                "Quando devo ligar para o 190?",

            answer:
                "O 190 deve ser utilizado em situações de emergência que necessitem da atuação imediata da Polícia Militar."
        },


        {
            question:
                "O que é o Disque 100?",

            answer:
                "O Disque 100 é um canal para denúncias e orientações relacionadas a violações de direitos humanos."
        },


        {
            question:
                "Preciso estar em uma emergência para procurar ajuda?",

            answer:
                "Não. Você também pode procurar orientação antes que uma situação se torne uma emergência."
        }
    ]
};


/* =========================================================
   9. HELPER FUNCTIONS
   ========================================================= */

/**
 * Retorna os dados do Protege+
 */
function getProtegeData() {
    return protegeData;
}


/**
 * Retorna os serviços de emergência
 */
function getEmergencyServices() {
    return protegeData.ajuda.emergencyServices;
}


/**
 * Retorna as informações de uma categoria de segurança
 */
function getSafetyCategories() {
    return protegeData.seguranca.categories;
}


/**
 * Retorna os sinais de alerta para mulheres
 */
function getWomanWarningSigns() {
    return protegeData.mulher.warningSigns;
}


/**
 * Retorna os tópicos relacionados à família
 */
function getFamilyTopics() {
    return protegeData.familia.topics;
}


/* =========================================================
   10. MAKE DATA AVAILABLE GLOBALLY
   ========================================================= */

window.protegeData = protegeData;

window.getProtegeData = getProtegeData;

window.getEmergencyServices =
    getEmergencyServices;

window.getSafetyCategories =
    getSafetyCategories;

window.getWomanWarningSigns =
    getWomanWarningSigns;

window.getFamilyTopics =
    getFamilyTopics;


/* =========================================================
   11. READY MESSAGE
   ========================================================= */

console.log(
    "Protege+ | Dados do Brasil carregados."
);
