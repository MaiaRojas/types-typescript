"use strict";
(function () {
    //const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //numbers.push('true');
    console.log(numbers);
    var villains = ['Omega red', 'Dormamu', 'Duende Verde'];
    villains.forEach(function (v) { return console.log(v.toUpperCase()); });
    //numbers.forEach(v => console.log(v.toUpperCase()))
})();
