/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = `Пользователь ${loginToFind} не найден.`;

console.log(logins.includes(loginToFind));
let a = logins.includes(loginToFind);

message = a === true ? `Пользователь ${loginToFind} найден.` : message;

console.log(message);

// console.log(logins.includes(loginToFind));

// if (logins.includes(loginToFind) === true) {
//   message = `Пользователь ${loginToFind} найден.`;
// }

// console.log(message);

// for (let login of logins) {
//   console.log(login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(login);

//   if (login !== loginToFind) {
//     continue;
//   }

//   message = `Пользователь ${loginToFind} найден.`;
// }

// console.log(message);

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(logins[i]);
//   console.log('login === loginToFind: ', login === loginToFind);
//   if (login === loginToFind) {
//     console.log('ДА!!! Равны!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }

//   //   if (login !== loginToFind) {
//   //     message = `Пользователь ${loginToFind} не найден.`;
//   //   } else {
//   //     message = `Пользователь ${loginToFind} найден.`;
//   //     break;
//   //   }
// }
// console.log(message);

// for (let i = 0; i < logins.length; i += 1) {
//   //   console.log(logins[i]);
//   //   if (logins[i] !== loginToFind) {
//   //     console.log(`Пользователь ${loginToFind} не найден.`);
//   //     continue;
//   //   } else {
//   //     console.log(`Пользователь ${loginToFind} найден.`);
//   //   }
//   if (logins[i] !== loginToFind) {
//     console.log(`Пользователь ${loginToFind} не найден.`);
//   }
//   //   console.log(`Пользователь ${loginToFind} не найден.`);
// }
