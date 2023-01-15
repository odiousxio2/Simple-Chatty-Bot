const input = require('sync-input');
console.log("How old am I?");
console.log("1. 12");
console.log("2. 32");
console.log("3. 19");
console.log("4. 20");

let correctAnswer = 3;

while (correctAnswer === 3) {
    let userAnswer = Number(input());
    if (userAnswer === correctAnswer) {
        console.log("Correct");
        correctAnswer = correctAnswer !== 3;
    } else {
        console.log("Try again")
    }
}