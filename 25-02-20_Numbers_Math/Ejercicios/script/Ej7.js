/**📌 7. Redondeo Inteligente al Entero Más Cercano

Desarrolla una función que tome un array de números y los redondee al entero más cercano utilizando Math.round(). Sin embargo, si el número tiene exactamente .5 como decimal, en lugar de redondearlo con la regla estándar, la función debe redondearlo hacia el número par más cercano. */

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
  const numStr = el.toString().split('.');
   if(numStr[1]==5){
    parseInt(numStr[0]%2)===0 ? n2.push(parseInt(numStr[0])):n2.push(parseInt(numStr[0])+1)
   }else n2.push(Math.round(el));
 })
 return n2;
}

console.log(redondeo(nums));