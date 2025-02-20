/** 3️⃣ Buscar una palabra dentro de un texto

Crea una función que reciba un texto y una palabra, y determine si la palabra está presente dentro del texto, devolviendo un booleano. */
const text = 'Hola mundo!';
const wordInText = (text,word) => text.includes(word);

console.log(wordInText(text,'Hola'));
console.log(wordInText(text,'Adios'));