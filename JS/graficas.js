/* ========== GRAFICA 1# ========== */

const ctx_1 = document.getElementById('grafica-1');
const DATA_COUNT_1 = 7;
const NUMBER_CFG_1 = {count: DATA_COUNT_1, min: -100, max: 100};

const labels_1 = ["a", "c", "d", "x", "g", "e", "f"];
const data_1 = {
  labels: labels_1,
  datasets: [
    {
      label: 'Fully Rounded',
      data: [1,2,3,23,43,12,12],
      borderColor: "red",
      backgroundColor: "rgba(255, 20, 78, 0.5)",
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'Small Radius',
      data: [11,-20,34,30,3,2,15],
      borderColor: "blue",
      backgroundColor: "blue",
      borderWidth: 2,
      borderRadius: 5,
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

/* ========== GRAFICA 2# ========== */

/* ========== GRAFICA 3# ========== */

/* ========== GRAFICA 4# ========== */

/* ========== GRAFICA 5# ========== */

/* ========== GRAFICA 6# ========== */

/* ========== GRAFICA 7# ========== */

/* ========== GRAFICA 8# ========== */

/* ========== GRAFICA 9# ========== */

/* ========== GRAFICA 10# ========== */

/* ========== GRAFICA 11# ========== */

/* ========== GRAFICA 12# ========== */
