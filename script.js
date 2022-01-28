// Javascript: Updating Object Properties
console.clear();

function numberLookups(val) {
    let result = '';

    let lookup = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'TEN'
    };

    result = lookup[val];
    return result;
}

console.log(numberLookups(7));