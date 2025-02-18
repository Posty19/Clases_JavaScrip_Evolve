const peliculas = [];

const mostrarPelis = () => console.log(peliculas);

//✅ Agregar películas con título, duración y género.

const addFilrm = (titulo, duracion, genero) =>
  peliculas.push({ titulo, duracion, genero });

//✅ Buscar películas de un género (filter).

const buscarGenero = (genre) => peliculas.filter((el) => el.genero === genre);

//✅ Obtener los títulos en un solo string (join).

const obtenerTitulos = (char) => peliculas.map((el) => el.titulo).join(char);

//✅ Ordenar películas por duración (sort).

const ordenarDuracion = () => peliculas.sort((a, b) => b.duracion - a.duracion);

module.exports = {
  mostrarPelis,
  addFilrm,
  buscarGenero,
  obtenerTitulos,
  ordenarDuracion,
};
