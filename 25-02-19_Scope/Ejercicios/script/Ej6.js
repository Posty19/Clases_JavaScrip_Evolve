/**6️⃣ Contador con Reset 🔄

Extiende el contador del ejercicio 1 agregando una función para reiniciar el contador a cero. */

function crearContador() {
  let contador = 0;
  return {
    increment: () => {
      return ++contador;
    },
    reset: () => {
      contador = 0;
    },
  };
}
const incrementar = crearContador();
console.log(incrementar.increment());
console.log(incrementar.increment());
console.log(incrementar.increment());
console.log(incrementar.increment());
console.log(incrementar.increment());
console.log(incrementar.increment());

incrementar.reset();

console.log(incrementar.increment());
console.log(incrementar.increment());
console.log(incrementar.increment());