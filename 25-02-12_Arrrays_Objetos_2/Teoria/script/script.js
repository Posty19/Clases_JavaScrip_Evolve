// METODOS DE ITERACION

const numeros = [3, 2, 5, 9, 7];
console.log(numeros);

numeros.forEach((el, key, arr) => {
  console.log(`elemento ${el} con clave ${key} del array ${arr}`);
});

// MAP crea nuevo array con alterado con condiciones

const pares = numeros.map((el) => {
      return el*2;
});
console.log(pares);

// FILTER crea nuevo array filtrado

const pares2 = numeros.filter((el) => el % 2 === 0);
console.log(pares2);

// JOIN concatena elementos en un string
const cadena = numeros.join();
console.log(cadena);

// TOSTRING convierte a string
const cadena2 = numeros.toString();
console.log(cadena2);

// FIND busca con condiciones retorna el 1er wlwmwnto
const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];

const word5Length = words.find( el => el.length>4);
console.log(word5Length);