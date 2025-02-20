/* 1️⃣8️⃣ Creación de una Lista de Invitados con Doble Confirmación

Dado un array de nombres y otro de booleanos representando confirmaciones (true/false), escribe una función que:

Devuelva solo los nombres de los invitados que confirmaron su asistencia. */

const names = ["name 1", "name 2", "name 3", "name 4", "name 5"];
const confirm = [true, true, false, true, false];

const confirmesAssistants = (names) => {
  return names.filter((el) => (confirm[names.indexOf(el)] ? el : null));
};

console.log(confirmesAssistants(names));
