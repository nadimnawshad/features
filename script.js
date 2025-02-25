document.addEventListener("DOMContentLoaded", function() {
    console.log("Blog loaded successfully!");

    // Example JavaScript: Highlight navbar links based on current URL
    let currentLocation = window.location.pathname;
    let navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});
