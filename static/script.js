// ========================================
// VITLS WEBSITE
// ========================================


// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});


// CLOSE MOBILE MENU AFTER CLICK

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

});


// TEMPORARY E-SHOP LINKS

const shopLinks = document.querySelectorAll(".eshop-link");

shopLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "The VITLS E-shop is coming soon. " +
            "We'll add the PrestaShop link here later."
        );

    });

});


// NEWSLETTER

const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! You're now in the VITLS loop. ♡";

    newsletterForm.reset();

});

// ========================================
// VITAMIN ACCORDION
// ========================================

const vitaminItems = document.querySelectorAll(".vitamin-item");

vitaminItems.forEach(item => {

    const button = item.querySelector(".vitamin-row");

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("open");

        // Close all vitamins
        vitaminItems.forEach(otherItem => {
            otherItem.classList.remove("open");
        });

        // Open selected vitamin
        if (!isOpen) {
            item.classList.add("open");
        }

    });

});

/* =====================================
   VITLS JOURNAL – ARTICLE FILTERS
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(
        ".journal-filter"
    );

    const articleCards = document.querySelectorAll(
        ".journal-page-card"
    );

    const articleCount = document.getElementById(
        "journalArticleCount"
    );

    if (!filterButtons.length || !articleCount) {
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (item) {

                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");

            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            let visibleArticles = 0;

            articleCards.forEach(function (card) {

                const articleCategory = card.dataset.category;

                const shouldShow =
                    selectedCategory === "all" ||
                    selectedCategory === articleCategory;

                card.hidden = !shouldShow;

                if (shouldShow) {
                    visibleArticles++;
                }

            });

            articleCount.textContent =
                visibleArticles +
                (visibleArticles === 1 ? " ARTICLE" : " ARTICLES");

        });

    });

});