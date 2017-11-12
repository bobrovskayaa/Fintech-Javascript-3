
const parentElement = document.querySelector('.main__parent');
const button = document.querySelector('.main__button');

function doubleClickHandler() {
  const newElement = document.createElement('li');
  newElement.appendChild(document.createTextNode('2xClick - ' + new Date().toUTCString()));
  parentElement.appendChild(newElement);
}

function doubleClick(element, doubleClickHandler, timeDistance) {
  let isRepeated = false;
  
  timeDistance = timeDistance || 500;
  element.addEventListener('click', () => {
    if (isRepeated) {
      doubleClickHandler();
      isRepeated = false;
    } else {
      isRepeated = true;
      setTimeout(() => { isRepeated = false; }, timeDistance);
    }
  });
}

doubleClick(button, doubleClickHandler);