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