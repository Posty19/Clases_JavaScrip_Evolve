/* 1️⃣2️⃣ Cálculo del Producto Total en una Lista de Compras

Dado un array de objetos (nombre, precio, cantidad), escribe una función que:

Multiplique el precio por la cantidad de cada producto.

Devuelva la suma total de todos los productos. */

const prods = [
  { nombre: "producto 1", precio: 2, cantidad: 10 },
  { nombre: "producto 2", precio: 3, cantidad: 101 },
  { nombre: "producto 3", precio: 5, cantidad: 10 },
  { nombre: "producto 4", precio: 7, cantidad: 150 },
  { nombre: "producto 5", precio: 2, cantidad: 30 },
];

const calcularTotal = (productos) => {
  let total = 0;
  productos.forEach((el) => {
    total += el.precio*el.cantidad;
  });
  return total;
};
console.log(calcularTotal(prods));