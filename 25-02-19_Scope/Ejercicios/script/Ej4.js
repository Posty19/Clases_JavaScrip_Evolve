/**4️⃣ Temporizador con Retardo ⏳

Crea una función crearTemporizador que reciba un tiempo en segundos y devuelva una función que, al ser llamada, indique cuánto tiempo falta. */

const crearTemporizador = (tiempo) => {
  
  return ()=>tiempo;
};

const temporizador = crearTemporizador(`150`);

console.log(temporizador());