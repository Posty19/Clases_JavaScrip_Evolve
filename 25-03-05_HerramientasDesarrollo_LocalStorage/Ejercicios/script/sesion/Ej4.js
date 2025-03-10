/**Ejercicio 4: Eliminar un dato de sessionStorage

Guarda un dato en sessionStorage, luego agrega un botón para eliminarlo manualmente. */

document.getElementById('save').addEventListener('click',e=>{
    const name = document.getElementById('name').value;
    localStorage.setItem('name',name);
    document.getElementById('result').textContent = localStorage.getItem('name')
})

document.getElementById('clear').addEventListener('click',e=>{
    localStorage.removeItem('name');
    document.getElementById('result').textContent = '';
})