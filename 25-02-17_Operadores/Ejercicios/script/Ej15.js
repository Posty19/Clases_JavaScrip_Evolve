/* 1️⃣5️⃣ Asignación de Categorías según la Edad

Dado un array de objetos (nombre, edad), escribe una función que:

Agregue una propiedad categoria:

"Infantil" si la edad es menor de 12.

"Adolescente" si la edad está entre 12 y 17.

"Adulto" si es 18 o más.

Devuelva el array modificado. */

const people = [
  { name: "name 1", age: 12 },
  { name: "name 2", age: 10 },
  { name: "name 3", age: 18 },
  { name: "name 4", age: 19 },
  { name: "name 5", age: 11 },
];

const ageRange = (people) => {
  people.forEach((el) => {
    if(el.age<12){
        el.range = 'Infantil'
    }else if(el.age>12&&el.age<18){
        el.range = 'Adolescente'
    }else el.range = 'Adulto';
    
  });
};

ageRange(people);
console.log(people);