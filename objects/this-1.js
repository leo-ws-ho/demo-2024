const myObj = {
  number: 42,
  action: function () {
    let number = 22;
    return this.number;
  },
};

console.log(myObj.action()); // What will be the output?
