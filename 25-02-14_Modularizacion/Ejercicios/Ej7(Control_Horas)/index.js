const {
  mostrarEmpleados,
  addEmpleado,
  sumaHoras,
  filtrarHoras,
  ordenarHoras,
} = require("./control.js");

addEmpleado('Paco',20);
addEmpleado('Juanjo',41);
addEmpleado('Maria',33);
addEmpleado('Antnio',55);

mostrarEmpleados()

console.log(`total de horas trabajadas = ${sumaHoras()}`);

console.log('mas de 40 horas trabajadas');
console.log(filtrarHoras());

console.log('ordenados por horas');
ordenarHoras()
mostrarEmpleados()