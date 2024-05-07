let input = '';

while (true) {
    input = prompt("Enter a number: ");
    if (!isNaN(parseInt(input)))
        break;
}

console.log(parseInt(input));