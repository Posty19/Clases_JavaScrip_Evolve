/**📌 9. Filtrado de Elementos No Numéricos en un Array

Dado un array con elementos de distintos tipos de datos, crea una función que devuelva un nuevo array que contenga solo aquellos valores que sean realmente numéricos. Para ello, usa la función isNaN() para detectar y excluir los valores que no sean números válidos. */

const array = [21, "asd", true, 66, "rf", false, null, undefined, 85];

const numsInArray = (arr) =>
  arr.filter((el) => {
    if (!isNaN(el) && typeof el === "number") {
      return el;
    }
  });

console.log(numsInArray(array));
