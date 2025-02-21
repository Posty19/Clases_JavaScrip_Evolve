/**1️⃣8️⃣ Reemplazar todas las apariciones de una palabra en un texto

Dado un string y una palabra objetivo, reemplazar todas las apariciones de la palabra con otra palabra especificada por el usuario. */

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur vero praesentium amet ex ab aut possimus eius labore, beatae veniam cumque modi est earum accusamus quos explicabo! In non, facilis voluptatum praesentium tempore pariatur! Praesentium odio ipsum cupiditate, dolore beatae, explicabo quisquam accusantium quasi sed sunt illo. Aliquid ratione cum reiciendis numquam? Molestias fugiat facilis quod natus, magnam nisi deleniti! minima nihil, a ratione corporis obcaecati dicta? Provident dicta sapiente quam corrupti error nemo ipsum culpa cupiditate, deserunt id dolor omnis. Recusandae ratione dolores pariatur accusantium architecto expedita repellendus totam nam deleniti eaque amet libero in perferendis aut error, ea ducimus sit ad, neque eligendi vitae quisquam? Cumque, amet quo id aspernatur quasi reiciendis repellat nulla doloremque architecto, repudiandae tenetur harum animi? Ipsam optio ab perspiciatis doloribus, ea distinctio. Quidem odit voluptatem officiis minima blanditiis, in iusto suscipit enim ipsum temporibus voluptate magnam, distinctio nemo voluptatibus ab at recusandae similique!'

// error minima magnam

const wordsReplacer = (text,word,change) => text.replaceAll(word,change);

console.log(wordsReplacer(text,'error','PIMPOLLO'));