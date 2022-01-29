"use strict";

const user = {
  name: "Test",
  age: 23,
  email: "testovich@gmail.com",
  isMale: true,
};

f(user);

// function f(userObj) {
//   // диструкрирущее присваивание, диструкторизация
//   // ocoбый синтаксис для присваивания свойств обекта
//   // const name = userObj.name;
//   // const age = userObj.age;

//   const { name, age, email } = userObj;

//   console.log(
//     "user :>> ",
//     `User name: ${name}. He is ${age} yers old. His email ${email}`
//   );
// }

function f({ name: firstName, age, email }) {
  console.log(
    "user :>> ",
    `User name: ${firstName}. He is ${age} yers old. His email ${email}`
  );
}

const parall = {
  a: 12,
  b: 20,
  c: 55,
};

function p({ a: x, b: y, c: z }) {
  return x * y * z;
}

console.log(p(parall));

const book = {
  author: {
    firstName: "Test",
    lastName: "Testovich",
  },
  price: 12,
};

const {
  author: { firstName, lastName },
  price,
} = book;

/*********************destructionring for array */

const arr = [1, 2, 3, 4, 5, 6];
const [zero, first, second] = arr;
