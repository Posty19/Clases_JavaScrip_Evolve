/* 5️⃣ Validación de Contraseñas con Múltiples Condiciones

Crea una función que reciba una contraseña y valide que:

Su longitud sea de al menos 8 caracteres.

Contenga al menos una mayúscula y un número.

No contenga espacios en blanco.

Devuelva true si cumple todas las condiciones, false en caso contrario. */

const abc = "abcdefghijklmnopqrstuvwxyzñ";
const nums = "1234567890";

const valPass = (password) => {
  let minus = false;
  let mayus = false;
  let num = false;

  const ABC = abc.toUpperCase();
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      password[i] == abc[j] ? (minus = true) : "";
      password[i] == ABC[j] ? (mayus = true) : "";
    }
    password[i] <= 9 ? (num = true) : "";
  }
  return minus && mayus && num ? true : false;
};

console.log(valPass("contraseña"));
console.log(valPass("Contraseña"));
console.log(valPass("conTraseña1"));
console.log(valPass("contraseña1"));
