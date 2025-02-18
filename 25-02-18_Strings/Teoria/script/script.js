let cadena = 'Hola esto es un master de Desarrollo FullStack & IA'
let cadena2 = '                           Hola esto es un master de Desarrollo FullStack & IA'
let cadena3 = 'Hola esto es un master de Desarrollo FullStack & IA                          '
const cadena4 = 'es muy y mucho divertido'
const longitud = cadena.length;

console.log(cadena.charAt(1));//muestra el caracter en la posicion idicada
console.log(cadena.slice(0,5));//corta la cadena desde, hasta
console.log(cadena.indexOf('master'));//retorna el indice donde se encuentra la primera coincidencia
console.log(cadena.toLowerCase());//convierte la cadena a minusculas
console.log(cadena.toUpperCase());//convierte la cadena a Mayusculas
console.log(cadena.split(' '));//convierte la cadena en un array seprando por el caracter indicado
console.log(cadena2.trimStart());//elimina los espacios al inicio de una cadena
console.log(cadena3.trimEnd());//elimina los espacios al final de una cadena
console.log(cadena2.trim());//elimina los espacios al inicio y al final
console.log(cadena3.trim());
console.log(cadena.replace('Hola','~'));//sustitulle un conjunto de caracteres por otro solo el primero que coincida
console.log(cadena.replaceAll('e','3'));//sustitulle un conjunto de caracteres por otro
console.log(cadena.includes('Hola'));//comprueba que este el caracter o cadena
console.log(cadena.concat(' ',cadena4));// lomismo que cadena + cadena4
console.log(cadena +' '+ cadena4);
console.log(cadena.substring(0,3));//corta un caho de la cadena desde hasta (similar a slice)
console.log(cadena.substring(3));//con solo un parametro toma hasta el final