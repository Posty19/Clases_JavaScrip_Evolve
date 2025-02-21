/* 9️⃣ Repetir una palabra un número determinado de veces

Crea una función que reciba una palabra y un número, y devuelva un string donde la palabra se repita ese número de veces separada por espacios. */

const repeatWord = (word,n) => (word+' ').repeat(n);

console.log(repeatWord('palabra',3));