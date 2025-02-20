/* 1️⃣4️⃣ Transformación de Objetos con Valores Modificados

Dado un array de objetos (usuario, nivel), escribe una función que:

Convierta los niveles "básico" a "intermedio", y los "intermedio" a "avanzado".

Devuelva el array actualizado. */

const users = [
  { user: "User 1", level: "Intermedio" },
  { user: "User 2", level: "Basico" },
  { user: "User 3", level: "Basico" },
  { user: "User 4", level: "Intermedio" },
  { user: "User 5", level: "Avanzado" },
];

const upLevel = (users) => {
  users.forEach((el) => {
    switch (el.level) {
      case "Basico":
        el.level = "Intemedio";
        break;
      case "Intermedio":
        el.level = "Avanzado";
        break;
      default:
        console.log(`El usuario ${el.user} ya es nivel avanzado`);
    }
  });
};

upLevel(users);
console.log(users);