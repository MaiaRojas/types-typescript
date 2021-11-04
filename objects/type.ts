(() => {

  type hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string
  };

  let flash: hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'viajar en tiempo']
  };

  let superman: hero = {
    name: 'Clark ken',
    age: 60,
    powers: ['Súper velocidad'],
    getName() {
      return this.name;
    }
  };

})();