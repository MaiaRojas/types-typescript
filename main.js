"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
}
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
    class Mutant {
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
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
        },
        getFullAdress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
    const client2 = {
        name: 'Barry Allen',
        age: 24,
        getFullAdress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        }
    };
})();
(() => {
    ;
    let addNUmbersFunction;
    addNUmbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map