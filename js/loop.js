// const stepsCount = 4;
// let curentStep = 1;

// while (curentStep++ <= stepsCount) {
//   console.log("idi");
//   // curentStep++;
//   console.log(curentStep);
// }

// const pageCount = 10;
// let page = 0;

// while (page++ < pageCount) {
//   if (page % 2 === 0) {
//     console.log(page);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const pageCount = 10;
// for (let i = pageCount; i > 0; --i) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; ++i) {
//   sum += i;
// }
// console.log(sum);

// let akk = 1;
// for (let i = 1; i <= 10; i++) {
//   if (i % 5 === 0) {
//     akk *= i;
//     console.log(akk);
//   }
// }
// const expectedValue = 6;
// let userValue = null;

// do {
//   userValue = Number(prompt("посчитайет 2+2*2"));
// } while (userValue !== expectedValue);

// alert("Your are right!");

// let startValue = Number(prompt("Enter start year"));
// const finishValue = Number(prompt("Enter finish year"));

// for (let i = startValue; i <= finishValue; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// do {
//   if (startValue % 4 === 0 && startValue < finishValue) {
//     console.log(startValue);
//   }
// } while (startValue++ <= finishValue);
// console.log("wrong year");

// for (let i = 1; i <= 10; i++) {
//   console.log("----------");
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// const TRY_LIMIT = 3;
// const PASSWORD = "qwerty";
// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
//   const userIputPassvord = prompt("Input password");
//   isPasswordCorrect = PASSWORD === userIputPassvord;
//   if (isPasswordCorrect) {
//     alert("True");
//     break;
//   }
// } while (++currentTry <= TRY_LIMIT);

// console.log(`${isPasswordCorrect ? "incorectn" : "wrong"}`);
