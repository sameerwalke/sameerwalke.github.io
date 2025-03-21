document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for "Contact Me" Button
    const contactButton = document.querySelector('.cta-button');
    const contactSection = document.getElementById('contact');

    if (contactButton && contactSection) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add Class to Highlight Skills on Hover
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('skill-item-hover');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('skill-item-hover');
        });
    });

    // Skill Item Click to Scroll
    const skillLinks = document.querySelectorAll('.skill-link');

    skillLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Show Navigation Bar on Scroll (with Debounce)
    const nav = document.querySelector('.main-nav');

    function toggleNav() {
        if (window.scrollY > 100) { // Show after scrolling 100px
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    }

    // Debounce function to optimize scroll performance
    function debounce(func, wait) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    const debouncedToggleNav = debounce(toggleNav, 100);
    window.addEventListener('scroll', debouncedToggleNav);
    toggleNav(); // Initial check

    // Tagline Animation
    const roles = ['Digital Strategist', 'SEO Expert', 'Web Developer', 'Content Creator'];
    const tagline = document.querySelector('.tagline');
    let index = 0;

    function updateTagline() {
        tagline.style.opacity = 0;
        setTimeout(() => {
            tagline.textContent = roles[index];
            tagline.style.opacity = 1;
            index = (index + 1) % roles.length;
        }, 500);
    }

    if (tagline) {
        setInterval(updateTagline, 3000); // Change every 3 seconds
        updateTagline(); // Initial call
    }

    // Smooth Scroll for All Nav Links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight Active Section in Nav
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.main-nav ul li a');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150; // Offset for nav height
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
    window.addEventListener('scroll', debouncedUpdateActiveNav);
    updateActiveNav(); // Initial check
});
