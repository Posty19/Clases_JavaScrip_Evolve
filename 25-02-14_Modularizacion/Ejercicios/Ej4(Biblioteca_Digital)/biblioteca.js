const libros = [];

const mostrarLibros = () => console.log(libros);

//✅ Agregar libros con título, autor y género.

const agregarLibros = (titulo, autor, genero) =>
  libros.push({ titulo, autor, genero });

//✅ Buscar libros por autor (find).

const buscarLibros = (author) => libros.filter((el) => el.autor === author);

//✅ Obtener la lista de títulos (map).

const obtenerTitulos = () => libros.map((el) => el.titulo);

//✅ Saber si hay libros de un género específico (includes).

const buscarGenero = (genre) => {
  const generos = [];
  libros.forEach((el) => {
    generos.push(el.genero);
  });
  return generos.includes(genre)
    ? `Existen libros del genero: ${genre}`
    : `No existen libros del genero: ${genre}`;
};

//✅ Ordenar libros alfabéticamente (sort).

const ordenarLibros = () => {
  const titulos = [];
  libros.forEach((el) => {
    titulos.push(el.titulo);
  });
  return titulos.sort();
};

//✅ Filtrar libros de un género (filter).

const filtrarGenero = (genre) => libros.filter((el) => el.genero === genre);

module.exports = {
  mostrarLibros,
  agregarLibros,
  buscarLibros,
  obtenerTitulos,
  buscarGenero,
  ordenarLibros,
  filtrarGenero,
};
