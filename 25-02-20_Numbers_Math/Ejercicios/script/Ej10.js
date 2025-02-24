/**📌 10. Conversión de Cadenas Numéricas a Enteros

Crea una función que reciba un array de cadenas que representan números enteros en distintas bases numéricas (binario, octal, decimal, hexadecimal). La función debe utilizar parseInt() para convertir cada valor en su número entero equivalente en base 10 y retornar un nuevo array con los valores convertidos. */

const nums = ["101", "24", "165", "14A"];
const base = [2, 8, 10, 16];

const transform = (arr, bases) =>
  arr.map((el) => {
    return parseInt(el, bases[arr.indexOf(el)]);
  });

console.log(transform(nums, base));
