/*
 * Посчитать общую сумму покупок в корзине
 */

// const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 1. Создать переменную общей суммы.

// let total = 0;

// for (i = 0; i < carts.length; i += 1) {
//   //   console.log(cart[i]);
//   total += carts[i];
//   //   console.log(total);
// }

// console.log('Total: ', total);

// for (const cart of carts) {
//   //   console.log(cart);
//   total += cart;
// }

// console.log('Total: ', total);

// for (let cart of carts) {
//   console.log((cart += 1));
// }

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  console.log(value);
  if (value % 2 !== 0) {
    continue;
  }
  total += value;
}

console.log(total);
