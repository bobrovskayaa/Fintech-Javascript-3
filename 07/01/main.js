let input = document.getElementById('phone');

function inputMask(str) {
  console.log(str.length);
  console.log(str);
  switch (true) {
    case (str.length === 0 || str.length > 1 && str.length < 6):
      return '+ 7 (';
    case (str.length === 1):
      return '+ 7 (' + str[0] + ' ';
    case (str.length >= 6 && str.length < 8):
      return '+ 7 (' + str[5] + ' ';
    case (str.length >= 8 && str.length < 10):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ';
    case (str.length >= 10 && str.length < 15):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ';
    case (str.length >= 15 && str.length < 17):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ';
    case (str.length >= 17 && str.length < 19):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ';
    case (str.length >= 19 && str.length < 23):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ' + str[18] + ' - ';
    case (str.length >= 23 && str.length < 25):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ' + str[18] + ' - ' + str[22] +
        ' ' ;
    case (str.length >= 25 && str.length < 29):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ' + str[18] + ' - ' + str[22] + 
        ' ' + str[24] + ' - ';
    case (str.length >= 29 && str.length < 31):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ' + str[18] + ' - ' + str[22] + 
        ' ' + str[24] + ' - ' + str[28] + ' ';
    case (str.length >= 31):
      return '+ 7 (' + str[5] + ' ' + str[7] + ' ' + str[9] + ') - ' +
        str[14] + ' ' + str[16] + ' ' + str[18] + ' - ' + str[22] + 
        ' ' + str[24] + ' - ' + str[28] + ' ' + str[30];
    default:
      alert( 'oops' );
      return '';
  }
}

function inputUpdateHandler() {
  let input = document.getElementById('phone');
  let output = document.getElementById('result');
  console.log(input.value);
  console.log(/[^0-9+-\s()]/.test(input.value));
  let newLine = '';
  if (!/[^0-9+-\s()]/.test(input.value)) {
    newLine = inputMask(input.value);
  }
  else {
    newLine = '';
  }
  output.text = `Позвонить на ${newLine}`;
  output.href = `tel:${newLine}`;
  input.value = newLine;
}

input.addEventListener('input', inputUpdateHandler);