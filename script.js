// Javascript: Profile Lookup
console.clear();

let contacts = [
    {
        fName: 'VedaGna',
        lName: 'Yarasu',
        number: 001,
        likes: ['grapes', 'lime', 'lemon', 'cherry', 'blueberry', 'banana', 'apple', 'watermelon']
    },
    {
        fName: 'Gnapika',
        lName: 'Yarasu',
        number: 002,
        likes: ['Cheese', 'Egg', 'Butter', 'Margarine', 'Yogurt', 'Cottage cheese', 'Ice cream']
    },
    {
        fName: 'Teja',
        lName: 'Yarasu',
        number: 003,
        likes: ['Almonds', 'Mixed Nuts', 'Mixed Dried Fruits', 'Cashews', 'Walnuts', 'Raisins', 'Pistachios']
    },
    {
        fName: 'Hindu',
        lName: 'Yarasu',
        number: 004,
        likes: ['Pearl millet', 'Finger millet', 'Foxtail millet', 'Proso millet']
    },
];

function lookupProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].fName === name) {
            return contacts[i][prop] || 'No Such Property!'
        }
    }
    return 'No Such Contact!';
}

let data = lookupProfile('Teja', 'likes');

console.log(data);