
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
  
    // Simple console log to show that the script is working
    console.log("script.js is working");
  });