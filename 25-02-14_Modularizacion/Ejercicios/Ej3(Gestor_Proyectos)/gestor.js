proyectos = [];

const mosttrarProyectos = () => console.log(proyectos);

//Agregar proyectos con nombre, estado y prioridad.

const agregarProyecto = (nombre, estado, prioridad) => {
  proyectos.push({ nombre, estado, prioridad });
};

//Filtrar proyectos en estado "En progreso" (filter).

const filtroEstado = (estado) => proyectos.filter((el) => el.estado == estado);

//Ordenar proyectos por prioridad (sort).

const ordenPrioridad = () =>
  proyectos.sort((a, b) => a.prioridad - b.prioridad);

//Eliminar el último proyecto agregado (pop).

const eliminarProy = () => proyectos.pop();

//Convertir proyectos a una lista legible (toString).

const listarProy = () => {
  const nombresLista = proyectos.map((el) => el.nombre);
  return nombresLista.sort();
};

module.exports = {
  mosttrarProyectos,
  agregarProyecto,
  filtroEstado,
  ordenPrioridad,
  eliminarProy,
  listarProy,
};
