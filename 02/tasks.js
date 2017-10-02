﻿/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
var customBind = function(func, context, ...args) {
  var FixArgs = args;
  return function(...args) {
    return func.apply(context, FixArgs.concat(args));
  };
};

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(a) {
  var FinSum = a;

  if (a === undefined) {
    return 0;
  }
  return function add(b) {
    if (b === undefined) {
      return FinSum;
    } else {
      FinSum += b;
      return add;
    }
  };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  return first.split('').sort().join() === second.split('').sort().join();
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {

  function cmp(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }

  arr.sort(cmp);
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      --i;
    }
  }
  return arr;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) { 
  let FinalArr = [];

  for (let i = 0; i < first.length; ++i) {
    if (second.indexOf(first[i]) >= 0) {
      FinalArr.splice(FinalArr.length, 0, first[i]);
    }
  }
  return getUnique(FinalArr);
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length != right.length) {
    return false;
  } else {
    let counter = 0;

    for (let i = 0; i < left.length; ++i) {
      if (left[i] != right[i]) {
        ++counter;
      }
    }
    return (counter < 2) ? true : false;
  }
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};