/* 1️⃣6️⃣ Modificación de un Array según un Criterio

Dado un array de números, escribe una función que:

Sustituya todos los números negativos por 0.

Devuelva el array modificado. */

let nums = [2, 3, 9, 3, -5, -6, 1, 78, -56, 100];

const delnegatives = (nums) => {
  nums = nums.map((el) => el < 0 ? (le = 0) : el);
  return nums;
};

nums = delnegatives(nums);
console.log(nums);
