/**11. Recorrer una colección de elementos con una clase específica 🔄

Objetivo:
Selecciona todos los elementos con la clase "item" y recorre la colección para mostrar sus textos en consola. Usa document.getElementsByClassName() para seleccionar los elementos y forEach para recorrerlos (si es una NodeList). */

const items=document.getElementsByClassName('item');

Array.from(items).forEach(el => {
    console.log(el.textContent);
});