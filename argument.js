// function printing(a, b, c) {
//     console.log(a, b, c);
// }

function printing(a, b) {
    console.log(a, b);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printing(1, 2, 3, 4, 5);