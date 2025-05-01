// Simple JavaScript for navigation active state
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .dropdown-content a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');

            // Also highlight parent dropdown if this is a dropdown item
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('> a').classList.add('active');
            }
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Dropdown Menu for Mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .dropdown-content a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage ||
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');

            // Also highlight parent dropdown if this is a dropdown item
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('> a').classList.add('active');
            }
        }
    });
});