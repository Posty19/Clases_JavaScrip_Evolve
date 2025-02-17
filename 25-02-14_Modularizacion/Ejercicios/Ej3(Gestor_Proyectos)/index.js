const{ 
  mosttrarProyectos,
  agregarProyecto,
  filtroEstado,
  ordenPrioridad,
  eliminarProy,
  listarProy,
} = require("./gestor.js");


agregarProyecto('Manhattan','Completado',1);
agregarProyecto('Base marciana','Temprana',3);
agregarProyecto('Laser orbital','Medio',2);
agregarProyecto('Martini','Medio',5);

mosttrarProyectos()

console.log(filtroEstado('Medio'));

ordenPrioridad();
mosttrarProyectos();

eliminarProy();
mosttrarProyectos();

console.log(listarProy());
