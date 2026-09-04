  /* ================= REGISTRATION MODAL ================= */

function openRegistration() {
    const modal = document.getElementById("registrationModal");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeRegistration() {
    const modal = document.getElementById("registrationModal");

    modal.style.display = "none";

    document.body.style.overflow = "";
}


/* Close modal when clicking outside */

window.addEventListener("click", function (event) {

    const modal = document.getElementById("registrationModal");

    if (event.target === modal) {
        closeRegistration();
    }

});


/* Close modal with Escape key */

window.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const modal = document.getElementById("registrationModal");

        if (modal.style.display === "flex") {
            closeRegistration();
        }

    }

});


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.getElementById("navMenu").classList.remove("active");

    });

});


/* ================= SCROLL ANIMATIONS ================= */

const animatedElements = document.querySelectorAll(
    ".course-card, .faculty-card, .testimonial-card, .about-content, .cta, .contact"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("animate");

    observer.observe(element);

});


/* ================= STATISTICS COUNTER ================= */

const counters = document.querySelectorAll(".counter");


counters.forEach(function (counter) {

    const target = Number(counter.dataset.target);

    let current = 0;

    const duration = 1500;

    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        current = Math.floor(progress * target);

        counter.textContent = current.toLocaleString();


        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target.toLocaleString() + "+";

        }

    }


    requestAnimationFrame(updateCounter);

});
