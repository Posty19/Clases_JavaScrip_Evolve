/**5. Modificar el texto de todos los elementos con la misma clase ✨

Objetivo:
Selecciona todos los elementos con la clase "modificar" y cambia su contenido de texto a "Texto modificado". Usa document.querySelectorAll() para obtener los elementos y un bucle forEach para modificar su textContent. */

const elements = document.querySelectorAll('.modificar');
elements.forEach(el => {
    el.textContent='Texto modificado';
});