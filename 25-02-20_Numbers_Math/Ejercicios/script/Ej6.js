/**📌 6. Redondeo Obligatorio Hacia Abajo

Escribe una función que tome un array de números y retorne un nuevo array donde cada número haya sido redondeado hacia abajo utilizando Math.floor(). Sin embargo, si alguno de los números del array original ya es un número entero, la función debe devolverlo sin modificarlo. */

const nums = [
  1.3 ,
  1.50 ,
  -36.45 ,
  -1.5 ,
  7.89 ,
  5
];

const redondeo = (nums) =>{
 const n2 = [];
 nums.forEach(el=>{
   if(typeof el !== 'number'|| !(isNaN(el))){
     n2.push(Math.floor(el));
   }
 })
 return n2;
}

console.log(redondeo(nums));