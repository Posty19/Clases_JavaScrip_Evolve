/**10. Mostrar títulos de posts con más de 50 caracteres

Obtén los posts desde https://jsonplaceholder.typicode.com/posts y muestra solo los títulos que tengan más de 50 caracteres. */

const mails = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      printData(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  
  const printData = (data)=>{
      const tasks =data.filter(e => {
        if(e.title.length>50){
            return e;
        }
      });
      console.log(tasks);
  }
  mails();