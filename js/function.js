// функции
// повторное использование кода
// function declaration

// helloTo('Test');
// helloTo(9);

// function helloTo(name) {
//   console.log(`Hello ${name} !`);
// }

// const sumAB = sum(1, 3);

// function sum(a, b) {
//   const sumOfAB = a + b;
//   return sumOfAB;
// }

// console.log(sumAB);

// const value = incr(2);

// function incr(a) {
//   const incr4 = a ** 4;
//   return incr4;
// }

// console.log(value);

// function sum1ToMaxValue(maxValue) {
//   let sum = 0;
//   for (let i = 0; i <= maxValue; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const sum1To5 = sum1ToMaxValue(5);
// const sum1To12 = sum1ToMaxValue(12);
// console.log(sum1To5);
// console.log(sum1To12);

console.log(checkAge(12));

/**
 * function for adult age
 * @param {number} age больше или меньше 18
 * @returns {boolean} true or false
 */
function checkAge(age) {
  return age > 17;
}
