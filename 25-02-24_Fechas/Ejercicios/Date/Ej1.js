/**1️⃣ Calcular la diferencia exacta entre dos fechas en años, meses y días

Escribe una función que reciba dos fechas y devuelva la diferencia exacta en años, meses y días. Ten en cuenta que los meses tienen diferentes cantidades de días y que los años bisiestos pueden afectar el cálculo. La función debe manejar correctamente los casos en los que la segunda fecha sea anterior a la primera. */

const date1 = new Date('2000-05-17');
const date2 = new Date('2025-02-24');

const date3 = new Date('2000-05-17');
const date4 = new Date('1985-02-24');

const sustDate = (d1,d2)=>{
  let difMilliSec = 0;

  d2>d1? difMilliSec = d2-d1: difMilliSec = d1-d2; 

  const result = new Date(difMilliSec);
  

  return `La diferencia es de ${result.getFullYear()-1970} años, ${result.getMonth()+1} meses y ${result.getDay()} días`
  
}

console.log(sustDate(date1,date2));
console.log(sustDate(date3,date4));