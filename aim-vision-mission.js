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