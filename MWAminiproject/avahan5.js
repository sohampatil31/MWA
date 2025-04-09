document.addEventListener("DOMContentLoaded", function() {
    console.log("AVAHAN 5.0 - Stranger Things Theme Loaded");
});

// Function to show the events section and scroll to it
function scrollToEvents() {
    // Reveal the events section
    document.getElementById('events').style.display = 'flex'; // Show the events container

    // Scroll to the events section smoothly
    const eventsSection = document.getElementById('events');
    const offset = 100; // Adjust this value to control how much space is left above the events
    const position = eventsSection.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}

// // Event listener for the "Events" button
// document.querySelector('a[href="#events"]').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     scrollToEvents();
// });

// Smooth scroll to the event cards on button click
document.querySelector('.event-button').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link behavior

    const eventsContainer = document.querySelector('.events-container');

    if (eventsContainer) {
        const offsetTop = eventsContainer.getBoundingClientRect().top + window.scrollY - 100;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});


document.getElementById("enterUpsideDownButton").addEventListener("click", function() {
    document.querySelector(".events-container").scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start" // Aligns the top of the container with the top of the viewport
    });
});



document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            e.preventDefault(); // Prevent default anchor click behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Scroll to top when logo is clicked
document.getElementById('logo-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});