// Javascript: Destructuring Assignment - Arrays
console.clear();

const [x, y, , z] = [1, 2, 3, 4, 5];
console.log(x, y, z); // 1 2 4

let a = 10, b = 20;
(() => {
    'use strict';
    [a, b] = [b, a];
})();
console.log(a); // 20
console.log(b); // 10