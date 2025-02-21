/**📌 5. Redondeo Obligatorio Hacia Arriba

Crea una función que reciba un array de números decimales positivos y negativos, y devuelva un nuevo array donde cada número haya sido redondeado hacia arriba utilizando Math.ceil(). Antes de retornar el resultado, la función debe validar que no haya valores NaN dentro del array original y, en caso de encontrarlos, eliminarlos antes de aplicar el redondeo. */

const nums = [
   1.3 ,
   1.50 ,
   -36.45 ,
   -1.5 ,
   7.89 ,
];

const redondeo = (nums) =>{
  const n2 = [];
  nums.forEach(el=>{
    if(typeof el !== 'number'|| !(isNaN(el))){
      n2.push(Math.ceil(el));
    }
  })
  return n2;
}

console.log(redondeo(nums));