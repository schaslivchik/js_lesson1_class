"user strict";
// Инкапсуляция (сокрытые логики и (свойств))
// наследование (переиспользование структуры и логики)
// полиморфизм (умение работать с разными типами (в js полиморфизм подтипов))

// // Наследование

//базовый или родительский класс
class User {
  constructor(name, surname, age, isMale, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isBanned = isBanned;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Test", "Testovich", 23, true, "testovich@gmai.com");

// дочерний класс
class Moderator extends User {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email); //вызов конструктора базового класса
    this.permission = permission;
  }
  sendMessage(user, message) {
    console.log(`${user.fullName} will receive message: "${message}"`);
  }
}

const moderator1 = new Moderator(
  "Mod",
  "Modovich",
  20,
  false,
  "mod@gmail.com",
  {}
);

moderator1.sendMessage(user1, "You message was banned");

// класс Admin с методами bann(user) and unbann(user)

class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email, permission);
  }
  bann(user) {
    user.isBanned = true;
  }
  unbann(user) {
    user.isBanned = false;
  }
}

const admin = new Admin("Admin", "Adminich", 23, true, "admin@gmai.com", {});

admin.unbann(user1);

/****************Переопределение***************** */
// squirrel(все ест), flySquirrel(ест только орешки)

class Squirrel {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`squirrel ${this.name} is running`);
  }
  eat() {
    console.log(`squirrel ${this.name} is eating ${food}`);
  }
}

class FlyingSquirrel extends Squirrel {
  constructor(name, maxDistanse) {
    super(name);
    this.maxDistanse = maxDistanse;
  }
  flying() {
    console.log(`squirrel ${this.name} is flying up to ${this.maxDistanse}`);
  }
  eat() {
    console.log(`squirrel ${this.name} is eating nuts`);
  }
}

const squirrel = new Squirrel("Lilia");
const fSquirrel = new FlyingSquirrel("Boing 777", 320);

/********************************************************* */

// абстрактный класс - класс без реализации
class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    return null;
  }
}

class Square extends Figure {
  constructor(a) {
    super("Square");
    this.a = a;
  }
  getArea() {
    return this.a * this.a;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super("Rectangle");
    this.a = a;
    this.b = b;
  }
  getArea() {
    return this.a * this.b;
  }
}

const square = new Square(5);
const r = new Rectangle(5, 5);

function calcArea(fig) {
  if (fig instanceof Figure) {
    return fig.getArea();
  }
  throw TypeError("receive param is not a Figure");
}

calcArea(r);
