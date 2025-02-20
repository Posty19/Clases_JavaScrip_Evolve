/**1️⃣ Obtener iniciales de una lista de nombres

Dado un array con varios nombres completos, crear una función que devuelva un nuevo array con las iniciales de cada nombre en mayúsculas. */

const nombres = ["Dniel", "Jaime", "lucia", "ana", "pedro"];

const iniciales = (names) =>
  names.map((el) => el[0].toUpperCase() + el.slice(1));

console.log(iniciales(nombres));
