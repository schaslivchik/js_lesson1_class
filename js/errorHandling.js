// "use strict";

// // function fact(n) {
// //   if (typeof n !== `number`) {
// //     throw new TypeError("Argument must be number type");
// //   }
// //   if (n < 0 || !Number.isSafeInteger(n)) {
// //     throw new Error("Argument must be non negative safe int value");
// //   }

// //   if (n === 0) return 1;
// //   return n * fact(n - 1);
// // }

// // // throw

// // try {
// //   console.log("Factorial :>> ", fact(-10));
// // } catch (err) {
// //   console.log("Factorial :>> ", err);
// // }
// // console.log("end of script");

// // function validateName(firstName) {
// //   if (typeof firstName !== "string") {
// //     throw new TypeError("Name must be  a string value");
// //   }
// //   if (firstName.length < 4 || firstName.length > 32) {
// //     throw new Error("Length of name from 4 to 32 chars");
// //   }
// //   return firstName;
// // }

// // try {
// //   const validName = validateName("Name");
// // } catch (e) {
// //   console.log("err :>> ", err);
// // }

// function validateAge(age) {
//   if (typeof age !== "number") {
//     throw new TypeError("Argument must be number type");
//   }
//   if (age < 1 || age > 120 || !Number.isInteger(age)) {
//     throw new Error(
//       "Argument must be non negative, from 1 - 120 yaers, and integer value"
//     );
//   }
//   return age;
// }

// try {
//   const age = validateAge("casdf");
// } catch (err) {
//   if (err instanceof TypeError) {
//     console.log("TypeError");
//   } else if (err instanceof Error) {
//     console.log("Error");
//   }
// }
