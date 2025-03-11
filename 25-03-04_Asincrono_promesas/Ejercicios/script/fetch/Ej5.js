/**5. Obtener comentarios de un post y mostrar los correos de los autores

Obtén los comentarios del post con id=4 desde https://jsonplaceholder.typicode.com/comments?postId=4 y muestra solo los correos electrónicos de los autores. */

const mails = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=4");
      const data = await response.json();
      printData(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  
  const printData = (data)=>{
      data.forEach(e => {
        console.log(e.email);
      });
      
  }
  mails();