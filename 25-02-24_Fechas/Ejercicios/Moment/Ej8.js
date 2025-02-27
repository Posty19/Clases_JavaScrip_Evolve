/**8. Manipulación compleja de fechas

Crea una fecha para el 1 de marzo de 2023. Resta 4 meses y 10 días, y luego suma 1 año y 2 semanas a la nueva fecha. Muestra la fecha final en formato "DD-MM-YYYY". */

const moment = require("moment");

let date = moment("01-03-2023", "DD-MM-YYYY");

date.subtract(4,'months')
date.subtract(10,'days')
date.add(1,'years')
date.add(14,'days')
console.log(date.format('DD-MM-YYYY'));
