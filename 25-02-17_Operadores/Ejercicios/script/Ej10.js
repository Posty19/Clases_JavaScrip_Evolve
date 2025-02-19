/* 🔟 Creación de un Registro de Asistencia

Dado un array de nombres de estudiantes y un objeto asistencia vacío, escribe una función que:

Agregue cada estudiante como una propiedad del objeto con un valor booleano (true si asistió, false si no).

Devuelva el objeto resultante. */

const names = ["paco", "ana", "lucia"];
const asistencia = [];

const agregar = (nombres) =>
  nombres.forEach((el) => {
    asistencia.push({ nombre: el, asistecia: true });
  });

agregar(names);
console.log(asistencia);
