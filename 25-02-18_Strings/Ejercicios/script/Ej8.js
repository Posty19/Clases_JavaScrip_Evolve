/** 8️⃣ Verificar si una frase termina en una palabra específica

Dada una frase y una palabra, escribir una función que determine si la frase termina con esa palabra específica y devuelva un booleano. */

const sentence = 'estoe es un frase';

const sentenceEnds = (sentence,word) => sentence.endsWith(word);

console.log(sentenceEnds(sentence,'frase'));
console.log(sentenceEnds(sentence,'bip'));