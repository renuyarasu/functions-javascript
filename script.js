// Javascript: Destructuring Assignment - Nested Objects
console.clear();

const LOCAL_FORECAST = {
    today: { min: 50, max: 100 },
    tomorrow: { min: 100, max: 200 },
};

function getMaxOfTomorrow(forecast) {
    'use strict';
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST)); // 200