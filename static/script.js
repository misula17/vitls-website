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

/* =====================================
   VITLS – COOKIE CONSENT
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const consentKey = "vitls_analytics_consent";

    function loadClarity() {

        if (window.clarity) return;

        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
            };
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "zinnkhizdq");

        window.clarity("consentv2", {
            analytics_Storage: "granted",
            ad_Storage: "denied"
        });
    }

    const cookieBanner = document.createElement("div");

    cookieBanner.className = "vitls-cookie-banner";
    cookieBanner.hidden = true;

    cookieBanner.innerHTML = `
        <div class="cookie-content">

            <span class="cookie-label">
                YOUR PRIVACY MATTERS
            </span>

            <h3>A little about cookies.</h3>

            <p>
                We use Microsoft Clarity to understand
                how you explore VITLS and improve your
                browsing experience. You can choose
                whether to allow analytics cookies.
            </p>

            <div class="cookie-actions">

                <button type="button" id="acceptAnalytics">
                    Accept analytics
                </button>

                <button type="button" id="rejectAnalytics">
                    Reject analytics
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(cookieBanner);

    const settingsButton = document.createElement("button");

    settingsButton.type = "button";
    settingsButton.className = "cookie-settings-button";
    settingsButton.textContent = "Cookie settings";

    document.body.appendChild(settingsButton);

    const savedConsent = localStorage.getItem(consentKey);

    if (savedConsent === "accepted") {
        loadClarity();
    } else if (savedConsent !== "rejected") {
        cookieBanner.hidden = false;
    }

    document.getElementById("acceptAnalytics")
        .addEventListener("click", function () {

            localStorage.setItem(consentKey, "accepted");

            cookieBanner.hidden = true;

            loadClarity();

        });

    document.getElementById("rejectAnalytics")
        .addEventListener("click", function () {

            localStorage.setItem(consentKey, "rejected");

            cookieBanner.hidden = true;

            if (window.clarity) {

                window.clarity("consentv2", {
                    analytics_Storage: "denied",
                    ad_Storage: "denied"
                });

                window.location.reload();

            }

        });

    settingsButton.addEventListener("click", function () {

        cookieBanner.hidden = false;

    });

});