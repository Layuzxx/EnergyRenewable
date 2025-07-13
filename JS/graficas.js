/* ========== GRAFICA costoComparativoEnergia ========== */

const ctx_1 = document.getElementById('costoComparativoEnergia');
const DATA_COUNT_1 = 1;
const NUMBER_CFG_1 = {count: DATA_COUNT_1, min: -100, max: 100};

const labels_1 = ["Solar Fotovoltaica", "Eólica Terrestre", "Gas (Ciclo Combinado)", "Carbón"];
const data_1 = {
  labels: labels_1,
  datasets: [
    {
      label: 'Renovable',
      data: [40,45,0,0],
      borderColor: "green",
      backgroundColor: "rgba(00,255,00,0.5)",
      borderWidth: 2,
      borderRadius: 2,
      borderSkipped: false,
    },
    {
      label: 'Fósil',
      data: [0,0,70,110],
      borderColor: "black",
      backgroundColor: "rgba(00,00,00,0.5)",
      borderWidth: 2,
      borderRadius: 2,
      borderSkipped: false,
    }
  ]
};

const config_1 = {
  type: 'bar',
  data: data_1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};

new Chart(ctx_1, config_1)

/* ========== GRAFICA crecimientoRenovableMundial ========== */

const ctx_2 = document.getElementById('crecimientoRenovableMundial');
const DATA_COUNT_2 = 1;
const NUMBER_CFG_2 = {count: DATA_COUNT_1, min: -10000, max: 10000};

const labels_2 = ["1965", "1985", "2000", "2010", "2020", "2025"];
const data_2 = {
  labels: labels_2,
  datasets: [
    {
      label: 'Renovable',
      data: [1,10,70,400,2800,6000],
      borderColor: "green",
      backgroundColor: "rgba(00,255,00,0.5)",
      borderWidth: 2,
      borderRadius: 2,
      borderSkipped: false,
    },
  ]
};

const config_2 = {
  type: 'bar',
  data: data_2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  },
};

new Chart(ctx_2, config_2)


