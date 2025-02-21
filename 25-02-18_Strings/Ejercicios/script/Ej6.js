/**6️⃣ Transformar nombres a formato estándar

Crear una función que reciba un array de nombres en distintos formatos (mayúsculas, minúsculas, mezcladas) y devuelva un array donde cada nombre esté capitalizado correctamente, es decir, con la primera letra en mayúscula y el resto en minúscula. */

const names = ['Paco','LUCIA','juan','mAriAno'];

const correctNames = names =>names.map(el=>el[0].toUpperCase()+el.slice(1).toLowerCase());

console.log(correctNames(names));