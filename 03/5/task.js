/**
 * Изменить поведение чисел таким образом, чтобы указанные конструкции были эквивалетны при условии,
 * что римские цифры могут быть любыми.
 * 0..V => [0, 1, 2, 3, 4]
 * 0..VII => [0, 1, 2, 3, 4, 5, 6]
 * 0..X => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Подсказка - необходимо использовать Proxy - объекты
 * */
const dict = {
  I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000
};
function strIntoNum(str) {
  let finalNum = 0;
  const checkedSymb = [];
  const finalArray = [];

  if (str.length === 1) {
    finalNum += dict[str[0]];
    checkedSymb[0] = 1;
  }
  for (let i = 1; i < str.length; ++i) {
    if (str[i - 1] + str[i] in dict && checkedSymb[i - 1] !== 1 && checkedSymb[i] !== 1) {
      checkedSymb[i - 1] = 1;
      checkedSymb[i] = 1;
      finalNum += dict[str[i - 1] + str[i]];
    } else if (str[i - 1] in dict && checkedSymb[i - 1] !== 1) {
      checkedSymb[i - 1] = 1;
      finalNum += dict[str[i - 1]];
    }
  }
  if (checkedSymb[str.length - 1] !== 1) {
    finalNum += dict[str[str.length - 1]];
  }
  return finalNum;
}

function strIntoArray(str) {
  const finalNum = strIntoNum(str);
  for (let i = 0; i < finalNum; ++i) {
    finalArray.push(i);
  }
  return finalArray;
}

const proto = Object.getPrototypeOf(Number.prototype);
const proxy = new Proxy(proto, {
  get(target, name) {
    return strIntoArray(name.toString());
  }
});

Object.setPrototypeOf(Number.prototype, proxy);
