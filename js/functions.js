//функция проверки длины строки
//функция исправлена у переменных изменены имена
const measureLenght = (str, maxLenght) => (str.length <= maxLenght);

measureLenght('это строка', 15);

//функция проверки, является ли строка палиндромом
// сократил функцию, убрав if else
const isPalindrome = (str) => (str.toLowerCase().replace(/ /g,'').split('').reverse().join('') === str.toLowerCase().replace(/ /g,''));

isPalindrome ('Топот');
isPalindrome ('ДовОд');
isPalindrome ('Кекс');
isPalindrome ('Лёша на полке клопа нашёл ');

//функция извлекающая числа в виде целого положительного числа
const outputNumber = (test) => test.toString().replace(/[^0-9]/g,'');

outputNumber('1 кефир, 0.5 батона');

//функция добавления символов в начало строки
//заменил padStart(), добавив в функцию метод repeat()
const addingSymbols = (str, minLenght, addSymbol) => (addSymbol.repeat(minLenght).slice(0, minLenght - str.length) + str);
addingSymbols('q', 4, 'we');
