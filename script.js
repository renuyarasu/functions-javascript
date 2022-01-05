// Javascript: Declarations and Expressions
console.clear();

// function declaration
function sayHi(firstName) {
    return `Hi ${firstName}`
}
console.log(sayHi('Renu'));

// function expression

const squareMe = function square(x) {
    return x * x;
}
console.log(squareMe(20));