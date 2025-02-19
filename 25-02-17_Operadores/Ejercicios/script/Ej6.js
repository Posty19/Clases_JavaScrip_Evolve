/* 6️⃣ Clasificación de Números con Condicionales Encadenados

Dado un número, escribe una función que devuelva:

"Positivo" si es mayor que 0.

"Negativo" si es menor que 0.

"Cero" si es igual a 0. */

const valorarNum = num => {
    let respuesta='';
    num>0? respuesta='positivo' : '';
    num<0? respuesta='negativo' : '';
    num==0? respuesta='0' : '';
    return respuesta;
}
console.log(valorarNum(10));
console.log(valorarNum(-10));
console.log(valorarNum(0));