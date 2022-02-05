// Javascript: Arrow Functions with Parameters
console.clear();

/* let myConcat = function (a, b) {
    return a.concat(b);
} */

let myConcat = (a, b) => a.concat(b);

let result = myConcat([1, 2], [3, 4, 5]);
console.log(result);