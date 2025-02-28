/**14. Obtener todos los enlaces dentro de una lista 📋

Objetivo:
Selecciona todos los elementos a dentro de un ul con la clase "lista" y muestra en consola los href de cada enlace. Usa document.querySelectorAll() para obtener todos los enlaces y luego recórrelos con un bucle forEach. */

document.querySelectorAll('.lista li a').forEach(el=>{
    
    console.log(el.getAttribute('href'));
    
})