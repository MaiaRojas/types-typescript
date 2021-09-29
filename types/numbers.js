"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villains = 20;
    if (avengers < villains) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    ;
    avengers = Number('55');
    console.log({ avengers: avengers });
})();
