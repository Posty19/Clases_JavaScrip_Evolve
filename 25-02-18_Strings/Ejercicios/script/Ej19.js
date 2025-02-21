/**1️⃣9️⃣ Verificar si una cadena comienza con una subcadena específica

Crear una función que reciba un string y una subcadena y devuelva true si la cadena comienza con la subcadena indicada, false en caso contrario. */

const sentence = "Frase de pruebas";

const startstWith = (text, start) =>{
    return text.indexOf(start)===0? true:false;
    
}

console.log(startstWith(sentence,'Frase'));
console.log(startstWith(sentence,'papas'));

