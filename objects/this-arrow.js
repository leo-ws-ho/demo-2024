let myObj = {
  number: 10,
  action: function () {
    return () => {
      console.log(this);
      console.log(this.number);
    };
  },
};

myObj.action()();
// What about now?
