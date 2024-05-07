function toBinary(n) {
    if (n === 0) {
        return "0";
    }
    if (n === 1) {
        return "1";
    }
    let lastDigit = n % 2;
    return (toBinary(Math.floor(n/2)) + lastDigit);
}

console.log(toBinary(15));  // the binary representation of 179 is logged.