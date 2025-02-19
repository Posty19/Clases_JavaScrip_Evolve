/* 1️⃣1️⃣ Validación de Disponibilidad de Productos

Dado un array de objetos representando productos (nombre, stock), escribe una función que:

Devuelva true si todos los productos tienen stock disponible (stock > 0).

Devuelva false en caso contrario. */

const prods = [
  { nombre: "producto 1", stock: 10 },
  { nombre: "producto 2", stock: 101 },
  { nombre: "producto 3", stock: -10 },
  { nombre: "producto 4", stock: 150 },
  { nombre: "producto 5", stock: 0 },
];
const prods2 = [
    { nombre: "producto 1", stock: 10 },
    { nombre: "producto 2", stock: 101 },
    { nombre: "producto 3", stock: 10 },
    { nombre: "producto 4", stock: 150 },
    { nombre: "producto 5", stock: 30 },
  ];

const disponibles = (productos) => {
  let validator = true;
  productos.forEach((el) => {
    el.stock <= 0 ? (validator = false) : "";
  });
  return validator;
};

console.log(disponibles(prods));
console.log(disponibles(prods2));
