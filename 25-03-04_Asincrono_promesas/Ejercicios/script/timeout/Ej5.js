/**Ejercicio 5: Cancelar un setTimeout antes de que ocurra

Programa un setTimeout para mostrar un mensaje en 4 segundos, pero cancélalo antes de que se ejecute. */

let timoOut=setTimeout((e) => {
    console.log('hola mundo!');
},4000);

setTimeout((e) => {
    clearTimeout(timoOut);
    console.log('cancelando timeOut');
},1000);
