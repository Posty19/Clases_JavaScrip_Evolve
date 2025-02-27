/**3. Comparación de fechas

Compara dos fechas: una para el 10 de febrero de 2025 y otra para el 12 de febrero de 2025. Usa los métodos isBefore(), isAfter() y isSame() para verificar cuál es anterior, cuál es posterior, y si son iguales. */

const moment = require('moment')

const date1 = moment("10-02-2025", "DD-MM-YYYY");
const date2 = moment("12-02-2025", "DD-MM-YYYY");

console.log(date1.isBefore(date2));
console.log(date1.isAfter(date2));
console.log(date1.isSame(date2));