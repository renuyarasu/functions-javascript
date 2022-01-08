// Javascript: Comparison with the Strict Equality Operator
console.clear();

/* function testEquality(val) {
    if (val === 10) {
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(testEquality('10')); */

function comparisonEquality(a, b) {
    if (a === b) {
        return 'Equal';
    }
    return 'Not Equal';
}

console.log(comparisonEquality(10, "10"));
