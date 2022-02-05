// Javascript: Write Concise object Literal Declarations Using Simple Fields
console.clear();

/* const person = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    };
}; */

const person = (name, age, gender) => ({ name, age, gender })

console.log(person('VedaGna', 5, 'Male')); // { name: 'VedaGna', age: 5, gender: 'Male' }

