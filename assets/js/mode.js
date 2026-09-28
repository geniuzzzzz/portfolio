let mode = document.querySelector(".mode");
let sun_mode = document.querySelector(".mode .fa-sun");
let moon_mode = document.querySelector(".mode .fa-moon");
// let body = document.body;
let navbrand = document.querySelector(".navbar-brand");
const about = document.querySelector("#about");
const why = document.querySelector(".why");
const mission = document.querySelector(".mission");
const read = document.querySelector(".readMore");
const nav = document.querySelector(".ul li a");
const modal = document.querySelector(".about-modal .modal-dialog");
const service = document.querySelector("#services");
const serv_card = document.querySelectorAll(".service-card");
const serv_carde = document.querySelectorAll(".service-card-inn");


// journey


function changeMode() {
    // if (mode.classList.contains("modee")) {
        mode.classList.add("modee");
    // }
    moon_mode.style.display = "none";
    sun_mode.style.display = "block";

    // body.classList.toggle("dark-mode");
    navbrand.classList.add("brand-dark");
    about.classList.add("dark-mode");
    why.classList.add("why-dark");
    mission.classList.add("why-dark");
    read.classList.add("readMore-dark");
    nav.classList.add("nav-dark");
    modal.classList.add("modal-dark");
    service.classList.add("service-dark");
    serv_card.classList.add("serv-dark");
    serv_carde.classList.add("serv-dark");
}

function lightMode() {
    mode.classList.remove("modee");
    moon_mode.style.display = "block";
    sun_mode.style.display = "none";

    navbrand.classList.remove("brand-dark");
    about.classList.remove("dark-mode");
    why.classList.remove("why-dark");
    mission.classList.remove("why-dark");
    read.classList.remove("readMore-dark");
    nav.classList.remove("nav-dark");
    modal.classList.remove("modal-dark");
    service.classList.remove("service-dark");
    serv_card.classList.remove("serv-dark");
    serv_carde.classList.remove("serv-dark");
}