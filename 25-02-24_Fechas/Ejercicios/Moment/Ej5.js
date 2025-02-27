/**5. Restar fechas en meses

Crea una fecha para el 1 de enero de 2025 y otra para el 1 de octubre de 2025. Calcula la diferencia en meses entre estas dos fechas y muestra el resultado en consola. */


const moment = require('moment')

const date1 = moment("01-01-2025", "DD-MM-YYYY");
const date2 = moment("01-10-2025", "DD-MM-YYYY");

console.log(date2.diff(date1,'months'));

