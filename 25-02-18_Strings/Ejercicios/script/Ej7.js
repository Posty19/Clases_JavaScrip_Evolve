/**7️⃣ Eliminar espacios innecesarios

Crear una función que reciba un array de frases y devuelva un nuevo array con cada frase sin espacios al inicio ni al final. */

const sentences = [
  "                frase con espacios             ",
  "                frase con espacios 2             ",
];

const noSpaces = setneces => sentences.map(el=>el.trim());
console.log(noSpaces(sentences));
