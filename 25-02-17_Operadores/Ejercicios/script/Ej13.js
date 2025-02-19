/* 1️⃣3️⃣ Eliminación de Elementos según una Condición

Dado un array de objetos (nombre, edad), crea una función que:

Elimine del array a las personas menores de 18 años.

Devuelva el nuevo array filtrado. */

const personas = [
  { nombre: "paco", edad: 30 },
  { nombre: "Ori", edad: 16 },
  { nombre: "Jesus", edad: 33 },
];

const filtrar = (persons) => persons.filter((el) => el.edad > 18);

console.log(filtrar(personas));
