/**7. Sumar tiempo y comparar

Crea una fecha para el 1 de junio de 2025. Suma 7 días y 3 horas. Luego, compara si la nueva fecha es anterior a una fecha futura, como el 10 de junio de 2025. */

const moment = require("moment");

let date = moment("01-06-2025", "DD-MM-YYYY");

date = date.add(7, "days");
date = date.add(3, "hours");

console.log(date.isBefore(moment("10-06-2025", "DD-MM-YYYY")));

