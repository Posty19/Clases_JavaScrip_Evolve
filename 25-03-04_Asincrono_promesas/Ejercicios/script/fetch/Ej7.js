/**7. Obtener tareas completadas de un usuario

Obtén las tareas de userId=1 desde https://jsonplaceholder.typicode.com/todos?userId=1 y muestra cuántas están marcadas como completed: true. */

const mails = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
      const data = await response.json();
      printData(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  
  const printData = (data)=>{
      const tasks =data.filter(e => {
        if(e.completed){
            return e;
        }
      });
      console.log(tasks);
  }
  mails();