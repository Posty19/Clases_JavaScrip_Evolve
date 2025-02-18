const cursos = [];

const mostrarCursos = () => console.log(cursos);

//✅ Agregar cursos con nombre y número de estudiantes.

const agregarCursos = (nombre, nEstudiantes) =>
  cursos.push({ nombre, nEstudiantes });

//✅ Ordenar cursos por cantidad de inscritos (sort).

const ordenarCursos = () =>
  cursos.sort((a, b) => b.nEstudiantes - a.nEstudiantes);

//✅ Obtener una lista de nombres (map).

const nombresCursos = () => cursos.map((el) => el.nombre);

module.exports = {
  mostrarCursos,
  agregarCursos,
  ordenarCursos,
  nombresCursos,
};
