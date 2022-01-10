// Javascript: Switch statement - Default option

console.clear();

function switchOfAlphabet(val) {
    let answer = "No results found!";
    switch (val) {
        case 'A':
            answer = 'Apple';
            break;
        case 'B':
            answer = 'Ball';
            break;
        case 'C':
            answer = 'Cat';
            break;
        default:
            answer = 'Stuff';
            break

    }
    return answer
}
console.log(switchOfAlphabet('B'));