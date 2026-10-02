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