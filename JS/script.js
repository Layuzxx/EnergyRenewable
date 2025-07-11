// Este script se encarga de la funcionalidad de la barra de búsqueda dinámica.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener Referencias a Elementos del DOM:
    //    - El campo de entrada de búsqueda (input con id="buscar-input").
    //    - El menú desplegable de sugerencias (ul con id="search-suggestions").

    // 2. Definir Sugerencias de Búsqueda:
    //    - Crear un array de cadenas de texto con las palabras clave o frases
    //      que se usarán como sugerencias (e.g., "Energía Solar", "Biomasa", etc.).

    // 3. Implementar la Función para Mostrar Sugerencias (showSuggestions):
    //    - Esta función se ejecutará cada vez que el usuario escriba en el input.
    //    - Debe:
    //        a. Obtener el texto actual del input y convertirlo a minúsculas.
    //        b. Limpiar cualquier sugerencia mostrada previamente en el menú.
    //        c. Filtrar el array de sugerencias predefinidas para encontrar coincidencias.
    //        d. Por cada coincidencia:
    //           - Crear un nuevo elemento <li> y un <a> dentro de él.
    //           - Añadir la clase 'dropdown-item' al <a> para el estilo de Bootstrap.
    //           - Establecer el texto del <a> a la sugerencia.
    //           - Añadir el <li> al menú de sugerencias.
    //        e. Mostrar el menú de sugerencias (estableciendo su 'display' a 'block')
    //           si hay texto en el input y se encuentran coincidencias.
    //        f. Ocultar el menú de sugerencias (estableciendo su 'display' a 'none')
    //           si el input está vacío o no hay coincidencias.

    // 4. Asignar Event Listeners:
    //    - Asignar la función showSuggestions al evento 'input' del campo de búsqueda.
    //      Esto actualizará las sugerencias en tiempo real.
    //    - Asignar un evento 'click' al documento completo:
    //      - Si el clic ocurre fuera del input de búsqueda y fuera del menú de sugerencias,
    //        ocultar el menú de sugerencias.
    //    - (Opcional) Asignar un evento 'keydown' al campo de búsqueda:
    //      - Si la tecla presionada es 'Enter' y el menú de sugerencias está visible,
    //        prevenir el envío del formulario. Aquí se podría añadir lógica
    //        para seleccionar una sugerencia o redirigir.
});

// ========== BOTÓN FLOTANTE IR ARRIBA ==========
window.addEventListener('scroll', () => {
  const btnIrArriba = document.getElementById('btn-ir-arriba');
  if (!btnIrArriba) return;
  if (window.scrollY > 300) {
    btnIrArriba.style.display = 'flex';
  } else {
    btnIrArriba.style.display = 'none';
  }
});
if (document.getElementById('btn-ir-arriba')) {
  document.getElementById('btn-ir-arriba').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== ANIMACIÓN SCROLL REVEAL BÁSICA ==========
function revealOnScroll() {
  const reveals = document.querySelectorAll('.animate__animated');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 60) {
      el.classList.add('animate__fadeInUp');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// ========== MEJORA DE BARRA DE BÚSQUEDA ==========
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('buscar-input');
  const suggestions = document.getElementById('search-suggestions');
  if (!input || !suggestions) return;
  const sugerencias = [
    'Energía Solar', 'Energía Eólica', 'Biomasa', 'Biogás', 'Geotérmica', 'Hidroeléctrica', 'Calculadora', 'VidaEvo', 'Sobre Nosotros'
  ];
  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    suggestions.innerHTML = '';
    if (value.length === 0) {
      suggestions.style.display = 'none';
      return;
    }
    const filtradas = sugerencias.filter(s => s.toLowerCase().includes(value));
    if (filtradas.length === 0) {
      suggestions.style.display = 'none';
      return;
    }
    filtradas.forEach(s => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'dropdown-item';
      a.href = '#';
      a.textContent = s;
      li.appendChild(a);
      suggestions.appendChild(li);
    });
    suggestions.style.display = 'block';
  });
  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });
});