/** 4️⃣ Extraer y formatear nombres de usuario

Dado un array de correos electrónicos, extraer los nombres de usuario (antes del @) y devolverlos en un array formateados con la primera letra en mayúscula y el resto en minúscula. */

const eMails = [
    'ejemplo@ejemplo.es',
    'ejemplo2@empresa.com',
    'ejemplo@ejemplo.es',
    'ejemplo3@empresa.es',
];

const userNames = mails =>{
    return mails.map(el=>{
        let userName=el.slice(1,el.indexOf('@'));
        return el[0].toUpperCase()+userName;
    })
}

console.log(userNames(eMails));