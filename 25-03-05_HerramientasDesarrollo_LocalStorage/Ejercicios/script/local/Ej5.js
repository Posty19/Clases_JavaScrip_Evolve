/**Ejercicio 5: Limpiar todo localStorage

Agrega un botón que permita borrar completamente todos los datos almacenados en localStorage. */


document.getElementById("dellete").addEventListener('click',e=>{
    localStorage.clear();
})
