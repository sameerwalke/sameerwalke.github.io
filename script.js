document.addEventListener('DOMContentLoaded', function() {
    // Helper function for smooth scrolling
    function smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with ID "${targetId}" not found.`);
        }
    }

    // Smooth scrolling for "Let's Collaborate" button and navigation links
    const clickableElements = document.querySelectorAll('.cta-button, .main-nav a');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(this.getAttribute('href'));
        });
    });


    // Add Class to Highlight Skills on Hover
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => item.classList.add('skill-item-hover'));
        item.addEventListener('mouseleave', () => item.classList.remove('skill-item-hover'));
    });


    // Show Navigation Bar on Scroll (with Debounce)
    const nav = document.querySelector('.main-nav');
    function toggleNav() {
        if (window.scrollY > 100) {
            nav.classList.remove('hidden'); // Remove hidden class
        } else {
            nav.classList.add('hidden'); // Add hidden class
        }
    }
    const debouncedToggleNav = debounce(toggleNav, 100); // Debounce for performance
    window.addEventListener('scroll', debouncedToggleNav);
    toggleNav(); // Initial check


    // Tagline Animation (Improved with CSS transition)
    const roles = ['Digital Marketing', 'SEO Expert', 'Web Developer', 'Social Media Marketing'];
    const tagline = document.querySelector('.tagline');
    let taglineIndex = 0;

    function updateTagline() {
        tagline.classList.add('fade-out');
        setTimeout(() => {
            tagline.textContent = roles[taglineIndex];
            tagline.classList.remove('fade-out');
            taglineIndex = (taglineIndex + 1) % roles.length;
        }, 500);
    }

    setInterval(updateTagline, 3000);
    updateTagline();


    // Highlight Active Section in Nav (Improved)
    const sections = document.querySelectorAll('section:not(#highlights)'); // Exclude #highlights
    const navItems = document.querySelectorAll('.main-nav ul li a');
    let lastActiveNavItem = null;

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150; // Offset for nav height
        let activeSection = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section;
            }
        });

        if (activeSection) {
            const sectionId = activeSection.getAttribute('id');
            const activeNavItem = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
            if (activeNavItem && activeNavItem !== lastActiveNavItem) {
                navItems.forEach(item => item.classList.remove('active'));
                activeNavItem.classList.add('active');
                lastActiveNavItem = activeNavItem;
            }
        }
    }

    const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
    window.addEventListener('scroll', debouncedUpdateActiveNav);
    updateActiveNav(); // Initial check


    // Debounce function (reusable)
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
});
