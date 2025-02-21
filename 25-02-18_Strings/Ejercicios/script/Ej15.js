/**1️⃣5️⃣ Contar cuántas veces aparece una letra en un texto

Crear una función que reciba un string y una letra, y devuelva el número de veces que esa letra aparece en el texto. */

let mensaje = "Frase de pruebas";

const numChars = (word, char) => {
    let counter =0;
    for(let i =0;i<word.length;i++){
        if(word[i]===char){
            counter++;
        }
    }
    return counter
};
console.log(numChars(mensaje,'a'));
console.log(numChars(mensaje,'e'));
console.log(numChars(mensaje,'d'));