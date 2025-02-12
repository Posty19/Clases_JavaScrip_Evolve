//*********************************************Fors para arrys y objetos

//recolocar for each
const numbers = [2, 3, 5, 8, 7];
numbers.forEach((element) => {
  console.log(`nº: ${element}`);
});
//For In
const persona = {
  nombre: "Daniel",
  edad: 28,
  profesion: "tirado",
  cosas: ["tristeza", "soledad", "dolor"],
};

for (let key in persona) {
  console.log(`elvalor de la propiedad ${key} es: ${persona[key]}`);
}

// otras formas
console.log(`Las claves de persona son: ${Object.keys(persona)}`); //retorna un array con las claves del objeto
console.log(`Las claves de persona son: ${Object.values(persona)}`); //retorna un array con los valores del objeto
//ver las parpiedades
const arrayKeys = Object.keys(persona);
for (let i = 0; i < arrayKeys.length; i++) {
  console.log(`El valor de: ${arrayKeys[i]} es: ${persona[arrayKeys[i]]}`);
}
//ver los valores
const arrayValues = Object.values(persona);
arrayValues.forEach((val) => console.log(val));

//Array de Objetos
const personas = [
  { nombre: "Hannibal", edad: 60, equipo: "A" },
  { nombre: "Faceman", edad: 40, equipo: "A" },
  { nombre: "Murdock", edad: 50, equipo: "A" },
  { nombre: "B.A. Baracus", edad: 45, equipo: "A" },
];
personas.forEach((el) => console.log(el.nombre));

//Metodos de arrays 1

//SPREAD OPERATOR " ... "
const numeros1 = [4, 7, 8, 9, 6, 3, 5, 5];
const numeros2 = [3, 5, 5, 9, 6, 1, 4, 8];
/* 
    //METODO CON .CONCAT


    const union = numeros1.concat(numeros2);
    console.log(union);
 */

console.log(numeros1);
console.log(...numeros1); // (4, 7, 8, 9, 6, 3, 5, 5); listado de valores
const union = [...numeros1, ...numeros2];
console.log(union);

const piloto = { nombr: "Murdock", eda: 50, equip: "A" };
const bruto = { nombre: "B.A. Baracus", edad: 45, equipo: "A" };
const Ateam = { ...piloto, ...bruto };
console.log(Ateam);


//METODOS PUSH, POP, UNSHIF, SHIFT, SORT, REVERSE

//AÑADIR ELEMENTOS AL FINAL PUSH
let numeros3 = [5,2,3,64,8,9,6];
console.log('******************** PUSH');
numeros3.push(9);
console.log(numeros3);

//ELIMINAR EL ULTIMO ELEMENTO POP
console.log('******************** POP');
numeros3.pop();
console.log(numeros3);

//AÑADIR ELEMENTO AL INICIO UNSHIFT
console.log('******************** UNSHIFT');
numeros3.unshift(1);
numeros3.unshift(1,3,9,2);
console.log(numeros3);

//ELIMINAR EL PRIMER ELEMENTO SHIFT
console.log('******************** SHIFT');
numeros3.shift();
console.log(numeros3);

//ORDENAR ELEMENTOS POR ASCII SORT
console.log('******************** SORT');
numeros3.sort();
console.log(numeros3);

//INVERTIR ORDEN REVERSE
console.log('******************** REVERSE');
numeros3.reverse();
console.log(numeros3);


//METODOS INCLUDES INDEXOF LASTINDEXOF

// COMPROBAR SI EL ELEMENTO EXISTE INCLUDES
const palabras = ["elefante", "águila", "cielo", "oso", "universo"];
console.log(palabras.includes('oso'));
console.log(palabras.includes('paraguas'));

// COMPROBAR POSICION DEL ELEMENTO INDEXOF
console.log(palabras.indexOf('oso'));

// COMPROBAR POSICION DEL ELEMENTO DESDE EL FINAL LASYINDEXOF
console.log(palabras.lastIndexOf('oso'));