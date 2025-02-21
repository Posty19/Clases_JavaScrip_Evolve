/**📌 3. Conversión de Grandes Números a Notación Exponencial

Implementa una función que reciba un array de números de distintos órdenes de magnitud y devuelva un nuevo array donde cada número haya sido convertido a su notación exponencial con cuatro decimales utilizando toExponential(). Adicionalmente, la función debe detectar valores negativos y, en esos casos, incluir una advertencia en la salida indicando que el número convertido era originalmente negativo. */

const nums = [1256, 68, 8979, 318, -123456789];

const expo = (nums) => nums.map((el) => {
  if (el<0){
    console.log(`el nº ${el} es un numero negativo`);
  }
  return el.toExponential(2);
});

console.log(expo(nums));
