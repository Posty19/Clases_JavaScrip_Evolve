/**📌 13. Extraer el Valor Primitivo de Objetos Number

Crea una función que tome un array de valores, donde algunos de ellos sean instancias del objeto Number creadas con new Number(). La función debe recorrer el array y reemplazar cualquier instancia de Number con su valor primitivo usando valueOf(). Devuelve un nuevo array con los valores corregidos. */

const nums = [
  150,
  123,
  87,
  34,
  new Number(164),
  new Number(64),
  new Number(14),
];

const valueNums = (nums) => nums.map((el) =>el.valueOf());

console.log(valueNums(nums));
