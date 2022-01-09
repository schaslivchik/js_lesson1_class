// const number1 = Number(prompt("Enter First Number: "));
// const number2 = Number(prompt("Enter Second Number: "));

// if (number1 > number2) {
//   console.log(number2);
// } else if (number1 < number2) {
//   console.log(number1);
// } else {
//   console.log(number1 + " = " + number2);
// }

// const userAge = Number(prompt("Enter Age User: "));

// if (userAge >= 18 && userAge <= 65) {
//   console.log("full price");
// } else {
//   console.log("half price");
// }

// const userPoint = Number(prompt("Укажите оценку: "));

// switch (userPoint) {
//   case 12:
//     console.log("5+");
//     break;
//   case 11:
//     console.log("5");
//     break;
//   case 10:
//     console.log("5-");
//     break;
//   default:
//     console.log("idi uchi");
//     break;
// }

const userNumber1 = Number(prompt("Введите первое число  "));
const operation = prompt("Введите операцию +, -, /, % ");
const userNumber2 = Number(prompt("Введите второе число  "));

switch (operation) {
  case "+":
    console.log("Результат= " + (userNumber1 + userNumber2));
    break;
  case "-":
    console.log("Результат= " + userNumber1 - userNumber2);
    break;
  case "/":
    console.log("Результат= " + userNumber1 / userNumber2);
    break;
  case "%":
    console.log("Результат= " + (userNumber1 % userNumber2));
    break;
  default:
    console.log("fatal ERROR");
    break;
}
