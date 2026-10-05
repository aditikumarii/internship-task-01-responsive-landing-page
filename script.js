/* =========================================
   TASK 1 - RESPONSIVE LANDING PAGE
   JavaScript
========================================= */


/* =========================================
   SELECT ELEMENTS
========================================= */

const header = document.getElementById("header");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


/* =========================================
   1. NAVBAR SCROLL EFFECT
========================================= */

/*
   When the user scrolls down,
   the "scrolled" class is added to the navbar.

   CSS changes the navbar background,
   blur and shadow.
*/

function handleScroll() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


    updateActiveNavigation();
}


window.addEventListener("scroll", handleScroll);


/* Run once when page loads */

handleScroll();


/* =========================================
   2. MOBILE MENU
========================================= */

menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

});


/* =========================================
   3. CLOSE MOBILE MENU
========================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});


/* =========================================
   4. ACTIVE NAVIGATION
========================================= */

/*
   This function checks which section
   is currently visible on the screen.

   The corresponding navigation item
   receives the "active" class.
*/

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >=
            sectionTop - 200
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================
   5. CONTACT FORM
========================================= */

/*
   This demo form does not send data
   to a server.

   It displays a success message
   when the user submits the form.
*/

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    formMessage.textContent =
        `Thank you, ${name}! Your message has been received.`;


    contactForm.reset();

});


/* =========================================
   6. KEYBOARD ACCESSIBILITY
========================================= */

document.addEventListener("keydown", function (event) {

    /*
       Pressing Escape closes the
       mobile navigation menu.
    */

    if (event.key === "Escape") {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    }

});