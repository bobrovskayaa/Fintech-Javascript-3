/* eslint-disable max-statements */
/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(str) {
  const arr = str.split(/[ ,!?:;]/);
  let min, max;

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(+arr[i]) || (arr[i].length === 0)) {
      arr.splice(i, 1);
      --i;
    }
  }

  min = Math.min(...arr);
  max = Math.max(...arr);

  return { min, max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacciSimple(n - 1) + fibonacciSimple(n - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
var fibonacciWithCache = (function() {
  const cache = {};

  return function fibonacci(n) {
    let value;

    if (n in cache) {
      value = cache[n];
    } else {
      value = (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = value;
    }
    return value;
  };
})();

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  const NumStr = Math.ceil((max + 1) / cols);
  let FinalString = '';

  for (let i = 0; i < NumStr; i++) {
    for (let j = 0; j < cols; j++) {
      const CurInd = i + j * NumStr;

      if (CurInd <= max) {
        if (CurInd < 10) {
          FinalString += ' ';
        }
        FinalString += CurInd;
        if (j < cols - 1 && CurInd < max) {
          FinalString += ' ';
        }
      }
    }
    if (i < NumStr - 1) {
      FinalString += '\n';
    }
  }
  return FinalString;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let FinalString = '';
  let CurSym = input[0];
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === CurSym) {
      ++count;
    } else {
      FinalString += CurSym;
      if (count > 1) {
        FinalString += count;
      }
      count = 1;
      CurSym = input[i];
    }
  }
  FinalString += CurSym;
  if (count > 1) {
    FinalString += count;
  }
  return FinalString;
}


module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
