// Javascript: Use Rest Operator with Function Parameters
console.clear();


/* const sum = (function () {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0)
    };
})();
 */

// with Rest Operator 
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})();



console.log(sum(1, 2, 3, 4, 5));