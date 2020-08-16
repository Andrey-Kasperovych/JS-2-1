/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizeTitle = title.toLowerCase();
// console.log(normalizeTitle);
const splitNormalizeTitle = normalizeTitle.split(' ').join('-');
// console.log(splitNormalizeTitle);

// const normalizeTireTitle = normalizeTitle.join('-');
// console.log(normalizeTireTitle);
console.log(title.toLowerCase().split(' ').join('-'));
