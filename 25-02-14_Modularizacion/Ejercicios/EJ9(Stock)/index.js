const {
  mostrarProductos,
  agregarProductos,
  dellProduct,
  filtrarProds,
  ordenStock,
} = require("./control.js");

agregarProductos("Microfono", 56);
agregarProductos("Teclado", 25);
agregarProductos("Mouse", 150);
agregarProductos("Pnatalla", 33);
agregarProductos("RAM", 80);
agregarProductos("CPU", 500);

mostrarProductos();

console.log("********************* eliminar ultimo");
dellProduct();
mostrarProductos

console.log("********************* Con poco stock");
console.log(filtrarProds());

console.log("********************* Ordenar por cantidad");
console.log(ordenStock());
