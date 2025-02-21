/** 1️⃣7️⃣ Crear nombres de usuario a partir de nombres completos

Dado un array de nombres completos, crear una función que genere un nombre de usuario para cada uno usando la primera letra del nombre y el apellido en minúsculas. */

const names = [
  "Juan Cortes",
  "Raquel Mendoza",
  "Jorge Crespo",
  "Maria Jimenez",
];

const userNames = (names) =>
  names.map(
    (el) =>
      el.split(" ")[0][0].toUpperCase() + el.split(" ")[1][0].toLowerCase()
  );

console.log(userNames(names));
