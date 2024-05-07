// function greeting(name='john') {
//     return 'hello, ' + name;
// }

// // anonymous function:
// let greeting = function (name='john') {
//     return 'hello, ' + name;
// }

// // arrow function:
// let greeting = (name='john') => {
//     return 'hello, ' + name;
// };
// // difference: meaning of 'this'

// // arrow function -- only one return statement:
// let greeting = (name='john') => ('hello, ' + name);

// console.log(greeting());

let names = ["peter", "john", "mary"];
let greeting = (name) => ("hello, " + name);
let greeting2 = (name) => {
    console.log(greeting(name));
}


names.forEach(greeting2);

// let result = names.map(greeting);

// console.log(result);
