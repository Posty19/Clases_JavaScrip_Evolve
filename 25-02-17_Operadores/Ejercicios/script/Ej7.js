/* 7️⃣ Manipulación de un Contador con ++ y --

Dado un objeto contador con la propiedad valor, crea una función que:

Incremente valor en 2 si es par.

Decremente valor en 1 si es impar.

Devuelva el objeto actualizado. */


const contador = objeto => objeto.contador%2===0 ? objeto.contador+=2:--objeto.contador;


console.log(contador({contador:5}));

console.log(contador({contador:2}));