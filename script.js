// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO ANIMACIÓN LOTTIE ---
    if (typeof lottie !== 'undefined') {
        const logoContainer = document.getElementById('lottie-logo');
        if (logoContainer) {
            const animation = lottie.loadAnimation({
                container: logoContainer,
                renderer: 'svg',
                loop: false, 
                autoplay: true,
                path: 'lottie/oeva_prueba.json'
            });
            animation.addEventListener('complete', function() {
                animation.setDirection(animation.playDirection * -1);
                animation.play();
            });
        }
    }

    // --- CÓDIGO CARRUSEL BOUTIQUE ---
    const boutiqueCarousel = document.querySelector('#boutique-carousel');
    if (boutiqueCarousel) {
        new Splide(boutiqueCarousel, {
            type      : 'loop',
            drag      : 'free',
            focus     : 'center',
            gap       : '1rem',
            perPage   : 4,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
            arrows: false,
            pagination: false,
            breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                640: { perPage: 1 },
            },
        }).mount(window.splide.Extensions);
    }
    
    // --- CÓDIGO CARRUSEL PROMOCIONES ---
    const promoCarousel = document.querySelector('#promo-carousel');
    if (promoCarousel) {
        new Splide(promoCarousel, {
            type       : 'fade',
            rewind     : true,
            perPage    : 1,
            pagination : true,
            arrows     : true,
        }).mount();
    }

    // --- CÓDIGO MENÚ HAMBURGUESA (NUEVO) ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (hamburgerButton && mobileMenu) {
        // Muestra u oculta el menú al hacer clic en el botón
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Cierra el menú y se desplaza suavemente al hacer clic en un enlace
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Previene el salto brusco
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                mobileMenu.classList.add('hidden'); // Oculta el menú después de hacer clic
            });
        });
    }
    
}); // Fin del addEventListener