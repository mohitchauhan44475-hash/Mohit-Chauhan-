// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll-to-top button functionality
const scrollButton = document.createElement('button');
scrollButton.id = 'scrollToTop';
scrollButton.innerHTML = '↑';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #007acc 0%, #0056b3 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.4);
`;

document.body.appendChild(scrollButton);

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'flex';
        scrollButton.style.alignItems = 'center';
        scrollButton.style.justifyContent = 'center';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to top when button is clicked
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll button
scrollButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

scrollButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all cards for animation
document.querySelectorAll('.problem-card, .feature-card, .revenue-item, .phase, .role').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active styling to navigation links
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: #ffd700;
        border-bottom: 2px solid #ffd700;
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (optional enhancement)
function setupMobileMenu() {
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // Close menu when link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            // Add any mobile menu close logic here
        });
    });
}

setupMobileMenu();

// Log initialization
console.log('✨ SkillConnect website loaded successfully!');
