let input = document.getElementById('phone');

function inputMask(str) {
  const initLen = str.length;
  let currentStr = '+ 7 (';

  function inputMaskСonditions(initLen) {
    if (initLen === 1) {
      currentStr = '+ 7 (' + str[0] + ' ';
    }
    if (initLen >= 6) {
      currentStr += str[5] + ' ';
    }
    if (initLen >= 8) {
      currentStr += str[7] + ' ';
    }
    if (initLen >= 10) {
      currentStr += str[9] + ') - ';
    }
    if (initLen >= 15) {
      currentStr += str[14] + ' ';
    }
    if (initLen >= 17) {
      currentStr += str[16] + ' ';
    }
    if (initLen >= 19) {
      currentStr += str[18] + ' - ';
    }
    if (initLen >= 23) {
      currentStr += str[22] + ' ';
    }
    if (initLen >= 25) {
      currentStr += str[24] + ' - ';
    }
    if (initLen >= 29) {
      currentStr += str[28] + ' ';
    }
    if (initLen >= 31) {
      currentStr += str[30];
    }
  }

  if (initLen === 0 || initLen > 1 && initLen < 6) {
      currentStr = '+ 7 (';
  }
  else {
    inputMaskСonditions(initLen);
  }
  return currentStr;
}

function inputUpdateHandler() {
  let input = document.getElementById('phone');
  let output = document.getElementById('result');
  let newLine = '';

  if (!/[^0-9+-\s()]/.test(input.value)) {
    newLine = inputMask(input.value);
  } else {
    newLine = input.value.slice(0, -1);
  }
  output.text = `Позвонить на ${newLine}`;
  output.href = `tel:${newLine}`;
  input.value = newLine;
}

input.addEventListener('input', inputUpdateHandler);
