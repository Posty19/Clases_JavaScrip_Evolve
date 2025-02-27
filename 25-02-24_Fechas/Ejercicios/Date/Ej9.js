/**9️⃣ Calcular el tiempo restante hasta la medianoche en una zona horaria específica

Crea una función que reciba una zona horaria y devuelva el tiempo exacto que falta hasta la medianoche en esa zona horaria. El resultado debe expresarse en horas, minutos y segundos. */


const timeTilMidnoght = timeZone =>{

    const now = new Date();

    if((timeZone.includes('UTC')||timeZone.includes('GTM'))&&timeZone.length===5){
        
        const difMiliSec = parseInt(timeZone.slice(-2))*3600000;
        const timeInZone = new Date(now.getTime()+difMiliSec);
        



    }else return 'error en el formato de zona horaria';

}

console.log(timeTilMidnoght('UTC+1'));
console.log(timeTilMidnoght('GTM-1'));