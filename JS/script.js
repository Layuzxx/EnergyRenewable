// Animaciones de scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Lógica de la Calculadora
document.addEventListener("DOMContentLoaded", function() {
    const energyTypeSelect = document.getElementById('energyType');
    const calculatorFields = document.getElementById('calculator-fields');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    if (energyTypeSelect) {
        energyTypeSelect.addEventListener('change', function() {
            const energyType = this.value;
            calculatorFields.innerHTML = '';

            if (energyType === 'solar') {
                calculatorFields.innerHTML = `
                    <div class="mb-3">
                        <label for="area" class="form-label">Área disponible (m²)</label>
                        <input type="number" class="form-control" id="area" placeholder="Ej: 20">
                    </div>
                    <div class="mb-3">
                        <label for="sunHours" class="form-label">Horas de sol pico al día</label>
                        <input type="number" class="form-control" id="sunHours" placeholder="Ej: 5">
                    </div>
                    <div class="mb-3">
                        <label for="efficiency" class="form-label">Eficiencia del panel (%)</label>
                        <input type="number" class="form-control" id="efficiency" placeholder="Ej: 18">
                    </div>
                `;
            } else if (energyType === 'eolica') {
                calculatorFields.innerHTML = `
                    <div class="mb-3">
                        <label for="windSpeed" class="form-label">Velocidad promedio del viento (m/s)</label>
                        <input type="number" class="form-control" id="windSpeed" placeholder="Ej: 7">
                    </div>
                    <div class="mb-3">
                        <label for="rotorDiameter" class="form-label">Diámetro del rotor (m)</label>
                        <input type="number" class="form-control" id="rotorDiameter" placeholder="Ej: 50">
                    </div>
                    <div class="mb-3">
                        <label for="capacity" class="form-label">Capacidad nominal (kW)</label>
                        <input type="number" class="form-control" id="capacity" placeholder="Ej: 100">
                    </div>
                `;
            } else if (energyType === 'biomasa') {
                calculatorFields.innerHTML = `
                    <div class="mb-3">
                        <label for="biomassAmount" class="form-label">Cantidad de biomasa (kg)</label>
                        <input type="number" class="form-control" id="biomassAmount" placeholder="Ej: 1000">
                    </div>
                    <div class="mb-3">
                        <label for="calorificValue" class="form-label">Poder calorífico (MJ/kg)</label>
                        <input type="number" class="form-control" id="calorificValue" placeholder="Ej: 15">
                    </div>
                `;
            }
        });
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const energyType = energyTypeSelect.value;
            let resultText = '';

            if (energyType === 'solar') {
                const area = parseFloat(document.getElementById('area').value);
                const sunHours = parseFloat(document.getElementById('sunHours').value);
                const efficiency = parseFloat(document.getElementById('efficiency').value);
                if (!isNaN(area) && !isNaN(sunHours) && !isNaN(efficiency)) {
                    const energy = area * sunHours * (efficiency / 100) * 365; // kWh/año
                    resultText = `Potencia generada: ${energy.toFixed(2)} kWh/año`;
                } else {
                    resultText = 'Por favor, introduce valores válidos.';
                }
            } else if (energyType === 'eolica') {
                const windSpeed = parseFloat(document.getElementById('windSpeed').value);
                const rotorDiameter = parseFloat(document.getElementById('rotorDiameter').value);
                if (!isNaN(windSpeed) && !isNaN(rotorDiameter)) {
                    const area = Math.PI * Math.pow(rotorDiameter / 2, 2);
                    const power = 0.5 * 1.225 * area * Math.pow(windSpeed, 3) / 1000; // kW
                    const energy = power * 24 * 365 * 0.35; // kWh/año (factor de capacidad del 35%)
                    resultText = `Potencia generada: ${energy.toFixed(2)} kWh/año`;
                } else {
                    resultText = 'Por favor, introduce valores válidos.';
                }
            } else if (energyType === 'biomasa') {
                const biomassAmount = parseFloat(document.getElementById('biomassAmount').value);
                const calorificValue = parseFloat(document.getElementById('calorificValue').value);
                if (!isNaN(biomassAmount) && !isNaN(calorificValue)) {
                    const energy = (biomassAmount * calorificValue) / 3.6; // kWh
                    resultText = `Energía generada: ${energy.toFixed(2)} kWh`;
                } else {
                    resultText = 'Por favor, introduce valores válidos.';
                }
            }

            resultDiv.innerHTML = `<div class="alert alert-success">${resultText}</div>`;
        });
    }
});
