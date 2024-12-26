// Mobile menu handling
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu after clicking a link
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0,0,0,0.9)';
        } else {
            navbar.style.background = 'rgba(0,0,0,0.7)';
        }
    });

    // Partner logos carousel
    const logosContainer = document.querySelector('.logos');
    const partnerLogos = [
        'A Star.png', 'aitreat.png', 'Aquaporin_Denmark_Logo-min.png',
        'jiangsu_university.jpg.jpg', 'JTC.png', 'Kurita.png',
        'KAUST.png', 'jiaoda.jpg.jpg', 'Nankai.jpg.jpg',
        'Michigan State University.png', 'Ngee Ann Polytechnic.png',
        'Nanyang Technological University.png', 'National University of Singapore.jpg',
        'qinghuadaxue1.jpg.jpg', 'Republic Polytechnic.png', 'Sembcorp.png',
        'Singapore Polytechnic.png', 'Spectra_1.png', 'Structo-Logo.png',
        'START_1.png', 'Sun_Yat-sen_University_Logo.png.png', 'TECHNOLITE.png',
        'Temasek Polytechnic.jpg', 'University_of_Iceland_logo.svg.png.png',
        'UTP.png', 'xinan.jpg.jpg'
    ];

    // Create and append partner logos
    function createPartnerLogos() {
        partnerLogos.forEach(logo => {
            const img = document.createElement('img');
            img.src = `/static/images/partners/${logo}`;
            img.alt = logo.split('.')[0];
            img.className = 'partner-logo';
            logosContainer.appendChild(img);
        });

        // Clone the logos for infinite scroll effect
        const logoElements = logosContainer.innerHTML;
        logosContainer.innerHTML = logoElements + logoElements;
    }

    createPartnerLogos();
});