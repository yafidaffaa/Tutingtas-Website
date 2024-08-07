// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}



// Humburger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
}); 

//Transisi
document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('primary-fade-in-hidden')) {
            entry.target.classList.remove('primary-fade-in-hidden');
            entry.target.classList.add('primary-fade-in');
            } else if (entry.target.classList.contains('secondary-fade-in-hidden')) {
            entry.target.classList.remove('secondary-fade-in-hidden');
            entry.target.classList.add('secondary-fade-in');
            }
        }
        });
    });
    
    document.querySelectorAll('.primary-fade-in-hidden').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.secondary-fade-in-hidden').forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const servicesToggle = document.getElementById('services-toggle');
    const servicesDropdown = document.getElementById('services-dropdown');

    servicesToggle.addEventListener('click', () => {
        if (servicesDropdown.classList.contains('hidden')) {
            servicesDropdown.classList.remove('hidden');
        } else {
            servicesDropdown.classList.add('hidden');
        }
    });

    // Optional: Close the dropdown if clicking outside
    document.addEventListener('click', (event) => {
        if (!servicesToggle.contains(event.target) && !servicesDropdown.contains(event.target)) {
            servicesDropdown.classList.add('hidden');
        }
    });
});
