// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hero text animation
const heroTitle = document.querySelector('.hero h2');
if (heroTitle) {
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = 'translateY(40px)';
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s, transform 1s';
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = 'translateY(0)';
    }, 400);
}

// Project card hover effect (ripple)
document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, #fda08533 0%, #fff 100%)`;
    });
    card.addEventListener('mouseleave', function() {
        card.style.background = '';
    });
});
