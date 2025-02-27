/**2. Manipulación de fechas y formato

Crea una fecha que corresponda al 15 de agosto de 2023. Suma 2 semanas a esta fecha. Luego, muestra el nuevo valor de la fecha en formato "dddd, MMMM Do YYYY". */

const moment = require('moment')

let date = moment("15-08-2023", "DD-MM-YYYY");

date = date.add(14,'days');

console.log(date.format("dddd, MMMM Do YYYY"));