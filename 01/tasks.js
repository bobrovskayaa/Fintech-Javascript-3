/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(str) {
  let arr = str.split(/[ ,!?:;]/);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(+arr[i]) || (arr[i].length === 0)) {
      arr.splice(i, 1);
      --i;
    }
  }
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  const obj = { 'min': min, 'max': max };

  return obj;
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
function fibonacciWithCache(n) {
  let cache = {};

  function fibonacci(n) {
    let value;

    if (n in cache) {
      value = cache[n];
    }
    else {
      if (n === 0 || n === 1) {
        value = n;
      }
      else {
        value = fibonacci(n - 1) + fibonacci(n - 2);
      }
      cache[n] = value;
    }
    return value;
  }

  return fibonacci(n);
}

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
  let NumStr = Math.ceil((max + 1) / cols);
  let FinalString = '';
  let flag = false;

  for (let i = 0; i < NumStr; i++) {
    for (let j = 0; j < cols; j++) {
      let CurInd = i + j * NumStr;
      if (CurInd <= max) {
        if (CurInd < 10) {
          FinalString += ' ';
        }
        FinalString += CurInd;
      }
      if (CurInd === max) {
        flag = true;
      }
      if (j < cols - 1 && !flag) {
        FinalString += ' ';
      }
    }
    if (i < NumStr - 1 && !flag) {
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
    }
    else {
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
