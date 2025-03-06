/**
 * Ejercicio 4: Mostrar un mensaje con retraso aleatorio

Muestra un mensaje después de un tiempo aleatorio entre 1 y 5 segundos.
 */

const time =Math.floor((Math.random()*5)+1)*1000;
console.log(time);
setTimeout(()=>{
    console.log('mensaje con tiempo aletaorio');
},time)