/**2️⃣ Generador de Prefijos ✏️

Escribe una función crearPrefijo que tome un prefijo como argumento y devuelva una función que reciba una palabra y la retorne con el prefijo agregado. */

function crearPrefijos( prefix){
    return function(palabra){
        return prefix+palabra;
    }
}

const prefijo1 = crearPrefijos('Es');

console.log(prefijo1('Machalita'));
console.log(prefijo1('Cobalto'));
console.log(prefijo1('Grnaito'));
console.log(prefijo1('Carbon'));