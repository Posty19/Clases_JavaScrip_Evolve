/**📌 14. Generación de Números Aleatorios con Redondeo y Registro

Escribe una función que genere n números aleatorios entre 0 y 100. Cada número generado debe ser redondeado al entero más cercano utilizando Math.round(). Además, la función debe almacenar cada número junto con su versión antes de ser redondeado en un array de objetos con la siguiente estructura: */

//jsCopiarEditar{ original: <número sin redondear>, redondeado: <número redondeado> }

const randNums = n =>{
    const nums = [];
    for(let i=0;i<n;i++){
        const num = Math.random()*100;
        nums.push({original: num, redondeado: Math.round(num)});
    }
    return nums;
}

console.log(randNums(10));