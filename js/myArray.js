function MyArray() {
  this.length = 0;
}

const myArrayProto = new MyArray();

myArrayProto.push = function (item) {
  this[this.length++] = item;
  return this.length;
};
myArrayProto.pop = function (item) {
  item = delete this[this.length - 1];
  return this.length--;
};

myArrayProto.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

MyArray.prototype = myArrayProto;
const myArr1 = new MyArray();

myArr1.push(10);
myArr1.push(13);

function printSquare(item) {
  console.log(item ** 2);
}

myArr1.forEach(printSquare);
