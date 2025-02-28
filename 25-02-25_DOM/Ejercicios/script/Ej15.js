/**15. Cambiar la visibilidad de un elemento con un ID específico 👀

Objetivo:
Selecciona un div con el id "miDiv" y cambia su visibilidad entre none (oculto) y block (visible) usando style.display. Usa document.getElementById() para seleccionar el div y la propiedad style.display para modificar su visibilidad. */

document.getElementById('button').addEventListener('click', e=>{
    document.getElementById('miDiv').style.display='none';
    document.getElementById('button2').style.display='inline';
    e.target.style.display='none';
})
document.getElementById('button2').addEventListener('click', e=>{
    document.getElementById('miDiv').style.display='block';
    document.getElementById('button').style.display='inline';
    e.target.style.display='none';
})