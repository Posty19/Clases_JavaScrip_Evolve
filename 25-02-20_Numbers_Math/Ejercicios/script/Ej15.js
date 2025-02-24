/**📌 15. Transformación de Strings Numéricos en un Objeto Detallado

Dado un array de cadenas que representan números en formato decimal, crea una función que convierta cada número a un objeto con las siguientes propiedades:

original: El número en su forma original como cadena.

numero: El número convertido a tipo Number.

exponencial: El número representado en notación exponencial con dos decimales.

redondeado: El número redondeado al entero más cercano.

La función debe devolver un array con estos objetos. */

const strNums = ["123.23", "56.56", "96.89", "56.1", "456"];

const objNums = (numsArr) =>
  numsArr.map((el) => {
    return {
      original: el,
      numero: parseInt(el),
      exceponencial: parseInt(el).toExponential(2),
      redondeado: Math.round(parseInt(el)),
    };
  });

  console.log(objNums(strNums));