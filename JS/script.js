/*
==================================================================
== SCRIPT PARA INTERACCIONES GLOBALES Y ANIMACIONES DEL SITIO
==================================================================
*/

// Se ejecuta cuando todo el contenido del DOM ha sido cargado.
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD DEL BOTÓN "IR ARRIBA" ---
    const btnIrArriba = document.getElementById('btn-ir-arriba');

    if (btnIrArriba) {
        // Muestra u oculta el botón basado en la posición del scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                // Muestra el botón si el scroll es mayor a 300px
                btnIrArriba.style.display = 'flex';
                // Añade un pequeño delay para que el display:flex se aplique antes de la opacidad
                setTimeout(() => {
                    btnIrArriba.style.opacity = '1';
                }, 10);
            } else {
                // Oculta el botón suavemente
                btnIrArriba.style.opacity = '0';
                // Espera a que termine la transición de opacidad para ocultarlo completamente
                setTimeout(() => {
                    if (window.scrollY <= 300) {
                        btnIrArriba.style.display = 'none';
                    }
                }, 300); // 300ms, igual a la transición en CSS
            }
        });

        // Agrega el evento de click para el desplazamiento suave hacia arriba
        btnIrArriba.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace '#'
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Comportamiento de scroll suave
            });
        });
    }

    // --- ANIMACIÓN DE ELEMENTOS AL HACER SCROLL (INTERSECTION OBSERVER) ---

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está visible en la pantalla
            if (entry.isIntersecting) {
                // Añade la clase de animación. La animación se define en el atributo 'data-animate' del elemento HTML.
                // Se usa 'animate__animated' de la librería Animate.css
                entry.target.classList.add('animate__animated', entry.target.dataset.animate || 'animate__fadeInUp');
                
                // Opcional: define el delay desde el HTML si existe el atributo 'data-animation-delay'
                if (entry.target.dataset.animationDelay) {
                    entry.target.style.animationDelay = entry.target.dataset.animationDelay;
                }

                // Deja de observar el elemento una vez que la animación ha sido aplicada para mejorar el rendimiento.
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando al menos el 10% del elemento es visible.
    });

    // Selecciona todos los elementos que tengan el atributo 'data-animate' y los observa.
    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });
});