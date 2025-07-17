/*
==================================================================
== SCRIPT PARA INTERACCIONES GLOBALES Y ANIMACIONES DEL SITIO
==================================================================
*/

// Se ejecuta cuando todo el contenido del DOM ha sido cargado.
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD DE LA BARRA DE BÚSQUEDA ---
    const searchPages = [
        { title: 'Inicio', url: '/index.html', keywords: 'home, principal, portada' },
        { title: 'Energía Solar', url: '/SubPages/TiposDeEnergias/solar.html', keywords: 'sol, paneles, fotovoltaica' },
        { title: 'Energía Eólica', url: '/SubPages/TiposDeEnergias/eolica.html', keywords: 'viento, aerogeneradores, turbinas' },
        { title: 'Energía Hidroeléctrica', url: '/SubPages/TiposDeEnergias/hidroelectrica.html', keywords: 'agua, presas, turbinas de agua' },
        { title: 'Energía Biomasa', url: '/SubPages/TiposDeEnergias/biomasa.html', keywords: 'materia orgánica, quema, biológico' },
        { title: 'Energía Biogás', url: '/SubPages/TiposDeEnergias/biogas.html', keywords: 'descomposición, metano, orgánico' },
        { title: 'Energía Geotérmica', url: '/SubPages/TiposDeEnergias/geotermica.html', keywords: 'tierra, calor, vapor' },
        { title: 'Calculadora de Potencial', url: '/SubPages/calculadora.html', keywords: 'calcular, consumo, estimar' },
        { title: 'VidaEvo', url: '/SubPages/vidaevo.html', keywords: 'evolución, vida sostenible, consejos' },
        { title: 'Sobre Nosotros', url: '/SubPages/Suport/about.html', keywords: 'quiénes somos, equipo, misión' },
        { title: 'Centro de Ayuda', url: '/SubPages/Suport/help-centre.html', keywords: 'faq, preguntas, soporte, contacto' },
        { title: 'Términos y Condiciones', url: '/SubPages/Suport/terms.html', keywords: 'legales, condiciones de uso' },
        { title: 'Política de Privacidad', url: '/SubPages/Suport/privacy.html', keywords: 'datos, cookies, gdpr' }
    ];

    const searchInput = document.getElementById('buscar-input');
    const suggestionsContainer = document.getElementById('search-suggestions');
    const searchForm = document.querySelector('.search-form-order');

    if (searchInput && suggestionsContainer && searchForm) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            suggestionsContainer.innerHTML = '';

            if (query.length === 0) {
                suggestionsContainer.classList.remove('show');
                return;
            }

            const filteredPages = searchPages.filter(page => {
                const fullText = `${page.title.toLowerCase()} ${page.keywords.toLowerCase()}`;
                return fullText.includes(query);
            });

            if (filteredPages.length > 0) {
                filteredPages.forEach(page => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.classList.add('dropdown-item');
                    // Asegúrate de que las rutas son correctas desde la raíz del sitio
                    link.href = (window.location.hostname === "127.0.0.1" || window.location.hostname === "") 
                        ? page.url // Para entorno local
                        : `/EnergyRenewable${page.url}`; // Para GitHub Pages u otro subdirectorio
                    link.textContent = page.title;
                    listItem.appendChild(link);
                    suggestionsContainer.appendChild(listItem);
                });
            } else {
                const noResultsItem = document.createElement('li');
                noResultsItem.innerHTML = `<span class="dropdown-item-text">No se encontraron resultados</span>`;
                suggestionsContainer.appendChild(noResultsItem);
            }
            suggestionsContainer.classList.add('show');
        });

        // Oculta las sugerencias si se hace clic fuera del buscador
        document.addEventListener('click', (e) => {
            if (!searchForm.contains(e.target)) {
                suggestionsContainer.classList.remove('show');
            }
        });

        // Evita que el formulario se envíe de la manera tradicional
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstResult = suggestionsContainer.querySelector('a');
            if (firstResult) {
                window.location.href = firstResult.href; // Redirige al primer resultado
            }
        });
    }

    // --- FUNCIONALIDAD DEL BOTÓN "IR ARRIBA" ---
    const btnIrArriba = document.getElementById('btn-ir-arriba');

    if (btnIrArriba) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnIrArriba.style.display = 'flex';
                setTimeout(() => { btnIrArriba.style.opacity = '1'; }, 10);
            } else {
                btnIrArriba.style.opacity = '0';
                setTimeout(() => { if (window.scrollY <= 300) { btnIrArriba.style.display = 'none'; }}, 300);
            }
        });

        btnIrArriba.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- ANIMACIÓN DE ELEMENTOS AL HACER SCROLL (INTERSECTION OBSERVER) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', entry.target.dataset.animate || 'animate__fadeInUp');
                if (entry.target.dataset.animationDelay) {
                    entry.target.style.animationDelay = entry.target.dataset.animationDelay;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(element => {
        observer.observe(element);
    });
    
    // El resto de tu código, como el de la calculadora, puede ir aquí.
});