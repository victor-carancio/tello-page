const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header-container");
const fadeElems = document.querySelector(".has-fade");
const body = document.querySelector(".body");

const home = document.getElementById("home-btn");
const client = document.getElementById("client-btn");
const contact = document.querySelectorAll(".contact-btn");
const project = document.querySelectorAll(".projects-btn");

const contactSection = document.querySelector(".contact");
const contactAnimLeft = document.querySelectorAll(".contact-anim-left");
const contactAnimRight = document.querySelectorAll(".contact-anim-right");
const AnimNameLeft = "animate__fadeInLeft";
const AnimNameRight = "animate__fadeInRight";

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        CloseHamburger();
    } else {
        header.classList.add("open");
        headerContainer.classList.add("menu-open");
        fadeElems.classList.remove("fade-out");
        fadeElems.classList.add("fade-in");
        body.classList.add("no-scroll");
        btnHamburger.classList.add("open");
    }
});

home.addEventListener("click", () => {
    CloseHamburger();
});
client.addEventListener("click", () => {
    CloseHamburger();
});

contact.forEach((element) => {
    element.addEventListener("click", () => {
        CloseHamburger();
        contactSection.scrollIntoView();
        window.scrollBy(0, -100);
        contactAnimLeft.forEach((e) => {
            e.classList.add(AnimNameLeft);
        });
        contactAnimRight.forEach((e) => {
            e.classList.add(AnimNameRight);
        });
    });
});

function CloseHamburger() {
    header.classList.remove("open");
    headerContainer.classList.remove("menu-open");
    fadeElems.classList.remove("fade-in");
    fadeElems.classList.add("fade-out");
    setTimeout(() => fadeElems.classList.remove("fade-out"), 500);
    body.classList.remove("no-scroll");

    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
    } else {
        btnHamburger.classList.add("open");
    }
}
