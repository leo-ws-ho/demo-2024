// let name1 = prompt('Enter a name');
// let name2 = prompt('Enter a name');
// let name3 = prompt('Enter a name');

// console.log("Hello, " + name1);
// console.log("Hello, " + name2);
// console.log("Hello, " + name3);


// array
let names = [];  // empty array to store input names.

for (i=0; i<3; i++)
{
    names.push(prompt('Enter a name'));
}

for (let name of names) {
    console.log(name);
}