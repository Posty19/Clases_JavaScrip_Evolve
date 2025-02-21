/** 🔟 Extraer la última aparición de una letra en una palabra

Dada una palabra y una letra, encontrar la última posición en la que aparece dicha letra dentro de la palabra y devolver el índice correspondiente. */
const word = "hipopotomonstrosesquipedaliofobia";

const lastCgharIndex = (word, char) => word.lastIndexOf(char);

console.log(lastCgharIndex(word, "o"));
console.log(lastCgharIndex(word, "t"));
console.log(lastCgharIndex(word, "i"));
