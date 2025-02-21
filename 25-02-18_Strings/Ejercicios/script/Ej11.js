/* 1️⃣1️⃣ Extraer una parte específica de un texto

Dado un string, un índice de inicio y un índice de fin, extraer la parte correspondiente del texto sin incluir el índice final. */

let mensaje = "Frase de pruebas";

const sliceSentence = (sentence,ini,end) => sentence.slice(ini,end-1);

console.log(sliceSentence(mensaje,2,9));
