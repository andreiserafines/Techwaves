document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.pathname.split("/").pop(); // Get the current file name
    console.log("Current Location: ", currentLocation);
    
    var navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function(link) {
        console.log("Checking link: ", link.getAttribute("href"));
        if (link.getAttribute("href") === currentLocation) {
            console.log("Match found: ", link.getAttribute("href"));
            link.classList.add("active");
        }
    });
});