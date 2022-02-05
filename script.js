// Javascript: Mutate an Array Declared with const
console.clear();
"use strict"

const num = [6, 4, 2];
function editInPlace() {

    // num = [2, 4, 6]
    num[0] = 2;
    num[1] = 4;
    num[2] = 6;
}

let result = editInPlace();
console.log(num);