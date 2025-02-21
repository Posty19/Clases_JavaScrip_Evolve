/**8️⃣ Suma Acumulativa ➕

Diseña una función crearSumaAcumulativa que mantenga un valor acumulado y retorne la suma de los valores que se le vayan pasando. */

function crearContador() {
    let contador = 0;
    return function (n) {
      return contador+=n;
    };
  }
  const incrementar = crearContador();
  console.log(incrementar(1));
  console.log(incrementar(5));
  console.log(incrementar(6));
  console.log(incrementar(2));
  