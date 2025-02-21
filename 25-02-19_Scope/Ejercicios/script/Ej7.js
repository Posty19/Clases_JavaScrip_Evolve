/**7️⃣ Registro de Mensajes 📝

Crea una función crearLogger que devuelva una función para registrar mensajes con un historial que no pueda modificarse desde fuera. */

const crearLogger = ()=>{
  const logs = [];
  let msg = '';
  return {
    crear:(text) => {
      msg=text;
      logs.push(text);
    },
    visualizarMsg:() => {
      return msg;
    },
    visualizarLogs:() => {
      return logs;
    },
  }
}

const logs = crearLogger();

logs.crear('Mensaje 1')
logs.crear('Mensaje 2')
logs.crear('Mensaje 3')
logs.crear('Mensaje 4')

console.log(logs.visualizarMsg());
console.log(logs.visualizarLogs());
