/**5️⃣ Generador de Identificadores Únicos 🔢

Implementa una función crearGeneradorId que devuelva una función que, cada vez que se invoque, retorne un ID único incremental. */

function crearGeneradorId() {
    let id = 0;
    return function () {
      return ++id;
    };
  }
  const generarId = crearGeneradorId();
  console.log(generarId());
  console.log(generarId());
  console.log(generarId());
  console.log(generarId());
  