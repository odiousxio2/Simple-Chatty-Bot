const input = require('sync-input');

console.log("What's your name");
let name = input();
console.log("Hello " + name);

setTimeout(function () {
        console.log("You still there???? " + name);
    },
    10_000);
let person = {

}