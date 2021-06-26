// Javascript:

/*
// Functions Declaration
function greet(name) {
    return `Hi, ${name}!`;
}
console.log(greet('Renu')); */


/*// Functions Expression
const squareME = function (x) {
    return x * x;
}
console.log(squareME(2)); // 4 */

// Arrow Functions
/* const sum = function (x, y) {
    const total = x + y;
    return total;
}

const sum = (x, y) => x + y;
console.log(sum(5, 15)); //20
console.log(sum(5, 15)); //20  */

/* const newStudent = function (fName, lName, age) {
    const student = {
        name: `${fName} ${lName}`,
        age,
    }
    return student;
}

console.log(newStudent('VedaGna', 'Yarasu', 5)); */

const newStudent = (fName, lName, age) => ({name: `${fName} ${lName}`, age})


console.log(newStudent('VedaGna', 'Yarasu', 5));