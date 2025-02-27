/**10. Diferencia en años, meses y días

Crea dos fechas: una para el 1 de enero de 2020 y otra para el 15 de marzo de 2025. Calcula la diferencia en años, meses y días entre ambas fechas y muestra el resultado en consola. */

const moment = require('moment')

const date1 = moment("01-01-2020", "DD-MM-YYYY");
const date2 = moment("15-03-2025", "DD-MM-YYYY");
const diference = moment(date2.diff(date1));
console.log(`${diference.year()-1970} Años, ${diference.month()} Meses y ${diference.date()} Dias`);