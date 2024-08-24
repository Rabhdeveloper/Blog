
document.addEventListener('DOMContentLoaded', function() {

    const links = document.querySelectorAll('nav ul li a, .hero .btn');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: 'smooth'
        });
    }


    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav');
    });
});
