/**1. Diferencia de fechas en días

Crea dos fechas: una para el 1 de diciembre de 2024 y otra para el 25 de diciembre de 2024. Calcula la diferencia entre ambas fechas en días y muestra el resultado en consola. ¿Cuántos días hay entre ambas fechas? */

const moment = require('moment')

const date1 = moment("01-12-2024", "DD-MM-YYYY");
const date2 = moment("25-12-2024", "DD-MM-YYYY");


console.log(date2.diff(date1,'days'));