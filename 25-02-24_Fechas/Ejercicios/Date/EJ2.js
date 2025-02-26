/* 2️⃣ Determinar el número de viernes 13 en un año específico

Crea una función que reciba un año y devuelva cuántos viernes 13 ocurren en ese año. Recuerda que un viernes 13 ocurre si el día 13 de un mes cae en viernes. Tu solución debe iterar sobre todos los meses y contar cuántas veces sucede. */

const fridayThe13 = (year) => {
  let date = new Date(year, 0, 1);
  let counter = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    date.setDate(13);
    date.getDay() === 5 ? counter++ : null;
  }
  return `el año: ${year} tubo: ${counter} viernes 13`;
};

console.log(fridayThe13(2024));
