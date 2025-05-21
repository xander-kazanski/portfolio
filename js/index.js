const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking a link
nav.addEventListener('click', e => {
    if (e.target.classList.contains('nav__link')) {
        document.body.classList.remove('nav-open');
    }
});

// Enable smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
