/* 1️⃣3️⃣ Transformar un texto a mayúsculas y minúsculas alternadas

Escribir una función que transforme una frase de manera que cada letra alterna entre mayúsculas y minúsculas. */


let mensaje = "Frase de pruebas";

const alternUpperLower = msg =>{
    let msg2 ='';
   for(let i=0;i<msg.length;i++){
        if(i%2===0){
            msg2 += msg[i].toUpperCase();
        }else msg2 += msg[i].toLowerCase();
   }
    return msg2;
}

console.log(alternUpperLower(mensaje));