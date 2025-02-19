/* 
1️⃣ Modificación de un Array Numérico con Operaciones Matemáticas
Dado un array de números enteros positivos, escribe una función que:
Multiplique los números en posiciones pares por 2 y los de posiciones impares por 3.
Reste 5 a todos los números mayores de 10.
Devuelva el nuevo array con los valores modificados. 
*/

const nums = [2, 3, 6, 5, 96, 3, 4, 87, 156, 976, 3, 8, 73];

const funcion = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    i % 2 === 0 ? (numeros[i] *= 2) : (numeros[i] *= 3);
    numeros[i] > 10 ? (numeros[i] -= 5) : null;
  }
};

funcion(nums);
console.log(nums);
