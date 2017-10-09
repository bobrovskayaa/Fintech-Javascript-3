/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  let resolveValues = [];
  let rejectValue;

  for (let i = 0; i < promises.lenght; i++) {
    promises[i].then(function(value) {
       resolveValues.push(value);
   }, function(error) {
       rejectValue = error;
   });
    if (typeof(rejectValue) != 'undefined') {
      return Promise.reject(rejectValue);
    }
  }
  return Promise.resolve(resolveValues);
}

module.exports = promiseAll;
