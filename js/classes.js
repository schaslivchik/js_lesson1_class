"use strict";

class User {
  constructor(name, surname, age, isMale, email, isSubschibed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubschibed = isSubschibed;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //статические методы
  static isUser(obj) {
    return obj instanceof User;
  }
  /////////////////////
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be value");
    }
    if (value < 0 || value > 120 || !Number.isInteger(value)) {
      throw new RangeError("age must be an integer value from 0 to 120");
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }
}

const user = new User("Test", "Testovich", 10, true, "text@hmsi.com", true);

class Phone {
  constructor(marka, model, color, price, year) {
    this.marka = marka;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  getYearPhone() {
    const currentYear = new Date();
    return currentYear.getFullYear() - this.year;
  }
  set year(value) {
    const currentYear = new Date();
    if (typeof value !== "number") {
      throw new TypeError("age must be value");
    }
    if (
      value < 1970 ||
      value > currentYear.getFullYear() ||
      !Number.isInteger(value)
    ) {
      throw new RangeError(
        `age must be an integer value from 1970 to ${currentYear.getFullYear()}`
      );
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
}
try {
  const phone = new Phone("samsung", "s20", "white", 9700, 2115);
  console.log(phone);
} catch (e) {
  console.log("e :>> ", e);
}
