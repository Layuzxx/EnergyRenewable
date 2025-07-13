/*
==================================================================
== LÓGICA PARA LA CALCULADORA DE POTENCIAL RENOVABLE
==================================================================
*   Este archivo debe contener toda la lógica para que la calculadora funcione.
*   El HTML y CSS ya están listos.
*
*   TAREAS PARA EL DESARROLLADOR:
*   1.  Capturar el evento 'submit' del formulario.
*   2.  Leer los valores del input de consumo y del radio button de tipo de energía.
*   3.  Aplicar la fórmula correspondiente según la energía seleccionada.
*   4.  Mostrar los resultados en el contenedor 'results'.
*   5.  Realizar validaciones (ej. que el consumo sea un número positivo).
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM
    // ------------------------------------------------
    // const form = document.getElementById('calculatorForm');
    // const consumoInput = document.getElementById('consumo');
    // const resultsDiv = document.getElementById('results');
    // const resultadoInstalacionEl = document.getElementById('resultadoInstalacion');
    // const unidadInstalacionEl = document.getElementById('unidadInstalacion');
    // const resultadoCO2El = document.getElementById('resultadoCO2');


    // 2. DEFINIR CONSTANTES Y FACTORES DE CÁLCULO
    // ------------------------------------------------
    // Estos valores son promedios y pueden ajustarse para mayor precisión.

    // Horas Solares Pico (HSP) promedio al día. Varía mucho por región. (Ej: 4.5 para una zona templada)
    // const HORAS_SOLARES_PICO = 4.5;

    // Eficiencia de un panel solar estándar (ej. 20% o 0.20) y potencia (ej. 450W o 0.45kW)
    // const EFICIENCIA_PANEL = 0.20;
    // const POTENCIA_PANEL_KW = 0.45;

    // Factor de Capacidad de un aerogenerador doméstico (ej. 25% o 0.25)
    // const FACTOR_CAPACIDAD_EOLICA = 0.25;

    // Factor de Emisión de CO2 de la red eléctrica promedio (kg de CO2 por kWh).
    // Este valor varía enormemente por país. (Ej: 0.233 kg CO2/kWh para España)
    // const FACTOR_EMISION_CO2 = 0.233;


    // 3. LÓGICA PRINCIPAL AL ENVIAR EL FORMULARIO
    // ------------------------------------------------
    // form.addEventListener('submit', (e) => {
        // e.preventDefault(); // Prevenir que la página se recargue

        // LEER VALORES
        // const consumoMensual = parseFloat(consumoInput.value);
        // const energiaSeleccionada = document.querySelector('input[name="tipoEnergia"]:checked');

        // VALIDAR INPUTS
        // if (isNaN(consumoMensual) || consumoMensual <= 0 || !energiaSeleccionada) {
            // alert("Por favor, introduce un consumo válido y selecciona un tipo de energía.");
            // return;
        // }

        // CÁLCULOS
        // let instalacionRequerida = 0;
        // let unidad = '';

        // switch (energiaSeleccionada.value) {
            // case 'solar':
                // FORMULA: (Consumo Mensual / 30 días) / Horas Solares Pico = Potencia Pico (kWp) necesaria
                // instalacionRequerida = (consumoMensual / 30) / HORAS_SOLARES_PICO;
                // unidad = 'kWp en Paneles Solares';
                // break;
            
            // case 'eolica':
                // FORMULA: (Consumo Mensual / (30 días * 24 horas)) / Factor de Capacidad = Potencia Nominal (kW) del aerogenerador
                // instalacionRequerida = (consumoMensual / (30 * 24)) / FACTOR_CAPACIDAD_EOLICA;
                // unidad = 'kW de Potencia Eólica';
                // break;

            // ... AÑADIR CASOS PARA OTRAS ENERGÍAS (hidro, biomasa, etc.)
            // Estas pueden ser más complejas. Para empezar, se puede mostrar un mensaje como:
            // "El cálculo para [Biomasa] es complejo y requiere un estudio personalizado."
            // O usar factores de producción muy simplificados.
            
            // default:
                // instalacionRequerida = 0;
                // unidad = 'Cálculo no disponible';
                // break;
        // }

        // CÁLCULO DE REDUCCIÓN DE CO2
        // const consumoAnual = consumoMensual * 12;
        // const co2Ahorrado = consumoAnual * FACTOR_EMISION_CO2;


        // 4. MOSTRAR RESULTADOS
        // ------------------------------------------------
        // resultadoInstalacionEl.textContent = instalacionRequerida.toFixed(2);
        // unidadInstalacionEl.textContent = unidad;
        // resultadoCO2El.textContent = co2Ahorrado.toFixed(0);
        
        // Hacer visible el div de resultados
        // resultsDiv.style.display = 'block';
        // Desplazar la vista hasta los resultados
        // resultsDiv.scrollIntoView({ behavior: 'smooth' });
    // });
});

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