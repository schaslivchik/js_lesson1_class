"use strict";

// Array

// const arr1 = new Array();
// const arr2 = []; // синтаксический сахар

// const arr3 = [100, 200, 300];

// const arr4 = [4, 10, 5, 123, 93, 12, 43, 3];

// const sumOfArr4 = sum(arr4);

// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const a1 = [1, 5, 8];
// const a2 = [5, 7, 9];

// function concat(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1[arr1.length] = arr2[i];
//   }
//   return arr1;
// }

// push добваление в конец массива

// const arr5 = [1, 2, 6];
// arr5.push(10);
// console.log(arr5);

// // pop возврат последнего + его удаление
// const item = arr5.pop();
// console.log(item);
// console.log(arr5);

// //unshift - добавление в начало массива
// arr5.unshift(96465465, 234, 521, 234, 23, 23, 4, 23, 4234, 2);
// console.log(arr5);

// //shift - возврат нулевого элемента + его удаление
// arr5.shift();
// console.log(arr5);

// const a5 = [1, 234, 12, 3];
// const a6 = [1, 234, 12, 3];
// function concatN(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   return arr1;
// }

// console.log(myArr1);
// myArr1.push(1);
// myArr1.push(23);
// myArr1.push(1);
// console.log(myArr1);
// myArr1.pop();
// console.log(myArr1);

// console.log(Array.from("qwerty"));

// const a8 = [1, 2, 3];
// const a9 = [8, 0, 1, 2];

// const a10 = a8.concat(a9);
// console.log(a10);
// const a11 = a9.concat(a8);
// console.log(a11);
// a8.slice(1, 2);
// console.log(a8.slice(1, 2));

// a9.splice(1, 2);

// const pets = ["parrot", "cat", "dog"];

// const printPet = function (item, index) {
//   console.log(item, index);
// };

// pets.forEach(printPet);

// const numbers = [1, 3, -4, 6, -75, -1, 23];

// const isOdd = function (item, index, arr) {
//   return item % 2 === 0;
// };

// const isPositiv = function (item) {
//   return item > 0;
// };

// const odd = numbers.filter(isOdd);
// console.log(odd);

// const positiv = numbers.filter(isPositiv);
// console.log(positiv);

// const numbers = [1, 3, 4, 6, 5, -1, 23];
// const isPositiv = function (item) {
//   return item > 0;
// };

// console.log(numbers.every(isPositiv));

// const users = [
//   { name: "test", age: 22 },
//   { name: "text", age: 10 },
// ];

// const isAdult = function (item) {
//   return item.age >= 18;
// };
// console.log(users.every(isAdult));
// console.log(users.some(isAdult));

