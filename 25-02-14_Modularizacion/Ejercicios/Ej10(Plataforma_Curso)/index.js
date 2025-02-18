const {
  mostrarCursos,
  agregarCursos,
  ordenarCursos,
  nombresCursos,
} = require("./control.js");


agregarCursos('curso 1',50);
agregarCursos('curso 2',550);
agregarCursos('curso 3',60);
agregarCursos('curso 4',130);

ordenarCursos();
mostrarCursos();

console.log(nombresCursos());