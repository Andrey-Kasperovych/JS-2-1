/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum1 = 0;
let sum2 = 0;
let sumConcat = 0;

for (array of array1) {
  sum1 += array;
}

for (array of array2) {
  sum2 += array;
}

const sum = sum1 + sum2;

console.log(sum);

const array3 = array1.concat(array2);

for (array of array3) {
  sumConcat += array;
}

console.log(sumConcat);
