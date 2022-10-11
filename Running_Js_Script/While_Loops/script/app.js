//const SECRET = 'Pichú2008';
//
//let guess = prompt ("Enter the secret code: ");
//while (guess !== SECRET) {
//    guess = prompt("Enter the secret code: ");
//}
//console.log("CONGRATS! YOU GOT THE SECRET!!!")

//let input = prompt("Hey, say something!")
//while (true) {
//    input = prompt(input);
//    if (input.toLocaleLowerCase() === "stop copying me") break;
//}
//console.log("OK, you win!!")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
//console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;

while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess: "));
    } else {
        guess = parseInt(prompt("Too low! Enter a new guess: "))
    }
}

console.log(`You got it! It took you ${attempts} guesses`)