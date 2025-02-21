/* 1️⃣6️⃣ Eliminar espacios extra dentro de un texto

Dado un string, eliminar todos los espacios adicionales entre las palabras y devolver el texto con un solo espacio entre cada palabra */

const string = "esta es   un   Frase  de Prueba.";

dellExtraSpaces = (string) =>
  string.split(" ").filter((el) => el !== '').join(' ');

console.log(dellExtraSpaces(string));
