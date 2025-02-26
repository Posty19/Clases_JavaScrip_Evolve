/**4️⃣ Determinar si una persona nació en un año bisiesto y su edad en días exactos

Crea una función que reciba una fecha de nacimiento y determine si la persona nació en un año bisiesto. Además, calcula su edad exacta en días, considerando los años bisiestos y la cantidad de días de cada mes. */

const countLivedDays = (birthDay) => {
  const livedDays = (new Date() - new Date(birthDay)) / (1000 * 3600 * 24);
  return Math.floor(livedDays);
};

console.log(countLivedDays("1983-05-12"));
