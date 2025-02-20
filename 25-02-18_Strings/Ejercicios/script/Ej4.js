/** 4️⃣ Extraer y formatear nombres de usuario

Dado un array de correos electrónicos, extraer los nombres de usuario (antes del @) y devolverlos en un array formateados con la primera letra en mayúscula y el resto en minúscula. */

const eMails = [
  "ejemplo@ejemplo.es",
  "ejemplo2@empresa.com",
  "ejemplo@ejemplo.es",
  "ejemplo3@empresa.es",
];

const userNames = (mails) =>
  mails.map((el) => el[0].toUpperCase() + el.slice(1, el.indexOf("@")));

console.log(userNames(eMails));
