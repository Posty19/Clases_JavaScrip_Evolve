/* 2️⃣0️⃣ Histograma de Ocurrencias en un Array de Números

Dado un array de números, crea un objeto donde:

Las claves sean los números únicos del array.

Los valores sean la cantidad de veces que aparecen en el array. */

const nums = [];

const contador = nums =>{
    const result = {};

    for (let i in nums) {
        let cont = nums[i];
        result[cont]?++result[cont]:result[cont]=1 
    }
    return result
}
console.log(contador(nums));