/**📌 2. Redondeo de Números con Precisión Fija

Escribe una función que tome un array de números decimales y retorne un nuevo array donde cada número haya sido redondeado a exactamente tres decimales utilizando el método toFixed(). Sin embargo, antes de retornar el resultado, la función debe verificar que todos los elementos del array original sean de tipo number y, en caso de encontrar un valor no numérico, debe lanzar un error con un mensaje adecuado. */

const nums = [
  1.13587,
  2.325468,
  56.6845,
  "margaritas",
  68.74896,
  897.456,
  9.45456,
  31.967484,
  8.4856,
];

const numsDec = (nums) => {
  const numsFin = [];
  nums.forEach((el) => {
    if (typeof el === "number") {
      numsFin.push(el.toFixed(3));
    } else {
      console.log(`el elemento ${el} no es un numero`);
    }
  });
  return numsFin;
};

console.log(numsDec(nums));
