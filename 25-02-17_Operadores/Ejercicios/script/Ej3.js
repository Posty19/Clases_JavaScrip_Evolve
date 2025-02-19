/* 3️⃣ Operaciones en un Inventario de Productos

Dado un array de objetos con nombre y precio, crea una función que:

Aumente el precio en un 15% si el precio original es menor a 20.

Disminuya el precio en un 10% si el precio es mayor o igual a 50.

Devuelva el array modificado. */

const objetos = [
    {nombre: 'objeto1', precio: 10},
    {nombre: 'objeto2', precio: 20},
    {nombre: 'objeto3', precio: 15},
    {nombre: 'objeto4', precio: 60},
    {nombre: 'objeto5', precio: 50},
]

const funcion = objs => {
    const objetos2 = [];
    objs.forEach(el => {
        if (el.precio<20){
            el.precio *= 1.15; 
        }else if(el.precio>=50){
            el.precio *= 0.9; 
        }
        objetos2.push(el);
    });
    return objetos2;
}

console.log(funcion(objetos));