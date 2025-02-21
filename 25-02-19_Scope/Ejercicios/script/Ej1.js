/**1️⃣ Contador Privado 🧮

Crea una función crearContador que devuelva una función que incremente y retorne un contador privado cada vez que se llame. */

function crearContador() {
  let contador = 0;
  return function () {
    return ++contador;
  };
}
const incrementar = crearContador();
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
