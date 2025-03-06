/**Ejercicio 1: Contador cada segundo

Muestra un contador que aumente cada segundo. */
let counter = 0;
let tempo = setInterval(() => {
  console.log(++counter);
  if (counter === 10) {
    clearInterval(tempo);
  }
}, 1000);
