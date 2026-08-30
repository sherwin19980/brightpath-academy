function openRegistration() {

    document.getElementById("registrationModal").style.display = "flex";

}


function closeRegistration() {

    document.getElementById("registrationModal").style.display = "none";

}


 



window.onclick = function(event) {

    const modal = document.getElementById("registrationModal");

    if (event.target === modal) {

        closeRegistration();

    }

};
function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}
// ================= SCROLL ANIMATIONS =================

const animatedElements = document.querySelectorAll(
    ".course-card, .faculty-card, .testimonial-card, .about-content, .cta, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

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


animatedElements.forEach((element) => {

    element.classList.add("animate");

    observer.observe(element);

});
// ================= STATISTICS COUNTER =================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment = target / 100;

        current += increment;

        if (current < target) {

            counter.textContent = Math.floor(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target.toLocaleString() + "+";

        }

    };

    updateCounter();

});