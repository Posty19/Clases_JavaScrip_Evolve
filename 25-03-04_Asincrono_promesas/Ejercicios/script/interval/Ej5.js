/**Ejercicio 5: Texto parpadeante

Cada segundo, oculta y muestra un texto en la página web. */

setInterval(()=>{
    document.getElementById('container').classList.toggle('oculto')
},2000);