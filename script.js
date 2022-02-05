// Javascript: Higher Order Arrow Functions
console.clear();


const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    }
})();

console.log(increment(2, 6));
console.log(increment(2));