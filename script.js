// Javascript: Create Strings using Template Literals
console.clear();

const result = {
    success: ['success_01', 'success_02', 'success_03'],
    failure: ['failure_01', 'failure_02', 'failure_03'],
    skipped: ['skipped_01', 'skipped_02', 'skipped_03'],
};


function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li>${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.success);

console.log(resultDisplayArray);