/**1️⃣4️⃣ Determinar si un texto contiene una palabra prohibida

Dado un texto y un array de palabras prohibidas, escribir una función que devuelva true si alguna de las palabras prohibidas está presente en el texto, y false en caso contrario. */

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur vero praesentium amet ex ab aut possimus eius labore, beatae veniam cumque modi est earum accusamus quos explicabo! In non, facilis voluptatum praesentium tempore pariatur! Praesentium odio ipsum cupiditate, dolore beatae, explicabo quisquam accusantium quasi sed sunt illo. Aliquid ratione cum reiciendis numquam? Molestias fugiat facilis quod natus, magnam nisi deleniti! minima nihil, a ratione corporis obcaecati dicta? Provident dicta sapiente quam corrupti error nemo ipsum culpa cupiditate, deserunt id dolor omnis. Recusandae ratione dolores pariatur accusantium architecto expedita repellendus totam nam deleniti eaque amet libero in perferendis aut error, ea ducimus sit ad, neque eligendi vitae quisquam? Cumque, amet quo id aspernatur quasi reiciendis repellat nulla doloremque architecto, repudiandae tenetur harum animi? Ipsam optio ab perspiciatis doloribus, ea distinctio. Quidem odit voluptatem officiis minima blanditiis, in iusto suscipit enim ipsum temporibus voluptate magnam, distinctio nemo voluptatibus ab at recusandae similique!'

const words = ['error', 'minima', 'magnam'];

const testForbiden = (text,words) => {
    let pass = false;
    words.forEach(el => {
        if ( text.includes(el)){
            pass=!pass;
        }
    });
    return pass;
}

console.log(testForbiden(text,words));