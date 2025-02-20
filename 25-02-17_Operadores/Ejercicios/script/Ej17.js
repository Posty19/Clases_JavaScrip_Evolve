/* 1️⃣7️⃣ Transformación de Strings en un Array de Objetos

Dado un array de nombres en formato string, escribe una función que:

Devuelva un nuevo array de objetos con la propiedad nombre en mayúsculas y longitud con el número de caracteres de cada nombre. */

const names = ['name 1','name 2','name 3','name 4','name 5'];

const namesProps = names =>{
    return names.map(el=>{
        return {name:el,length:el.length}
    })
}
console.log(namesProps(names));