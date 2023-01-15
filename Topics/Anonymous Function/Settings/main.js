let myFunction = (a, b) => {
  return `${a} and ${b}`;
}
console.log(myFunction(`Me`, `You`));
const multi = new Function("a", "b", "return a * b");
let x = multi(9, 9);
console.log(x);
