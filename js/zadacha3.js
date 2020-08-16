/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];
for (let number of numbers) {
  //   console.log(number);
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);

let biggestNumber = numbers[0];
for (let number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log(biggestNumber);
