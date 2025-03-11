/**3. Listar títulos de publicaciones de un usuario

Obtén las publicaciones de userId=3 desde https://jsonplaceholder.typicode.com/posts?userId=3 y muestra solo los títulos en la consola. */

const titles = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3');
        const data = await response.json()
        printData(data);
    } catch (error) {
        console.log('el error es',error.message);
    }
}

const printData = (data) =>{
    data.forEach(e => {
        console.log(`titulo del mensage es: ${e.title}`);
    });
}
titles();