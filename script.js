// Javascript: parseInt Function with a Radix
console.clear();

function convertToInteger(str) {
    return parseInt(str, 2);
}
let result = convertToInteger('10011');
console.log(result);