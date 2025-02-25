/**1️⃣ Calcular la diferencia exacta entre dos fechas en años, meses y días

Escribe una función que reciba dos fechas y devuelva la diferencia exacta en años, meses y días. Ten en cuenta que los meses tienen diferentes cantidades de días y que los años bisiestos pueden afectar el cálculo. La función debe manejar correctamente los casos en los que la segunda fecha sea anterior a la primera. */

const date1 = new Date('2000-05-17');
const date2 = new Date('2025-02-24');

const sustDate = (d1,d2)=>{
  const difMilliSec = d2-d1;

  console.log(d1.getTime());
  console.log(d2.getTime());
  console.log(difMilliSec);

  const result = new Date(difMilliSec);
  console.log(result);
  
}

sustDate(date1,date2);