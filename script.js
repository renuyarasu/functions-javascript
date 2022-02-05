// Javascript: Write Concise Declarative Functions
'use strict';
console.clear();

/* 

const cycle = {
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear;
    }
}; */

// ShortHand
const cycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

cycle.setGear(3);
console.log(cycle.gear); //3