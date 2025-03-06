/**Ejercicio 3: Mostrar la hora actual cada segundo

Muestra la hora actual en la consola cada segundo. */

const watch = setInterval(()=>{
    const now = new Date()
    console.log(now);
    document.getElementById('relog').textContent=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
},1000)