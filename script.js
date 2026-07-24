// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#08111f";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        header.style.background = "#07111fcc";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Typing Effect
// ===============================

const typingElement = document.querySelector(".typing-text");

const words = [
    "Information Technology Student",
    "Web Developer",
    "Software Developer",
    "UI Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat-box h3");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const original = counter.innerText;

            const number = parseInt(original);

            if (isNaN(number)) return;

            let count = 0;

            const speed = number / 80;

            function updateCounter() {

                if (count < number) {

                    count += speed;

                    counter.innerText = Math.ceil(count) + original.replace(number, "");

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = original;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

// ===============================
// Scroll Reveal Animation
// ===============================

const revealItems = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .info, .stat-box"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 70,
            behavior: "smooth"

        });

    });

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";

    } else {

        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";

    }

});

// Initial State
topButton.style.opacity = "0";
topButton.style.pointerEvents = "none";

// ===============================
// Console Message
// ===============================

console.log("Portfolio Website Loaded Successfully!");