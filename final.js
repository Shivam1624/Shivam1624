document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links in the navigation menu
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Fade-in effect for sections when they become visible in the viewport
    const sections = document.querySelectorAll('.bookmarks');
    const fadeInOptions = {
        threshold: 0.5, // Intersection ratio at which the element should be triggered
        rootMargin: "0px 0px -100px 0px" // Adjust the root margin as needed
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});
