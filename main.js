"use strict";
(() => {
    ;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en tiempo']
    };
    let superman = {
        name: 'Clark ken',
        age: 60,
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    ;
    let client = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'Barry Allen',
        age: 24,
        address: {
            id: 14,
            zip: 'FOO',
            city: 'York'
        }
    };
})();
//# sourceMappingURL=main.js.map