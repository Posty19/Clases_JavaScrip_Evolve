//1. Duplicar y Filtrar Números Pares

const numbers = [3, 7, 12, 5, 9, 20, 15];

const duplicados = numbers.map((el) => el * 2);
const sup20 = duplicados.filter((el) => el % 2 === 0 && el > 20);
console.log("Resultado EJ1");
console.log(`array de numeros: ${numbers}`);
console.log(`array duplicados: ${duplicados}`);
console.log(`array pares mayores que 20: ${sup20}`);

//2. Ordenar y Eliminar Elementos

const scores = [56, 89, 72, 45, 99, 38, 65];

scores.sort().reverse(); //scores.sort(reverse=true); otra forma de ponerlo
console.log("Resultado EJ2");
console.log(`array de puntajes ordenado: ${scores}`);

scores.pop();
scores.shift();
console.log(`array duplicados: ${scores}`);

//3. Añadir y Eliminar Elementos de un Array

const fruits = ["apple", "banana", "cherry"];
fruits.push("grape");
fruits.unshift("mango");
console.log("Resultado EJ3");
console.log(`array de frutas agregado: ${fruits}`);
fruits.shift();
fruits.pop();
console.log(`array de frutas reducido: ${fruits}`);

//4. Invertir y Unir Nombres

const names = ["Alice", "Bob", "Charlie", "David"];
names.reverse();
const nombresCadena = names.join("-");
console.log("Resultado EJ4");
console.log(`array de nombres invertido: ${names}`);
console.log(`array de nombres encadenado: ${nombresCadena}`);

//5. Encontrar la Primera Palabra Larga

const words = ["cat", "elephant", "dog", "giraffe", "lion"];

const word5Length = words.find((el) => el.length > 4);
console.log("Resultado EJ5");
console.log(`array de palabras: ${words}`);
console.log(`Primera palabra de mas de 5 caracteres: ${word5Length}`);

//6. Comprobar Inclusión de Elementos

const colors = ["red", "blue", "green", "yellow"];
const purple = colors.includes("purple");
const green = colors.includes("green");
console.log("Resultado EJ6");
console.log(`La inclusion de purple en el array es: ${purple}`);
console.log(`La inclusion de green en el array es: ${green}`);

//7. Filtrar Números Primos


// FALLA CON LAS POTENCIAS DE PRIMOS
const numbers2 = [
  2, 4, 5, 6, 7, 8, 9, 11, 13, 23, 19, 29, 97, 101, 103, 110, 111, 471, 121,
  169,
];
const numPrimos = numbers2.filter((el) => {
  if (el === 1 || el === 2 || el === 3 || el === 5 || el === 7) {
    return el;
  } else if (!(el % 2 === 0 || el % 3 === 0 || el % 5 === 0 || el % 7 === 0)) {
    return el;
  }
});
console.log("Resultado EJ7");
console.log(`Los numeros primos del array son: ${numPrimos}`);

//8. Convertir Números a Cadenas

const nums = [10, 20, 30, 40, 50];

const numsStr = nums.map((el) => {
  return el.toString();
});
console.log("Resultado EJ8");
console.log("Los numeros echos cadena:");
console.log(numsStr);

// 9. Contar Frases Largas

const sentences = [
  "Hello world",
  "JavaScript is fun",
  "I love coding",
  "Keep it simple",
];

const longSentences = sentences.filter((el) => {
  if (el.length > 12) {
    return el;
  }
});
console.log("Resultado EJ9");
console.log("Las frases de mas de 12 caracteres son:");
console.log(longSentences);
console.log(`Con un total de: ${longSentences.length} frases`);

//10. Invertir y Transformar Números

const nums10 = [1, 2, 3, 4, 5];

nums10.reverse();
const nums10Multi = nums10.map((el, index) => {
  return el * index;
});
console.log("Resultado EJ10");
console.log(`el array de numeros invertido es: ${nums10}`);
console.log(`el array de numeros * indice es: ${nums10Multi}`);

//11. Ordenar Nombres por Longitud

const names11 = ["Pin", "Coche", "Canarias", "Astronauta"];

let maxLength = 0; //Number.MIN_VALUE
let minLength = 9999; //Number.MAX_VALUE
const names11Ordered = [];
//Ordena los nombres de más corto a más largo utilizando sort y length.
names11.sort();

names11.forEach((el) => {
  if (el.length >= maxLength) {
    names11Ordered.push(el);
    maxLength = el.length;
  } else if (el.length <= minLength) {
    names11Ordered.unshift(el);
    minLength = el.length;
  }
});
console.log("Resultado EJ11");
console.log(`los nombres ordenados: ${names11}`);
console.log(`los nombres alineados de menor a mayor son:`);
console.log(names11Ordered);

//12. Manipular Lista de Tareas

const tasks = ["Wash dishes", "Do laundry", "Clean room"];

tasks.push("Buy groceries");
tasks.unshift("Feed the cat");

console.log("Resultado EJ12");
console.log(`array de tareas completo: ${tasks}`);
tasks.shift();
tasks.pop();
console.log(`array de tareas reducido: ${tasks}`);

//13. Filtrar y Unir Palabras

const words13 = ["apple", "banana", "avocado", "cherry", "apricot"];

const words13Filtered = words13.filter((el) => {
  if (el[0] === "a") {
    return el;
  }
});
const words13Joined = words13Filtered.join();
console.log("Resultado EJ13");
console.log(`Palabras que comienzan por a:`);
console.log(words13Joined);

//14. Encontrar el Segundo Número Más Grande

const numbers14 = [45, 67, 12, 89, 34, 22];

numbers14.sort();
numbers14.pop();

console.log("Resultado EJ14");
console.log(`El segundo numero mallor es: ${numbers14[numbers14.length - 1]}`);

//15. Verificar Inclusión de Subcadenas en Frases

const phrases = [
  "I love JavaScript",
  "Coding is great",
  "Java is cool",
  "I prefer Python",
];

const phrasesBool = phrases.map((el) => {
  return el.includes("Java");
});
console.log("Resultado EJ15");
console.log(`Array de frases:`);
console.log(phrases);
console.log(`Array de booleanos que verifiquen la palabra Java:`);
console.log(phrasesBool);
