/**📌 12. Conversión de Valores Mixtos a Tipo Number

Desarrolla una función que tome un array de valores de distintos tipos (números, strings, booleanos, null, undefined, objetos) y utilice la función Number() para convertirlos a tipo number. La función debe retornar un objeto con dos arrays: uno con los valores convertidos correctamente y otro con los valores que no pudieron convertirse. */

const array = [21, "asd", true, 66, "rf", false, null, undefined, 85];

const numbers = (arr) => {
  const nums = [];
  const notNums = [];
  arr.forEach((el) => {
    !Number(el) && Number(el) != 0 ? notNums.push(el) : nums.push(Number(el));
  });
  return numbers, notNums ;
};
console.log(numbers(array));
