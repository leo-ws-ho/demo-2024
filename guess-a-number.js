let lower = 1;
let upper = 100;

// 0. Generate a secret.
let secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

function userGuess(low, high) {
    while (true) {

        let temp = parseInt(prompt("Enter your guess.  The number is between " + low + " and " + high));
        
        if (temp < low || temp > high) {
            continue;
        }
        else{
            return temp;
        }
    }

}


while (true) {
    //1.
    let guess = userGuess(lower, upper);
    
    // 2. 
    if (guess === secret) {
        console.log('You win!');
        break;
    }
    else {
        if (guess > secret) {
            upper = guess - 1;
        }
        else { // guess < secret
            lower = guess + 1;
        }
    }
    // 3. 
}

//  1. get the user's guess
//  2. check the user's guess against the secret
//  3. if guess is secret, then the user wins.
//  4. if guess is too high/ low, update the bounds, and go back to step 1.
