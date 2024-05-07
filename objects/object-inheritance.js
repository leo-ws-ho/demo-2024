function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

function Person2(first, last) {
    this.firstName = first;
    this.lastName = last;
}

const leo = new Person("Leo", "Ho");
const gemma = new Person2("Gemma", "Forrest");


const f = Object.getPrototypeOf(leo);
const g = Object.getPrototypeOf(gemma);

console.log(f === g);