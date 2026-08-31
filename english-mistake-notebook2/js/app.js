/* =================================
   English Mistake Notebook
   Global Application JavaScript
================================= */

"use strict";


/* =================================
   DOM Ready
================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initSmoothScrolling();
    initCurrentYear();

});


/* =================================
   Mobile Menu
================================= */

function initMobileMenu() {

    const menuToggle = document.getElementById("mobileMenuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navMenu.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navMenu.classList.contains("is-open")
        ) {

            navMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* Close menu with Escape */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("is-open")
        ) {

            navMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();

        }

    });

}


/* =================================
   Smooth Scrolling
================================= */

function initSmoothScrolling() {

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


/* =================================
   Current Year
================================= */

function initCurrentYear() {

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    if (!yearElements.length) {
        return;
    }

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach((element) => {

        element.textContent = currentYear;

    });

}


/* =================================
   Utility Functions
================================= */

/**
 * Safely escape HTML characters.
 * Useful when displaying dynamic data
 * coming from data.js.
 */

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/**
 * Create a readable number.
 *
 * Example:
 * 1500 -> 1,500
 */

function formatNumber(value) {

    const number = Number(value);

    if (!Number.isFinite(number)) {
        return "0";
    }

    return number.toLocaleString("en-US");

}


/**
 * Convert a category slug into
 * a readable category name.
 *
 * Example:
 * "word-order" -> "Word Order"
 */

function formatCategoryName(category) {

    if (!category) {
        return "";
    }

    return String(category)
        .split("-")
        .map((word) => {

            return word.charAt(0).toUpperCase() +
                   word.slice(1);

        })
        .join(" ");

}


/**
 * Get URL query parameter.
 *
 * Example:
 * mistakes.html?level=B1
 */

function getQueryParam(name) {

    const params =
        new URLSearchParams(window.location.search);

    return params.get(name);

}


/**
 * Check whether an element exists.
 */

function elementExists(selector) {

    return document.querySelector(selector) !== null;

}


/* =================================
   Global Export
================================= */

window.App = {

    escapeHTML,
    formatNumber,
    formatCategoryName,
    getQueryParam,
    elementExists

};

/* =================================
   Statistics
================================= */

function initializeStatistics() {

    if (
        !window.MistakeNotebookData ||
        !Array.isArray(
            window.MistakeNotebookData.mistakes
        )
    ) {
        console.warn(
            "MistakeNotebookData is not available."
        );

        return;
    }


    const mistakes =
        window.MistakeNotebookData.mistakes;


    /* Total Mistakes */

    const totalMistakes =
        document.getElementById(
            "totalMistakes"
        );

    if (totalMistakes) {

        totalMistakes.textContent =
            mistakes.length;

    }


    /* Total Categories */

    const totalCategories =
        document.getElementById(
            "totalCategories"
        );

    if (totalCategories) {

        const categories =
            new Set(
                mistakes
                    .map(
                        mistake =>
                            mistake.category
                    )
                    .filter(Boolean)
            );


        totalCategories.textContent =
            categories.size;

    }


    /* Total Levels */

    const totalLevels =
        document.getElementById(
            "totalLevels"
        );

    if (totalLevels) {

        if (
            Array.isArray(
                window.MistakeNotebookData.levels
            )
        ) {

            totalLevels.textContent =
                window.MistakeNotebookData
                    .levels.length;

        } else {

            const levels =
                new Set(
                    mistakes
                        .map(
                            mistake =>
                                mistake.level
                        )
                        .filter(Boolean)
                );

            totalLevels.textContent =
                levels.size;

        }

    }


    /* Total Views */

    const totalViews =
        document.getElementById(
            "totalViews"
        );

    if (totalViews) {

        const views =
            mistakes.reduce(
                (total, mistake) => {

                    return total +
                        Number(
                            mistake.views || 0
                        );

                },
                0
            );


        totalViews.textContent =
            formatNumber(views);

    }

}


/* =================================
   Number Formatter
================================= */

function formatNumber(number) {

    const value =
        Number(number);


    if (!Number.isFinite(value)) {

        return "0";

    }


    return value.toLocaleString("en-US");

}


/* =================================
   Initialize App
================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeStatistics();

    }
);
