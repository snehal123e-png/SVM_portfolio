document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(255,105,180,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

const revealElements = document.querySelectorAll(
    ".about, .skills, .education, .projects, .certificates, .contact"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const typingText = "AI & Data Science Student";

const typingElement =
    document.querySelector(".hero-content h2");

let index = 0;

function typeWriter() {

    if (!typingElement) return;

    typingElement.innerHTML =
        typingText.slice(0, index);

    index++;

    if (index <= typingText.length) {

        setTimeout(typeWriter, 100);

    }

}

if (typingElement) {

    typingElement.innerHTML = "";
    typeWriter();

}

const skillBars =
    document.querySelectorAll(".progress-bar");

function animateSkills() {

    skillBars.forEach(bar => {

        if (!bar.dataset.animated) {

            bar.dataset.animated = "true";

            bar.style.width = "0";

            setTimeout(() => {

                if (bar.classList.contains("html"))
                    bar.style.width = "90%";

                if (bar.classList.contains("css"))
                    bar.style.width = "85%";

                if (bar.classList.contains("javascript"))
                    bar.style.width = "75%";

                if (bar.classList.contains("python"))
                    bar.style.width = "80%";

                if (bar.classList.contains("java"))
                    bar.style.width = "75%";

                if (bar.classList.contains("cpp"))
                    bar.style.width = "80%";

                if (bar.classList.contains("mysql"))
                    bar.style.width = "75%";

            }, 300);

        }

    });

}

window.addEventListener("load", animateSkills);

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

const contactForm =
    document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}

console.log(
    "Portfolio Developed by Snehal Mankar 🚀"
);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
