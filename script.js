// Javascript: Chaining If else statements
console.clear();

function testSize(num) {
    if (num < 5) {
        return 'Tiny'
    }
    if (num < 10) {
        return 'Small'
    }
    if (num < 15) {
        return 'Medium'
    }
    if (num < 20) {
        return 'Large'
    }
    if (num >= 20) {
        return 'Huge'
    }
}
console.log(testSize(50));