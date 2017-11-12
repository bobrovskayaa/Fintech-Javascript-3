/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */

const throttle = (time, callback) => {
  let lastTime = 0;
  let currentTime = 0;

  const throttleHandler = (...args) => {
    currentTime = Date.now();

    if (currentTime > lastTime + time) {
      callback(...args);
      lastTime = currentTime;
    } else {
      setTimeout(() => throttleHandler(...args), lastTime + time - currentTime);
    }
  };
 
  return throttleHandler;
};

module.exports = { throttle };
