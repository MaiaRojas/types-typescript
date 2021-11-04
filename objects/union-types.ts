(() => {

  type hero = {
    name: string,
    age?: number,
    powers: number[],
    getName?: () => string
  };

  let myCustomVariable: ( string | number | hero ) = 'Fme';

  console.log(typeof myCustomVariable)

  myCustomVariable = 20
  console.log(typeof myCustomVariable)

  myCustomVariable= {
    name: 'Bruce',
    age: 43,
    powers: [1]
  }
  console.log(typeof myCustomVariable)


})();