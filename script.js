// Javascript: Functions

// this keyword
// To be little clearer: the 'this' keyword reference the object its was called against

// Immediately Invoked Function Expression - IIFE

/* (function () {
    console.log('You have Invoked me!');
})() */

(function (name) {
    console.log(`${name}, You have Invoked me!` );
})('Renu')