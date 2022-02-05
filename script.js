// Javascript: Destructuring Assignment - Assign Variables from Objects
console.clear();

let voxel = { x: 10, y: 20, z: 30 };
let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

const { x: a, y: b, z: c } = voxel;
// console.log(a, b, c); // 10 20 30


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79.5
};

function getTempOfTomorrow(avgTemperatures) {
    "use strict";
    // const tempOfTomorrow = undefined;
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES)); // 79.5