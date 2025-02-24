/**📌 11. Conversión de Cadenas Numéricas a Decimales

Dado un array de cadenas de texto que contienen números decimales (algunos con caracteres adicionales al final), escribe una función que los convierta en valores de tipo float utilizando parseFloat(). La función debe ignorar cualquier carácter no numérico después del número y retornar un array con los valores convertidos. */

const nums = ["101.653asd", "24.2werft", "165.2fws", "14A"];

const toFloats = nums=> nums.map(el=>parseFloat(el));

console.log(toFloats(nums));