/**Ejercicio 4: Guardar y eliminar datos en localStorage

Guarda un dato en localStorage, muéstralo en la consola y agrega un botón para eliminarlo. */

localStorage.setItem("dato", "dato");

console.log(localStorage.getItem("dato"));

document.getElementById("dellete").addEventListener('click',e=>{
    localStorage.removeItem('dato');
})
