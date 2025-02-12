// METODOS DE ITERACION

const numeros = [3, 2, 5, 9, 7];
console.log(numeros);

numeros.forEach((el, key, arr) => {
  console.log(`elemento ${el} con clave ${key} del array ${arr}`);
});

// MAP

const pares = numeros.map((el) => {
      return el*2;
});
console.log(pares);

// FILTER

const pares2 = numeros.filter((el) => el % 2 === 0);
console.log(pares2);

// JOIN
const cadena = numeros.join();
console.log(cadena);

// TOSTRING
const cadena2 = numeros.toString();
console.log(cadena2);
