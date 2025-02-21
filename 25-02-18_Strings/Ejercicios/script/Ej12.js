/**1️⃣2️⃣ Dividir nombres y apellidos

Crear una función que reciba un array de nombres completos y devuelva un array de objetos, donde cada objeto tenga las propiedades "nombre" y "apellido". */

let names = [
  "Nombre1 Apellido1",
  "Nombre2 Apellido2",
  "Nombre3 Apellido3",
  "Nombre4 Apellido4",
];

const nmstransform = (names) =>
  names.map((el) => {
    return {
      name: el.slice(0, el.indexOf(" ")),
      lastName: el.slice(el.indexOf(" ")),
    };
  });
console.log(nmstransform(names));
