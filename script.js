// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // Verifica si la librería lottie está disponible
    if (typeof lottie === 'undefined') {
        console.error('Lottie library not loaded.');
        const logoContainer = document.getElementById('lottie-logo');
        if (logoContainer) {
            logoContainer.textContent = 'OEVA Spa'; // Texto alternativo
            logoContainer.style.color = 'white';
            logoContainer.style.fontSize = '1.5rem';
            logoContainer.style.fontWeight = 'bold';
        }
        return;
    }

    // Elemento contenedor para la animación Lottie
    const logoContainer = document.getElementById('lottie-logo');

    // Asegúrate de que el contenedor exista
    if (logoContainer) {
        // Configura y carga la animación Lottie
        const animation = lottie.loadAnimation({
            container: logoContainer,
            renderer: 'svg',
            // --- CAMBIOS PARA PING-PONG ---
            loop: false, // Desactivamos el bucle estándar
            autoplay: true, // La primera reproducción inicia automáticamente
            // --- FIN CAMBIOS ---
            path: 'lottie/oeva_prueba.json' // Ruta a tu archivo JSON
        });

        // --- AÑADIDO PARA PING-PONG ---
        // Event listener que se activa cuando la animación completa un ciclo
        animation.addEventListener('complete', function() {
            // Invierte la dirección de reproducción
            // Si estaba yendo hacia adelante (1), irá hacia atrás (-1) y viceversa
            animation.setDirection(animation.playDirection * -1);
            // Vuelve a reproducir la animación en la nueva dirección
            animation.play();
        });
        // --- FIN AÑADIDO ---


        // Manejo de errores opcional
        animation.addEventListener('data_failed', function() {
            console.error('Failed to load Lottie animation data from path: lottie/oeva_prueba.json');
             if (logoContainer) {
                logoContainer.textContent = 'OEVA Spa';
                logoContainer.style.color = 'white';
                logoContainer.style.fontSize = '1.5rem';
                logoContainer.style.fontWeight = 'bold';
            }
        });
         animation.addEventListener('error', function(error) {
            console.error('Lottie animation error:', error);
        });


    } else {
        console.error('Logo container element (#lottie-logo) not found.');
    }

    // Puedes añadir más código JavaScript para otras funcionalidades aquí

}); // Fin del addEventListener
