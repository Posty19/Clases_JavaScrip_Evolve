/**📌 8. Generación de Números Aleatorios en Rango Definido

Implementa una función que reciba tres parámetros: la cantidad de números aleatorios a generar (n), un valor mínimo (min) y un valor máximo (max). La función debe devolver un array con n números aleatorios enteros dentro del rango definido, asegurando que min y max sean respetados. Utiliza Math.random() y Math.floor() para lograrlo. */

const numsRndom = (cant,max,min) =>{
    const nums = []
    for(let i =0;i<cant;i++){
        let n = Math.floor((Math.random()*max)+1);
        //console.log(n);
        if (n<max&&n>min) {
            nums.push(n);
        }
    }
    return nums;
}

console.log(numsRndom(10,20,11));