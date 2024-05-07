let year = 2024;
let decision = undefined;

// if year is not divisible by 4, it is not a leap year
if (year % 4 !== 0) {
    decision = false;
}
else {  // year is divisible by 4
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            decision = true;
        }
        else {
            decision = false;
        }
    }
    else {
        decision = true;
    }
}

if (decision) {
    console.log("This is a leap year.");
}
else {
    console.log("This is not a leap year.");
}