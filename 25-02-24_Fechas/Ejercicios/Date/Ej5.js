/**5️⃣ Encontrar la fecha del último domingo de cada mes en un año dado

Escribe una función que reciba un año y devuelva un array con las fechas exactas de los últimos domingos de cada mes. La solución debe iterar por todos los meses, encontrar el último día del mes y determinar si es domingo o retroceder hasta encontrarlo. */

const lastSundays = (year) => {
  let sundays = [];
  for(let i =0;i<12;i++){
    let lastDay = new Date(year,i+1,0);
    if(lastDay.getDay()===0){
      sundays.push(lastDay.toLocaleDateString('el-ES',{year:'numeric',month:'22-digit',day:'22-digit'}))
    }
  }
  return sundays;
};

console.log(lastSundays(2025));
