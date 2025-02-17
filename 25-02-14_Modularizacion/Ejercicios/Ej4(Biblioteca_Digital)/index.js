const {
  mostrarLibros,
  agregarLibros,
  buscarLibros,
  obtenerTitulos,
  buscarGenero,
  ordenarLibros,
  filtrarGenero,
} = require("./biblioteca.js");

agregarLibros('Guardia guardias','Terry Pratchet','Fantasia');
agregarLibros('Mort','Terry Pratchet','Fantasia');
agregarLibros('El Hobbit','J.R.R. Tokien','Alta Fantasia');
agregarLibros('Steelheath','Brandon Snaderson','Superheroes');
agregarLibros('Dune','Frank Herbert','Ciencia Ficción');
agregarLibros('1984','George Orwell','Distopico');
agregarLibros('Amanecer Rojo','Pierce Brown','Distopico');
agregarLibros('El Principe','Nicolás Maqiavelo','Filosofia');

mostrarLibros();

console.log(buscarLibros('Terry Pratchet'));

console.log(obtenerTitulos());

console.log(buscarGenero('Distopico'));

console.log(ordenarLibros());

console.log(filtrarGenero('Fantasia'));