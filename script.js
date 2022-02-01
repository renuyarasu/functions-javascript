// Javascript: var vs let scopes
console.clear();
"use strict"
function checkScope() {
    let i = 'Function Scope';
    if (true) {
        let i = 'Block Scope';
        console.log('Block Scope i is:', i);
    }
    console.log('Function Scope i is:', i);
    return i;
}
let result = checkScope();