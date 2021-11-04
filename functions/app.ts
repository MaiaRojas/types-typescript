// Funciones Básicas

function sumar(a:number, b:number):number {
  return a + b;
};

var contar = (heroes:string[]):number => {
  return heroes.length;
};

var superHeroes: string[]= ['Flash', 'Arrow', 'Superman', 'Linterna verde'];

contar(superHeroes);


// Parametros por defecto

const llamarBatman = (llamar: boolean = true): void=> {
  if(llamar) {
    console.log('Batiseñal activada');
  }
};

llamarBatman();


const unirHeroes = (...personas:string[]): string => {

  return personas.join(", ");
}

// Tipo function
const noHaceNada = (numero: number, text: string, booleano:boolean, arreglo:string[]) => {}

let noHacerNadaTampoco: (n:number, s: string, b:boolean, a: string[]) => void;

noHacerNadaTampoco = noHaceNada;