function Person(first, last, age) {
  this.name = {
    first,
    last,
  };
  this.age = age;
}

Person.prototype.breathe = function () {
  console.log("*breathing noises*");
  console.log(this.age);
}

const arnold = new Person("Arnold", "Schwarzenegger", 74);
arnold.breathe();

console.log(arnold.name.first);
console.log(arnold.valueOf());
