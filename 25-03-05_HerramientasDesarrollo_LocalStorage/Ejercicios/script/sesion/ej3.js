/**Ejercicio 3: Guardar un nombre y mostrarlo en la página

Solicita al usuario un nombre, guárdalo en sessionStorage y muéstralo en la página. */

document.getElementById('save').addEventListener('click',e=>{
    const name = document.getElementById('name').value;
    localStorage.setItem('name',name);
    document.getElementById('result').textContent = localStorage.getItem('name')
})