/* 8️⃣ Verificación de Paridad con Operador Bitwise

Escribe una función que reciba un número y determine si es par o impar usando &.
💡 Pista: n & 1 devuelve 0 si n es par, y 1 si es impar. */

const paridad = (num) => (num & 1 ? "impar" : "par");

console.log(paridad(32));
console.log(paridad(33));
