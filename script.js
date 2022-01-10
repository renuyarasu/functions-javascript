// Javascript: Replacing If Else Chains with Switch
console.clear();

function chainToSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = 'One';
            break;
        case 2:
            answer = 'Two';
            break;
        case 3:
            answer = 'Three';
            break;
        case 4:
            answer = 'Four';
            break;
        case 5:
            answer = 'Five';
            break;

        default:
            break;
    }

    /* if (val === 1) {
        answer = 'One';
    } else if (val === 2) {
        answer = 'Two';
    } else if (val === 3) {
        answer = 'Three';
    } else if (val === 4) {
        answer = 'Four';
    } */
    return answer;
}

console.log(chainToSwitch(5));