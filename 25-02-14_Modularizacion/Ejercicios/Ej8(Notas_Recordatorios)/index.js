const {
  mostrarNotas,
  agregarNotas,
  notasUrgentes,
  ordenPrioridad,
  bucarNota,
} = require("./control.js");

agregarNotas("Cita dentista", 5);
agregarNotas("Labar coche", 2);
agregarNotas("Cotar pelo", 1);
agregarNotas("Limpiar casa", 3);
agregarNotas("Hacer la compra", 8);
agregarNotas("Repostar coche", 5);

mostrarNotas();

console.log("********************* Urgentes");
console.log(notasUrgentes());

console.log("********************* Orden de Urgencia");
console.log(ordenPrioridad());

console.log("********************* Especifica");
console.log(bucarNota("Cita dentista"));
