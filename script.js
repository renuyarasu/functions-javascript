// Javascript: Functions

// this keyword
// To be little clearer: the 'this' keyword reference the object its was called against

// Callback Functions

function name(x, callBack) {
    console.log('Renu');
    console.log(x);
    callBack();
}
function company() {
    console.log('innRoad');
}

name('Hello', company);