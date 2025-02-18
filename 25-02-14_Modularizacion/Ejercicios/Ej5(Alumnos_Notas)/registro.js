const alumnos = [];

const mostrarAlumnos = () => console.log(alumnos);

//✅ Agregar alumnos con nombre y array de notas.

const agregarAlumnos = (nombre, notas) => alumnos.push({ nombre, notas });

//✅ Calcular el promedio de cada alumno (map).

const mediaNotas = () => {
  return alumnos.map((el) => mediaAlumno(el));
};

const mediaAlumno = (alumno) => {
  let media = 0;
  alumno.notas.forEach((el) => {
    media += el;
  });
  media /= alumno.notas.length;
  return media;
};

//✅ Filtrar alumnos aprobados (filter).

const alumnosAprobados = () => alumnos.filter((el) => mediaAlumno(el) > 5);

//✅ Ordenar alumnos por promedio (sort).

const ordenarAlumnos = () =>
  alumnos.sort((a, b) => mediaAlumno(b) - mediaAlumno(a));

//✅ Buscar un alumno por nombre (find).

const buscarAlumno = (name) => alumnos.find((el) => el.nombre === name);

module.exports = {
  mostrarAlumnos,
  agregarAlumnos,
  mediaNotas,
  alumnosAprobados,
  ordenarAlumnos,
  buscarAlumno,
};
