/* 2️⃣ Cálculo de Diferencias con Asignación Compuesta

Dado un objeto con dos propiedades a y b (ambas números), escribe una función que:

Reste b de a utilizando el operador -=.
Multiplique a por 3 y divida b entre 2.
Devuelva un nuevo objeto con las propiedades actualizadas. */

const obj = {num1: 10, num2:5}

const funcion = objeto =>{
    const obj2 = {num1:0,num2:0}
    obj2.num1 = objeto.num1 * 3;
    obj2.num2 = objeto.num2 / 2;
    return obj2;
}
console.log(funcion(obj));