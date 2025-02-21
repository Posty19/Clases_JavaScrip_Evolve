/* 📌 1. Conversión de Números a Cadenas

Crea una función que reciba un array de números y devuelva un nuevo array donde cada número se haya convertido a su representación en cadena de texto utilizando el método toString(). Además, la función debe garantizar que el resultado sea realmente de tipo string, validándolo antes de añadirlo al nuevo array. Finalmente, retorna un objeto que contenga el array original y el array convertido. */

const nums = [1,2,56,68,897,9,31,8]

const numsToStr = nums => nums.map(el=>{
  const strNum = el.toString();
  if(typeof strNum === 'string'){
    return {number:el,string:strNum};
  }else console.log('ha habido algun error');
});

console.log(numsToStr(nums));