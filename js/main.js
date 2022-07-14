//Генератор случайных целых чисел из переданного диапазона
const getRandomInt = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const result = Math.floor(Math.random() * (max - min)) + min;
  return Math.abs(result);
};

//Функция для проверки максимальной длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

getRandomInt(9, 0);
checkStringLength('sdfgfgj', 6);
