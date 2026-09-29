const projectsData = {
    web: [
        // 

        {
            title: "MSG101 Event Website",
            desc: "A responsive event website for sharing event details, speakers, countdowns, and registration information.",
            img: "assets/img/projects/msg-flyer.jpg",
            url: "https://msg101.netlify.app"
        },

        {
            title: "Sneakers — Product Page",
            desc: "E-commerce product page with cart drawer, gallery, and quantity controls.",
            img: "assets/img/literal-blog.jpg",
            url: "https://sneakers-frontend-challenge.netlify.app"
        },


        {
            title: "Q-Leap",
            desc: "A website concept designed and developed for an AI-focused technology company.",
            img: "assets/img/web/qleap.jpg",
            url: "https://qleap.netlify.app"
        },

        // 

        {
            title: "Egg Business Website",
            desc: "A responsive business website created to showcase an egg business and its offerings.",
            img: "assets/img/web/MINIMAL EGG BIZ WEBSITE.jpg",
            url: "https://eggbiz.netlify.app"
        }
    ],

    design: [
        {
            title: "Business Flyer",
            desc: "Promotional flyer created for a business campaign.",
            img: "assets/img/projects/business-flyer.jpg",
            url: "assets/img/projects/business-flyer.jpg"
        },

        {
            title: "Pioneer Space Logo",
            desc: "A logo concept created for Pioneer Space.",
            img: "assets/img/projects/logo-design.jpg",
            url: "assets/img/projects/logo-design.jpg"
        },

        {
            title: "Event Session Flyer",
            desc: "Event graphic created to communicate session details clearly and attract attention.",
            img: "assets/img/projects/session-flyer.jpg",
            url: "assets/img/projects/session-flyer.jpg"
        },

        {
            title: "MSG101 Event Flyer",
            desc: "Promotional flyer designed for the MSG101 event.",
            img: "assets/img/projects/msg-flyer.jpg",
            url: "assets/img/projects/msg-flyer.jpg"
        },

        {
            title: "Brand Logo",
            desc: "A simple logo concept built around a clean and recognizable visual identity.",
            img: "assets/img/projects/logo3.png",
            url: "assets/img/projects/logo3.png"
        },

        {
            title: "TranzactHub Logo",
            desc: "Logo concept created for TranzactHub.",
            img: "assets/img/projects/logo2.jpg",
            url: "assets/img/projects/logo2.jpg"
        },

        {
            title: "Independence Flyer",
            desc: "Graphic design created for Nigeria's Independence celebration.",
            img: "assets/img/projects/nigeria-flyer.jpg",
            url: "assets/img/projects/nigeria-flyer.jpg"
        },

        {
            title: "21-Day Challenge Flyer",
            desc: "Promotional graphic created for a 21-day challenge.",
            img: "assets/img/projects/challenge-flyer.jpg",
            url: "assets/img/projects/challenge-flyer.jpg"
        },

        {
            title: "Event Flyer",
            desc: "Event graphic designed with a clear information hierarchy and visual structure.",
            img: "assets/img/projects/event-flyer.jpg",
            url: "assets/img/projects/event-flyer.jpg"
        },

        {
            title: "New Month Flyer",
            desc: "Social media graphic created as part of a monthly design series.",
            img: "assets/img/projects/month-flyer.jpg",
            url: "assets/img/projects/month-flyer.jpg"
        },

        {
            title: "Ebook Promotional Flyer",
            desc: "Promotional graphic designed to introduce and market an ebook.",
            img: "assets/img/projects/media-flyer.jpg",
            url: "assets/img/projects/media-flyer.jpg"
        }
    ]
};






document.addEventListener("DOMContentLoaded", function () {
    initLoadingScreen();
    initNavbar();
    initMobileNav();
    initPortfolio();
    initScrollAnimations();
    initThemeToggle();
    initForms();
    setCurrentYear();
    checkScroll();
});


/////// load

function initLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");

    if (!loadingScreen) return;

    setTimeout(() => {
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);

    }, 1000);
}


// navbar 

function initNavbar() {
    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

        updateActiveNavLink();
        updateProgressBar();
    });
}


function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionBottom =
            sectionTop + section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (
            href &&
            href.startsWith("#") &&
            href.substring(1) === current
        ) {
            link.classList.add("active");
        }

    });
}




function updateProgressBar() {
    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) return;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (documentHeight <= 0) return;

    const scrollPercent =
        (window.scrollY / documentHeight) * 100;

    progressBar.style.width =
        `${scrollPercent}%`;
}




function initMobileNav() {

    const mobileNav =
        document.getElementById("mobileNav");

    const menuButton =
        document.getElementById("mobileMenuBtn");

    if (!mobileNav || !menuButton) return;

    menuButton.addEventListener("click", () => {

        mobileNav.classList.add("active");

        document.body.style.overflow = "hidden";

    });

    document.addEventListener("click", event => {

        if (
            mobileNav.classList.contains("active") &&
            !mobileNav.contains(event.target) &&
            !event.target.closest("#mobileMenuBtn")
        ) {
            closeMobileNav();
        }

    });
}


function closeMobileNav() {

    const mobileNav =
        document.getElementById("mobileNav");

    if (!mobileNav) return;

    mobileNav.classList.remove("active");

    document.body.style.overflow = "";
}




function initPortfolio() {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const container =
        document.getElementById("portfolioContainer");

    if (!container) return;


    function renderPortfolio(category = "all") {

        let html = "";


        if (
            category === "all" ||
            category === "web"
        ) {

            projectsData.web.forEach(project => {

                html += createPortfolioItem(
                    project,
                    "web"
                );

            });

        }


        if (
            category === "all" ||
            category === "design"
        ) {

            projectsData.design.forEach(project => {

                html += createPortfolioItem(
                    project,
                    "design"
                );

            });

        }


        container.innerHTML = html;

    }


    function createPortfolioItem(
        project,
        category
    ) {

        const categoryLabel =
            category === "web"
                ? "Web Development"
                : "Graphic Design";

        const buttonText =
            category === "web"
                ? "View Website"
                : "View Design";


        function getImageSrc(path) {

            const isLocal =
                location.hostname === "localhost" ||
                location.hostname === "127.0.0.1" ||
                location.protocol === "file:";

            if (isLocal) {
                return path;
            }

            return `/.netlify/images?url=/${path}&w=600&fm=webp&q=75`;
        }
        return `
            <div
                class="col-lg-3 col-md-6 portfolio-item"
                data-category="${category}">

                <div class="card border-0 shadow-sm h-100">

                    <img src="${getImageSrc(project.img)}" class="card-img-top" alt="${project.title}" loading="lazy">

                    <div class="card-body">

                        <span class="small text-uppercase text-secondary">
                            ${categoryLabel}
                        </span>

                        <h5 class="card-title mt-2">
                            ${project.title}
                        </h5>

                        <p class="card-text text-secondary small">
                            ${project.desc}
                        </p>

                        <a
                            href="${project.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary btn-sm">

                            ${buttonText}

                        </a>

                    </div>

                </div>

            </div>
        `;
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            renderPortfolio(
                this.dataset.filter
            );

        });

    });


    renderPortfolio("all");
}




function initScrollAnimations() {

    window.addEventListener(
        "scroll",
        checkScroll
    );

}


function checkScroll() {

    document
        .querySelectorAll(".fade-in")
        .forEach(element => {

            const position =
                element.getBoundingClientRect().top;

            if (
                position <
                window.innerHeight - 100
            ) {
                element.classList.add("visible");
            }

        });

}




function initThemeToggle() {

    const toggle =
        document.getElementById("themeToggle");

    if (!toggle) return;

    const icon =
        toggle.querySelector("i");

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        icon.classList.replace(
            "fa-moon",
            "fa-sun"
        );

    }


    toggle.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        if (isDark) {

            icon.classList.replace(
                "fa-moon",
                "fa-sun"
            );

        } else {

            icon.classList.replace(
                "fa-sun",
                "fa-moon"
            );

        }


        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

    });

}




function initForms() {

    const form =
        document.getElementById("contactForm");

    if (!form) return;


    form.addEventListener("submit", async event => {

        event.preventDefault();

        const name =
            document.getElementById("name")?.value.trim();

        const email =
            document.getElementById("email")?.value.trim();

        const phone =
            document.getElementById("phone")?.value.trim();

        const service =
            document.getElementById("service")?.value;

        const message =
            document.getElementById("message")?.value.trim();


        if (!name || !email || !service || !message) {
            return;
        }


        const successMessage =
            document.getElementById("formSuccess");


        try {

            const formData = new FormData(form);

            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            if (successMessage) {
                successMessage.innerHTML = `
                    <strong>Thanks!</strong>
                    <span class="d-block mt-1">
                        Your message has been sent successfully. I’ll get back to you soon.
                    </span>
                `;
                successMessage.classList.remove("d-none");
            }

            form.reset();

        } catch (error) {
            console.error("Netlify form submission failed:", error);

            if (successMessage) {
                successMessage.innerHTML = `
                    <strong>Oops!</strong>
                    <span class="d-block mt-1">
                        Something went wrong. Please try again, or send a message on WhatsApp.
                    </span>
                `;
                successMessage.classList.remove("d-none");
            }
        }

    });

}




function toggleFaq(element) {

    const answer =
        element.nextElementSibling;

    const icon =
        element.querySelector("i");

    if (!answer) return;


    const isOpen =
        answer.classList.contains("show");


    answer.classList.toggle(
        "show",
        !isOpen
    );


    answer.style.maxHeight =
        !isOpen
            ? `${answer.scrollHeight}px`
            : "0";


    if (icon) {

        icon.classList.toggle(
            "fa-chevron-down",
            isOpen
        );

        icon.classList.toggle(
            "fa-chevron-up",
            !isOpen
        );

    }

}


function setCurrentYear() {

    const year =
        document.getElementById("currentYear");

    if (!year) return;

    year.textContent =
        new Date().getFullYear();

}



document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const href =
                this.getAttribute("href");


            if (
                !href ||
                href === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(href);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            closeMobileNav();

        }
    );

});


window.closeMobileNav =
    closeMobileNav;

window.toggleFaq =
    toggleFaq;