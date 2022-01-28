// Javascript: Updating Object Properties
console.clear();

let myObj = {
    name: 'VedaGna',
    age: 5,
    sib: 'Sister'
}

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return 'Not Found!'
    }
}

console.log(checkObj('sib'));