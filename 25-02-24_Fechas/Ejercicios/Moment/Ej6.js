/**6. Formato personalizado

Crea una fecha para el 25 de diciembre de 2025. Muestra esta fecha en formato "El día DD de MMMM de YYYY es un dddd". */


const moment = require('moment')

const date1 = moment("25-12-2025", "DD-MM-YYYY");

console.log(date1.locale('es').format("[El día] DD [de] MMMM [de] YYYY [es un] dddd"));
