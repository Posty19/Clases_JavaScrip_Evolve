/**📌 7. Redondeo Inteligente al Entero Más Cercano

Desarrolla una función que tome un array de números y los redondee al entero más cercano utilizando Math.round(). Sin embargo, si el número tiene exactamente .5 como decimal, en lugar de redondearlo con la regla estándar, la función debe redondearlo hacia el número par más cercano. */

const nums = [1.3, 1.5, -36.45, -1.5, 7.89, 5];

const redondeo = (nums) => {
  const n2 = [];
  nums.forEach((el) => {
    console.log(el % 1);
    if (el % 1 === 0.5) {
      el % 2 === 0 ? n2.push(Math.floor(el)) : n2.push(Math.ceil(el));
    } else if (el % 1 == -0.5) {
      el % 2 === 0 ? n2.push(Math.ceil(el)) : n2.push(Math.floor(el));
    } else n2.push(Math.round(el));
  });
  return n2;
};

console.log(redondeo(nums));
