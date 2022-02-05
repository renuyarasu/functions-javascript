// Javascript: Use class Syntax to define a Constructor Function
'use strict';
console.clear();

/* let SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

let zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Jupiter
 */
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

let zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Jupiter