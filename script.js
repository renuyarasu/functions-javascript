// Javascript: Switch statement

console.clear();

function caseInSwitch(val) {
    let answer = 'No results found!';
    switch (val) {
        case 1:
            answer = 'Alpha'
            break;

        case 2:
            answer = "Beta"
            break;

        case 3:
            answer = 'Gama'
            break;

        case 4:
            answer = 'Delta'
            break;
    }
    return answer
}
console.log(caseInSwitch(30));