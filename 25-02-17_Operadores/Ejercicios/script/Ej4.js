/* 4️⃣ Filtrado de Usuarios con Condiciones Múltiples

Dado un array de objetos representando usuarios (nombre, edad, activo), escribe una función que:

Devuelva solo los usuarios mayores de 18 que además estén activos.

Usa operadores de comparación (>) y lógicos (&&). */

const usuarios = [
  { nombre: "objeto1", edad: 19, activo: true },
  { nombre: "objeto2", edad: 20, activo: false },
  { nombre: "objeto3", edad: 15, activo: true },
  { nombre: "objeto4", edad: 40, activo: false },
  { nombre: "objeto5", edad: 38, activo: true },
];

const funcion = (uss) => uss.filter((el) => el.edad > 18 && el.activo);

console.log(funcion(usuarios));
