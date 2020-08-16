/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

const cardToRemove = 'Карточка-3';

//*Перший варіант*//
// deleteCard3 = cards.splice(2, 1);
// console.table(cards);

//*Другий варіант*//
// indDeleteCard = cards.indexOf(cardToRemove);
// console.log(indDeleteCard);

// deleteCard = cards.splice(indDeleteCard, 1);
// console.table(cards);

//*Третій варіант*//
// cards.splice(cards.indexOf(cardToRemove), 1);
// console.table(cards);

/*
 * Добавление (по индексу)
 */
const cardToInsert = 'Карточка-6';
//*Перший варіант*//

// cards.splice(cards.length, 0, cardToInsert);

//*Другий варіант*//
// cards.push(cardToInsert);

// console.table(cards);

/*
 * Обновление (по индексу)
 */

//*Перший варіант*//
// const cardToUpdate = 'Карточка-4.1';
// cards.splice(3, 1, cardToUpdate);

//*Другий варіант*//
// const number = 4;
// const indOfNum = number - 1;
// const version = 2;
// const cardToUpdate = `Карточка-${number}.${version}`;
// cards.splice(indOfNum, 1, cardToUpdate);

const cardToUpdate = 'Карточка-4.2';
const newCard = 'Карточка-4.1';

index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(-1, 1, newCard);

console.table(cards);
