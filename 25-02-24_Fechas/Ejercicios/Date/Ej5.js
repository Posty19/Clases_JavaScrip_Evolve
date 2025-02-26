/**5️⃣ Encontrar la fecha del último domingo de cada mes en un año dado

Escribe una función que reciba un año y devuelva un array con las fechas exactas de los últimos domingos de cada mes. La solución debe iterar por todos los meses, encontrar el último día del mes y determinar si es domingo o retroceder hasta encontrarlo. */

const lastSundays = (year) => {
  const date = new Date(year, 0, 1);
  const sundays = [];
  const months = [0,1,2,3,4,5,6,7,8,9,10,11];

  months.forEach(month => {
    
  });

  
 
  return sundays;
};

console.log(lastSundays(2025));
