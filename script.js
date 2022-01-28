// Javascript: Updating Object Properties
console.clear();

let myStorage = {
    car: {
        inside: {
            gloveBox: 'Maps',
            passengerSeat: 'Crumbs'
        },
        outside: {
            trunk: 'Jack'
        }
    }
};

// let gloveBoxContent = myStorage.car.inside.gloveBox;
let gloveBoxContent = myStorage.car.inside['gloveBox']; // Maps
console.log(gloveBoxContent);