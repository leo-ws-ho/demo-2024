function pm() {
    console.log(this.make);
}

let myCar = {
    make: 'Toyota',
    year: 2021,
//    printMake: pm
};

console.log(myCar);