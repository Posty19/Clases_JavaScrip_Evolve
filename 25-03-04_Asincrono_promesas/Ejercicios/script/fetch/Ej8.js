/**8. Listar las primeras 3 fotos de un álbum

Obtén las fotos del álbum con id=1 desde https://jsonplaceholder.typicode.com/photos?albumId=1 y muestra solo las primeras 3 URLs de imagen. */


const mails = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
      const data = await response.json();
      printData(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  
  const printData = (data)=>{
      for (let i = 0; i<3;i++){
        console.log(data[i].url);
      }
  }
  mails();