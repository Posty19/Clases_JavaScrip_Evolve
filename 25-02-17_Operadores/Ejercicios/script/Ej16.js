/* 1️⃣6️⃣ Modificación de un Array según un Criterio

Dado un array de números, escribe una función que:

Sustituya todos los números negativos por 0.

Devuelva el array modificado. */

let nums = [2, 3, 9, 3, -5, -6, 1, 78, -56, 100];

const delnegatives = (nums) => {
  const nums2 = [];
  nums.forEach((el) => {
    el < 0 ? nums2.push(0) : nums2.push(el);
  });
  return nums2
};

nums = delnegatives(nums);
console.log(nums);
