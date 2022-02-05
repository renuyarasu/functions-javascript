// Javascript: Destructuring Assignment - Rest Operator to Reassign Array
console.clear();

const numbers = [1, 2, 3, 4, 5];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(numbers);
console.log(arr); // [3, 4, 5]
console.log(numbers); // [1, 2, 3, 4, 5]