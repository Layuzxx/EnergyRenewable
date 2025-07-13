/*
==================================================================
== SCRIPT PARA LA GENERACIÓN DE GRÁFICOS CON CHART.JS
==================================================================
*   Este archivo contiene la lógica para inicializar todos los gráficos del sitio.
*   Cada gráfico se activa solo si encuentra el canvas correspondiente en la página.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- GRÁFICOS DE LA PÁGINA DE INICIO (index.html) ---

    const ctx_costo_comparativo = document.getElementById('costoComparativoEnergia');
    if (ctx_costo_comparativo) {
        new Chart(ctx_costo_comparativo, {
            type: 'bar',
            data: {
                labels: ["Solar Fotovoltaica", "Eólica Terrestre", "Gas (Ciclo Combinado)", "Carbón"],
                datasets: [{
                    label: 'Renovable',
                    data: [40, 45, 0, 0],
                    borderColor: "#2C5F2D",
                    backgroundColor: "rgba(44, 95, 45, 0.7)",
                    borderWidth: 1,
                    borderRadius: 2
                }, {
                    label: 'Fósil',
                    data: [0, 0, 70, 110],
                    borderColor: "#222831",
                    backgroundColor: "rgba(34, 40, 49, 0.7)",
                    borderWidth: 1,
                    borderRadius: 2
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { x: { stacked: true }, y: { stacked: true } } }
        });
    }

    const ctx_crecimiento_mundial = document.getElementById('crecimientoRenovableMundial');
    if (ctx_crecimiento_mundial) {
        new Chart(ctx_crecimiento_mundial, {
            type: 'line',
            data: {
                labels: ["1965", "1985", "2000", "2010", "2020", "2025"],
                datasets: [{
                    label: 'Capacidad (GW)',
                    data: [1, 10, 70, 400, 2799, 6000],
                    borderColor: "#2C5F2D",
                    backgroundColor: "rgba(44, 95, 45, 0.2)",
                    fill: true,
                    tension: 0.1
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }

    // --- GRÁFICOS DE LA PÁGINA DE ENERGÍA SOLAR (solar.html) ---

    const ctx_costoSolar = document.getElementById('costoSolar');
    if (ctx_costoSolar) {
        new Chart(ctx_costoSolar, {
            type: 'line',
            data: {
                labels: ['2010', '2015', '2020', '2024'],
                datasets: [{
                    label: 'Costo LCOE (USD/MWh)',
                    data: [359, 109, 56, 40],
                    borderColor: '#FFC107',
                    backgroundColor: 'rgba(255, 193, 7, 0.2)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }
    
    const ctx_capacidadSolar = document.getElementById('capacidadSolar');
    if (ctx_capacidadSolar) {
        new Chart(ctx_capacidadSolar, {
            type: 'bar',
            data: {
                labels: ['2010', '2015', '2020', '2023'],
                datasets: [{
                    label: 'Capacidad Mundial (GW)',
                    data: [40, 229, 774, 1579],
                    backgroundColor: 'rgba(255, 193, 7, 0.7)'
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }

    // --- GRÁFICOS DE LA PÁGINA DE ENERGÍA EÓLICA (eolica.html) ---

    const ctx_costoEolica = document.getElementById('costoEolica');
    if(ctx_costoEolica){
        new Chart(ctx_costoEolica, {
            type: 'line',
            data: {
                labels: ['2010', '2015', '2020', '2023'],
                datasets: [{
                    label: 'Costo LCOE (USD/MWh)',
                    data: [135, 75, 48, 40],
                    borderColor: '#0DCAF0',
                    backgroundColor: 'rgba(13, 202, 240, 0.2)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }
    
    const ctx_capacidadEolica = document.getElementById('capacidadEolica');
    if(ctx_capacidadEolica){
        new Chart(ctx_capacidadEolica, {
            type: 'bar',
            data: {
                labels: ['2010', '2015', '2020', '2023'],
                datasets: [{
                    label: 'Capacidad Mundial (GW)',
                    data: [197, 433, 743, 1021],
                    backgroundColor: 'rgba(13, 202, 240, 0.7)'
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }

    // --- GRÁFICO DE LA PÁGINA HIDROELÉCTRICA (hidroelectrica.html) ---

    const ctx_produccionHidro = document.getElementById('produccionHidroelectrica');
    if(ctx_produccionHidro){
        new Chart(ctx_produccionHidro, {
            type: 'bar',
            data: {
                labels: ['China', 'Brasil', 'Canadá', 'EE.UU.', 'Rusia'],
                datasets: [{
                    label: 'Producción Anual (TWh)',
                    data: [1232, 389, 375, 253, 192],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)' // Color azul
                }]
            },
            options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } } }
        });
    }

    // --- GRÁFICO DE LA PÁGINA BIOMASA (biomasa.html) ---

    const ctx_usoBiomasa = document.getElementById('usoBiomasa');
    if(ctx_usoBiomasa){
        new Chart(ctx_usoBiomasa, {
            type: 'doughnut',
            data: {
                labels: ['Calor (Edificios/Industria)', 'Transporte (Biocombustibles)', 'Electricidad'],
                datasets: [{
                    label: 'Uso de la Bioenergía',
                    data: [70, 20, 10],
                    backgroundColor: ['#2C5F2D', '#97BC62', '#222831']
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }

    // --- GRÁFICOS DE LA PÁGINA BIOGÁS (biogas.html) ---

    const ctx_composicionBiogas = document.getElementById('composicionBiogas');
    if(ctx_composicionBiogas){
        new Chart(ctx_composicionBiogas, {
            type: 'pie',
            data: {
                labels: ['Metano (CH₄)', 'Dióxido de Carbono (CO₂)', 'Otros Gases'],
                datasets: [{
                    data: [60, 35, 5],
                    backgroundColor: ['#97BC62', '#adb5bd', '#6c757d']
                }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
        });
    }

    const ctx_potencialBiogas = document.getElementById('potencialBiogas');
    if(ctx_potencialBiogas){
        new Chart(ctx_potencialBiogas, {
            type: 'bar',
            data: {
                labels: ['Estiércol Vacuno', 'Residuos de Comida', 'Lodos de Depuradora'],
                datasets: [{
                    label: 'Potencial (m³ de biogás / tonelada)',
                    data: [50, 120, 40],
                    backgroundColor: 'rgba(151, 188, 98, 0.7)'
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }
    
    // --- GRÁFICO DE LA PÁGINA GEOTÉRMICA (geotermica.html) ---
    
    const ctx_capacidadGeotermica = document.getElementById('capacidadGeotermica');
    if(ctx_capacidadGeotermica){
        new Chart(ctx_capacidadGeotermica, {
            type: 'bar',
            data: {
                labels: ['EE.UU.', 'Indonesia', 'Filipinas', 'Turquía', 'N. Zelanda', 'México'],
                datasets: [{
                    label: 'Capacidad Instalada (MW)',
                    data: [3700, 2300, 1900, 1700, 1000, 960],
                    backgroundColor: 'rgba(230, 126, 34, 0.7)' // Color naranja
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }
});