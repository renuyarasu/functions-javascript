// Javascript: Multiple Identical Options in Switch Statements

console.clear();

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;

        case 4:
        case 5:
        case 6:
            answer = 'Med';
            break;

        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }
    return answer
}
console.log(sequentialSizes(6));