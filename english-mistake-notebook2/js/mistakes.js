/* =================================
   English Mistake Notebook
   Mistakes Page JavaScript
================================= */

"use strict";


/* =================================
   Configuration
================================= */

const MISTAKES_PER_PAGE = 9;


/* =================================
   State
================================= */

const mistakesState = {

    allMistakes: [],

    filteredMistakes: [],

    displayedCount: MISTAKES_PER_PAGE,

    searchTerm: "",

    category: "all",

    level: "all",

    sort: "newest"

};


/* =================================
   DOM Elements
================================= */

let mistakesSearch;
let clearSearch;
let categoryFilter;
let levelFilter;
let sortFilter;

let mistakesGrid;
let resultsCount;

let mistakesLoading;
let mistakesEmpty;

let resetFilters;
let emptyResetFilters;

let loadMoreWrapper;
let loadMoreMistakes;


/* =================================
   DOM Ready
================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (!document.getElementById("mistakesGrid")) {
        return;
    }

    cacheElements();

    initializeMistakesPage();

});


/* =================================
   Cache DOM Elements
================================= */

function cacheElements() {

    mistakesSearch =
        document.getElementById("mistakesSearch");

    clearSearch =
        document.getElementById("clearSearch");

    categoryFilter =
        document.getElementById("categoryFilter");

    levelFilter =
        document.getElementById("levelFilter");

    sortFilter =
        document.getElementById("sortFilter");

    mistakesGrid =
        document.getElementById("mistakesGrid");

    resultsCount =
        document.getElementById("resultsCount");

    mistakesLoading =
        document.getElementById("mistakesLoading");

    mistakesEmpty =
        document.getElementById("mistakesEmpty");

    resetFilters =
        document.getElementById("resetFilters");

    emptyResetFilters =
        document.getElementById("emptyResetFilters");

    loadMoreWrapper =
        document.getElementById("loadMoreWrapper");

    loadMoreMistakes =
        document.getElementById("loadMoreMistakes");

}


/* =================================
   Initialize Page
================================= */

function initializeMistakesPage() {

    if (
        !window.MistakeNotebookData ||
        !Array.isArray(
            window.MistakeNotebookData.mistakes
        )
    ) {

        showDataError();

        return;

    }


    mistakesState.allMistakes =
        window.MistakeNotebookData.getAllMistakes();


    applyURLFilters();

    bindEvents();

    updateResults();

}


/* =================================
   URL Filters
================================= */

function applyURLFilters() {

    const urlParams =
        new URLSearchParams(window.location.search);


    const category =
        urlParams.get("category");

    const level =
        urlParams.get("level");


    if (
        category &&
        categoryFilter &&
        isValidCategory(category)
    ) {

        mistakesState.category = category;

        categoryFilter.value = category;

    }


    if (
        level &&
        levelFilter &&
        isValidLevel(level)
    ) {

        mistakesState.level = level;

        levelFilter.value = level;

    }

}


/* =================================
   Event Listeners
================================= */

function bindEvents() {


    /* Search */

    if (mistakesSearch) {

        mistakesSearch.addEventListener(
            "input",
            handleSearch
        );

    }


    /* Clear Search */

    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            () => {

                mistakesSearch.value = "";

                mistakesState.searchTerm = "";

                updateResults();

                mistakesSearch.focus();

            }
        );

    }


    /* Category */

    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            () => {

                mistakesState.category =
                    categoryFilter.value;

                resetPagination();

                updateResults();

            }
        );

    }


    /* Level */

    if (levelFilter) {

        levelFilter.addEventListener(
            "change",
            () => {

                mistakesState.level =
                    levelFilter.value;

                resetPagination();

                updateResults();

            }
        );

    }


    /* Sort */

    if (sortFilter) {

        sortFilter.addEventListener(
            "change",
            () => {

                mistakesState.sort =
                    sortFilter.value;

                resetPagination();

                updateResults();

            }
        );

    }


    /* Reset Filters */

    if (resetFilters) {

        resetFilters.addEventListener(
            "click",
            resetAllFilters
        );

    }


    /* Empty State Reset */

    if (emptyResetFilters) {

        emptyResetFilters.addEventListener(
            "click",
            resetAllFilters
        );

    }


    /* Load More */

    if (loadMoreMistakes) {

        loadMoreMistakes.addEventListener(
            "click",
            loadMore
        );

    }


    /* Card Actions */

    if (mistakesGrid) {

        mistakesGrid.addEventListener(
            "click",
            handleCardAction
        );

    }

}


/* =================================
   Search
================================= */

function handleSearch(event) {

    mistakesState.searchTerm =
        event.target.value.trim().toLowerCase();

    resetPagination();

    updateResults();

}


/* =================================
   Main Update Function
================================= */

function updateResults() {

    showLoading();

    window.setTimeout(() => {

        const filtered =
            filterMistakes(
                mistakesState.allMistakes
            );

        const sorted =
            sortMistakes(filtered);

        mistakesState.filteredMistakes =
            sorted;

        renderMistakes();

        updateResultsCount();

        updateEmptyState();

        updateLoadMore();

        hideLoading();

    }, 0);

}


/* =================================
   Filter Mistakes
================================= */

function filterMistakes(mistakes) {

    return mistakes.filter((mistake) => {

        const matchesSearch =
            matchesSearchTerm(mistake);

        const matchesCategory =
            mistakesState.category === "all" ||
            mistake.category ===
                mistakesState.category;

        const matchesLevel =
            mistakesState.level === "all" ||
            mistake.level ===
                mistakesState.level;


        return (
            matchesSearch &&
            matchesCategory &&
            matchesLevel
        );

    });

}


/* =================================
   Search Matching
================================= */

function matchesSearchTerm(mistake) {

    if (!mistakesState.searchTerm) {
        return true;
    }


    const searchableText = [

        mistake.mistake,

        mistake.correction,

        mistake.explanation,

        mistake.example,

        mistake.category,

        mistake.level

    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


    return searchableText.includes(
        mistakesState.searchTerm
    );

}


/* =================================
   Sorting
================================= */

function sortMistakes(mistakes) {

    const sorted =
        [...mistakes];


    switch (mistakesState.sort) {


        case "oldest":

            sorted.sort(
                (a, b) =>
                    new Date(a.date) -
                    new Date(b.date)
            );

            break;


        case "popular":

            sorted.sort(
                (a, b) =>
                    Number(b.views || 0) -
                    Number(a.views || 0)
            );

            break;


        case "alphabetical":

            sorted.sort(
                (a, b) =>
                    a.mistake.localeCompare(
                        b.mistake,
                        "en",
                        {
                            sensitivity: "base"
                        }
                    )
            );

            break;


        case "newest":

        default:

            sorted.sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );

            break;

    }


    return sorted;

}


/* =================================
   Render Mistakes
================================= */

function renderMistakes() {

    if (!mistakesGrid) {
        return;
    }


    const mistakesToShow =
        mistakesState.filteredMistakes.slice(
            0,
            mistakesState.displayedCount
        );


    if (!mistakesToShow.length) {

        mistakesGrid.innerHTML = "";

        return;

    }


    mistakesGrid.innerHTML =
        mistakesToShow
            .map(
                (mistake) =>
                    createMistakeCard(mistake)
            )
            .join("");

}


/* =================================
   Create Mistake Card
================================= */

function createMistakeCard(mistake) {

    const categoryName =
        window.App
            ? window.App.formatCategoryName(
                mistake.category
            )
            : mistake.category;


    const safeMistake =
        escapeHTML(mistake.mistake);

    const safeCorrection =
        escapeHTML(mistake.correction);

    const safeExplanation =
        escapeHTML(mistake.explanation);

    const safeExample =
        escapeHTML(mistake.example);

    const safeCategory =
        escapeHTML(categoryName);

    const safeLevel =
        escapeHTML(mistake.level);


    const saved =
        isMistakeSaved(mistake.id);


    return `

        <article
            class="mistake-card"
            data-mistake-id="${mistake.id}"
        >

            <!-- Card Header -->

            <div class="mistake-card-header">

                <div class="mistake-meta">

                    <span class="mistake-category">
                        ${safeCategory}
                    </span>

                    <span class="mistake-level">
                        ${safeLevel}
                    </span>

                </div>


                <button
                    type="button"
                    class="save-mistake ${
                        saved ? "saved" : ""
                    }"
                    data-action="save"
                    data-id="${mistake.id}"
                    aria-label="${
                        saved
                            ? "Remove from saved mistakes"
                            : "Save mistake"
                    }"
                    title="${
                        saved
                            ? "Remove from saved mistakes"
                            : "Save mistake"
                    }"
                >
                    ${saved ? "★" : "☆"}
                </button>

            </div>


            <!-- Incorrect Sentence -->

            <div class="mistake-example incorrect-example">

                <span class="example-label">
                    Incorrect
                </span>

                <p>
                    <span class="example-icon">
                        ✕
                    </span>

                    ${safeMistake}
                </p>

            </div>


            <!-- Correct Sentence -->

            <div class="mistake-example correct-example">

                <span class="example-label">
                    Correct
                </span>

                <p>
                    <span class="example-icon">
                        ✓
                    </span>

                    ${safeCorrection}
                </p>

            </div>


            <!-- Explanation -->

            <div
                class="mistake-explanation"
                data-explanation
                hidden
            >

                <div class="explanation-block">

                    <h4>
                        Why?
                    </h4>

                    <p>
                        ${safeExplanation}
                    </p>

                </div>


                <div class="explanation-block">

                    <h4>
                        Example
                    </h4>

                    <p>
                        ${safeExample}
                    </p>

                </div>

            </div>


            <!-- Card Footer -->

            <div class="mistake-card-footer">

                <span class="mistake-views">
                    👁 ${formatNumber(mistake.views)}
                </span>

                <span class="mistake-date">
                    ${formatDate(mistake.date)}
                </span>

                <button
                    type="button"
                    class="view-explanation"
                    data-action="explanation"
                    data-id="${mistake.id}"
                    aria-expanded="false"
                >
                    View Explanation
                </button>

            </div>

        </article>

    `;

}


/* =================================
   Card Actions
================================= */

function handleCardAction(event) {

    const button =
        event.target.closest(
            "[data-action]"
        );


    if (!button) {
        return;
    }


    const action =
        button.dataset.action;

    const id =
        Number(button.dataset.id);


    if (!id) {
        return;
    }


    if (action === "explanation") {

        toggleExplanation(button, id);

    }


    if (action === "save") {

        toggleSavedMistake(button, id);

    }

}


/* =================================
   Toggle Explanation
================================= */

function toggleExplanation(button, id) {

    const card =
        mistakesGrid.querySelector(
            `.mistake-card[data-mistake-id="${id}"]`
        );


    if (!card) {
        return;
    }


    const explanation =
        card.querySelector(
            "[data-explanation]"
        );


    if (!explanation) {
        return;
    }


    const isHidden =
        explanation.hasAttribute("hidden");


    if (isHidden) {

        explanation.removeAttribute("hidden");

        button.textContent =
            "Hide Explanation";

        button.setAttribute(
            "aria-expanded",
            "true"
        );

    } else {

        explanation.setAttribute(
            "hidden",
            ""
        );

        button.textContent =
            "View Explanation";

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}


/* =================================
   Saved Mistakes
================================= */

function getSavedMistakes() {

    try {

        const saved =
            localStorage.getItem(
                "englishMistakeNotebookSaved"
            );


        if (!saved) {
            return [];
        }


        const parsed =
            JSON.parse(saved);


        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        return [];

    }

}


/* =================================
   Check Saved Mistake
================================= */

function isMistakeSaved(id) {

    return getSavedMistakes()
        .includes(Number(id));

}


/* =================================
   Toggle Saved Mistake
================================= */

function toggleSavedMistake(button, id) {

    const saved =
        getSavedMistakes();


    const index =
        saved.indexOf(id);


    if (index === -1) {

        saved.push(id);

    } else {

        saved.splice(index, 1);

    }


    try {

        localStorage.setItem(
            "englishMistakeNotebookSaved",
            JSON.stringify(saved)
        );

    } catch (error) {

        console.warn(
            "Unable to save mistake.",
            error
        );

    }


    const isSaved =
        saved.includes(id);


    button.classList.toggle(
        "saved",
        isSaved
    );


    button.textContent =
        isSaved ? "★" : "☆";


    button.setAttribute(
        "aria-label",
        isSaved
            ? "Remove from saved mistakes"
            : "Save mistake"
    );


    button.setAttribute(
        "title",
        isSaved
            ? "Remove from saved mistakes"
            : "Save mistake"
    );

}


/* =================================
   Load More
================================= */

function loadMore() {

    mistakesState.displayedCount +=
        MISTAKES_PER_PAGE;


    renderMistakes();

    updateLoadMore();


    if (loadMoreWrapper) {

        loadMoreWrapper.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =================================
   Pagination
================================= */

function resetPagination() {

    mistakesState.displayedCount =
        MISTAKES_PER_PAGE;

}


/* =================================
   Update Results Count
================================= */

function updateResultsCount() {

    if (!resultsCount) {
        return;
    }


    const total =
        mistakesState.filteredMistakes.length;


    const displayed =
        Math.min(
            mistakesState.displayedCount,
            total
        );


    if (!total) {

        resultsCount.textContent =
            "0 mistakes found";

        return;

    }


    if (displayed < total) {

        resultsCount.textContent =
            `Showing ${displayed} of ${total} mistakes`;

    } else {

        resultsCount.textContent =
            `${total} ${
                total === 1
                    ? "mistake"
                    : "mistakes"
            } found`;

    }

}


/* =================================
   Empty State
================================= */

function updateEmptyState() {

    if (!mistakesEmpty) {
        return;
    }


    const hasResults =
        mistakesState.filteredMistakes.length > 0;


    mistakesEmpty.hidden =
        hasResults;


    if (mistakesGrid) {

        mistakesGrid.hidden =
            !hasResults;

    }

}


/* =================================
   Load More Visibility
================================= */

function updateLoadMore() {

    if (!loadMoreWrapper) {
        return;
    }


    const total =
        mistakesState.filteredMistakes.length;


    const hasMore =
        mistakesState.displayedCount < total;


    loadMoreWrapper.hidden =
        !hasMore;

}


/* =================================
   Reset All Filters
================================= */

function resetAllFilters() {

    mistakesState.searchTerm = "";

    mistakesState.category = "all";

    mistakesState.level = "all";

    mistakesState.sort = "newest";


    resetPagination();


    if (mistakesSearch) {
        mistakesSearch.value = "";
    }


    if (categoryFilter) {
        categoryFilter.value = "all";
    }


    if (levelFilter) {
        levelFilter.value = "all";
    }


    if (sortFilter) {
        sortFilter.value = "newest";
    }


    removeURLFilters();

    updateResults();


    if (mistakesSearch) {
        mistakesSearch.focus();
    }

}


/* =================================
   Remove URL Filters
================================= */

function removeURLFilters() {

    const url =
        new URL(window.location.href);


    url.searchParams.delete("level");

    url.searchParams.delete("category");


    window.history.replaceState(
        {},
        "",
        url.pathname +
        (
            url.searchParams.toString()
                ? `?${url.searchParams.toString()}`
                : ""
        )
    );

}


/* =================================
   Validate Category
================================= */

function isValidCategory(category) {

    if (
        !window.MistakeNotebookData ||
        !Array.isArray(
            window.MistakeNotebookData.categories
        )
    ) {

        return false;

    }


    return window.MistakeNotebookData.categories
        .some(
            (item) =>
                item.id === category
        );

}


/* =================================
   Validate Level
================================= */

function isValidLevel(level) {

    if (
        !window.MistakeNotebookData ||
        !Array.isArray(
            window.MistakeNotebookData.levels
        )
    ) {

        return false;

    }


    return window.MistakeNotebookData.levels
        .some(
            (item) =>
                item.id === level
        );

}


/* =================================
   Loading State
================================= */

function showLoading() {

    if (mistakesLoading) {

        mistakesLoading.hidden = false;

    }

}


function hideLoading() {

    if (mistakesLoading) {

        mistakesLoading.hidden = true;

    }

}


/* =================================
   Data Error
================================= */

function showDataError() {

    if (!mistakesGrid) {
        return;
    }


    mistakesGrid.innerHTML = `

        <div class="data-error">

            <div class="empty-icon">
                ⚠️
            </div>

            <h3>
                Unable to Load Mistakes
            </h3>

            <p>
                The mistake data could not be loaded.
                Please refresh the page and try again.
            </p>

        </div>

    `;


    if (resultsCount) {

        resultsCount.textContent =
            "Unable to load mistakes";

    }

}


/* =================================
   Formatting Helpers
================================= */

function escapeHTML(value) {

    if (
        window.App &&
        typeof window.App.escapeHTML === "function"
    ) {

        return window.App.escapeHTML(value);

    }


    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function formatNumber(value) {

    if (
        window.App &&
        typeof window.App.formatNumber === "function"
    ) {

        return window.App.formatNumber(value);

    }


    const number =
        Number(value);


    if (!Number.isFinite(number)) {
        return "0";
    }


    return number.toLocaleString("en-US");

}


function formatDate(date) {

    if (!date) {
        return "";
    }


    const parsedDate =
        new Date(date);


    if (
        Number.isNaN(
            parsedDate.getTime()
        )
    ) {

        return "";

    }


    return parsedDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

}


/* =================================
   Global Export
================================= */

window.MistakesPage = {

    state: mistakesState,

    refresh: updateResults,

    reset: resetAllFilters,

    loadMore,

    getSavedMistakes

};
