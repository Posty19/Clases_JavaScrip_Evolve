const {
  mostrarPelis,
  addFilrm,
  buscarGenero,
  obtenerTitulos,
  ordenarDuracion,
} = require("./plataforma.js");


addFilrm('La comunidad de anillo',228,'Fantasia');
addFilrm('Las dos torres',235,'Fantasia');
addFilrm('El retorno del rey',263,'Fantasia');
addFilrm('Los increibles',120,'Super Heroes');
addFilrm('Atlantis el imperio perdido',110,'Aventura');
addFilrm('Cadena perpetua',136,'Drama');

mostrarPelis();

console.log('****************************** Peliculas por genero');
console.log(buscarGenero('Fantasia'));

console.log('****************************** Titulos de pelis');
console.log(obtenerTitulos(', '));

console.log('****************************** Ordenar por duración');
ordenarDuracion();
mostrarPelis();

