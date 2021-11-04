(() => {
  abstract class Mutante {
    constructor(
      public name:string,
      public realName: string,
    ) {}
  };

  class Xmen extends Mutante {
    saveWorld(){
      return ('Mundo a salvo!');
    }
  }

  class Villian extends Mutante {
    consquitandoWorld() {
      return 'MUndo consquitado';
    }
  }

  const wolverine  = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Magnus');

  //console.log(wolverine.saveWorld());
  //console.log(magneto.consquitandoWorld());

  const printName = (character:Mutante) => {
    console.log(character.realName);
  };

 // printName(magneto)

})()