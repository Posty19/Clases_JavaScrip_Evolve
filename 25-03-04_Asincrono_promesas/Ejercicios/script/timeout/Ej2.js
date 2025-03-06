/**Ejercicio 2: Saludo personalizado

Crea una función que reciba un nombre y use setTimeout para saludar después de 2 segundos. */

const saludo = name =>{
    setTimeout(()=>console.log(`buenos dias ${name}`),2000)
}
saludo('Dani')