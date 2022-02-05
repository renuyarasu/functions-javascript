// Javascript: Use Spread Operator to Evaluate Arrays In-Place
console.clear();

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function () {
    // arr2 = arr1; //Change this line // [ 'VedaGna', 'Feb', 'Mar', 'Apr', 'May' ]
    arr2 = [...arr1] // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May' ]
    arr1[0] = 'VedaGna'
})();
console.log(arr2);

