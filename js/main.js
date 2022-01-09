const number1 = Number(prompt("Enter First Number: "));
const number2 = Number(prompt("Enter Second Number: "));

if (number1 > number2) {
  console.log(number2);
} else if (number1 < number2) {
  console.log(number1);
} else {
  console.log(number1 + " = " + number2);
}
