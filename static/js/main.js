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
            navbar.style.background = 'rgba(255,255,255,0.9)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.7)';
        }
    });

    // Update products grid
    const productsGrid = document.querySelector('.products-grid');
    const productImages = [
        '3_Axis_coating_system.jpg', 'Chemical_mixing_system.jpg',
        'Copper_mold.jpg', 'Customized_temperature_chamber.jpg',
        'Die_cutter.jpg', 'High_pressure_membrane_cell.jpg',
        'Microbubble_generator.jpg', 'Microfluidic_system.jpg',
        'Mooncake_mold.jpg', 'Photochemical_Catalysis_system.jpg',
        'Precision_chemical_auto_loading_system.jpg', 'Rotation_coating_system.jpg',
        'Series-parallels_high_pressure_testing_system.jpg', 'Wire_cutting_service_for_stress_test.jpg'
    ];

    let currentProductIndex = 0;
    const productsPerPage = 3;

    function createProductCards(startIndex, count) {
        const endIndex = Math.min(startIndex + count, productImages.length);
        for(let i = startIndex; i < endIndex; i++) {
            const image = productImages[i];
            const name = image.replace(/_/g, ' ').replace('.jpg', '');
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (i % 3) * 100);
            card.innerHTML = `
                <img src="/static/images/products/${image}" alt="${name}">
                <h3>${name}</h3>
            `;
            productsGrid.appendChild(card);
        }
        return endIndex;
    }

    function initializeProducts() {
        productsGrid.innerHTML = '';
        currentProductIndex = createProductCards(0, productsPerPage);
        
        if (currentProductIndex < productImages.length) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'show-more-btn';
            showMoreBtn.textContent = 'Show More';
            showMoreBtn.onclick = () => {
                const newIndex = createProductCards(currentProductIndex, productsPerPage);
                currentProductIndex = newIndex;
                if (currentProductIndex >= productImages.length) {
                    showMoreBtn.remove();
                }
                AOS.refresh();
            };
            productsGrid.parentElement.appendChild(showMoreBtn);
        }
    }
    initializeProducts();

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