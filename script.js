// Javascript: Destructuring Assignment - Pass an Object as a Function's Parameters
console.clear();

const stats = {
    max: 55.55,
    min: 5.5,
    standard: 2.2,
    mode: 23.3,
    avg: 6.5,
};

/* const half = (function () {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    }
})(); */

const half = (function () {
    return function half({ max, min }) {
        return (max + min) / 2.0
    }
})();

console.log(stats); //{ max: 55.55, min: 5.5, standard: 2.2, mode: 23.3, avg: 6.5 }
console.log(half(stats)); // 30.525