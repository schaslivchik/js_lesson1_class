// "use strict";
// function Phone(brand, model, makeYear, isNfc, price, color) {
//   this.brand = brand;
//   this.model = model;
//   this.makeYear = makeYear;
//   this.isNfc = isNfc;
//   this.price = price;
//   this.color = color;
// }

// const phones = [];

// for (let i = 0; i < 20; i++) {
//   const phone = new Phone(
//     Math.random() > 0.5 ? "iPhone" : "Samsung",
//     `Series ${Math.trunc(Math.random() * 20)}`,
//     2015 + Math.trunc(Math.random() * 7),
//     Math.random() > 0.5,
//     3000 + Math.trunc(Math.random() * 7000),
//     Math.random() > 0.5 ? "white" : "black"
//   );
//   phones.push(phone);
// }

// console.log("phones :>> ", phones);

// // function expensivePhones(item, index, arr) {
// //   return item.price > 8000;
// // }
// //1
// console.log(
//   "over8000:>> ",
//   phones.filter((item) => item.price > 8000)
// );

// //2
// console.log(
//   "ifGoldPhone",
//   phones.some((item) => item.color === "gold")
// );

// //3
// console.log(
//   "phonesAdult :>> ",
//   phones.filter((item) => item.makeYear === 2018)
// );

// //4
// console.log(
//   "ifPhonesOld2013",
//   phones.some((item) => item.makeYear > 2013)
// );

// //5
// phones.forEach((item) => {
//   console.log(`${item.brand}:${item.model} ${item.makeYear}`);
// });

// //6
// console.group("new array");
// const newPhones = phones.map((p) => {
//   return {
//     brand: p.brand,
//     model: p.model,
//     color: p.color,
//     isNfc: p.isNfc,
//     makeYear: p.makeYear,
//     price: p.price * 0.95,
//   };
// });
// console.log(newPhones);
// console.groupEnd();
// +(
//   //7
//   phones.forEach((item) => {
//     if (item.isNfc) {
//       console.log(`${item.brand} ${item.model}`);
//     }
//   })
// );

// console.log(
//   phones
//     .filter((phone) => phone.color === "white" && phone.model === "iPhone")
//     .every((phone) => phone.isNfc)
// );
