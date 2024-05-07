/**
 * 
 * @returns 
 */

function getShape() {
    // prompt the user to enter a shape
    // "square", "triangle", or "diamond"

    // version 0: just the basics
    // return prompt("Enter a Shape: ");

    // version 1
    while (true) {
        let shape = prompt("Enter a Shape: ")
                    .trim()
                    .toLocaleLowerCase();
        if (shape === "square" ||
            shape === "triangle" ||
            shape === "diamond")
            return shape;
        else 
            alert("Please enter one of the following: square, triangle, diamond")
    }
}

function getSize() {
    // prompt the user to enter a number (size)
    // between 1 and 10.

    // version 0: basics
    // return Number(prompt("Enter the shape's size: "));

    // version 1:
    let valid = false;  // whether this input is valid or not.
    while (!valid) {
        let size = Number(prompt("Enter the shape's size: "));
        if (!Number.isInteger(size)) {
            alert("Please enter an integer between 1 and 10.");
            continue;
        }
        if (size > 10) {
            alert("Please enter an integer between 1 and 10.");
            continue;
        }
        if (size < 1) {
            alert("Please enter an integer between 1 and 10.");
            continue;
        }
        return size;        
    }

}

// get user's input
let shape = getShape();
let size = getSize();

// printSquare
function printSquare(size) {
    console.log("PrintSquare: " + size);
}

// printTriangle
function printTriangle(size) {
    console.log("PrintTriangle: " + size);
}

// printDiamond
function printDiamond(size) {
    console.log("PrintDiamond: " + size);
}


// print the shape accordingly
if (shape === "square")
    printSquare(size);
else if (shape === "triangle") 
    printTriangle(size);
else if (shape === "diamond") 
    printDiamond(size);
