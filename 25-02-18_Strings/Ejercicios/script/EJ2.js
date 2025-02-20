/**2️⃣ Identificar correos con dominio específico

Escribe una función que reciba un array con direcciones de correo electrónico y devuelva un nuevo array que contenga solo aquellas direcciones que terminen en un dominio determinado, como "@empresa.com". */


const eMails = [
    'ejemplo@ejemplo.es',
    'ejemplo2@empresa.com',
    'ejemplo@ejemplo.es',
    'ejemplo3@empresa.es',
];

const maisFilter = domain => eMails.filter(el=>el.endsWith(domain));

console.log(maisFilter('@empresa.com'));

