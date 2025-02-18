const notas = [];

const mostrarNotas = () => console.log(notas);

//✅ Agregar notas con título y prioridad.

const agregarNotas = (tituo, prioridad) => notas.push({ tituo, prioridad });

//✅ Filtrar notas urgentes (filter).

const notasUrgentes = () => notas.filter((el) => el.prioridad >= 5);

//✅ Ordenarlas por prioridad (sort).

const ordenPrioridad = () => notas.sort((a, b) => b.prioridad - a.prioridad);

//✅ Buscar una nota específica (find).

const bucarNota = (title) => notas.find((el) => el.tituo === title);

module.exports = {
  mostrarNotas,
  agregarNotas,
  notasUrgentes,
  ordenPrioridad,
  bucarNota,
};
