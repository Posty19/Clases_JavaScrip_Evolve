/**4. Mostrar los primeros 5 títulos de posts

Obtén los posts desde https://jsonplaceholder.typicode.com/posts y muestra solo los títulos de los primeros 5 posts. */

const posts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    printData(data);
  } catch (error) {
    console.log("error: ", error);
  }
};

const printData = (data)=>{
    
    for(let i =0;i<5;i++){
        console.log(`title: ${data[i].title}`);
    }
}
posts();