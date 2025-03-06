/**Ejercicio 4: Contador con límite

Muestra un número cada segundo y detiene el setInterval después de 5 ejecuciones. */

let counter = 0;
let tempo = setInterval(() => {
  console.log(++counter);
  if (counter === 5) {
    clearInterval(tempo);
  }
}, 1000);
