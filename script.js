// Select the hamburger element and the nav-links element
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // When the hamburger is clicked, toggle the 'active' class on the nav-links
    // This will either show or hide the mobile menu based on the CSS
    navLinks.classList.toggle('active');
});