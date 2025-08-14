// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. CÓDIGO ANIMACIÓN LOTTIE ---
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

    // --- 2. CÓDIGO CARRUSEL BOUTIQUE ---
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
    
    // --- 3. CÓDIGO CARRUSEL PROMOCIONES ---
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

    // --- 4. CÓDIGO MENÚ HAMBURGUESA ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // --- 5. CÓDIGO BOTÓN "VOLVER ARRIBA" ---
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


// --- INICIA CÓDIGO DEL SLIDESHOW 'NOSOTROS' ---
    const nosotrosCarousel = document.querySelector('#nosotros-carousel');
    if (nosotrosCarousel) {
        new Splide(nosotrosCarousel, {
            type       : 'fade',   // Transición de desvanecido
            rewind     : true,     // Vuelve al inicio para un loop perfecto
            autoplay   : true,     // Se reproduce automáticamente
            interval   : 2500,     // Cada imagen dura 2.5 segundos
            speed      : 1500,     // La transición de fade dura 1.5 segundos
            perPage    : 1,
            pagination : false,    // Sin puntos de navegación
            arrows     : false,    // Sin flechas de navegación
            pauseOnHover: false,   // No se pausa con el mouse
            pauseOnFocus: false,   // No se pausa con el teclado
        }).mount();
    }
    // --- FIN CÓDIGO DEL SLIDESHOW 'NOSOTROS' ---

}); // Fin del addEventListener