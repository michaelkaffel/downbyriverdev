const nav = document.getElementById('nav');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger')

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
});

hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.setAttribute('aria-label', 'Open menu');
    });
});