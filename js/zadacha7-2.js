/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// /* Перший варіант розв'язку.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let sum1 = 0;
// let sum2 = 0;

// for (array of array1) {
//   sum1 += array;
// }
// console.log(sum1);

// for (array of array2) {
//   sum2 += array;
// }
// console.log(sum2);

// sum3 = sum1 + sum2;

// console.log(sum3);

//* Другий варіант розв'язку

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const dobleMas = array1.concat(array2);
console.log(dobleMas);

let sum = 0;
for (value of dobleMas) {
  sum += value;
}
console.log(sum);
