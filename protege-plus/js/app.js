/* =========================================================
   PROTEGE+
   Main JavaScript
   ========================================================= */

"use strict";

/* =========================================================
   1. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initActiveNavigation();
    initChecklists();
    initSafetyChecklist();
    initFamilyChecklist();
    initCurrentYear();
    initSmoothScroll();
});


/* =========================================================
   2. MOBILE MENU
   ========================================================= */

function initMobileMenu() {
    const menuButton = document.querySelector(".mobile-menu-button");
    const navigation = document.querySelector(".main-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fechar menu"
                : "Abrir menu"
        );
    });

    /* Close menu after clicking a navigation link */

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        });
    });

    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {
        const clickedInsideMenu =
            navigation.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navigation.classList.contains("open")
        ) {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    });

    /* Close menu with Escape */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    });
}


/* =========================================================
   3. ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {
    const navigationLinks =
        document.querySelectorAll(".nav-link");

    if (!navigationLinks.length) {
        return;
    }

    const currentPath =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    navigationLinks.forEach((link) => {
        const href =
            link.getAttribute("href");

        if (!href) {
            return;
        }

        const linkPath =
            href.split("/")
                .pop()
                .split("#")[0]
                .toLowerCase();

        let isActive = false;

        /* Home */

        if (
            (currentPath === "" ||
             currentPath === "index.html") &&
            (linkPath === "" ||
             linkPath === "index.html")
        ) {
            isActive = true;
        }

        /* Other pages */

        if (
            currentPath !== "" &&
            currentPath !== "index.html" &&
            linkPath === currentPath
        ) {
            isActive = true;
        }

        if (isActive) {
            link.classList.add("active");
            link.setAttribute(
                "aria-current",
                "page"
            );
        }
    });
}


/* =========================================================
   4. GENERAL CHECKLISTS
   ========================================================= */

function initChecklists() {
    const checklists =
        document.querySelectorAll(
            "[data-checklist]"
        );

    if (!checklists.length) {
        return;
    }

    checklists.forEach((checklist) => {
        const inputs =
            checklist.querySelectorAll(
                'input[type="checkbox"]'
            );

        if (!inputs.length) {
            return;
        }

        inputs.forEach((input) => {
            input.addEventListener(
                "change",
                () => {
                    updateChecklist(
                        checklist,
                        inputs
                    );
                }
            );
        });

        updateChecklist(
            checklist,
            inputs
        );
    });
}


/* =========================================================
   5. UPDATE CHECKLIST
   ========================================================= */

function updateChecklist(
    checklist,
    inputs
) {
    const total = inputs.length;

    if (total === 0) {
        return;
    }

    let completed = 0;

    inputs.forEach((input) => {
        if (input.checked) {
            completed++;
        }
    });

    const percentage =
        Math.round(
            (completed / total) * 100
        );

    /* Progress bar */

    const progress =
        checklist.querySelector(
            ".progress-fill"
        );

    if (progress) {
        progress.style.width =
            `${percentage}%`;

        progress.setAttribute(
            "aria-valuenow",
            String(percentage)
        );
    }

    /* Percentage number */

    const result =
        checklist.querySelector(
            "[data-checklist-result]"
        );

    if (result) {
        result.textContent =
            `${percentage}%`;
    }

    /* Result message */

    const message =
        checklist.querySelector(
            "[data-checklist-message]"
        );

    if (message) {
        message.textContent =
            getChecklistMessage(
                percentage
            );
    }
}


/* =========================================================
   6. CHECKLIST MESSAGE
   ========================================================= */

function getChecklistMessage(
    percentage
) {
    if (percentage === 0) {
        return "Comece a sua checklist quando estiver pronta.";
    }

    if (percentage < 40) {
        return "Bom começo. Continue a preparar o seu plano.";
    }

    if (percentage < 70) {
        return "Muito bem. Já tem vários pontos importantes preparados.";
    }

    if (percentage < 100) {
        return "Está quase tudo pronto. Reveja os pontos que faltam.";
    }

    return "Excelente! A sua checklist está completa.";
}


/* =========================================================
   7. SAFETY CHECKLIST
   ========================================================= */

function initSafetyChecklist() {
    const checklist =
        document.querySelector(
            ".interactive-checklist"
        );

    if (!checklist) {
        return;
    }

    const inputs =
        checklist.querySelectorAll(
            ".safety-checkbox"
        );

    if (!inputs.length) {
        return;
    }

    const progress =
        checklist.querySelector(
            ".progress-fill"
        );

    const result =
        checklist.querySelector(
            "#safety-result"
        );

    const message =
        checklist.querySelector(
            "#safety-result-message"
        );

    function updateSafetyResult() {
        const total = inputs.length;

        let checked = 0;

        inputs.forEach((input) => {
            if (input.checked) {
                checked++;
            }
        });

        const percentage =
            Math.round(
                (checked / total) * 100
            );

        /* Progress */

        if (progress) {
            progress.style.width =
                `${percentage}%`;

            progress.setAttribute(
                "aria-valuenow",
                String(percentage)
            );
        }

        /* Result number */

        if (result) {
            result.textContent =
                `${percentage}%`;
        }

        /* Result message */

        if (message) {
            if (percentage === 0) {
                message.textContent =
                    "Comece a checklist para avaliar a sua preparação.";
            } else if (percentage < 50) {
                message.textContent =
                    "Alguns pontos importantes ainda precisam de atenção.";
            } else if (percentage < 100) {
                message.textContent =
                    "Está no bom caminho. Continue a completar o seu plano de segurança.";
            } else {
                message.textContent =
                    "Excelente! Todos os pontos desta checklist foram verificados.";
            }
        }
    }

    inputs.forEach((input) => {
        input.addEventListener(
            "change",
            updateSafetyResult
        );
    });

    updateSafetyResult();
}


/* =========================================================
   8. FAMILY CHECKLIST
   ========================================================= */

function initFamilyChecklist() {
    const checklist =
        document.querySelector(
            ".family-checklist"
        );

    if (!checklist) {
        return;
    }

    const inputs =
        checklist.querySelectorAll(
            ".family-checkbox"
        );

    if (!inputs.length) {
        return;
    }

    const result =
        checklist.querySelector(
            ".checklist-result strong"
        );

    const progress =
        checklist.querySelector(
            ".progress-fill"
        );

    function updateFamilyChecklist() {
        const total = inputs.length;

        let checked = 0;

        inputs.forEach((input) => {
            if (input.checked) {
                checked++;
            }
        });

        const percentage =
            Math.round(
                (checked / total) * 100
            );

        /* Number */

        if (result) {
            result.textContent =
                `${checked}/${total}`;
        }

        /* Progress */

        if (progress) {
            progress.style.width =
                `${percentage}%`;

            progress.setAttribute(
                "aria-valuenow",
                String(percentage)
            );
        }

        /* Visual feedback */

        inputs.forEach((input) => {
            const label =
                input.closest(
                    ".family-check-item"
                );

            if (!label) {
                return;
            }

            if (input.checked) {
                label.classList.add(
                    "completed"
                );
            } else {
                label.classList.remove(
                    "completed"
                );
            }
        });
    }

    inputs.forEach((input) => {
        input.addEventListener(
            "change",
            updateFamilyChecklist
        );
    });

    updateFamilyChecklist();
}


/* =========================================================
   9. CURRENT YEAR
   ========================================================= */

function initCurrentYear() {
    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    if (!yearElements.length) {
        return;
    }

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent =
            String(currentYear);
    });
}


/* =========================================================
   10. SMOOTH SCROLL
   ========================================================= */

function initSmoothScroll() {
    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    if (!links.length) {
        return;
    }

    links.forEach((link) => {
        link.addEventListener(
            "click",
            (event) => {
                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });
}


/* =========================================================
   11. FAQ
   ========================================================= */

function initFAQ() {
    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach((item) => {
        item.addEventListener(
            "toggle",
            () => {
                if (!item.open) {
                    return;
                }

                faqItems.forEach((otherItem) => {
                    if (
                        otherItem !== item &&
                        otherItem.open
                    ) {
                        otherItem.open = false;
                    }
                });
            }
        );
    });
}


/* =========================================================
   12. ADD FAQ INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        initFAQ();
    }
);


/* =========================================================
   13. EXTERNAL LINKS
   ========================================================= */

function initExternalLinks() {
    const links =
        document.querySelectorAll(
            'a[href^="http"]'
        );

    links.forEach((link) => {
        const currentHost =
            window.location.hostname;

        try {
            const url =
                new URL(link.href);

            if (
                url.hostname !== currentHost
            ) {
                link.setAttribute(
                    "target",
                    "_blank"
                );

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );
            }
        } catch (error) {
            /* Ignore invalid URLs */
        }
    });
}


/* =========================================================
   14. INITIALIZE EXTERNAL LINKS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        initExternalLinks();
    }
);


/* =========================================================
   15. BACK TO TOP
   ========================================================= */

function initBackToTop() {
    const button =
        document.querySelector(
            "[data-back-to-top]"
        );

    if (!button) {
        return;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (window.scrollY > 500) {
                button.classList.add(
                    "visible"
                );
            } else {
                button.classList.remove(
                    "visible"
                );
            }
        }
    );

    button.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   16. INIT BACK TO TOP
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        initBackToTop();
    }
);


/* =========================================================
   17. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Protege+ carregado com sucesso."
);
