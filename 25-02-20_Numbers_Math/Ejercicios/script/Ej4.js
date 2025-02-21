/**📌 4. Filtrado de Objetos Basado en Valores Absolutos

Dado un array de objetos donde cada objeto tiene una propiedad valor, escribe una función que elimine todos los objetos cuyo valor absoluto sea menor o igual a un umbral definido. La función debe utilizar Math.abs() para determinar los valores absolutos y retornar un nuevo array con los objetos que cumplen la condición. */

const objs = [
  { valor: 1 },
  { valor: 150 },
  { valor: -3645 },
  { valor: -15 },
  { valor: 789 },
];

const filtrarAbsolutos = (objs, umbral) =>{
  const abs = []
  objs.forEach((el) => {
    if (Math.abs(el.valor) > umbral) {
      abs.push(Math.abs(el.valor));
    }
  })
  return abs;
}

  console.log(filtrarAbsolutos(objs,50));
