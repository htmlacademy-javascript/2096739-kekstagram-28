//функция проверки длины строки (менее 20 символов)
function lenghtString (lengthTestString) {
  if (lengthTestString.length <= 20) {
    return true;
  }

  return false;
}

lenghtString('это строка меньше 20')

//функция проверки, является ли строка палиндромом
function isPalindrome (str) {
  if (str.toLowerCase().replace(/ /g,'').split('').reverse().join('') === str.toLowerCase().replace(/ /g,'')) {
    return true;
  }
  return false;
}

isPalindrome ('топот');
isPalindrome ('ДовОд');
isPalindrome ('Кекс');
isPalindrome ('Лёша на полке клопа нашёл ');

//функция извлекающая числа в виде целого положительного числа
function outputNumber (test) {
  return test.toString().replace(/[^0-9]/g,'');
}

outputNumber('1 кефир, 0.5 батона');

//функция добавления символов в начало строки
function outputNumber (str, minLenght, addSymbol) {
  if ((addSymbol.length + addSymbol.length) >= minLenght)
   return (addSymbol.slice(0, minLenght - str.length) + str);
  //не понимаю как сделать данную задачу без .padStart при условии,
  //что длина исходной строки и добивки меньше заданного кол-ва символов
   return (str.padStart(minLenght, addSymbol))
  }

outputNumber('1', 4, '0')
