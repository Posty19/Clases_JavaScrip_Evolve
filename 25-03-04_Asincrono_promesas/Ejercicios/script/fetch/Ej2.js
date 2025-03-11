/**2. Obtener un solo usuario por ID

Obtén el usuario con id=5 desde https://jsonplaceholder.typicode.com/users/5 y muestra su nombre y correo electrónico. */

const names = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const data = await response.json();
        printData(data);
    } catch (error) {
        console.log("el error es: ", e.mensaje);
    }
}

const printData = data =>{
    console.log(`nombre: ${data.name} email: ${data.email}`);
}

names();