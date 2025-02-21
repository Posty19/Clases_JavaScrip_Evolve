/**🔟 Fábrica de Multiplicadores ✖️

Crea una función crearMultiplicador que tome un número como argumento y devuelva una función que multiplique cualquier número por el valor inicial. */

function crearContador(n1) {
    return function (n) {
      return n*n1;
    };
  }
  const incrementar = crearContador(2);
  console.log(incrementar(1));
  console.log(incrementar(5));
  console.log(incrementar(6));
  console.log(incrementar(2));
  