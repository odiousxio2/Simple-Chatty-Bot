const input = require('sync-input');
console.log("Hello! My name is Aid.")
console.log("I was created in 2023.")
console.log("Please, remind me your name.")
let name = input()
console.log(`What a great name you have, ${name}!`)
console.log("Let me guess your age.")
console.log("Enter remainders of dividing your age by 3, 5 and 7.")
let rem3 = Number(input());
let rem5 = Number(input());
let rem7 = Number(input());
let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;
console.log(`Your age is ${age}: that's a good age to start programming!`);
console.log("Now I will prove to you that I can count to any number you want.");
let maxCount = Number(input());
let i = 0;
while (i <= maxCount) {
    console.log(i + "! ");
    i++;
}
console.log('Let\'s test your knowledge');
console.log("Do you believe that we live in the Matrix?");
console.log("");
console.log("1. YES");
console.log("2. NO");
console.log("3. I DON'T KNOW");
console.log("4. MAYBE");
let correctAnswer = 1;
while (correctAnswer === 1) {
    let userAnswer = Number(input());
    if (userAnswer === correctAnswer) {
        console.log("Congratulations, have a nice day!");
        correctAnswer = correctAnswer !== 1;
    } else  {
        console.log("Please, try again.");
    }
}





