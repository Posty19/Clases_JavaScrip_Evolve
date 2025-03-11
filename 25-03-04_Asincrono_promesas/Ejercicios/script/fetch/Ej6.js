/**6. Extraer datos específicos de un usuario

Haz una petición GET a https://jsonplaceholder.typicode.com/users/2.
Luego, extrae y muestra solo el nombre, la ciudad y el nombre de la compañía.
📌 Aquí necesitas extraer datos de un objeto JSON. */

const names = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const data = await response.json();
        printData(data);
    } catch (error) {
        console.log("el error es: ", e.mensaje);
    }
}

const printData = data =>{
    console.log(`nombre: ${data.name} compañia: ${data.company.name}`);
}


names();