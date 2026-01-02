// Dynamic navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        nav.style.background = 'linear-gradient(90deg, #00eaff 0%, #232526 100%)';
        nav.style.boxShadow = '0 8px 32px #00eaff88, 0 2px 0 #232526';
    } else {
        nav.style.background = 'linear-gradient(90deg, #232526 60%, #00eaff22 100%)';
        nav.style.boxShadow = '0 4px 18px #00eaff22, 0 1.5px 0 #232526';
    }
});

// Animated underline for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
        this.style.boxShadow = '0 2px 12px #00eaff99';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
    });
});

// Navbar highlight for active section
function setActiveNav() {
    let sections = document.querySelectorAll('main section');
    let scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        let id = section.getAttribute('id');
        let navItem = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (navItem) {
            let top = section.offsetTop;
            let bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                navItem.classList.add('active-nav');
            } else {
                navItem.classList.remove('active-nav');
            }
        }
    });
}
window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);
