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

    // Smooth scrolling for internal navigation links
    const clickableElements = document.querySelectorAll('.cta-button, .main-nav a');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Check if it's an internal link (starts with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
            }
            // External links will behave normally
        });
    });

    // Navigation bar appearance on scroll
    const nav = document.querySelector('.main-nav');
    const scrollThreshold = 50; // Pixels to scroll before nav appears

    function handleNavScroll() {
        if (nav) { // Ensure nav element exists
            if (window.scrollY > scrollThreshold) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', debounce(handleNavScroll, 50));
    // handleNavScroll(); // Optional: Check on initial load if already scrolled

    // Tagline Animation (Improved with CSS transition)
    const roles = ['Digital Marketing', 'SEO Expert', 'Web Developer', 'Social Media Marketing'];
    const tagline = document.querySelector('.tagline');
    let taglineIndex = 0;

    function updateTagline() {
        if (tagline) { // Ensure tagline element exists
            tagline.classList.add('fade-out');
            setTimeout(() => {
                tagline.textContent = roles[taglineIndex];
                tagline.classList.remove('fade-out');
                taglineIndex = (taglineIndex + 1) % roles.length;
            }, 500); // Match CSS transition duration
        }
    }

    if (tagline) {
        // Set the initial tagline from the array before starting the interval
        tagline.textContent = roles[taglineIndex];
        taglineIndex = (taglineIndex + 1) % roles.length;
        setInterval(updateTagline, 3000);
    }

    // Highlight Active Section in Nav (Improved)
    // Select all elements that have an ID and are direct children of .container, or specific elements like footer
    // Updated to include the hero section with its new ID for "About Me" link
    const scrollSpyTargets = document.querySelectorAll('.container > header#about-section, .container > main > section[id], footer#contact');
    const navItems = document.querySelectorAll('.main-nav ul li a');
    let lastActiveNavItem = null;

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150; // Offset for nav height
        let currentActiveTarget = null;

        scrollSpyTargets.forEach(target => {
            const targetTop = target.offsetTop;
            const targetHeight = target.offsetHeight;
            if (scrollPosition >= targetTop && scrollPosition < targetTop + targetHeight) {
                currentActiveTarget = target;
            }
        });

        if (currentActiveTarget) {
            const targetId = currentActiveTarget.getAttribute('id');
            const activeNavItem = document.querySelector(`.main-nav a[href="#${targetId}"]`);
            if (activeNavItem && activeNavItem !== lastActiveNavItem) {
                navItems.forEach(item => item.classList.remove('active'));
                activeNavItem.classList.add('active');
                lastActiveNavItem = activeNavItem;
            }
        }
    }

    if (navItems.length > 0 && scrollSpyTargets.length > 0) {
        const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
        window.addEventListener('scroll', debouncedUpdateActiveNav);
        updateActiveNav(); // Initial check
    }

    // Debounce function (reusable)
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
