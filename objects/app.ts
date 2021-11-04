
// Objetos
type car = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void,
}

const batimovil: car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: car = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type  villano = {
  nombre: string,
  edad: (number | undefined),
  mutante: boolean
}

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type char = {
  poder: string,
  estatura: number,
};

type apo = {
  lider: boolean,
  miembros: string[]
}

const charles: char = {
  poder:"psiquico",
  estatura: 1.78
};

console.log('Paso por aqui')
const apocalipsis: apo = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

console.log('Paso por aqui')

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (apo | char);

mystique = charles;
mystique = apocalipsis;