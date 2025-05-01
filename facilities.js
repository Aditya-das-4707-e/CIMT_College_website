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
  // Mobile menu toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown > a').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });
